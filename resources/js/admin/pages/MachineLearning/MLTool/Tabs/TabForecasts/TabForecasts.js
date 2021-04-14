import React, { useState } from "react"
import {
  Card,
  Col,
  Label,
  Input,
  Row,
  Table,
  Button,
  FormGroup,
} from "reactstrap"
import Select from "react-select"
import ReactEcharts from "echarts-for-react"
import { MDBDataTable } from "mdbreact"
import Earning from "pages/Dashboard/Earning"
import StatusCard from "../../common/StatusCard"
import FileUpload from "../../common/DropUpload"
import TableUIfromExcel from "components/Common/TableUIfromExcel"
import {
  timestampFormatOptions,
  algorithmOptions,
} from "../../common/defaultOptions"
import NewForecast from "./NewForecast"

const dataApi = {
  user_id: {
    forecast_name: "my-forecast-name",
    status: "active",
  },
  forecast_id: {
    created: "created",
    forecast_name: "my-forecast-name",
    forecast_status: "active",
    forecast_type: "future",
    model_name: "my-model-name",
    project_name: "my-project-name",
  },
}

const data = {
  columns: [
    {
      label: "Forecast name",
      field: "forecast_name",
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
      field: "forecast_status",
      sort: "asc",
      width: 100,
    },
    {
      label: "Model name",
      field: "model_name",
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
      label: "type",
      field: "forecast_type",
      sort: "asc",
      width: 100,
    },
  ],
  rows: [dataApi.forecast_id],
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

export default function TabForecasts() {
  const [newForecast, setNewForecast] = useState(false)
  return (
    <Row className="justify-content-start align-items-center">
      <MDBDataTable responsive bordered data={data} />

      <Col xs={12} md={7}>
        <h5 className="my-3">Model name: Model 10 FC & Marco</h5>
        <h5 className="mb-2">Algorithm: Arima</h5>
      </Col>
      <Col xs={12}>
        <Earning />
      </Col>
      <Col xs={7}>
        <ReactEcharts style={{ height: "350px" }} option={getOption()} />
      </Col>
      <Col xs={5}>
        <Card body>
          <h5 className="mt-2">
            <strong>Target: </strong> sp500_index
          </h5>
          <h5 className="mt-2">
            <strong>Wape: </strong> 0.00124778126412
          </h5>
          <h5 className="mt-2">
            <strong>RMSE: </strong> 28.47178246712
          </h5>
          <h5 className="mt-2">
            <strong>R2: </strong> 0.128479271212
          </h5>
        </Card>
      </Col>

      <Col xs={4} className="my-4">
        <Button onClick={() => setNewForecast(true)} color="success">
          New Forecast
        </Button>
      </Col>

      {newForecast && <NewForecast closeForecastHandler={setNewForecast} />}
    </Row>
  )
}
