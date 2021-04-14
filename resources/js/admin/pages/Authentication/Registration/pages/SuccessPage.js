import React from "react"
import { Col, Button } from "reactstrap"
import { useHistory } from "react-router-dom"

export default function SuccessPage() {
  const history = useHistory()
  const clickHandler = () => history.push("/login")
  return (
    <div className="row justify-content-center">
      <Col lg="6">
        <div className="text-center">
          <div className="mb-4">
            <i className="mdi mdi-check-circle-outline text-success display-4" />
          </div>
          <div>
            <h5>The payment has been succesfully done</h5>
            <p className="text-muted">
              Check your email with the data to login
            </p>
          </div>
        </div>

        <Button
          type="submit"
          className="col-11"
          color="primary"
          onClick={clickHandler}
        >
          to Login page
        </Button>
      </Col>
    </div>
  )
}
