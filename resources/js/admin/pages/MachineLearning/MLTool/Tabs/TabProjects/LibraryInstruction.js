import React from "react"
import { Col, Row, CardTitle, Button } from "reactstrap"

export default function LibraryInstruction() {
  return (
    <React.Fragment>
      <CardTitle>
        <Row className="justify-content-start mt-4">
          <Col xs={1}>
            <i className="bx bx-book-open font-size-24 me-4" />
          </Col>
          <Col xs={11}>
            <p>Get started with our library with free dataset</p>
          </Col>
          <Col xs={4} className="mt-4">
            <Button color="success">Data Library</Button>
          </Col>
        </Row>
      </CardTitle>
    </React.Fragment>
  )
}
