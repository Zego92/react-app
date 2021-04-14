import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button, Label, Row, UncontrolledAlert, Input } from "reactstrap"

function EmailPick({ nextPage }) {
  const [email, setEmail] = useState(null)
  const [isSend, setIsSend] = useState(false)
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const validateEmail = email => {
    const res = regExp.test(String(email).toLowerCase())
    return res
  }

  const sendEmail = () => {
    setIsSend(true)

    setTimeout(() => {
      setIsSend(false)
      nextPage("email", email)
    }, 1000)
  }

  const isValidEmail = validateEmail(email)

  return (
    <>
      <h4 className="my-4">Enter your Email</h4>
      <Row className="justify-content-around">
        {isSend && (
          <UncontrolledAlert
            color="success"
            className="alert-dismissible fade show"
            role="alert"
          >
            <i className="mdi mdi-check-all me-2" />
            Email send Successfully
          </UncontrolledAlert>
        )}

        {/* {error && (
          <UncontrolledAlert
            color="danger"
            className="alert-dismissible fade show"
            role="alert"
          >
            <i className="mdi mdi-block-helper me-2" />
            Some Error text
          </UncontrolledAlert>
        )} */}

        <Label className="card-radio-label mb-4">
          <Input
            name="email"
            label="Email"
            className="form-control"
            placeholder="Enter email"
            type="email"
            validate={{ pattern: { value: regExp } }}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </Label>

        <Button
          type="submit"
          className="col-11"
          color="primary"
          disabled={!isValidEmail}
          onClick={sendEmail}
        >
          verify email
        </Button>
      </Row>
    </>
  )
}

EmailPick.propTypes = {
  nextPage: PropTypes.func,
}

export default EmailPick
