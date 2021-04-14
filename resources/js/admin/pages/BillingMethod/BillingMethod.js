import React, { useState } from "react"
import { Container, Row, Col, Button } from "reactstrap"
import BillingHistory from "./BillingHistory"
import CardInput from "./CardInput"
import ModalWindow from "./ModalWindow"

function BillingMethod() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const toggleHandler = () => setmodal_center(prev => !prev)

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h3>Billing Method</h3>

          <Row className="mb-4">
            <Col xs={12} className="mb-4 mt-4">
              <Row className="justify-content-start mb-2">
                <Col md={4} className="mb-2">
                  <h4 className="mb-2 font-size-16">
                    Your subscription is Premium
                  </h4>
                </Col>
                <Col md={3} className="mb-2">
                  <Button
                    color="primary"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    Upgrade Subscription
                  </Button>
                </Col>
                <Col md={2}>
                  <Button
                    color="danger"
                    className="btn btn-danger waves-effect waves-light"
                    onClick={() => setModalIsOpen(prev => !prev)}
                    data-toggle="modal"
                    data-target=".bs-example-modal-center"
                  >
                    Cancel
                  </Button>
                </Col>
              </Row>
              <h4 className="mb-2 font-size-16">Active till April 23</h4>
            </Col>

            <Col xs={12}>
              <CardInput />
            </Col>
          </Row>

          <BillingHistory />
          <ModalWindow
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            toggleHandler={toggleHandler}
          />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default BillingMethod
