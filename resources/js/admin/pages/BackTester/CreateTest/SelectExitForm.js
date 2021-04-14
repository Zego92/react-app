import React, { useState } from "react"
import { Col, Form, Label, Row } from "reactstrap"
import Select from "react-select"

const SelectExitForm = () => {
  const [selectedOption, setSelectedOption] = useState("")
  const [selectedOption2, setSelectedOption2] = useState("")

  const options = [
    {
      value: "Days",
      label: "Days",
      data: [
        { value: "2 days", label: "2 days" },
        { value: "3 days", label: "3 days" },
        { value: "4 days", label: "4 days" },
        { value: "5 days", label: "5 days" },
      ],
    },
    {
      value: "Weeks",
      label: "Weeks",
      data: [
        { value: "1 week", label: "1 week" },
        { value: "2 weeks", label: "2 weeks" },
        { value: "3 weeks", label: "3 weeks" },
        { value: "4 weeks", label: "4 weeks" },
      ],
    },
    {
      value: "Months",
      label: "Months",
      data: [
        { value: "1 month", label: "1 month" },
        { value: "2 months", label: "2 months" },
        { value: "3 months", label: "3 months" },
        { value: "4 months", label: "4 months" },
        { value: "5 months", label: "5 months" },
        { value: "6 months", label: "6 months" },
        { value: "7 months", label: "7 months" },
        { value: "8 months", label: "8 months" },
        { value: "9 months", label: "9 months" },
        { value: "10 months", label: "10 months" },
        { value: "11 months", label: "11 months" },
        { value: "12 months", label: "12 months" },
      ],
    },
  ]
  return (
    <Form>
      <Row className="d-flex align-items-center mb-3">
        <Col lg={6}>
          <Select
            value={selectedOption}
            options={options}
            onChange={e => {
              setSelectedOption(e)
              setSelectedOption2("")
            }}
            placeholder="Period"
            classNamePrefix="select2-selection"
          />
        </Col>
        <Col lg={6}>
          <Select
            value={selectedOption2}
            options={selectedOption.data}
            onChange={e => {
              setSelectedOption2(e)
            }}
            placeholder="Exit"
            classNamePrefix="select2-selection"
          />
        </Col>
      </Row>
    </Form>
  )
}

export default SelectExitForm
