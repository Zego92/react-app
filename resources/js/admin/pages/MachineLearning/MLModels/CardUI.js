import React, { useState } from "react"
import { Row, Col, Card, CardText, Label, Form } from "reactstrap"
import Select from "react-select"
import Earning from "pages/Dashboard/Earning"

const mlModelsoptions = [
  { label: "model1", value: "model1" },
  { label: "model2", value: "model2" },
  { label: "model3", value: "model3" },
]

const mlTypesoptions = [
  { label: "type1", value: "type1" },
  { label: "type2", value: "type2" },
  { label: "type3", value: "type3" },
]

export default function CardUI() {
  const [selectedModel, setSelectedModel] = useState(null)
  const [selectedType, setSelectedType] = useState(null)

  return (
    <Card body>
      <Row className="justify-content-between">
        <Col xs={12}>
          <Form>
            <div className="row mb-4 align-items-center">
              <Label
                htmlFor="horizontal-model-Input"
                className="col-sm-2 col-form-Label"
              >
                ML model
              </Label>
              <Col sm={3}>
                <Select
                  value={selectedModel}
                  onChange={setSelectedModel}
                  options={mlModelsoptions}
                  classNamePrefix="select2-selection"
                />
              </Col>

              <Label
                htmlFor="horizontal-type-Input"
                className="col-sm-2 col-form-Label"
              >
                Type of graph
              </Label>
              <Col sm={3}>
                <Select
                  value={selectedType}
                  onChange={setSelectedType}
                  options={mlTypesoptions}
                  classNamePrefix="select2-selection"
                />
              </Col>
            </div>
          </Form>
        </Col>

        <Col xs={9}>
          <Earning height={230} />
        </Col>
        <Col xs={3}>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum
            at magna vel sodales. In rhoncus elit ac mi fermentum, eu tempus
            eros rhoncus. Praesent tempor odio ut pellentesque aliquam. Mauris
            vel cursus risus, a tincidunt sapien. Duis tempor ligula quis risus
            vehicula eleifend. Maecenas a purus erat. Maecenas at iaculis
          </CardText>
        </Col>
      </Row>
    </Card>
  )
}
