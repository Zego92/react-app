import {Col, Form, InputGroup, Label, Row} from "reactstrap";
import Select from "react-select";
import s from "../CreateTest.module.css";
import DatePicker from "react-datepicker";
import {optionsMarket} from "../initailData";
import React from "react";

const SelectTarget = ({
                          initialOptionsGroupByType,
                          selectedGroupByType,
                          setSelectedGroupByType,
                          setSelectedOptionByName,
                          selectedOptionByName,
                          startDate,
                          endDate,
                          initDataChart,
                          setStartDate,
                          setEndDate,
                          selectedOptionMarket,
                          setSelectedOptionMarket,
                          fetch2
                      }) => {
    const minDate = new Date(initDataChart[0]?.Date) || startDate;
    const maxDate = new Date(initDataChart[initDataChart.length - 1]?.Date) || endDate;
    return <Form>
        <Row>
            <Col lg={3} md={6}>
                <Label>Target Source</Label>
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
            <Col lg={3} md={6}>
                <Label>Target to Backtest</Label>
                <Select
                    value={selectedOptionByName}
                    options={selectedGroupByType.data}
                    onChange={(e) => {
                        setSelectedOptionByName(e)
                        fetch2({target: e.label})
                    }}
                    classNamePrefix="form-select"
                />
            </Col>
            {selectedOptionByName && startDate && endDate && initDataChart && (
                <Col lg={3} md={6}>
                    <Label>Time Period</Label>
                    <InputGroup className={`${s.rangeDate} m-0`}>
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            minDate={minDate}
                            maxDate={maxDate}
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                            className="form-control"
                            popperClassName="col-4"
                        />
                        <span
                            className={`input-group-text ${s.inputGroupText}`}
                        >
                            to
                          </span>
                        <DatePicker
                            selected={endDate}
                            onChange={date => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={minDate}
                            maxDate={maxDate}
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                            className="form-control"
                            popperClassName="col-4"
                        />
                    </InputGroup>
                </Col>
            )}
            <Col lg={3} md={6}>
                <Label>Market Environment</Label>
                <Select
                    value={selectedOptionMarket}
                    options={optionsMarket}
                    onChange={e => {
                        setSelectedOptionMarket(e)
                    }}
                    classNamePrefix="select2-selection"
                />
            </Col>
        </Row>
    </Form>
}

export default SelectTarget