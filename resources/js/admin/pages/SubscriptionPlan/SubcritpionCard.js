import React from "react"
import PropTypes from "prop-types"
import { Card } from "reactstrap"
import { Link } from "react-router-dom"

 function SubcritpionCard({ level }) {
  return (
    <Card body className="text-center">
      <h4 className="mb-4 font-size-18">{level}</h4>
      <Link
        to="/billing"
        className="btn mt-4 btn-primary waves-effect waves-light"
      >
        Upgrade
      </Link>
    </Card>
  )
}


SubcritpionCard.propTypes = {
  level: PropTypes.string.isRequired
}

export default SubcritpionCard;