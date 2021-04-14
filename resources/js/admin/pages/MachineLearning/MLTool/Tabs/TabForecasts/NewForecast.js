import React, { useState } from "react"
import { Card, Col, Label, Input, Row, Button, FormGroup } from "reactstrap"
import Select from "react-select"
import StatusCard from "../../common/StatusCard"
import FileUpload from "../../common/DropUpload"
import TableUIfromExcel from "components/Common/TableUIfromExcel"
import {
  timestampFormatOptions,
  algorithmOptions,
} from "../../common/defaultOptions"
import { makeOptions } from "../../../../../common/helpers"

export default function NewForecast({ closeForecastHandler }) {
  const [importedData, setImportedData] = useState([[], []])
  const [isFuture, setIsFuture] = useState(true)
  const createForecast = () => console.log("created new Forecast")

  const headRow = [...importedData][0]
  const timestampOptions = makeOptions(headRow)

  return (
    <>
      <Row>
        <Col xs={7}>
          <Card className="p-2 mb-1">
            <Row>
              <Col xs={6}>
                <Label htmlFor="Forecast-modelName" className=" col-form-Label">
                  Model Name
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id="Forecast-modelName"
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
                  // value={selectedModel}
                  // onChange={setSelectedModel}
                  options={algorithmOptions}
                />
              </Col>
              <Col xs={12} className="my-2">
                <FileUpload getData={setImportedData} />
              </Col>
              <Col xs={4}>
                <Label
                  htmlFor="horizontal-firstname-timestampForecast"
                  className=" col-form-Label"
                >
                  timestamp
                </Label>
                <Select
                  // value={selectedModel}
                  // onChange={setSelectedModel}
                  options={timestampOptions}
                />
              </Col>
              <Col xs={4}>
                <Label
                  htmlFor="horizontal-firstname-timestampFormatForecast"
                  className=" col-form-Label"
                >
                  timestamp format
                </Label>
                <Select
                  // value={selectedModel}
                  // onChange={setSelectedModel}
                  options={timestampFormatOptions}
                />
              </Col>
              <Col xs={4}>
                <Label htmlFor="Forecast-type" className="col-form-Label">
                  Forecast type
                </Label>

                <FormGroup className="form-check">
                  <Input
                    checked={isFuture}
                    onChange={() => setIsFuture(prev => !prev)}
                    className="form-check-input"
                    type="radio"
                    name="checkFuture"
                    id="checkFuture"
                    value="option2"
                  />
                  <Label className="form-check-label" htmlFor="checkFuture">
                    Future
                  </Label>
                </FormGroup>

                <FormGroup className="form-check">
                  <Input
                    checked={!isFuture}
                    onChange={() => setIsFuture(prev => !prev)}
                    className="form-check-input"
                    type="radio"
                    name="checkTest"
                    id="checkTest"
                    value="option2"
                  />
                  <Label className="form-check-label" htmlFor="checkTest">
                    Test
                  </Label>
                </FormGroup>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs={5}>
          <StatusCard />
        </Col>
      </Row>

      <Col xs={12} className="overflow-auto" style={{ maxHeight: 300 }}>
        <TableUIfromExcel rows={importedData} />
      </Col>

      <Col xs={12} className="my-4">
        <Button color="success" onClick={createForecast}>
          Create Forecast
        </Button>
        <Button color="danger mx-4" onClick={() => closeForecastHandler(false)}>
          Cancel
        </Button>
      </Col>
    </>
  )
}
