import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  TabContent,
  TabPane,
} from "reactstrap"
import { useHistory, useLocation } from "react-router-dom"

// action
import {
  apiError,
  registerUser,
  registerUserFailed,
} from "../../../store/actions"

// Redux
import { connect } from "react-redux"
import FormHeader from "../common/FormHeader"
import LinkTo from "../common/LinkTo"
import StepIcon from "./StepIcon"

import {
  SubscriptionPick,
  EmailPick,
  CreditCardPick,
  SuccessPage,
  EmailConfirmed,
} from "./pages"

const btns = [
  { val: 1, left: 0 },
  { val: 2, left: 25 },
  { val: 3, left: 50 },
  { val: 4, left: 75 },
  { val: 5, left: 100 },
]

function Register(props) {
  const history = useHistory()
  const [activeTab, setactiveTab] = useState(1)
  const [subscriptionLevel, setSubscriptionLevel] = useState("")

  const url = new URLSearchParams(useLocation().search)

  useEffect(() => props.apiError(""), [])
  useEffect(() => {
    url.get("subsc") && setactiveTab(2)
    url.get("email") && setactiveTab(3)
    url.get("emailConfirm") && setactiveTab(4)
  }, [])

  const nextPage = (key, value) => {
    addQuery(key, value)
    setactiveTab(prev => prev + 1)
  }

  const addQuery = (key, value) => {
    const searchParams = new URLSearchParams(location.search)
    searchParams.set(key, value)
    history.push({ search: searchParams.toString() })
  }

  return (
    <Container className="account-pages my-5 pt-sm-5">
      <Row className="justify-content-center">
        <Col md={8} lg={8} xl={7}>
          <Card className="overflow-hidden">
            <FormHeader />
            <CardBody className="pt-2">
              <div className="mt-5 mb-4 pb-1">
                <div className="position-relative m-4">
                  <div className="progress" style={{ height: "1px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${btns[activeTab - 1].left}%` }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                  {btns.map(({ val, left }) => (
                    <StepIcon
                      key={`btn-nav-${val}`}
                      setactiveTab={setactiveTab}
                      activeTab={activeTab}
                      val={val}
                      left={left}
                    />
                  ))}
                </div>
              </div>

              <TabContent activeTab={activeTab} className="text-center px-2">
                <TabPane tabId={1}>
                  <SubscriptionPick
                    subscriptionLevel={subscriptionLevel}
                    setSubscriptionLevel={setSubscriptionLevel}
                    nextPage={nextPage}
                  />
                </TabPane>
                <TabPane tabId={2}>
                  <EmailPick nextPage={nextPage} />
                </TabPane>
                <TabPane tabId={3}>
                  <EmailConfirmed nextPage={nextPage} />
                </TabPane>
                <TabPane tabId={4}>
                  <CreditCardPick
                    level={subscriptionLevel}
                    nextPage={nextPage}
                  />
                </TabPane>
                <TabPane tabId={5}>
                  <SuccessPage />
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
          <LinkTo link="login" />
        </Col>
      </Row>
    </Container>
  )
}

Register.propTypes = {
  registerUser: PropTypes.func,
  registerUserFailed: PropTypes.func,
  registrationError: PropTypes.any,
  user: PropTypes.any,
}

const mapStatetoProps = state => {
  const { user, registrationError, loading } = state.Account
  return { user, registrationError, loading }
}

export default connect(mapStatetoProps, {
  registerUser,
  apiError,
  registerUserFailed,
})(Register)
