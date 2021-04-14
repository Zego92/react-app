import React, { useState } from "react"
import {
  Alert,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"

const ContactUs = () => {
  const [textCount, setTextCount] = useState(0)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = ({ target }) => {
    const { name, value } = target
    setValues({
      ...values,
      [name]: value,
    })
    name === "message" && setTextCount(value.length)
  }
  const handleSubmit = e => {
    e.preventDefault()
    setValues({
      name: "",
      email: "",
      message: "",
    })
    console.log(values)
    setSuccess(true)
  }
  return (
    <React.Fragment>
      <Container fluid className="page-content">
        <Breadcrumbs title="NeroQuant" breadcrumbItem="Contact Us" />
        <Row>
          <Col lg={6}>
            <Card>
              <CardBody>
                <Alert
                  isOpen={success}
                  toggle={() => {
                    setSuccess(false)
                  }}
                  color="success"
                  className="alert-dismissible fade show"
                  role="alert"
                >
                  <i className="mdi mdi-check-all me-2" />
                  Your message has been successfully sent!
                </Alert>
                <Alert
                  isOpen={error}
                  toggle={() => {
                    setError(false)
                  }}
                  color="danger"
                  className="alert-dismissible fade show"
                  role="alert"
                >
                  <i className="mdi mdi-block-helper me-2" />
                  Something went wrong. Try again, please
                </Alert>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label>First name</Label>
                        <Input
                          name="name"
                          type="text"
                          className="form-control"
                          onChange={handleChange}
                          value={values.name}
                          required
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label>Email</Label>
                        <Input
                          name="email"
                          type="email"
                          className="form-control"
                          onChange={handleChange}
                          value={values.email}
                          required
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="mb-3">
                    <Label>Message</Label>
                    <Input
                      name="message"
                      type="textarea"
                      onChange={handleChange}
                      value={values.message}
                      maxLength="225"
                      rows="3"
                      placeholder="This textarea has a limit of 225 chars."
                      required
                    />
                    <span className="text-muted">{textCount} / 225</span>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary w-md">
                      Submit
                    </button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default ContactUs
