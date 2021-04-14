import React from "react"
import { Container, Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import ImportCard from "./ImportCard"
import DataBaseCard from "./DataBaseCard"

function ImportData() {
    return (
      <React.Fragment>
        <Container fluid className="page-content">
          <Breadcrumbs title="Data Library" breadcrumbItem="Import Data" />

          <Row>
            <Col xl={11} md={12}>
              <ImportCard />
            </Col>
            <Col xl={11} md={12}>
              <DataBaseCard />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
}

export default ImportData
