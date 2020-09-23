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
      target: [],
      targets: [],
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

  receiveStatsFromPusher() {
    channel.bind('bar-stats', data => {
      console.log(data);
      this.setState({
        data
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
    })

  }

  receiveImgFromPusher() {
    channel.bind('gallery', data => {
      this.setState({
        images: [data.image, ...this.state.images],
      });
      this.setState(() => {
        this.state.targets.push([Object.values(data)[0].id,...this.state.data]);
      });
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
            <div className="col-sm-2 imageContainer">
              <p className="imgTitle">TARGETS</p>
              {images}
              <img className="photo" src="http://res.cloudinary.com/dtmjpfpip/image/upload/v1599914558/ex7todyv7i69cytunphw.jpg" />
              <img className="photo" src="http://res.cloudinary.com/dtmjpfpip/image/upload/v1599914558/e8l3xffokh6ie9foy0pn.jpg" />
              <img className="photo" src="http://res.cloudinary.com/dtmjpfpip/image/upload/v1599914558/jnpali1c5dduakq0b8rl.jpg" />
              <img className="photo" src="http://res.cloudinary.com/dtmjpfpip/image/upload/v1599914558/ex7todyv7i69cytunphw.jpg" />

            </div>
            <div className="col-8 col-sm-6 videoContainer">
              <iframe width="720" height="570" src="https://www.youtube.com/embed/K-bqg8JYlPo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="col-4 lineContainer">
              <Tabs
                id="controlled-tab-example"
                
                activeKey={this.state.key}
                onSelect={(k) => this.setState({ key: k })}
              >
                <Tab eventKey="chart1" title="Chart 1">
                  <div className="line">
                    <LineChart data={this.state.lineTemp} time={this.state.time} title="Temperature Overtime" color="rgb(106, 90, 205)" unit="unit"/>
                    <LineChart data={this.state.linePressure} time={this.state.time} title="Pressure Overtime" color="rgb(255, 165, 0)" unit="unit" />
                    <LineChart data={this.state.lineHumid} time={this.state.time} title="Humidity Overtime" color="rgb(255, 0, 0)" unit="unit" />
                  </div>
                </Tab>
                <Tab eventKey="chart2" title="Chart 2">
                  <div className="line">
                    <LineChart data={this.state.lineLight} time={this.state.time} title="Light Overtime" color="rgb(0,255,159)" unit="unit"/>
                    <LineChart data={this.state.lineNoise} time={this.state.time} title="Noise Overtime" color="rgb(0,184,255)" unit="unit"/>
                    <LineChart data={this.state.lineGas} time={this.state.time} title="Gas Overtime" color="rgb(0,30,100)" unit="unit" />
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>

          <div className="row rw2">
            <div className="col tableContainer">
              <Table data={this.state.targets} />
            </div>
            <div className="col wf2">
              <div className="col bar">
                <BarChart data={this.state.data} />
              </div>
            </div>
            <div className="col wf2"></div>
          </div>
        </main>
      </Layout >
    );
  }

}
