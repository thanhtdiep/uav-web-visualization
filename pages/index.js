import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import Layout from '../components/Layout';
import BarChart from '../components/Bar';
import Table from '../components/Table';
import LineChart from '../components/Line';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Chaffle from 'chaffle';
// import { gsap } from 'gsap';

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
      time: [],
      key: 'chart1',
      barKey: 'bar1'
    }
    this.handleNewClick = this.handleNewClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
  }

  componentDidMount() {
    // Intro animation
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });

    const elements = document.querySelectorAll('[data-chaffle]');
    Array.prototype.forEach.call(elements, function (el) {
      const chaffle = new Chaffle(el, {
        lang: 'en', // default: 'en'
        speed: 20, // default: 20
        delay: 100, // default: 100
      });
      chaffle.init();
    });

    this.receiveStatsFromPusher();
    this.receiveImgFromPusher();
  }

  playAudio(audio) {
    const audio1 = document.getElementsByClassName(audio)[0]
    audio1.play()
  }

  async retrieveData() {
    fetch('http://localhost:8080/get/stats')
      .then((response) => {
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
          time: result.stats.time,
          images: result.target.image,
          targets: result.target.data
        });
      })
      .catch((error) => {
        console.log(
          "There has been a problem with your fetch operation: ",
          error.message
        );
      });
  }

  handlePrevClick() {
    this.retrieveData();
    // Remove intro
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
  }

  handleNewClick() {
    // Remove intro
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
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
      if (Object.values(data)[0].id == "A") {
        this.playAudio("audio-element1");
      } else if (Object.values(data)[0].id == "B") {
        this.playAudio("audio-element2");
      } else if (Object.values(data)[0].id == "C") {
        this.playAudio("audio-element3");
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
        <body>
          <main className="container-fluid wf">
            <div className="row rw1">
              <div className="col-sm-2 imageContainer">
                <p className="imgTitle">TARGETS</p>
                {images}
              </div>
              <div className="col-8 col-sm-6 videoContainer">
                <iframe width="720" height="570" src="http://192.168.43.41:8000/" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <img src="192.168.43.41:8000" />
              </div>
              <div className="col-4 lineContainer">
                <Tabs
                  id="controlled-tab-example"
                  activeKey={this.state.key}
                  onSelect={(k) => this.setState({ key: k })}
                >
                  <Tab eventKey="chart1" title="Temperature, Pressure, Humidity">
                    <div className="line">
                      <LineChart data={this.state.lineTemp} time={this.state.time} title="Temperature vs Time" color="rgb(106, 90, 205)" unit="Celcius" />
                      <LineChart data={this.state.linePressure} time={this.state.time} title="Pressure vs Time" color="rgb(255, 165, 0)" unit="hPa" />
                      <LineChart data={this.state.lineHumid} time={this.state.time} title="Humidity vs Time" color="rgb(255, 0, 0)" unit="%" />
                    </div>
                  </Tab>
                  <Tab eventKey="chart2" title="Light, Noise">
                    <div className="line">
                      <LineChart data={this.state.lineLight} time={this.state.time} title="Light vs Time" color="rgb(0,255,159)" unit="Lux" />
                      <LineChart data={this.state.lineNoise} time={this.state.time} title="Noise vs Time" color="rgb(0,184,255)" unit="dB" />
                    </div>
                  </Tab>
                  <Tab eventKey="chart3" title="Reducing, Oxidizing, NH3">
                    <div className="line">
                      <LineChart data={this.state.lineReduce} time={this.state.time} title="Reducing vs Time" color="rgb(0,30,255)" unit="kO" />
                      <LineChart data={this.state.lineOxi} time={this.state.time} title="Oxidizing vs Time" color="rgb(66, 228, 66)" unit="kO" />
                      <LineChart data={this.state.lineNh3} time={this.state.time} title="NH3 vs Time" color="rgb(255, 255, 255)" unit="kO" />
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>

            <div className="row rw2">
              <div className="col tableContainer">
                <Table data={this.state.targets} />
              </div>
              <div className="col barContainer">
                <div className="col bar">
                  <BarChart
                    labels={['Temperature', 'Humidity', 'Light', 'Noise', 'Oxidizing', 'NH3']}
                    data={[this.state.data[0], this.state.data[2], this.state.data[3], this.state.data[4], this.state.data[6], this.state.data[7]]}
                    color={['rgb(106, 90, 205)', 'rgb(255, 0, 0)', 'rgb(0,255,159)', 'rgb(0,184,255)', 'rgb(66, 228, 66)', 'rgb(255, 255, 255)']}
                    title="Current status of sensors"
                  />
                </div>
                <div className="col bar">
                  <BarChart
                    labels={['Pressure', 'Reducing']}
                    data={[this.state.data[1], this.state.data[5]]}
                    color={['rgb(255, 165, 0)', 'rgb(0,30,255)']}
                    title=""
                  />
                </div>
              </div>
              <div className="col extra"></div>
              <div>
                <audio className="audio-element1">
                  <source src="https://res.cloudinary.com/dtmjpfpip/video/upload/v1600939155/siren_t4zvvu.mp3"></source>
                </audio>
                <audio className="audio-element2">
                  <source src="https://res.cloudinary.com/dtmjpfpip/video/upload/v1600939155/siren_t4zvvu.mp3"></source>
                </audio>
                <audio className="audio-element3">
                  <source src="https://res.cloudinary.com/dtmjpfpip/video/upload/v1600939155/siren_t4zvvu.mp3"></source>
                </audio>
              </div>
            </div>
          </main>
          <div className="intro">
            <div className="intro-text">
              <h1 className="hide">
                <span className="text">how do you wish to start?</span>
              </h1>
              <div className="buttonContainer">
                <button type="button" className="buttonNew" onClick={this.handleNewClick} >new session</button>
                <button type="button" className="buttonPrev" onClick={this.handlePrevClick} >previous session</button>
              </div>
            </div>
            <div >
              <span data-chaffle="en" className="group-text">EGH455 - GROUP 6</span>
            </div>
          </div>
          <div className="slider"></div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
          <script src="https://npmcdn.com/chaffle/chaffle.min.js"></script>
        </body>
      </Layout >
    );
  }

}
