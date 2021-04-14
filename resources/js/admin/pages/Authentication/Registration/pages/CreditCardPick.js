import React from "react"
import PropTypes from "prop-types"

import { Button, Col, Row, Input } from "reactstrap"

function CreditCardPick({ level, nextPage }) {
  return (
    <>
      <h4 className="my-4">Payment</h4>

      <Row className="justify-content-around">
        <Col xs={12}>
          <Input
            name="card-number"
            label="Card number"
            type="text"
            required
            placeholder="Enter Card Number"
          />
        </Col>
        <Col xs={6}>
          <Input
            name="card-expires"
            label="Card expires date"
            className="my-3"
            type="text"
            required
            placeholder="expires date"
          />
        </Col>
        <Col xs={6}>
          <Input
            name="card-code"
            label="CVC"
            className="my-3"
            type="text"
            required
            placeholder="CVC"
          />
        </Col>
        <Col xs={12}>
          <Input
            name="card-holder"
            label="Card holder"
            type="text"
            required
            placeholder="Card holder name"
          />
        </Col>
        <Col xs={6} className="mt-2">
          <h5>{`${level} amount pay`}</h5>
          <p>124$</p>
        </Col>
        <Col xs={6} className="mt-2">
          <h5>To pay</h5>
          <p>744$</p>
        </Col>
        <Button
          type="submit"
          // disabled={!subscriptionLevel}
          className="col-11 mt-4"
          color="primary"
          onClick={() => nextPage()}
        >
          Pay
        </Button>
      </Row>
    </>
  )
}

CreditCardPick.propTypes = {
  level: PropTypes.string,
  nextPage: PropTypes.func,
}

export default CreditCardPick
