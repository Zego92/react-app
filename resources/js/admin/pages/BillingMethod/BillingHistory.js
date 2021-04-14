import React from "react"
import { Row, Col, Card, CardBody, CardTitle, Table } from "reactstrap"
import BillingHistoryRow from "./BillingHistoryRow"

const history = [
  {
    id: "h1",
    date: "13/02/2021",
    cardType: "visa",
    cardNum: "2479",
    sum: "75",
    status: "paid",
  },
  {
    id: "h2",
    date: "19/01/2021",
    cardType: "masterCard",
    cardNum: "1094",
    sum: "523",
    status: "unpaid",
  },
  {
    id: "h3",
    date: "27/09/2020",
    cardType: "visa",
    cardNum: "9145",
    sum: "151",
    status: "paid",
  },
]

export default function BillingHistory() {
  return (
    <>
      <h3>Billing History</h3>
      <Row className="mt-4">
        <Col xs={7} className="mb-4 mt-4">
          <Card>
            <CardBody>
              <div className="table-responsive">
                <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Card №</th>
                      <th>Sum</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((row, i) => (
                      <BillingHistoryRow key={i} row={row} />
                    ))}
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}
