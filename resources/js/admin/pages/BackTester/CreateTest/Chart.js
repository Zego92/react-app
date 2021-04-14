import React from "react"
import {Card, CardBody} from "reactstrap"

import ReactApexChart from "react-apexcharts"

const Chart = ({data}) => {
    let arrNames = [];
    for (let key in data[0]) {
        if (key !== "Date") {
            arrNames.push(key)
        }
    }
    const colors = ['#f00', '#00792b'];
    const series = arrNames.map(item => {
        return {
            name: item,
            data: data.map(obj => obj[item])
        }
    })

    const options = {
        chart: {
            height: 400,
            type: 'line',
            group: 'social',
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        colors: ['#f00'],
        stroke: {
            curve: 'smooth',
        },
        title: {
            text: '',
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
            // title: {
            //     text: 'Date'
            // },
            type: 'datetime',
        },
        yaxis: {
            // title: {
            //     text: 'Tickers'
            // },
            labels: {
                formatter: function (value) {
                    return value.toFixed(2);
                }
            },
        },
    }
    return <React.Fragment>
        <div id="wrapper">
            {
                series.map((item, index) => {
                    options.colors = [colors[index % 2]];
                    options.title = {
                        text: arrNames[index],
                        align: 'left'
                    };
                    return <div id={`line-chart${index}`} key={index} dir="ltr">
                        <ReactApexChart
                            series={[item]}
                            options={Object.assign({}, options)}
                            type={options.chart.type}
                            height={options.chart.height}
                            // className="apex-charts"
                        />
                    </div>
                })
            }
        </div>
    </React.Fragment>
}
export default Chart
