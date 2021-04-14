import React from "react"
import PropTypes from "prop-types"
import { Col, Input, Label } from "reactstrap"

function RadioBtn({ level, setSubscriptionLevel }) {
  const clickHandler = () => setSubscriptionLevel(level)

  return (
    <Col xs={4}>
      <Label className="card-radio-label mb-2">
        <Input
          type="radio"
          name="subscription-level"
          id={`subscription-level-${level}`}
          className="card-radio-input"
          onClick={clickHandler}
        />

        <div className="card-radio">
          <span>{level}</span>
        </div>
      </Label>
    </Col>
  )
}

RadioBtn.propTypes = {
  level: PropTypes.string,
  setSubscriptionLevel: PropTypes.func,
}

export default RadioBtn
