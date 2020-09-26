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
      targets: [],
      lineTemp: [],
      linePressure: [],
      lineHumid: [],
      lineLight: [],
      lineNoise: [],
      lineReduce: [],
      lineOxi: [],
      lineNh3: [],
      linePm1: [],
      linePm25: [],
      linePm10: [],
      time: [],
      key: 'chart1'
    }
  }

  componentDidMount() {
    this.receiveStatsFromPusher();
    this.receiveImgFromPusher();
    this.retrieveData();
  }

  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
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
        this.state.lineReduce.push(data[5]);
        this.state.lineOxi.push(data[6]);
        this.state.lineNh3.push(data[7]);
        this.state.linePm1.push(data[8]);
        this.state.linePm25.push(data[9]);
        this.state.linePm10.push(data[10]);
        this.state.time.push((new Date).toTimeString().substring(3, 8));
      })
    })

  }

  receiveImgFromPusher() {
    channel.bind('gallery', data => {
      this.setState({
        images: [data.image, ...this.state.images],
      });
      this.setState(() => {
        this.state.targets.push([Object.values(data)[0].id, ...this.state.data]);
      });
      // Save detected targets to database
      axios.post('/update/resume', {
        image: data,
        target: [Object.values(data)[0].id, ...this.state.data]
      })
        .then(function (res) {
          console.log(res);
        })
        .catch(function (err) {
          console.log(err);
        })

      // Play alert when target detected
      // this.playAudio()
    });
  }

  async retrieveData() {
    fetch('http://localhost:8080/get/stats')
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((result) => {
        // Pass stored data into states
        this.setState({
          data: result.stats.latest,
          lineTemp: result.stats.lineTemp,
          lineHumid: result.stats.lineHumidity,
          linePressure: result.stats.lineNoise,
          lineLight: result.stats.lineLight,
          lineNoise: result.stats.lineNoise,
          lineNh3: result.stats.lineNh3,
          lineReduce: result.stats.lineReducing,
          lineOxi: result.stats.lineOxidizing,
          linePm1: result.stats.linePm1,
          linePm25: result.stats.linePm25,
          linePm10: result.stats.linePm10,
          time: result.stats.time,
          images: result.target.image,
          targets: result.target.data
        });
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: ",
          error.message
        );
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
                <Tab eventKey="chart1" title="Temperature, Pressure, Humidity">
                  <div className="line">
                    <LineChart data={this.state.lineTemp} time={this.state.time} title="Temperature Overtime" color="rgb(106, 90, 205)" unit="Celcius" />
                    <LineChart data={this.state.linePressure} time={this.state.time} title="Pressure Overtime" color="rgb(255, 165, 0)" unit="hPa" />
                    <LineChart data={this.state.lineHumid} time={this.state.time} title="Humidity Overtime" color="rgb(255, 0, 0)" unit="%" />
                  </div>
                </Tab>
                <Tab eventKey="chart2" title="Light, Noise">
                  <div className="line">
                    <LineChart data={this.state.lineLight} time={this.state.time} title="Light Overtime" color="rgb(0,255,159)" unit="Lux" />
                    <LineChart data={this.state.lineNoise} time={this.state.time} title="Noise Overtime" color="rgb(0,184,255)" unit="dB" />
                  </div>
                </Tab>
                <Tab eventKey="chart3" title="Reducing, Oxidizing, NH3">
                  <div className="line">
                    <LineChart data={this.state.lineReduce} time={this.state.time} title="Reducing Overtime" color="rgb(0,30,255)" unit="ppm" />
                    <LineChart data={this.state.lineOxi} time={this.state.time} title="Oxidizing Overtime" color="rgb(66, 228, 66)" unit="ppm" />
                    <LineChart data={this.state.lineNh3} time={this.state.time} title="NH3 Overtime" color="rgb(255, 255, 255)" unit="ppm" />
                  </div>
                </Tab>
                <Tab eventKey="chart4" title="PM1, PM2.5, PM10">
                  <div className="line">
                    <LineChart data={this.state.linePm1} time={this.state.time} title="PM1 Overtime" color="rgb(211, 144, 166)" unit="µg/m3" />
                    <LineChart data={this.state.linePm25} time={this.state.time} title="PM2.5 Overtime" color="rgb(126, 196, 255)" unit="µg/m3" />
                    <LineChart data={this.state.linePm10} time={this.state.time} title="PM10 Overtime" color="rgb(236, 104, 53)" unit="µg/m3" />
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
            <div className="col extra"></div>
            <div>
              <audio className="audio-element">
                <source src="https://res.cloudinary.com/dtmjpfpip/video/upload/v1600939155/siren_t4zvvu.mp3"></source>
              </audio>
            </div>
          </div>
        </main>
      </Layout >
    );
  }

}
