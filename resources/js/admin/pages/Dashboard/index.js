import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import axios from "axios"

import { Container, Row, Col } from "reactstrap"

// Pages Components
import PopularPost from "./PopularPost"
import WelcomeComp from "./WelcomeComp"
// import Earning from "./Earning"
import UICard from "./UICard"
import SubscriptionCard from "./SubscriptionCard"
import Breadcrumbs from "../../components/Common/Breadcrumb"

//i18n
import { withTranslation } from "react-i18next"
import { TVChartContainer } from "../../components/TVChartContainer"
import {URL_ARKADII} from "../BackTester/CreateTest/CreateTest";

const cardsLink = [
  { title: "How to use Backtester", text: "some text here" },
  { title: "How to use AI models", text: "some text here" },
]

const Dashboard = () => {
  const url = URL_ARKADII + ":8080/bth?target=%5EBFX&signal=%5EVIX&sources=YahooFinance,YahooFinance&trigger=Value&condition=Between&condition_value=20,25&envir=AllMarkets&overlapping=F&single_time_frame=10"
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(url, {
      headers: {
        "Content-Type": "text/plain",
        Accept: "*/*",
      },
      mode: "cors",
    })
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        setData(data)
        console.log(222, data)
      })
  }, [])
  return (
    <React.Fragment>
      <Container fluid className="page-content">
        <Breadcrumbs title="NeroQuant" breadcrumbItem="Dashboard" />

        <Row>
          <Col xl="8">
            <Row>
              <Col xl="5">
                <WelcomeComp />
              </Col>
              <Col xl="7">
                <SubscriptionCard />
              </Col>
            </Row>

            {/*<Earning />*/}
            <TVChartContainer data={data} />
          </Col>

          <Col xl={4}>
            <PopularPost />
            {cardsLink.map((card, i) => (
              <UICard key={i} card={card} />
            ))}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any,
}

export default withTranslation()(Dashboard)
