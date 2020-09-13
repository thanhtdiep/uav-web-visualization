
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import Layout from '../components/Layout';
import BarChart from '../components/Bar';
import Table from '../components/Table';

var pusher = new Pusher('83d7f0044a58bb41c86c', {
  cluster: "ap4",
  encrypted: true
});
const channel = pusher.subscribe('demo-stats');

export default class IndexPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [2, 2, 2, 2, 2, 2],
      images: [],
      targetA: [],
      targetB: [],
      targetC: [],
      lineTemp: [],
      linePressure: [],
      lineHumid: [],
      lineLight: [],
      lineNoise: [],
      lineGas: []
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
    })
    console.log(this.state.data);
  } 

  receiveImgFromPusher() {
    channel.bind('gallery', data => {
      this.setState({
        images: [data.image, ...this.state.images],
      });
      if (data.id === 1) {
        this.setState({targetA: [...this.state.data]});
      } else if (data.id === 2) {
        this.setState({targetB: [...this.state.data]});
      } else {
        this.setState({targetC: [...this.state.data]});
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
              <img src="http://res.cloudinary.com/dtmjpfpip/image/upload/v1599914558/pxa7wzqdlznqzdi3tof4.jpg" />
              <img src="http://res.cloudinary.com/dtmjpfpip/image/upload/v1599914558/pxa7wzqdlznqzdi3tof4.jpg" />
              <img src="http://res.cloudinary.com/dtmjpfpip/image/upload/v1599914558/pxa7wzqdlznqzdi3tof4.jpg" />
            </div>
            <div className="col-8 col-sm-6 wf">Video Stream</div>
            <div className="col wf">Graphs</div>
          </div>

          <div className="row rw2">
            <div className="col wf">
              Table
              <Table a={this.state.targetA} b={this.state.targetB} c={this.state.targetC} />
            </div>
            <div className="col wf">Bar Chart
              <BarChart data={this.state.data}/>
            </div>
            <div className="col wf">Graph</div>
          </div>
        </main>
      </Layout>
    );
  }

}
