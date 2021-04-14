import React from "react"
import PropTypes from "prop-types"
import { Button } from "reactstrap"
 
function BillingHistory({ row }) {
  const { id, date, cardType, cardNum, sum, status } = row;

  const card = () => {
    if (cardType === "visa") {
      return (
        <div style={{ display: "flex" }}>
          <i
            className="bx bxl-visa"
            style={{ fontSize: 24, paddingRight: 10, boxSizing: "border-box" }}
          />
          <p> {cardNum}</p>
        </div>
      )
    }

    return (
      <div style={{ display: "flex" }}>
        <i
          className="bx bxl-mastercard"
          style={{ fontSize: 24, paddingRight: 10, boxSizing: "border-box" }}
        />
        {cardNum}
      </div>
    )
  }

  return (
    <tr key={id}>
      <td>{date}</td>
      <td>{card()}</td>
      <td style={{ color: status === "paid" ? "green" : "red" }}>${sum}</td>
      <td style={{ color: status === "paid" ? "green" : "red" }}>{status}</td>
      <td>
        <Button outline className="btn-sm">
          <i className="bx bx-download" />
        </Button>
      </td>
    </tr>
  )
}

BillingHistory.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.string,
    date: PropTypes.string,
    cardType: PropTypes.string,
    cardNum: PropTypes.string,
    sum: PropTypes.string,
    status: PropTypes.string,
  })
}

export default BillingHistory
