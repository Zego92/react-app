import UploadExcel from "components/Common/UploadExcel"
import React, { useState } from "react"
import { Row, Col, Card, Button, Label, Input, CardText } from "reactstrap"
import TableUI from "../../../components/Common/TableUIfromExcel"
import { fixHeadStyle } from "../../../common/helpers"
import {URL_ARKADII} from "../../BackTester/CreateTest/CreateTest";

const data = [
  [
    "Datum",
    "S&P500",
    "US 10y Yield",
    "US 5y Yield",
    "US 2y Yield",
    "US 1y Yield",
    "US 1m Yield",
    "GSCI Commodity Index",
    "Surprise Index US",
    "Surprise Index Euro Zone",
    "Surprise Index Sweden",
    "IFO Index Headline",
    "IFO Index Current Conditions",
    "IFO Index Business Expecations",
    "ISM Manufacturing Index",
    "ISM Manufacturing New Orders",
    "PMI Manufacturing Sweden Silf/Swedbank",
    "Fed Total Assets",
    "ECB Total Assets",
    "M1 Money Supply Euro Zone YoY",
    "M2 Money Supply US YoY",
    "M1 Money Supply US YoY",
    "M2 Money Supply US ",
    "M1 Money Supply US ",
    "Home Builders Index US",
    "Industrial Production US YoY",
    "Conference Board Leading Economic Index ",
    "Philadelphia Federal",
    " General Business Activity",
  ],
  [
    "40470",
    "1165.9",
    "2.48",
    "1.1",
    "0.36",
    "0.22",
    "0.14",
    "4379.85",
    "4.9",
    "55",
    "51.8",
    "104.9",
    "101.6",
    "108.3",
    "56.9",
    "57.8",
    "62.6",
    "0.3",
    "10.5",
    "2.11",
    "0",
    "0.25",
    "1",
    "1.51",
    " 2",
    "27.72",
    "33.32",
    "44.39",
    "5.76",
  ],
  [
    "40471",
    "1165.9",
    "2.48",
    "1.1",
    "0.36",
    "0.22",
    "0.14",
    "4379.85",
    "4.9",
    "55",
    "51.8",
    "104.9",
    "101.6",
    "108.3",
    "56.9",
    "57.8",
    "62.6",
    "0.3",
    "10.5",
    "2.11",
    "0",
    "0.25",
    "1",
    "1.51",
    " 2",
    "27.72",
    "33.32",
    "44.39",
    "5.76",
  ],
  [
    "40472",
    "1165.9",
    "2.48",
    "1.1",
    "0.36",
    "0.22",
    "0.14",
    "4379.85",
    "4.9",
    "55",
    "51.8",
    "104.9",
    "101.6",
    "108.3",
    "56.9",
    "57.8",
    "62.6",
    "0.3",
    "10.5",
    "2.11",
    "0",
    "0.25",
    "1",
    "1.51",
    " 2",
    "27.72",
    "33.32",
    "44.39",
    "5.76",
  ],
]

const fakeData = fixHeadStyle(data)

export default function ImportCard() {
  const [importedData, setImportedData] = useState(fakeData)

  return (
    <Card body>
      <CardText>Import data</CardText>
      <Row className="justify-content-between">
        <Col xs={12} md={4} lg={4}>
          <div className="mt-3">
            <Label htmlFor="formFile" className="form-label">
              Upload xlsx
              <Button
                href={`${URL_ARKADII}:3838/nqr_dev/sample.xlsx`}
                color="link"
                className="btn btn-link waves-effect"
              >
                (sample)
              </Button>
            </Label>
            <UploadExcel getData={setImportedData} />
          </div>
          <Button color="light" className="btn btn-light waves-effect mt-4">
            Save series to database
          </Button>
        </Col>
        <Col xs={8} className="overflow-auto" style={{ maxHeight: 300 }}>
          <TableUI rows={importedData} />
        </Col>
      </Row>
    </Card>
  )
}
