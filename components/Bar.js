import React from 'react';
import { Bar } from 'react-chartjs-2'

export default class BarChart extends React.Component {
    render() {
        const parseData = data => ({
            labels: this.props.labels,
            datasets: [
                {
                    label: 'Current Status of sensors',
                    backgroundColor: this.props.color,
                    borderColor: [
                        'rgba(0, 0, 0, 0.1)'
                    ],
                    borderWidth: 5,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data
                }
            ]
        })

        const options = {
            maintainAspectRatio: false,
            legend: {
                display: false,
                labels: {
                    fontColor: 'rgb(165, 165, 165)'
                }
            },
            title: {
                display: true,
                fontColor: 'white',
                fontFamily: 'Roboto Mono',
                text: 'Current status of sensors',
                fontSize: 13,
                fontStyle: 'normal'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        stepSize: 50,
                        beginAtZero: true,
                        fontFamily: 'Roboto Mono',
                        fontColor: 'rgb(165, 165, 165)'
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontFamily: 'Roboto Mono',
                        fontColor: 'rgb(165, 165, 165)'
                    }
                }]
            }
        }

        return (
            <Bar
                data={parseData(this.props.data)}
                options={options}
            />
        )
    }
}
