import {CardText, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";
import React, {useState} from "react";

const ResultsTabs = () => {
    const [activeTab, setActiveTab] = useState("1");
    return <>
        <Nav tabs>
            <NavItem>
                <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                        active: activeTab === "1",
                    })}
                    onClick={() => {
                        setActiveTab("1")
                    }}
                >
                    Backtest Summary
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                        active: activeTab === "2",
                    })}
                    onClick={() => {
                        setActiveTab("2")
                    }}
                >
                    Multi-Timeframe Result
                </NavLink>
            </NavItem>
        </Nav>

        <TabContent activeTab={activeTab} className="p-3 text-muted">
            <TabPane tabId="1">
                <Row>
                    <Col sm="12">
                        <CardText className="mb-0">
                            something about Backtest Summary
                        </CardText>
                    </Col>
                </Row>
            </TabPane>
            <TabPane tabId="2">
                <Row>
                    <Col sm="12">
                        <CardText className="mb-0">
                            blah-blah about Multi-Timeframe Result
                        </CardText>
                    </Col>
                </Row>
            </TabPane>
        </TabContent>
    </>
}

export default ResultsTabs