import React from "react"
import { Row, Col, Card, Button } from "reactstrap"
import ava from "../../../../assets/images/users/avatar-1.jpg"

export default function SubscriptionCard() {
  return (
    <Card className="p-2">
      <Row>
        <Col xs="4">
          <h6 className="mt-0 mb-3">Compute time</h6>

          <Row>
            <Col xs={6}>
              <h1>50</h1>
            </Col>
            <Col xs={6}>
              <Row>
                <Col className="p-0" xs={12}>
                  <strong>hours</strong>
                </Col>
                <Col className="p-0" xs={12}>
                  available
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col xs="4">
          <h6 className="mt-0 mb-3">Storage</h6>

          <Row>
            <Col xs={6}>
              <h1>296</h1>
            </Col>
            <Col xs={6}>
              <Row>
                <Col className="p-0" xs={12}>
                  <strong>GB</strong>
                </Col>
                <Col className="p-0" xs={12}>
                  available
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs="4">
          <h6 className="mt-0 mb-3">
            <Button color="none" className="p-0">
              <i className="bx bx-revision font-size-18 me-2" />
            </Button>
            Members (2/5)
          </h6>
          <div style={{ display: "flex" }}>
            <img src={ava} className="avatar-xs rounded-circle" alt="img" />

            <div className="avatar-xs rounded-circle">
              <span
                className={
                  "avatar-title rounded-circle bg-soft bg-primary text-primary font-size-2"
                }
              >
                {"s"}
              </span>
            </div>
          </div>
        </Col>

        <Col xs={12} className="mt-2">
          <Button color="success">
            <i className="bx bx-cloud font-size-18 me-2" />
            Manage subscription
          </Button>
        </Col>
      </Row>
    </Card>
  )
}
