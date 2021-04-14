import React from "react"
import PropTypes from "prop-types"
import { Col, Button } from "reactstrap"

function SuccessPage({ nextPage }) {
  return (
    <div className="row justify-content-center">
      <Col lg="6">
        <div className="text-center">
          <div className="mb-4">
            <i className="mdi mdi-check-circle-outline text-success display-4" />
          </div>
          <div>
            <h5>Congratulations, your email is confirmed</h5>
          </div>
        </div>
      </Col>
      <Button
        type="submit"
        className="col-11 mt-4"
        color="primary"
        onClick={() => nextPage("emailConfirm", true)}
      >
        to credit card
      </Button>
    </div>
  )
}

SuccessPage.propTypes = {
  nextPage: PropTypes.func,
}

export default SuccessPage
