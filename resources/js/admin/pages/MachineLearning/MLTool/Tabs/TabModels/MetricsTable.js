import React from "react"
import PropTypes from "prop-types"
import { Table } from "reactstrap"

 function MetricsTable({ metrics }) {
  const tableHead = Object.keys(metrics)
  const listValues = Object.values(metrics)

  const tableBody = listValues[0].map((_, index) => {
    const temp = []
    for (let i = 0; i < listValues.length; i++) {
      temp.push(listValues[i][index])
    }
    return temp
  })

  const tableHeadRender = tableHead.map(head => <th key={head}>{head}</th>)
  const tableBodyRender = tableBody.map((row, i) => (
    <tr key={row + i}>
      {row.map(v => (
        <td key={v}>{v}</td>
      ))}
    </tr>
  ))

  return (
    <Table className="table-sm mb-0">
      <thead>
        <tr>{tableHeadRender}</tr>
      </thead>
      <tbody>{tableBodyRender}</tbody>
    </Table>
  )
}


MetricsTable.propTypes = {
  metrics: PropTypes.object.isRequired,
}

export default MetricsTable;