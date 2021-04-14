import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Card, Col, Row, Button } from "reactstrap"
import Select from "react-select"
import { connect } from "react-redux"
import { useDispatch } from "react-redux"
import ReactEcharts from "echarts-for-react"
import { MDBDataTable } from "mdbreact"
import NewModel from "./NewModel"
import MetricsTable from "./MetricsTable"
import { loadModels } from "store/actions"

const dataApiModels = {
  11: {
    created: "2021-03-23 17:16:31",
    model_name: "Model 10 FC & Marco",
    status: "active",
    project_name: "Custom Project Name 412124",
    training_time: 845,
    file_name: "dataserier.csv",
    metrics: {
      Window: ["SUMMARY", "COMPUTED"],
      WAPE: [0.1017, 0.1017],
      RMSE: [1046.4032, 1046.4032],
      "WQL-0.9": [0.0889, 0.0889],
      "WQL-0.1": [0.0308, 0.0308],
      TWS: ["YYYY-MM-DD-TWS", "YYYY-MM-DD-TWS"],
      TWE: ["YYYY-MM-DD", "YYYY-MM-DD"],
    },
  },
  12: {
    created: "2021-03-23 17:16:31",
    model_name: "Model Name 2",
    status: "active",
    project_name: "Custom Project Name 0941",
    training_time: 245,
    file_name: "dataserier.csv",
    metrics: {
      Window: ["SUMMARY", "COMPUTED"],
      WAPE: [0.1017, 0.147],
      RMSE: [1046.4032, 456.4132],
      "WQL-0.9": [0.0789, 0.0129],
      "WQL-0.1": [0.0908, 0.0358],
      TWS: ["YYYY-MM-DD-TWS", "YYYY-MM-DD-TWS"],
      TWE: ["YYYY-MM-DD", "YYYY-MM-DD"],
    },
  },
}

const data = {
  columns: [
    {
      label: "Model name",
      field: "model_name",
      sort: "asc",
      width: 100,
    },
    {
      label: "Creation time",
      field: "created",
      sort: "asc",
      width: 100,
    },
    {
      label: "Status",
      field: "status",
      sort: "asc",
      width: 100,
    },
    {
      label: "Project name",
      field: "project_name",
      sort: "asc",
      width: 100,
    },
    {
      label: "File name",
      field: "file_name",
      sort: "asc",
      width: 100,
    },
    {
      label: "Training time",
      field: "training_time",
      sort: "asc",
      width: 100,
    },
  ],
  rows: [dataApiModels[11], dataApiModels[12]],
}

const getOption = () => {
  return {
    tooltip: {
      trigger: "axis",
      show: false,
    },
    toolbox: {
      show: false,
    },
    grid: {
      zlevel: 0,
      x: 50,
      x2: 50,
      y: 30,
      y2: 30,
      borderWidth: 0,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "rgba(0,0,0,0)",
    },
    xAxis: {
      axisLine: {
        lineStyle: {
          color: "#74788d",
        },
      },
    },
    yAxis: {
      axisLine: {
        lineStyle: {
          color: "#74788d",
        },
      },
    },
    series: [
      {
        symbolSize: 10,
        data: [
          [10.0, 8.04],
          [8.0, 6.95],
          [13.0, 7.58],
          [9.0, 8.81],
          [11.0, 8.33],
          [14.0, 9.96],
          [6.0, 7.24],
          [4.0, 4.26],
          [12.0, 10.84],
          [7.0, 4.82],
          [5.0, 5.68],
        ],
        type: "scatter",
      },
    ],
    color: ["#3c4ccf"],
  }
}

function TabModels({ models }) {
  const dispatch = useDispatch()
  const [createNewModel, setCreateNewModel] = useState(false)
  const [activeModel, setActiveModel] = useState(0)
  const dataApi = Object.values(dataApiModels)
  const currentModel = dataApi[activeModel]

  useEffect(() => dispatch(loadModels()), [])

  const modelOptions = dataApi.reduce((arr, v, i) => {
    const acc = {}
    acc.label = v.model_name
    acc.value = i
    arr.push(acc)
    return arr
  }, [])

  const modelHandler = ({ value }) => setActiveModel(value)

  return (
    <Row className="justify-content-start">
      <MDBDataTable responsive bordered data={data} />
      <Select
        value={modelOptions[activeModel]}
        onChange={modelHandler}
        options={modelOptions}
        className="col-4 mx-1"
      />
      <Row>
        <Col xs={12} lg={7}>
          <h5 className="my-3">Model name: {currentModel.model_name}</h5>
          <h5 className="mb-2">Algorithm: Arima</h5>
          <Card className="p-2">
            <p>
              <strong>Trained for: </strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              rutrum at magna vel sodales. In rhoncus elit ac mi fermentum, eu
              tempus eros rhoncus. Praesent tempor odio ut pellentesque aliquam.
              Mauris vel cursus risus, a tincidunt sapien. Duis tempor ligula
              quis risus vehicula eleifend. Maecenas a purus erat. Maecenas at
              iaculis
            </p>
            <p>
              <strong>Horizon: </strong>20 D
            </p>

            <MetricsTable metrics={currentModel.metrics} />
          </Card>
        </Col>
        <Col xs={12} lg={5}>
          <ReactEcharts style={{ height: "350px" }} option={getOption()} />
        </Col>
      </Row>
      <Col xs={5} className="mb-4">
        <Button onClick={() => setCreateNewModel(true)} color="success">
          New Model
        </Button>
      </Col>
      {createNewModel && <NewModel closeModelHandler={setCreateNewModel} />}
    </Row>
  )
}


TabModels.propTypes = {}

const mapStateToProps = state => state.Models

export default connect(mapStateToProps, { loadModels })(TabModels)
