import React from "react"
import PropTypes from "prop-types"
import {
  Card,
  CardBody,
  Col,
  Row,
  Input,
  Label,
  Button,
} from "reactstrap"

function FilterTab({
  checkedList,
  inputHandler,
  clearList,
}) {
  return (
    <Card>
      <CardBody>
        <Row>
          <Col xl={12}>
            <Label className="custom-control custom-checkbox">
              <Input
                className="custom-control-input"
                type="checkbox"
                id={"addToSecPage"}
                style={{ marginRight: 15 }}
              />
              add data to second page
            </Label>
          </Col>

          <Row>
            <Col xl={8}>
              {checkedList.map((item, i) => {
                return (
                  <Button
                    onClick={() => inputHandler(item)}
                    key={i}
                    color="light"
                    outline
                    className="btn-sm waves-effect"
                  >
                    {item}
                    <i className="bx bx-x" />
                  </Button>
                )
              })}
            </Col>
            <Col xl={4}>
              <Button
                onClick={clearList}
                color="link"
                className="btn btn-link waves-effect"
              >
                clear all
              </Button>
            </Col>
          </Row>
        </Row>
      </CardBody>
    </Card>
  )
}



FilterTab.propTypes = {
  checkedList: PropTypes.arrayOf(PropTypes.string),
  inputHandler: PropTypes.func.isRequired,
  clearList: PropTypes.func.isRequired,
}

export default FilterTab;