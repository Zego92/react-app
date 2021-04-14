import React from "react"
import PropTypes from "prop-types"
import { useHistory } from "react-router-dom"
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap"

function BlogCard({ row }) {
  const { id, img, title, text } = row
  let history = useHistory()

  const handleClick = id => () => history.push({ pathname: `/blog/${id}`, row })

  return (
    <Card>
      <Row className="no-gutters align-items-center">
        <Col md={4}>
          <CardImg className="img-fluid" src={img} alt="NeuroQuant" />
        </Col>
        <Col md={8}>
          <CardBody>
            <Row>
              <Col md={10}>
                <CardTitle>{title}</CardTitle>
              </Col>
              <Col md={10}>
                <CardText>{text}</CardText>
              </Col>
              <Col className="mt-4" md={{ span: 3, offset: 9 }}>
                <Button onClick={handleClick(id)} color="primary">
                  View more
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Col>
      </Row>
    </Card>
  )
}

BlogCard.propTypes = {
  row: PropTypes.objectOf(PropTypes.string)
}

export default BlogCard;