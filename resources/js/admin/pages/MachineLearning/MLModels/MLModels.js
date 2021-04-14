import React from "react"
import { Container, Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import CardUI from "./CardUI"

function MLModels() {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs
            title="AI/Machine Learning"
            breadcrumbItem="Proprietary ML-models"
          />

          <Row>
            <Col xl={10}>
              <CardUI />
            </Col>
            <Col xl={10}>
              <CardUI />
            </Col>
            <Col xl={10}>
              <CardUI />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default MLModels
