import React from "react"
import { useParams } from "react-router-dom"
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import blogList from "../../common/data/blog"

function BlogDetailed() {
  const { id } = useParams()
  const { title, text, img } = blogList.find(v => v.id === id)

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs title="Blog" breadcrumbItem={title} backLink="/blog" />
        <Row className="justify-content-center mt-4">
          <Col lg={5}>
            <Card className="text-center">
              <CardImg top className="img-fluid" src={img} alt="NeuroQuant" />
              <CardBody>
                <CardTitle className="mt-0">{title}</CardTitle>
                <CardText>{text}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BlogDetailed
