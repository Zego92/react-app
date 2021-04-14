import React from "react"
import {Card, CardBody} from "reactstrap"

import ReactApexChart from "react-apexcharts"

const Chart = ({data}) => {
    console.log(data);
    const state = {
        series: [
            {
                name: "DJI",
                data: data.map(item => item.DJI)
            },
            {
                name: "FTSE",
                data: data.map(item => item.FTSE)
            }
        ],
        options: {
            chart: {
                height: 600,
                type: 'line',
                zoom: {
                    type: 'x',
                    enabled: true,
                    autoScaleYaxis: true
                },
                toolbar: {
                    autoSelected: 'zoom'
                }
            },
            colors: ['#f00', '#00792b'],
            stroke: {
                curve: 'smooth',
            },
            title: {
                text: 'DJI & FTSE',
                align: 'left'
            },
            grid: {
                borderColor: '#e7e7e7',
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: data.map(item => item.Date),
                title: {
                    text: 'Date'
                },
                type: 'datetime',
            },
            yaxis: {
                title: {
                    text: 'Tickers'
                },
                labels: {
                    formatter: function (value) {
                        return value.toFixed(2);
                    }
                },
            },
        },
    }
    return <React.Fragment>
        <Card>
            <CardBody>
                <div id="line-chart" dir="ltr">
                    <ReactApexChart
                        series={state.series}
                        options={state.options}
                        type={state.options.chart.type}
                        height={state.options.chart.height}
                        className="apex-charts"
                    />
                </div>
            </CardBody>
        </Card>
    </React.Fragment>
}
export default Chart
