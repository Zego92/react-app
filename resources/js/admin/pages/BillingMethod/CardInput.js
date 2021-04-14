import React from "react"
import { Row, Col, Button, FormGroup, Label, Input } from "reactstrap"

export default function CardInput() {
  return (
    <Row>
      <Col xs={4}>
        <FormGroup>
          <Label for="cardNumber">Card Number</Label>
          <Input
            type="text"
            name="cardNumber"
            id="cardNumber"
            placeholder="5555 1234 5678 9000"
          />
        </FormGroup>
      </Col>
      <Col xs={2}>
        <FormGroup>
          <Label for="expiresDate">Expires on</Label>
          <Input
            type="text"
            name="expiresDate"
            id="expiresDate"
            placeholder="11/22"
          />
        </FormGroup>
      </Col>
      <Col xs={2}>
        <FormGroup>
          <Label for="cvc">Secure code</Label>
          <Input type="text" name="cvc" id="cvc" placeholder="123" />
        </FormGroup>
      </Col>
      <Col xs={8} className="mt-2">
        <FormGroup>
          <Label for="holder">Card Holder</Label>
          <Input type="text" name="holder" id="holder" placeholder="John Doe" />
        </FormGroup>
      </Col>
      <Col xs={{ span: 2, offset: 3 }} className="mt-4">
        <Button type="submit" color="primary" className="btn-sm px-5">
          Change card
        </Button>
      </Col>
    </Row>
  )
}
