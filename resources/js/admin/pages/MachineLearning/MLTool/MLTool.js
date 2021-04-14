import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Container,
  Col,
  NavItem,
  NavLink,
  Row,
  Button,
  TabContent,
  TabPane,
} from "reactstrap"
import classnames from "classnames"

import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { TabProjects, TabModels, TabForecasts } from "./Tabs"
import SubscriptionCard from "./common/SubscriptionCard"

const tabs = [
  { id: "tabs1", title: "My Projects", num: 1 },
  { id: "tabs2", title: "My Models", num: 2 },
  { id: "tabs3", title: "My Forecasts", num: 3 },
]

function MLTool() {
  const [activeTab, toggleTab] = useState(1)

  const activeButton = num => classnames({ active: activeTab === num })

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs
            title="AI/Machine Learning"
            breadcrumbItem="Machine Learning Tool"
          />

          <ul>
            <Row className="justify-content-between">
              <Col
                xs={6}
                className="nav nav-tabs nav-tabs-custom justify-content-start pt-2"
                role="tablist"
              >
                {tabs.map(({ id, title, num }) => (
                  <NavItem key={id}>
                    <Button
                      style={{ marginRight: 10 }}
                      color="info"
                      className={activeButton(num)}
                      onClick={() => toggleTab(num)}
                    >
                      {title}
                    </Button>
                  </NavItem>
                ))}
              </Col>
              <Col xs={6}>
                <SubscriptionCard />
              </Col>
            </Row>
          </ul>

          <TabContent className="p-4" activeTab={activeTab}>
            <TabPane tabId={1}>
              <TabProjects />
            </TabPane>
            <TabPane tabId={2}>
              <TabModels />
            </TabPane>
            <TabPane tabId={3}>
              <TabForecasts />
            </TabPane>
          </TabContent>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default MLTool
