import React from "react"
import { Card, CardTitle, Button, Modal, Row, Col } from "reactstrap"

export default function ModalWindow({
  modalIsOpen,
  setModalIsOpen,
  toggleHandler,
}) {
  const dismisHandler = () => setModalIsOpen(false)

  return (
    <Modal isOpen={modalIsOpen} toggle={toggleHandler} centered>
      <Card body className="text-center">
        <CardTitle className="mt-0 mb-4">Are you sure?</CardTitle>
        <Row>
          <Col xs={6}>
            <Button
              onClick={dismisHandler}
              className="px-4 py-2"
              data-dismiss="modal"
            >
              No
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              onClick={dismisHandler}
              className="px-4 py-2"
              data-dismiss="modal"
            >
              Yes
            </Button>
          </Col>
        </Row>
      </Card>
    </Modal>
  )
}
