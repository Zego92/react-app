import React, { useEffect, useState } from "react"
import {
  Alert,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Row,
  UncontrolledAlert,
} from "reactstrap"
import Breadcrumbs from "../../components/Common/Breadcrumb"

const data = [
  {
    id: 0,
    name: "weeklyReport",
    title: "Weekly Report",
    defaultChecked: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    name: "chartBook",
    title: "ChartBook",
    defaultChecked: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  ,
  {
    id: 2,
    name: "sentiment",
    title: "Sentiment & Positioning Report",
    defaultChecked: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]

const Newsletters = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [values, setValues] = useState(null)
  const [isEmpty, setIsEmpty] = useState(false)
  const [disabledSubmitButton, setDisabledSubmitButton] = useState(true)

  useEffect(() => {
    let values = {}
    data.forEach(item => {
      values[item.name] = item.defaultChecked
    })
    setValues(values)
  }, [])

  const handleChange = ({ target }) => {
    const { name, checked } = target
    setValues({
      ...values,
      [name]: checked,
    })
    setIsEmpty(false)
    setDisabledSubmitButton(false)
    setError(false)
    setSuccess(false)
  }
  const handleSubmit = e => {
    e.preventDefault()
    let empty = true
    for (let key in values) {
      if (!!values[key]) {
        empty = false
      }
    }
    setIsEmpty(empty)
    setSuccess(true)
    setDisabledSubmitButton(true)
  }
  return (
    <React.Fragment>
      <Container fluid className="page-content">
        <Breadcrumbs title="NeroQuant" breadcrumbItem="Newsletters" />
        <Row>
          <Col lg={6}>
            <Card>
              <CardBody>
                {!!success && (
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
                    {isEmpty
                      ? "You have canceled all subscriptions"
                      : "The list of your subscriptions have been updated"}
                  </Alert>
                )}
                {!!error && (
                  <UncontrolledAlert
                    color="danger"
                    className="alert-dismissible fade show"
                    role="alert"
                  >
                    <i className="mdi mdi-block-helper me-2" />
                    Something went wrong. Try again, please
                  </UncontrolledAlert>
                )}
                <Form onSubmit={handleSubmit}>
                  {values &&
                    data.map(item => {
                      return (
                        <Row key={item.id} className="mt-4">
                          <Col md={6}>
                            <div className="form-check mb-3">
                              <label className="form-check-label">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name={item.name}
                                  checked={values[item.name]}
                                  onChange={handleChange}
                                />
                                {item.title}
                              </label>
                            </div>
                          </Col>
                          <Col md={6}>
                            <div>{item.description}</div>
                          </Col>
                        </Row>
                      )
                    })}
                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary w-md"
                      disabled={disabledSubmitButton}
                    >
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

export default Newsletters
