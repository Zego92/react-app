import React, { Component } from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
// import { Link } from "react-router-dom"

import ReactApexChart from "react-apexcharts"

class Earning extends Component {
  constructor(props) {
    super(props)
    this.state = {
      series: [
        {
          name: "series1",
          data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76],
        },
      ],
      options: {
        chart: {
          toolbar: "false",
          dropShadow: {
            enabled: !0,
            color: "#000",
            top: 18,
            left: 7,
            blur: 8,
            opacity: 0.2,
          },
        },
        dataLabels: {
          enabled: !1,
        },
        colors: ["#556ee6"],
        stroke: {
          curve: "smooth",
          width: 3,
        },
      },
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <div id="line-chart" dir="ltr">
              <ReactApexChart
                series={this.state.series}
                options={this.state.options}
                type="line"
                height={this.props.height}
                className="apex-charts"
              />
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
Earning.defaultProps = {
  height: 320,
}
export default Earning
