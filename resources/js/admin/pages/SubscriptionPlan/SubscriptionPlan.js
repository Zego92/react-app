import React from "react"
import { Container, Row, Col } from "reactstrap"

//i18n
import { withTranslation } from "react-i18next"
import SubcritpionCard from "./SubcritpionCard"

const levels = ["Basic", "Premium", "Professioanl"]

function SubscriptionPlan({ t }) {
  return (
    <React.Fragment>
      <Container fluid className="page-content">
        <Row className="justify-content-center">
          <Col xs="12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="mb-0 font-size-18">Subscription Plan</h4>
            </div>
          </Col>

          <Col xs="12 mb-5 ml-4">
            <h4 className="mb-2 font-size-16">Your subscription is Premium</h4>
            <h4 className="mb-2 font-size-16">Active till April 23</h4>
          </Col>

          <Row className="justify-content-center">
            {levels.map((level, i) => (
              <React.Fragment key={i}>
                <Col xl={3}>
                  <SubcritpionCard level={level} />
                </Col>
              </React.Fragment>
            ))}
          </Row>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default withTranslation()(SubscriptionPlan)
