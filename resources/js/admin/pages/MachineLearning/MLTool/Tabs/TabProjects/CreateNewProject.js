import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Card, Col, Form, Label, Row, Input, Table, Button } from "reactstrap"
import DropUpload from "../../common/DropUpload"
import Select from "react-select"
import LibraryInstruction from "./LibraryInstruction"
import { makeOptions, formatDate } from "../../../../../common/helpers"
import TableUIfromExcel from "components/Common/TableUIfromExcel"
import {
  timestampFormatOptions,
  horizonOptions,
  frequencyOptions,
} from "../../common/defaultOptions"

const customStyles = {
  valueContainer: provided => ({
    ...provided,
    maxHeight: "300px",
    overflow: "auto",
  }),
}

function CreateNewProject({ project, cancelHandler }) {
  const {
    created,
    label_user,
    target_names,
    timestamp_format,
    frequency,
    horizon,
    status,
    file_name,
  } = project
  const [new_label_user, setNew_label_user] = useState(label_user)
  const [new_timestamp_format, setNew_timestamp_format] = useState(
    timestamp_format
  )
  const [new_target_names, setNew_target_names] = useState(target_names)
  const [new_frequency, setNew_frequency] = useState(
    frequencyOptions.find(v => v.label === frequency)
  )
  const [new_horizon, setNew_horizon] = useState(
    horizonOptions.find(v => v.label === horizon)
  )

  const [isCheckedAllTargetNames, setIsCheckedAllTargetNames] = useState(false)
  const [importedData, setImportedData] = useState([[], []])



  const newProjectData = {
    // "created": "2021-03-23 20:52:53",
    label_user: new_label_user,
    target_names: new_target_names && [...new_target_names].map(({ value }) => value).join(", "),
    timestamp_format: new_timestamp_format.value,
    frequency: new_frequency?.value,
    horizon: new_horizon?.value,
    // "status": "active",
    // "file_name": "dataserier.csv"
  }

  useEffect(() => {
    const newTargetNames = target_names && makeOptions(target_names.split(", "))
    setNew_target_names(newTargetNames)
  }, [])

  const toggleSelectAll = () => {
    setIsCheckedAllTargetNames(prev => !prev)
    setNew_target_names(!isCheckedAllTargetNames && targetNamesOptions)
  }

  const createProjectHandler = () => {


    console.log(newProjectData)
  }

  const targetNamesHandler = val => {
    if (
      new_target_names ||
      (new_target_names &&
        new_target_names.length !== targetNamesOptions.length)
    ) {
      setIsCheckedAllTargetNames(false)
    }

    setNew_target_names(val)
  }

  const headRow = [...importedData][0]
  const timestampOptions = makeOptions(headRow)
  const targetNamesOptions = makeOptions(headRow)

  const isNotComplete = Object.values(newProjectData).some(v => Boolean(v) === false)

  return (
    <Card body className="mt-4">
      <Row className="justify-content-between">
        <Col xs={6}>
          <DropUpload
            getData={setImportedData}
            getTarNames={setNew_target_names}
          />
        </Col>
        <Col xs={5}>
          <LibraryInstruction />
        </Col>
      </Row>
      <Col className="overflow-auto" style={{ maxHeight: 300 }}>
        <TableUIfromExcel rows={importedData} />
      </Col>


      <Form className="form-control-sm mt-3">
        <Col xs={6} className="my-2">
          <Label htmlFor="newProject-label_user">Project name</Label>
          <Input
            required
            type="text"
            name="label_user"
            id="newProject-label_user"
            value={new_label_user}
            onChange={({ target }) => setNew_label_user(target.value)}
          />
        </Col>
        <Row>
          <Col xs={3} className="mb-2">
            <Label htmlFor="newProject-timestamp">Timestamp</Label>
            <Select
              // value={}
              // onChange={}
              options={timestampOptions}
            />
          </Col>
          <Col xs={3} className="mb-2">
            <Label htmlFor="newProject-timestamp_format">
              Timestamp format
            </Label>
            <Select
              value={new_timestamp_format}
              onChange={setNew_timestamp_format}
              options={timestampFormatOptions}
              className="form-control-sm p-0"
            />
          </Col>
          <Col xs={6} className="mb-2 ">
            <Label htmlFor="newProject-target_names">
              Target
              <Input
                type="checkbox"
                className="mx-2"
                id="newProject-selectAll"
                checked={isCheckedAllTargetNames}
                onChange={toggleSelectAll}
              />
              <Label htmlFor="newProject-selectAll" className="m-0">
                Select all
              </Label>
            </Label>
            <Select
              styles={customStyles}
              isMulti
              value={new_target_names}
              onChange={targetNamesHandler}
              options={targetNamesOptions}
            />
          </Col>
          <Col xs={6} className="mb-2">
            <Label htmlFor="newProject-features">Other Features</Label>
            <Select
              isDisabled
            // value={{label: "Disabled"}}
            // onChange={setNew_frequency}
            // options={frequencyOptions}
            />
          </Col>
          <Col xs={3} className="mb-2">
            <Label htmlFor="newProject-horizon">Forecast horizon</Label>
            <Select
              value={new_horizon}
              onChange={setNew_horizon}
              options={horizonOptions}
            />
          </Col>
          <Col xs={3} className="mb-2">
            <Label htmlFor="newProject-new_frequency">Dataset frequency</Label>
            <Select
              value={new_frequency}
              onChange={setNew_frequency}
              options={frequencyOptions}
            />
          </Col>
          <Col xs={12} className="mt-2">
            <h3>Summary</h3>
            <h5>Start date: {formatDate(importedData[1][0], new_timestamp_format.value)}</h5>
            <h5>End date: {formatDate(importedData[importedData.length-1][0], new_timestamp_format.value)}</h5>
            <h5>Number of variables: {new_target_names && new_target_names.length}</h5>
          </Col>
          <Col xs={12} className="my-4">
            <Button color="success" onClick={createProjectHandler} disabled={isNotComplete}>
              Create project
            </Button>
            <Button color="danger mx-4" onClick={cancelHandler}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}

CreateNewProject.defaultProps = {
  project: {
    created: "",
    label_user: "",
    target_names: null,
    timestamp_format: "DD-MM-YYYY",
    frequency: frequencyOptions[0],
    horizon: "",
    status: "",
    file_name: "",
  },
}


CreateNewProject.propTypes = {
  project: PropTypes.object.isRequired,
  cancelHandler: PropTypes.func.isRequired,
}

export default CreateNewProject
