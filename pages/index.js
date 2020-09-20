import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import Layout from '../components/Layout';
import BarChart from '../components/Bar';
import Table from '../components/Table';
import LineChart from '../components/Line';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

var pusher = new Pusher('83d7f0044a58bb41c86c', {
  cluster: "ap4",
  encrypted: true
});
const channel = pusher.subscribe('demo-stats');

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      images: [],
      targetA: [],
      targetB: [],
      targetC: [],
      lineTemp: [],
      linePressure: [],
      lineHumid: [],
      lineLight: [],
      lineNoise: [],
      lineGas: [],
      time: [],
      key: 'chart1'
    }
  }

  componentDidMount() {
    this.receiveStatsFromPusher()
    this.receiveImgFromPusher();
  }

  // componentWillUnmount() {
  //   this.abortController.abort();
  // }

  receiveStatsFromPusher() {
    channel.bind('bar-stats', data => {
      console.log(data);
      this.setState({
        data
        // time: [...[2, this.state.lineTemp.length + 1]]
      })
      this.setState(() => {
        this.state.lineTemp.push(data[0]);
        this.state.linePressure.push(data[1]);
        this.state.lineHumid.push(data[2]);
        this.state.lineLight.push(data[3]);
        this.state.lineNoise.push(data[4]);
        this.state.lineGas.push(data[5]);
        this.state.time.push((new Date).toTimeString().substring(0, 8));
      })
      console.log("lineTemp : " + this.state.lineTemp);
      console.log("time : " + this.state.time);
    })

  }

  receiveImgFromPusher() {
    channel.bind('gallery', data => {
      this.setState({
        images: [data.image, ...this.state.images],
      });
      if (Object.values(data)[0].id == 1) {
        this.setState({ targetA: [...this.state.data] });
      } else if (Object.values(data)[0].id == 2) {
        this.setState({ targetB: [...this.state.data] });
      } else {
        this.setState({ targetC: [...this.state.data] });
      }
    });
  }

  render() {
    const image = (url, index) => (
      <img alt="" className="photo" key={`image-${index} }`} src={url} />
    );
    const images = this.state.images.map((e, i) => image(e.secure_url, i));

    return (
      <Layout pageTitle="Realtime Data Visualization">
        <main className="container-fluid wf">

          <div className="row rw1">
            <div className="col-sm-2 gallery">
              Image Stream
              {images}
              {/* <img src="http://res.cloudinary.com/dtmjpfpip/image/upload/v1599914558/pxa7wzqdlznqzdi3tof4.jpg" /> */}
            </div>
            <div className="col-8 col-sm-6 wf">Video Stream</div>
            <div className="col wf">
            <Tabs
                id="controlled-tab-example"
                activeKey={this.state.key}
                onSelect={(k) => this.setState({ key: k })}
              >
                <Tab eventKey="chart1" title="Chart 1">
                  <LineChart data={this.state.lineTemp} time={this.state.time} title="Temperature Overtime" />
                  <LineChart data={this.state.linePressure} time={this.state.time} title="Pressure Overtime" />
                  <LineChart data={this.state.lineHumid} time={this.state.time} title="Humidity Overtime" />
                </Tab>
                <Tab eventKey="chart2" title="Chart 2">
                  <LineChart data={this.state.lineLight} time={this.state.time} title="Light Overtime" />
                  <LineChart data={this.state.lineNoise} time={this.state.time} title="Noise Overtime" />
                  <LineChart data={this.state.lineGas} time={this.state.time} title="Gas Overtime" />
                </Tab>
              </Tabs>
            </div>
          </div>

          <div className="row rw2">
            <div className="col wf">
              <Table a={this.state.targetA} b={this.state.targetB} c={this.state.targetC} />
            </div>
            <div className="col wf">
              <BarChart data={this.state.data} />
            </div>
            <div className="col wf"></div>
          </div>
        </main>
      </Layout >
    );
  }

}
