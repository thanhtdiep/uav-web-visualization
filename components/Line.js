import React from 'react';
import { Line } from 'react-chartjs-2'

export default class LineChart extends React.Component {
    render() {
        // console.log(Object.values(this.props.data));
        // console.log(this.props.time);

        const parseData = (data, time) => ({
            labels: time,
            datasets: [{
                label: this.props.title,
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
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

        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            maintainAspectRatio: true
        }

        return (
            <Line
                data={parseData(Object.values(this.props.data), this.props.time)}
                option={options}
            />
        )
    }
}