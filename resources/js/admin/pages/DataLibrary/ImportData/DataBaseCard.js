import React, { useState } from "react"
import { Row, Col, Card, Table, CardText, Button, Label } from "reactstrap"
import Select from "react-select"

const dataApi = [
  { id: "data1", name: "SIP", type: "index" },
  { id: "data2", name: "Dics", type: "signal" },
  { id: "data3", name: "Limp", type: "index" },
  { id: "data4", name: "OPrp", type: "signal" },
  { id: "data5", name: "SIP", type: "signal" },
  { id: "data6", name: "COSt", type: "index" },
  { id: "data7", name: "SSQ", type: "index" },
]

export default function DataBaseCard() {
  const [selected, setSelected] = useState(null)
  const [data, setData] = useState(dataApi)
  const options = [...data].reduce((arr, v) => {
    const acc = {}
    acc.label = v.name
    acc.value = v.id
    arr.push(acc)
    return arr
  }, [])

  const deleteHandler = () => {
    const newData = [...data].filter(v => v.id !== selected.value)
    setData(newData)
    setSelected(null)
  }

  return (
    <Card body>
      <CardText>Database</CardText>
      <Row className="justify-content-around">
        <Col xs={6}>
          <Table
            className="table-bordered mb-0"
            style={{ textAlign: "center" }}
          >
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ id, name, type }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{type}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col xs={4}>
          <div className="mb-3">
            <Label>Select item to delete</Label>
            <Select
              value={selected}
              onChange={setSelected}
              options={options}
              classNamePrefix="select2-selection"
            />
          </div>
          {selected && (
            <Button
              onClick={deleteHandler}
              color="light"
              className="btn btn-light waves-effect mt-4"
            >
              Delete from SQL
            </Button>
          )}
        </Col>
      </Row>
    </Card>
  )
}
