import React from "react"
import PropTypes from "prop-types"
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Row,
  Input,
  Label,
} from "reactstrap"

function FilterSection({
  title,
  list,
  inputHandler,
  isChecked,
}) {
  return (
    <Card>
      <CardBody>
        <CardTitle className="mb-4">{title}</CardTitle>
        <Row>
          {list.map(({ id, name }) => (
            <Col xs={12} key={id}>
              <Label className="custom-control custom-checkbox">
                <Input
                  className="custom-control-input"
                  type="checkbox"
                  id={"customCheck1_" + id}
                  style={{ marginRight: 15 }}
                  checked={isChecked(name)}
                  onChange={() => inputHandler(name)}
                />
                {name}
              </Label>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  )
}


FilterSection.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string
  })).isRequired,
  inputHandler: PropTypes.func.isRequired,
  isChecked: PropTypes.func.isRequired,
}

export default FilterSection;