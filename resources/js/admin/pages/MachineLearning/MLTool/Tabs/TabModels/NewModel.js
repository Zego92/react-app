import React, { useState } from "react"
import PropTypes from "prop-types"
import { Card, Col, Label, Input, Row, Form, Button } from "reactstrap"
import Select from "react-select"
import StatusCard from "../../common/StatusCard"
import { algorithmOptions } from "../../common/defaultOptions"
import projectApi from '../../../../../common/data/dataApi'
import { makeProjectOptions } from '../../../../../common/helpers'

function NewModel({ closeModelHandler }) {
  const projectOptions = makeProjectOptions(Object.values(projectApi))
  const [new_algotithm, setNew_algotithm] = useState(algorithmOptions[2])
  const [project, setProject] = useState(null)
  const [new_label_user, setNew_label_user] = useState('')

  const newModelData = {
    project: project?.label,
    new_algotithm: new_algotithm?.label,
    new_label_user,
  }

  const createModel = () => {

    console.log("model created", newModelData)
  }

  const isNotComplete = Object.values(newModelData).some(v => Boolean(v) === false);

  return (
    <Row>
      <Col xs={6}>
        <Card className="p-2 mb-1">
          <Form className="form-control-sm">
            <Row>
              <Col xs={7} className="mb-2">
                <Label
                  htmlFor="horizontal-model-Project"
                  className="col-form-Label"
                >
                  Project
                </Label>

                <Select
                  value={project}
                  onChange={setProject}
                  options={projectOptions}
                />
              </Col>
              <Col xs={6}>
                <Label htmlFor="newModel-label_user">
                  Model Name
                </Label>
                <Input
                  required
                  type="text"
                  name="label_user"
                  id="newModel-label_user"
                  value={new_label_user}
                  onChange={({ target }) => setNew_label_user(target.value)}
                />
              </Col>
              <Col xs={6} className="mb-2">
                <Label
                  htmlFor="horizontal-firstname-algorithm"
                  className=" col-form-Label"
                >
                  Algorithm
                </Label>
                <Select
                  value={new_algotithm}
                  onChange={setNew_algotithm}
                  options={algorithmOptions}
                />
              </Col>
              <Col xs={4}>
                <Label
                  htmlFor="horizontal-firstname-Input"
                  className=" col-form-Label"
                >
                  Splits
                </Label>
                <Select
                  isDisabled
                  // value={selectedModel}
                  // onChange={setSelectedModel}
                  // options={mlModelsoptions}
                  className="form-control-sm p-0"
                // classNamePrefix="select2-selection"
                />
              </Col>
              <Col xs={8}>
                <Label
                  htmlFor="horizontal-firstname-Input"
                  className=" col-form-Label"
                >
                  Hyperparameter
                </Label>
                <Select
                  isDisabled
                  // value={selectedModel}
                  // onChange={setSelectedModel}
                  // options={mlModelsoptions}
                  className="form-control-sm p-0"
                // classNamePrefix="select2-selection"
                />
              </Col>
            </Row>
          </Form>
          <p className="mt-4">{new_algotithm.value.descr}</p>
          {new_algotithm.value.link && (
            <p className="mt-4">
              More info:{" "}
              <a href={new_algotithm.value.link}>
                {new_algotithm.label} on Amazon Forecast
              </a>
            </p>
          )}
        </Card>
      </Col>
      <Col xs={6}>
        <StatusCard />
      </Col>
      <Col xs={12} className="my-4">
        <Button color="success" onClick={createModel} disabled={isNotComplete}>
          Create Model
        </Button>
        <Button color="danger mx-4" onClick={() => closeModelHandler(false)}>
          Cancel
        </Button>
      </Col>
    </Row>
  )
}


NewModel.defaultProps = {}

NewModel.propTypes = {
  closeModelHandler: PropTypes.func.isRequired,
}

export default NewModel