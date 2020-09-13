import React from 'react';

export default class Table extends React.Component {
    render() {

        return (
            <table className="table">
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
                    <tr>
                        <td>A</td>
                        {this.props.a != null ? this.props.a.map(e => (
                            <td key={e}>{e}</td>
                        )) : <td></td>}
                    </tr>
                    <tr>
                        <td>B</td>
                        {this.props.b != null ? this.props.b.map(e => (
                            <td key={e}>{e}</td>
                        )) : <td></td>}
                    </tr>
                    <tr>
                        <td>C</td>
                        {this.props.c != null ? this.props.c.map(e => (
                            <td key={e}>{e}</td>
                        )) : <td></td>}
                    </tr>
                </tbody>
            </table>
        );
    }
}