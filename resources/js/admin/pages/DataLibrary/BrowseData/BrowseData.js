import Chart from "./Chart"
import React, {useEffect, useState} from "react"
import {Container, Row, Col} from "reactstrap"
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import Filters from "./Filters"
import {URL_ARKADII} from "../../BackTester/CreateTest/CreateTest";
import {TVChartContainer} from "../TVChartContainer";

const BrowseData = () => {
    const [data, setData] = useState([]);
    let cleanupFunction = false;
    useEffect(() => {
        fetch(`${URL_ARKADII}:8080/fetch?tickers=^DJI,^FTSE&sources=YahooFinance,YahooFinance`)
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                if(!cleanupFunction) setData(data)
            })
            .catch(err => {
                console.error(err)
            })
        return () => {
            cleanupFunction = true;
        }
    }, [])

    return (
        <React.Fragment>
            <Container fluid className="page-content">
                <Breadcrumbs title="Data Library" breadcrumbItem="Browse Data"/>
                <Row>
                    <Col md={4}>
                        <Filters/>
                    </Col>
                    <Col md={8}>
                        {/*<Chart data={data}/>*/}
                        <TVChartContainer />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default BrowseData
