import React, {useEffect, useState} from "react"
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    Input,
    Label,
    Row
} from "reactstrap"

export const URL_ARKADII = 'http://18.189.19.206'

import "react-datepicker/dist/react-datepicker.css"

import Breadcrumbs from "../../../components/Common/Breadcrumb"
import SelectExitForm from "./SelectExitForm"

import {optionsMarket} from "./initailData";
import CardHowToUse from "./instructions/CardHowToUse";
import ResultsTabs from "./ResultsTabs/ResultsTabs";
import SelectSignalConditions from "./SelectSignalConditions/SelectSignalConditions";
import SelectTarget from "./SelectTarget/SelectTarget";
import Chart from "./Chart";

const CreateTest = () => {
    const [selectedGroupByType, setSelectedGroupByType] = useState("");
    const [selectedOptionByName, setSelectedOptionByName] = useState("");
    const [selectedSignal, setSelectedSignal] = useState(null);

    const [initialOptionsGroupByType, setInitialOptionsGroupByType] = useState([]);

    const [selectedOptionMarket, setSelectedOptionMarket] = useState(optionsMarket[0]);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const [visibleDataChart, setVisibleDataChart] = useState([]);
    const [initDataChart, setInitDataChart] = useState([]);

    let cleanupFunction = false;

    const createArrayOptionsByType = (arr) => {
        let countArr = []
        arr.forEach((v, i, a) => {
            if (a.findIndex(item => item["Type"] === v["Type"]) === i) {
                countArr.push({
                    value: v["Type"],
                    count: 1,
                    data: [
                        {
                            value: v["Symbol"],
                            label: v["Name"],
                            sources: v["Source"],
                            group: v["Type"]
                        },
                    ],
                })
            } else {
                let index = countArr.findIndex(item => item.value === v["Type"])
                countArr[index].count += 1
                countArr[index].data.push({
                    value: v["Symbol"],
                    label: v["Name"],
                    sources: v["Source"],
                    group: v["Type"]
                })
            }
        })
        let options = countArr.map(item => {
            return {
                label: `${item.value} (${item.count})`,
                value: item.value,
                data: item.data,
            }
        })
        if (!cleanupFunction) setInitialOptionsGroupByType(options)
    }

    const changeRangeOfDate = (data) => {
        setStartDate(new Date(data[0].Date))
        setEndDate(new Date(data[data.length - 1].Date))
    }

    const setNewStartDate = (date) => {
        setStartDate(date);
        let curIndex = initDataChart.findIndex(item => new Date(item['Date']) > date);
        setVisibleDataChart(initDataChart.slice(curIndex));
    }

    const setNewEndDate = (date) => {
        setEndDate(date);
        let curIndex = initDataChart.findIndex(item => new Date(item['Date']) > date);
        setVisibleDataChart(initDataChart.slice(0, curIndex));
    }

    const showChart = ({target = selectedOptionByName?.label, signal = selectedSignal?.label}) => {
        const names = `${target ? encodeURIComponent(target) : ''}${target && signal ? ',' : ''}${signal ? encodeURIComponent(signal) : ''}`;
        const bucket = 'arkadi-test-v1'
        // const names = 'Dow Jones Industrial Average,NYSE AMEX COMPOSITE INDEX'
        // fetch(`${URL_ARKADII}:8080/fetch?tickers=${selectedOptionByName.value}&sources=${selectedOptionByName.sources}`)
        //the same
        if(!!names) {
            fetch(`${URL_ARKADII}:8080/fetch2?bucket=${bucket}&names=${names}`)
                .then(resp => {
                    return resp.json()
                })
                .then(data => {
                    if (data.length > 1) {
                        changeRangeOfDate(data)
                        setInitDataChart(data)
                        setVisibleDataChart(data)
                    }
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }

    // todo add event
    // const getBacktest = (signal) => {
    //     const signal2 = signal ?? {value: '^VIX', sources: 'YahooFinance', trigger: 'Value', condition: 'Above', condition_value: '20'};
    //
    //     const target = selectedOptionByName;
    //
    //     // fetch(`http://3.128.120.123:8080/bth?target=^BFX&signal=^VIX&sources=YahooFinance,YahooFinance&trigger=Value&condition=Above&condition_value=20&envir=AllMarkets&overlapping=F&single_time_frame=10`)
    //     fetch(`${URL_ARKADII}:8080/bth?target=${target.value}&signal=${signal2.value}&sources=${target.sources},${signal2.sources}&trigger=${signal2.trigger}&condition=${signal2.condition}&condition_value=${signal2.condition_value}&envir=${target.selectedOptionMarket}&overlapping=F&single_time_frame=10`)
    //         .then(resp => {
    //             return resp.json()
    //         })
    //         .then(data => {
    //             console.log('backtest', data);
    //         })
    //         .catch(err => {
    //             console.error(err)
    //         })
    // }
    useEffect(() => {
        // set options to selects
        fetch(`${URL_ARKADII}:8080/indices`)
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                createArrayOptionsByType(data)
            })
            .catch(err => {
                console.error(err)
            })
        return () => {
            cleanupFunction = true;
        }
    }, [])

    return (
        <>
            <Container fluid className="page-content">
                <Breadcrumbs title="Back Tester" breadcrumbItem="Create BackTest"/>
                <Row>
                    <Col lg={10} md={12}>
                        <Card>
                            <CardBody>
                                <CardTitle>Select Target to Backtest</CardTitle>
                                <SelectTarget
                                    initialOptionsGroupByType={initialOptionsGroupByType}
                                    fetch2={showChart}
                                    selectedGroupByType={selectedGroupByType}
                                    setSelectedGroupByType={setSelectedGroupByType}
                                    selectedOptionByName={selectedOptionByName}
                                    setSelectedOptionByName={setSelectedOptionByName}
                                    startDate={startDate} setStartDate={setNewStartDate}
                                    endDate={endDate} setEndDate={setNewEndDate}
                                    initDataChart={initDataChart}
                                    selectedOptionMarket={selectedOptionMarket}
                                    setSelectedOptionMarket={setSelectedOptionMarket}
                                />
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle>Select Signal & Conditions</CardTitle>
                                <SelectSignalConditions
                                    initialOptionsGroupByType={initialOptionsGroupByType}
                                    addSignal={showChart}
                                    selectedTarget={selectedOptionByName}
                                    setSelectedSignal={setSelectedSignal}
                                />
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <Row className="d-flex align-items-center mb-3">
                                    <Col lg={6}>
                                        <CardTitle>Select Exit</CardTitle>
                                        <SelectExitForm/>
                                    </Col>
                                    <Col lg={6}>
                                        <CardTitle>Additional Options</CardTitle>
                                        <Row className="d-flex align-items-start mb-3">
                                            <Label check>
                                                <Input type="checkbox" className="me-1"/>
                                                Go short
                                            </Label>
                                            <Label check>
                                                <Input type="checkbox" className="me-1"/>
                                                Exclude overlapping trades
                                            </Label>
                                        </Row>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="2">
                        <CardHowToUse type='test'/>
                        <CardHowToUse type='result'/>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <Button color="info">Run Backtest</Button>
                                    {
                                        visibleDataChart && <Chart data={visibleDataChart}/>
                                    }
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <CardTitle className="h4">Results</CardTitle>
                                <ResultsTabs/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CreateTest
