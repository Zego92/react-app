import React from "react"
import PropTypes from "prop-types"
import { Table } from "reactstrap"
import { formatDate } from '../../common/helpers'

function TableUIfromExcel({ rows }) {
  const renderTd = (row, indexRow) => {
    if (indexRow > 0) {
      return row.map((v, i) => {
        let item = i === 0 ? formatDate(v, "DD-MM-YYYY") : v

        return <td key={rows[0][i] + "-" + v + "-" + i}>{item}</td>
      })
    }
  }

  return (
    <Table className="table-bordered mb-0 my-3" style={{ textAlign: "center" }}>
      <thead>
        <tr>
          {rows[0].map((v, index) => (
            <th key={v + index}>{v}</th>
          ))}
        </tr>
      </thead>
      <tbody style={{ textAlign: "center" }}>
        {rows.map((row, indexRow) => (
          <tr key={"tr-" + row + "-" + indexRow}>{renderTd(row, indexRow)}</tr>
        ))}
      </tbody>
    </Table>
  )
}

TableUIfromExcel.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.array).isRequired,
}

export default TableUIfromExcel
