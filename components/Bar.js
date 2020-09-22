import React from 'react';
import { Bar } from 'react-chartjs-2'

export default class BarChart extends React.Component {
    render() {
        const parseData = data => ({
            labels: ['Temperature', 'Pressure', 'Humidity', 'Light', 'Noise', 'Gas'],
            datasets: [
                {
                    label: 'Current Status of sensors',
                    backgroundColor: [
                        'rgb(0,255,159)',
                        'rgb(0,184,255)',
                        'rgb(0,30,255)',
                        'rgb(106, 90, 205)',
                        'rgb(255, 165, 0)',
                        'rgb(0, 0, 0)'
                    ],
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
        }

        return (
            <Bar
                data={parseData(this.props.data)}
                options={options}
            />
        )
    }
}
