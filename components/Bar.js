import React from 'react';
import { Bar } from 'react-chartjs-2'

export default class BarChart extends React.Component {
    render() {
        // console.log(this.props.data);
        const parseData = data => ({
            labels: ['Temperature', 'Pressure', 'Humidity', 'Light', 'Noise', 'Gas'],
            datasets: [
                {
                    label: 'Bar Chart',
                    backgroundColor: [
                        'rgba(255,99,132,0,2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,0,2)',
                    ],
                    borderWidth: 5,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data
                }
            ]
        })

        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            maintainAspectRatio: false
        }
        
        return (
            <Bar
                data={parseData(this.props.data)}
                option={options}
            />
        )
    }
}
