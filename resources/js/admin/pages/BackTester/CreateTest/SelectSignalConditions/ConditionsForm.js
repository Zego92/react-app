import {Col, Form, Input, Label, Row} from "reactstrap"
import Select from "react-select"
import React, {useState} from "react"
import {conditions, triggers} from "../initailData";

const ConditionsForm = ({initialOptionsGroupByType = [], addSignal, setSelectedSignal}) => {

    const [selectedGroupByType, setSelectedGroupByType] = useState("")
    const [selectedOptionByName, setSelectedOptionByName] = useState("")
    const [selectedTrigger, setSelectedTrigger] = useState(triggers[0])
    const [selectedConditions, setConditions] = useState(conditions[0])
    const [TAValue, setTAValue] = useState(14)
    const [days, setDays] = useState(100)
    const [inputValue, setInputValue] = useState(20)
    const [show, setShow] = useState(false)
    const onChange = () => {
        // const signal = {
        //     value: selectedOptionByName.value,
        //     sources: selectedOptionByName.sources,
        //     trigger: selectedTrigger.value,
        //     condition: selectedConditions.value,
        //     condition_value: inputValue
        // };
        // console.log('signal', signal)
    }
    const onChangeSignalToBacktest = ({signal = selectedOptionByName, show = show}) => {
        if(show && Boolean(signal.label)) {
            addSignal({signal: signal.label});
            setSelectedSignal(signal);
        } else {
            addSignal({signal: null});
            setSelectedSignal(null);
        }
    }
    // const showData = () => {
    //     if(Boolean(selectedOptionByName.label)) {
    //         addSignal({signal: selectedOptionByName.label});
    //         setSelectedSignal(selectedOptionByName);
    //     }
    // }
    return (
        <Form>
            <Row className="d-flex align-items-center mb-3">
                <Col lg={3}>
                    <Label>Signal Source</Label>
                    <Select
                        value={selectedGroupByType}
                        options={initialOptionsGroupByType}
                        onChange={e => {
                            setSelectedGroupByType(e)
                            setSelectedOptionByName("")
                        }}
                        classNamePrefix="select2-selection"
                    />
                </Col>
                <Col lg={3}>
                    <Label>Signal to Backtest</Label>
                    <Select
                        value={selectedOptionByName}
                        options={selectedGroupByType.data}
                        onChange={e => {
                            setSelectedOptionByName(e);
                            onChangeSignalToBacktest({signal: e, show});
                        }}
                        classNamePrefix="select2-selection"
                    />
                </Col>
                <Col lg={2}>
                    <Label>Trigger</Label>
                    <Select
                        value={selectedTrigger}
                        options={triggers}
                        onChange={e => {
                            setSelectedTrigger(e)
                        }}
                        classNamePrefix="select2-selection"
                    />
                </Col>
            </Row>
            <Row className="d-flex align-items-center mb-3">
                {
                    selectedTrigger.value === 'RSI'
                    &&
                    <Col lg={2}>
                        <Label>TA Value</Label>
                        <Input
                            type="number"
                            value={TAValue}
                            onChange={(e) => {
                                setTAValue(e.target.value)
                            }}
                        />
                    </Col>
                }
                {
                    (selectedTrigger.value === 'Value' || selectedTrigger.value === 'RSI')
                        ? <>
                            <Col lg={3}>
                                <Label>Condition</Label>
                                <Select
                                    value={selectedConditions}
                                    options={conditions}
                                    onChange={e => {
                                        setConditions(e)
                                    }}
                                    classNamePrefix="select2-selection"
                                />
                            </Col>
                            <Col lg={2}>
                                <Label>Input value</Label>
                                <Input
                                    type="number"
                                    value={inputValue}
                                    onChange={(e) => {
                                        setInputValue(e.target.value)
                                    }}
                                />
                            </Col>
                        </>
                        :
                        <Col lg={2}>
                            <Label>Days</Label>
                            <Input
                                type="number"
                                value={days}
                                onChange={(e) => {
                                    setDays(e.target.value)
                                }}
                            />
                        </Col>
                }
                <Col lg={2}>
                    <Label check>
                        <Input
                            type="checkbox"
                            className="me-1"
                            name="show"
                            checked={show}
                            onChange={(e) => {
                                setShow(e.target.checked)
                                // if(e.target.checked) showData()
                                onChangeSignalToBacktest({signal: selectedOptionByName, show: e.target.checked})
                            }}
                        />
                        Show
                    </Label>
                </Col>
            </Row>
        </Form>
    )
}

export default ConditionsForm
