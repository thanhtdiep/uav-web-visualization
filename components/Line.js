import React from 'react';
import { Line } from 'react-chartjs-2';

export default class LineChart extends React.Component {
    render() {
        const parseData = (data, time) => ({
            labels: time,
            datasets: [{
                label: this.props.unit,
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: this.props.color,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: this.props.color,
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                spanGaps: false,
                data
            }]
        })
        return (
            <Line
                data={parseData(Object.values(this.props.data), this.props.time)}
                options= {{
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            fontColor: 'rgb(165, 165, 165)',
                            fontColor: 'white',
                            fontFamily: 'Roboto Mono',
                        }
                    },
                    title: {
                        display: true,
                        fontColor: 'white',
                        fontFamily: 'Roboto Mono',
                        text: this.props.title,
                        fontSize: 14,
                        fontStyle: 'regular'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontFamily: 'Roboto Mono',
                                fontColor: 'rgb(165, 165, 165)'
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontFamily: 'Roboto Mono',
                                fontColor:  'rgb(165, 165, 165)'
                            }
                        }]
                    }
                }}
            />
        )
    }
}