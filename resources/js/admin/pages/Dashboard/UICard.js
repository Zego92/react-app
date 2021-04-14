import React from "react"
import { Card, CardTitle, CardText } from "reactstrap"
import { Link } from "react-router-dom"

export default function UICard({ card }) {
  const { title, text } = card

  return (
    <Card body>
      <CardTitle className="mt-0">{title}</CardTitle>
      <CardText>{text}</CardText>
      <Link
        to="/tutorials"
        className="btn btn-primary waves-effect waves-light"
      >
        View more
      </Link>
    </Card>
  )
}
