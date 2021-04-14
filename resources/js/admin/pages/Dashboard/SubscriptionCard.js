import React from "react"
import { Row, Col, Card, CardTitle, CardText } from "reactstrap"
import { Link } from "react-router-dom"

export default function SubscriptionCard() {
  return (
    <Card body>
      <Row>
        <Col xl="7">
          <CardTitle className="mt-0 mb-3">Subscription Plan</CardTitle>
          <Row>
            <Col xl={3}>
              {" "}
              <CardText>Basic</CardText>
            </Col>
            <Col>
              <Link
                to="/my-subscription"
                className="btn btn-danger waves-effect waves-light"
              >
                Change plan
              </Link>
            </Col>
          </Row>
        </Col>

        <Col xl="5">
          <CardTitle className="mt-0 mb-3">Newsletters</CardTitle>
          <Link
            to="/newsletters"
            className="btn btn-primary waves-effect waves-light"
          >
            My subscription -{">"}
          </Link>
        </Col>
      </Row>
    </Card>
  )
}
