import React from "react"
import PropTypes from "prop-types"
import { Row, Col, Card, CardTitle, CardText, Button } from "reactstrap"

function TutorialCard({ title, text, clickHandler, video }) {
  return (
    <Card body>
      <Row className="justify-content-between mb-2">
        <Col xs={6}>
          <CardTitle className="mt-0">{title}</CardTitle>
        </Col>
        <Col xs={5}>
          <Button
            onClick={clickHandler(video)}
            data-toggle="modal"
            color="link"
            className="btn btn-link waves-effect waves-light"
          >
            <i className="bx bx-play-circle font-size-18 align-middle me-2" />
            Watch the video tutorial
          </Button>
        </Col>
      </Row>

      <CardText>{text}</CardText>
    </Card>
  )
}

TutorialCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  video: PropTypes.string.isRequired,
}

export default TutorialCard;