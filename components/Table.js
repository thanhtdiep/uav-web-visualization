import React from 'react';
import uuid from 'uuid';

export default class Table extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Target</th>
                        <th>Temperature (units)</th>
                        <th>Pressure (units)</th>
                        <th>Humidity (units)</th>
                        <th>Light (units)</th>
                        <th>Noise (units)</th>
                        <th>Gas (units)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data != null ? this.props.data.map(element => (
                        <tr>
                            <td key={uuid.v4()}>{element[0]}</td>
                            <td key={uuid.v4()}>{element[1]}</td>
                            <td key={uuid.v4()}>{element[2]}</td>
                            <td key={uuid.v4()}>{element[3]}</td>
                            <td key={uuid.v4()}>{element[4]}</td>
                            <td key={uuid.v4()}>{element[5]}</td>
                            <td key={uuid.v4()}>{element[6]}</td>
                        </tr>
                    )) : <tr></tr>}
                    <tr>
                        <td>A</td>
                        <td>12</td>
                        <td>12</td>
                        <td>12</td>
                        <td>12</td>
                        <td>12</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                        <td>42</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}