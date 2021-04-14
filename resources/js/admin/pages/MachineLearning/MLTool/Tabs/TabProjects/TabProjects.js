import React, { useState, useEffect } from "react"
import "../../common/datatables.scss"
import { Card, Col, Row, Button } from "reactstrap"
import { connect } from "react-redux"

import { useDispatch } from "react-redux"
import Select from "react-select"
import { MDBDataTable } from "mdbreact"
import CreateNewProject from "./CreateNewProject"
import { loadProjects } from "store/actions"
import projectApi from '../../../../../common/data/dataApi'
import { makeProjectOptions } from '../../../../../common/helpers'

const data = {
  columns: [
    {
      label: "Project Name",
      field: "label_user",
      sort: "asc",
      width: 150,
    },
    {
      label: "Creation time",
      field: "created",
      sort: "asc",
      width: 100,
    },
    {
      label: "Import job status",
      field: "status",
      sort: "asc",
      width: 100,
    },
    {
      label: "File name",
      field: "file_name",
      sort: "asc",
      width: 150,
    },
    {
      label: "Target names",
      field: "target_names",
      sort: "asc",
      width: 100,
    },
    {
      label: "Timestamp format",
      field: "timestamp_format",
      sort: "asc",
      width: 100,
    },
    {
      label: "Frequency",
      field: "frequency",
      sort: "asc",
      width: 50,
    },
    {
      label: "Horizon",
      field: "horizon",
      sort: "asc",
      width: 50,
    },
  ],
  rows: [projectApi[12], projectApi[11]],
}

function TabProjects({ projects }) {
  const dispatch = useDispatch()
  const [currentProject, setCurrentProject] = useState()
  const [createNew, setCreateNew] = useState(false)
  const [duplicateProject, setDuplicateProject] = useState(false)

  useEffect(() => dispatch(loadProjects()), [])

  const options = makeProjectOptions(Object.values(projectApi))

  const newProjectClicker = () => {
    setCreateNew(true)
    setDuplicateProject(false)
  }
  const newDuplicateClicker = () => {
    setDuplicateProject(true)
    setCreateNew(false)
  }

  const cancelHandler = () => {
    setDuplicateProject(false)
    setCreateNew(false)
  }

  return (
    <Row className="justify-content-start">
      <MDBDataTable responsive bordered data={data} />
      <Select
        value={currentProject}
        onChange={setCurrentProject}
        options={options}
        className="form-control-sm col-4 mx-1"
      />
      <Col xs={12}>
        <h5 className="my-2">
          Project name: {currentProject?.value.label_user}
        </h5>
        <h5 className="mt-2">Dataset targets & inputs: </h5>
      </Col>

      <Col xs={8}>
        <Card className="p-2">{currentProject?.value.target_names}</Card>
      </Col>

      <Row>
        <Col xs={2} className="mb-2">
          <Button onClick={newProjectClicker} color="success">
            New Project
          </Button>
        </Col>

        <Col xs={2} className="mb-2">
          <Button
            onClick={newDuplicateClicker}
            color="success"
            disabled={!currentProject?.value}
          >
            Duplicate
          </Button>
        </Col>
      </Row>

      {createNew && <CreateNewProject cancelHandler={cancelHandler} />}
      {duplicateProject && (
        <CreateNewProject
          project={currentProject.value}
          cancelHandler={cancelHandler}
        />
      )}
    </Row>
  )
}

const mapStateToProps = state => state.Projects

export default connect(mapStateToProps, { loadProjects })(TabProjects)
