import React from "react"
import { Card, Label, Form, Progress } from "reactstrap"
import Select from "react-select"

export default function StatusCard() {
  return (
    <Card className="p-2 mb-1">
      <Form className="form-control-sm">
        <h5>
          <strong>Status: </strong> model creation
        </h5>
        <Label htmlFor="horizontal-model-Input" className="col-form-Label">
          Model name
        </Label>

        <Select
          // value={selectedModel}
          // onChange={setSelectedModel}
          // options={mlModelsoptions}
          className="form-control-sm p-0 col-6 mb-3"
          // classNamePrefix="select2-selection"
        />
        <p>Model production start: 2020-02-28 time 18:47</p>
        <p>Run time production: 47 min</p>
        <p>Srarus: Creating</p>
        <Progress color="primary" className="my-2" value={25}>
          25%
        </Progress>
      </Form>
    </Card>
  )
}
