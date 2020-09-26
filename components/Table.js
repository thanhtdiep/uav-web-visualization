import React from 'react';
import uuid from 'uuid';

export default class Table extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>TARGET</th>
                        <th>TEMPERATURE (Celsius)</th>
                        <th>PRESSURE (hPa)</th>
                        <th>HUMIDITY (%)</th>
                        <th>LIGHT (Lux)</th>
                        <th>NOISE (dB)</th>
                        <th>REDUCING (ppm)</th>
                        <th>OXIDIZING (ppm)</th>
                        <th>NH3 (ppm)</th>
                        <th>PM1 (µg/m3)</th>
                        <th>PM2.5 (µg/m3)</th>
                        <th>PM10 (µg/m3)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data != null ? this.props.data.map(element => (
                        <tr key={uuid.v4()}>
                            <td key={uuid.v4()}>{element[0]}</td>
                            <td key={uuid.v4()}>{element[1]}</td>
                            <td key={uuid.v4()}>{element[2]}</td>
                            <td key={uuid.v4()}>{element[3]}</td>
                            <td key={uuid.v4()}>{element[4]}</td>
                            <td key={uuid.v4()}>{element[5]}</td>
                            <td key={uuid.v4()}>{element[6]}</td>
                            <td key={uuid.v4()}>{element[7]}</td>
                            <td key={uuid.v4()}>{element[8]}</td>
                            <td key={uuid.v4()}>{element[9]}</td>
                            <td key={uuid.v4()}>{element[10]}</td>
                            <td key={uuid.v4()}>{element[11]}</td>
                        </tr>
                    )) : <tr></tr>}
                </tbody>
            </table>
        );
    }
}