import React from "react"
import PropTypes from "prop-types"

import { Button, Row } from "reactstrap"
import RadioBtn from "../components/RadioBtn"

const levels = ["Basic", "Premium", "Professioanl"]

function SubscriptionPick({
  subscriptionLevel,
  setSubscriptionLevel,
  nextPage,
}) {
  const renderRadioBtn = levels.map(level => (
    <RadioBtn
      key={`RadioBtn-${level}`}
      level={level}
      setSubscriptionLevel={setSubscriptionLevel}
    />
  ))

  return (
    <>
      <h4 className="my-4">Choose your subscription</h4>
      <Row className="justify-content-center">
        {renderRadioBtn}
        <Button
          type="submit"
          disabled={!subscriptionLevel}
          className="col-11"
          color="primary"
          onClick={() => nextPage("subsc", subscriptionLevel)}
        >
          next page
        </Button>
      </Row>
    </>
  )
}

SubscriptionPick.propTypes = {
  subscriptionLevel: PropTypes.string,
  setSubscriptionLevel: PropTypes.func,
  nextPage: PropTypes.func,
}

export default SubscriptionPick
