import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import BlogCard from "./BlogCard"
import blogList from "../../common/data/blog"

class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <h3>Blog</h3>

            <Row className="mt-4">
              <Col lg={9}>
                {blogList.map(row => (
                  <BlogCard key={row.id} row={row} />
                ))}
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default Blog
