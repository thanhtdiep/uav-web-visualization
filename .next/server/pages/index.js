module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Bar.js":
/*!***************************!*\
  !*** ./components/Bar.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BarChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class BarChart extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    // console.log(this.props.data);
    const parseData = data => ({
      labels: ['Temperature', 'Pressure', 'Humidity', 'Light', 'Noise', 'Gas'],
      datasets: [{
        label: 'Bar Chart',
        backgroundColor: ['rgba(255,99,132,0,2)'],
        borderColor: ['rgba(255,99,132,0,2)'],
        borderWidth: 5,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data
      }]
    });

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      maintainAspectRatio: false
    };
    return __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
      data: parseData(this.props.data),
      option: options
    });
  }

}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\n9607234\\Desktop\\2020sem2\\EGH455\\Web Interface\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx("meta", {
  charSet: "utf-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1, shrink-to-fit=no",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
  integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
  crossOrigin: "anonymous",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300&display=swap",
  rel: "stylesheet",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}, props.pageTitle || 'Realtime Data Visualization')), props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Line.js":
/*!****************************!*\
  !*** ./components/Line.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LineChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class LineChart extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    // console.log(Object.values(this.props.data));
    // console.log(this.props.time);
    const parseData = (data, time) => ({
      labels: time,
      datasets: [{
        label: this.props.title,
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        spanGaps: false,
        data
      }]
    });

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      maintainAspectRatio: true
    };
    return __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
      data: parseData(Object.values(this.props.data), this.props.time),
      option: options
    });
  }

}

/***/ }),

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\n9607234\\Desktop\\2020sem2\\EGH455\\Web Interface\\components\\Table.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Table extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("table", {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }
    }, __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 25
      }
    }, "Target"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 25
      }
    }, "Temperature (units)"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }
    }, "Pressure (units)"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, "Humidity (units)"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    }, "Light (units)"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }
    }, "Noise (units)"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }
    }, "Gas (units)"))), __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }
    }, "A"), this.props.a != null ? this.props.a.map(e => __jsx("td", {
      key: e,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 29
      }
    }, e)) : __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 30
      }
    }, "-")), __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 25
      }
    }, "B"), this.props.b != null ? this.props.b.map(e => __jsx("td", {
      key: e,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 29
      }
    }, e)) : __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 30
      }
    }, "-")), __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 25
      }
    }, "C"), this.props.c != null ? this.props.c.map(e => __jsx("td", {
      key: e,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 29
      }
    }, e)) : __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 30
      }
    }, "-"))));
  }

}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pusher-js */ "pusher-js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Bar */ "./components/Bar.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Table */ "./components/Table.js");
/* harmony import */ var _components_Line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Line */ "./components/Line.js");
/* harmony import */ var react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Tabs */ "react-bootstrap/Tabs");
/* harmony import */ var react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Tab */ "react-bootstrap/Tab");
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_2___default.a('83d7f0044a58bb41c86c', {
  cluster: "ap4",
  encrypted: true
});
const channel = pusher.subscribe('demo-stats');
class IndexPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
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
    };
  }

  componentDidMount() {
    this.receiveStatsFromPusher();
    this.receiveImgFromPusher();
  } // componentWillUnmount() {
  //   this.abortController.abort();
  // }


  receiveStatsFromPusher() {
    channel.bind('bar-stats', data => {
      console.log(data);
      this.setState({
        data // time: [...[2, this.state.lineTemp.length + 1]]

      });
      this.setState(() => {
        this.state.lineTemp.push(data[0]);
        this.state.linePressure.push(data[1]);
        this.state.lineHumid.push(data[2]);
        this.state.lineLight.push(data[3]);
        this.state.lineNoise.push(data[4]);
        this.state.lineGas.push(data[5]);
        this.state.time.push(new Date().toTimeString().substring(0, 8));
      });
      console.log("lineTemp : " + this.state.lineTemp);
      console.log("time : " + this.state.time);
    });
  }

  receiveImgFromPusher() {
    channel.bind('gallery', data => {
      this.setState({
        images: [data.image, ...this.state.images]
      });

      if (Object.values(data)[0].id == 1) {
        this.setState({
          targetA: [...this.state.data]
        });
      } else if (Object.values(data)[0].id == 2) {
        this.setState({
          targetB: [...this.state.data]
        });
      } else {
        this.setState({
          targetC: [...this.state.data]
        });
      }
    });
  }

  render() {
    const image = (url, index) => __jsx("img", {
      alt: "",
      className: "photo",
      key: `image-${index} }`,
      src: url
    });

    const images = this.state.images.map((e, i) => image(e.secure_url, i));
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      pageTitle: "Realtime Data Visualization"
    }, __jsx("main", {
      className: "container-fluid wf"
    }, __jsx("div", {
      className: "row rw1"
    }, __jsx("div", {
      className: "col-sm-2 gallery"
    }, "Image Stream", images), __jsx("div", {
      className: "col-8 col-sm-6 wf"
    }, "Video Stream"), __jsx("div", {
      className: "col wf"
    }, "Graphs", __jsx(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_7___default.a, {
      id: "controlled-tab-example",
      activeKey: this.state.key,
      onSelect: k => this.setState({
        key: k
      })
    }, __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_8___default.a, {
      eventKey: "chart1",
      title: "Chart 1"
    }, __jsx(_components_Line__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: this.state.lineTemp,
      time: this.state.time,
      title: "Temperature Overtime"
    }), __jsx(_components_Line__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: this.state.linePressure,
      time: this.state.time,
      title: "Pressure Overtime"
    }), __jsx(_components_Line__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: this.state.lineHumid,
      time: this.state.time,
      title: "Humidity Overtime"
    })), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_8___default.a, {
      eventKey: "chart2",
      title: "Chart 2"
    }, __jsx(_components_Line__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: this.state.lineLight,
      time: this.state.time,
      title: "Light Overtime"
    }), __jsx(_components_Line__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: this.state.lineNoise,
      time: this.state.time,
      title: "Noise Overtime"
    }), __jsx(_components_Line__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: this.state.lineGas,
      time: this.state.time,
      title: "Gas Overtime"
    }))))), __jsx("div", {
      className: "row rw2"
    }, __jsx("div", {
      className: "col wf"
    }, "Table", __jsx(_components_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
      a: this.state.targetA,
      b: this.state.targetB,
      c: this.state.targetC
    })), __jsx("div", {
      className: "col wf"
    }, "Bar Chart", __jsx(_components_Bar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: this.state.data
    })), __jsx("div", {
      className: "col wf"
    }))));
  }

}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "pusher-js":
/*!****************************!*\
  !*** external "pusher-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Tab":
/*!**************************************!*\
  !*** external "react-bootstrap/Tab" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Tab");

/***/ }),

/***/ "react-bootstrap/Tabs":
/*!***************************************!*\
  !*** external "react-bootstrap/Tabs" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Tabs");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaW5lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwdXNoZXItanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9UYWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvVGFic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNoYXJ0anMtMlwiIl0sIm5hbWVzIjpbIkJhckNoYXJ0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwYXJzZURhdGEiLCJkYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJob3ZlckJhY2tncm91bmRDb2xvciIsImhvdmVyQm9yZGVyQ29sb3IiLCJvcHRpb25zIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInByb3BzIiwiTGF5b3V0IiwicGFnZVRpdGxlIiwiY2hpbGRyZW4iLCJMaW5lQ2hhcnQiLCJ0aW1lIiwidGl0bGUiLCJmaWxsIiwibGluZVRlbnNpb24iLCJib3JkZXJDYXBTdHlsZSIsImJvcmRlckRhc2giLCJib3JkZXJEYXNoT2Zmc2V0IiwiYm9yZGVySm9pblN0eWxlIiwicG9pbnRCb3JkZXJDb2xvciIsInBvaW50QmFja2dyb3VuZENvbG9yIiwicG9pbnRCb3JkZXJXaWR0aCIsInBvaW50SG92ZXJSYWRpdXMiLCJwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yIiwicG9pbnRIb3ZlckJvcmRlckNvbG9yIiwicG9pbnRIb3ZlckJvcmRlcldpZHRoIiwicG9pbnRSYWRpdXMiLCJwb2ludEhpdFJhZGl1cyIsInNwYW5HYXBzIiwiT2JqZWN0IiwidmFsdWVzIiwiVGFibGUiLCJhIiwibWFwIiwiZSIsImIiLCJjIiwicHVzaGVyIiwiUHVzaGVyIiwiY2x1c3RlciIsImVuY3J5cHRlZCIsImNoYW5uZWwiLCJzdWJzY3JpYmUiLCJJbmRleFBhZ2UiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwiaW1hZ2VzIiwidGFyZ2V0QSIsInRhcmdldEIiLCJ0YXJnZXRDIiwibGluZVRlbXAiLCJsaW5lUHJlc3N1cmUiLCJsaW5lSHVtaWQiLCJsaW5lTGlnaHQiLCJsaW5lTm9pc2UiLCJsaW5lR2FzIiwia2V5IiwiY29tcG9uZW50RGlkTW91bnQiLCJyZWNlaXZlU3RhdHNGcm9tUHVzaGVyIiwicmVjZWl2ZUltZ0Zyb21QdXNoZXIiLCJiaW5kIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwicHVzaCIsIkRhdGUiLCJ0b1RpbWVTdHJpbmciLCJzdWJzdHJpbmciLCJpbWFnZSIsImlkIiwidXJsIiwiaW5kZXgiLCJpIiwic2VjdXJlX3VybCIsImsiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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TCxDQUFXRSxPQUFyQjtBQUE4QixPQUFDLEVBQUUsS0FBS0YsS0FBTCxDQUFXRyxPQUE1QztBQUFxRCxPQUFDLEVBQUUsS0FBS0gsS0FBTCxDQUFXSTtBQUFuRSxNQUZGLENBREYsRUFLRTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNFLE1BQUMsdURBQUQ7QUFBVSxVQUFJLEVBQUUsS0FBS0osS0FBTCxDQUFXdEQ7QUFBM0IsTUFERixDQUxGLEVBUUU7QUFBSyxlQUFTLEVBQUM7QUFBZixNQVJGLENBN0JGLENBREYsQ0FERjtBQTRDRDs7QUFwSG9ELEM7Ozs7Ozs7Ozs7O0FDaEJ2RCxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSw0QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCYXIgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXJDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5kYXRhKTtcclxuICAgICAgICBjb25zdCBwYXJzZURhdGEgPSBkYXRhID0+ICh7XHJcbiAgICAgICAgICAgIGxhYmVsczogWydUZW1wZXJhdHVyZScsICdQcmVzc3VyZScsICdIdW1pZGl0eScsICdMaWdodCcsICdOb2lzZScsICdHYXMnXSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0JhciBDaGFydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSw5OSwxMzIsMCwyKScsXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsOTksMTMyLDAsMiknLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSw5OSwxMzIsMC40KScsXHJcbiAgICAgICAgICAgICAgICAgICAgaG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjU1LDk5LDEzMiwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB5QXhlczogW3tcclxuICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCYXJcclxuICAgICAgICAgICAgICAgIGRhdGE9e3BhcnNlRGF0YSh0aGlzLnByb3BzLmRhdGEpfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uPXtvcHRpb25zfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJcclxuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4gKFxyXG4gIDxGcmFnbWVudD5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1HbjUzODR4cVExYW9XWEErMDU4UlhQeFBnNmZ5NElXdlROaDBFMjYzWG1GY0psU0F3aUdnRkFXL2RBaVM2SlhtXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LdW1iaCtTYW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgIDx0aXRsZT57cHJvcHMucGFnZVRpdGxlIHx8ICdSZWFsdGltZSBEYXRhIFZpc3VhbGl6YXRpb24nfTwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgPC9GcmFnbWVudD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhPYmplY3QudmFsdWVzKHRoaXMucHJvcHMuZGF0YSkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMudGltZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcnNlRGF0YSA9IChkYXRhLCB0aW1lKSA9PiAoe1xyXG4gICAgICAgICAgICBsYWJlbHM6IHRpbWUsXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMucHJvcHMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLDAuNClcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6ICdidXR0JyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckRhc2g6IFtdLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogMC4wLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVySm9pblN0eWxlOiAnbWl0ZXInLFxyXG4gICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcclxuICAgICAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcclxuICAgICAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCJyZ2JhKDIyMCwyMjAsMjIwLDEpXCIsXHJcbiAgICAgICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICAgICAgICBwb2ludFJhZGl1czogMSxcclxuICAgICAgICAgICAgICAgIHBvaW50SGl0UmFkaXVzOiAxMCxcclxuICAgICAgICAgICAgICAgIHNwYW5HYXBzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRhdGFcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpbmVcclxuICAgICAgICAgICAgICAgIGRhdGE9e3BhcnNlRGF0YShPYmplY3QudmFsdWVzKHRoaXMucHJvcHMuZGF0YSksIHRoaXMucHJvcHMudGltZSl9XHJcbiAgICAgICAgICAgICAgICBvcHRpb249e29wdGlvbnN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGFyZ2V0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRlbXBlcmF0dXJlICh1bml0cyk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJlc3N1cmUgKHVuaXRzKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5IdW1pZGl0eSAodW5pdHMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxpZ2h0ICh1bml0cyk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+Tm9pc2UgKHVuaXRzKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5HYXMgKHVuaXRzKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmEgIT0gbnVsbCA/IHRoaXMucHJvcHMuYS5tYXAoZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtlfT57ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSA6IDx0ZD4tPC90ZD59XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5CPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYiAhPSBudWxsID8gdGhpcy5wcm9wcy5iLm1hcChlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2V9PntlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpIDogPHRkPi08L3RkPn1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jICE9IG51bGwgPyB0aGlzLnByb3BzLmMubWFwKGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17ZX0+e2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSkgOiA8dGQ+LTwvdGQ+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFB1c2hlciBmcm9tICdwdXNoZXItanMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEJhckNoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQmFyJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvVGFibGUnO1xyXG5pbXBvcnQgTGluZUNoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvTGluZSc7XHJcbmltcG9ydCBUYWJzIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9UYWJzJ1xyXG5pbXBvcnQgVGFiIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9UYWInXHJcblxyXG52YXIgcHVzaGVyID0gbmV3IFB1c2hlcignODNkN2YwMDQ0YTU4YmI0MWM4NmMnLCB7XHJcbiAgY2x1c3RlcjogXCJhcDRcIixcclxuICBlbmNyeXB0ZWQ6IHRydWVcclxufSk7XHJcbmNvbnN0IGNoYW5uZWwgPSBwdXNoZXIuc3Vic2NyaWJlKCdkZW1vLXN0YXRzJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IFtdLFxyXG4gICAgICBpbWFnZXM6IFtdLFxyXG4gICAgICB0YXJnZXRBOiBbXSxcclxuICAgICAgdGFyZ2V0QjogW10sXHJcbiAgICAgIHRhcmdldEM6IFtdLFxyXG4gICAgICBsaW5lVGVtcDogW10sXHJcbiAgICAgIGxpbmVQcmVzc3VyZTogW10sXHJcbiAgICAgIGxpbmVIdW1pZDogW10sXHJcbiAgICAgIGxpbmVMaWdodDogW10sXHJcbiAgICAgIGxpbmVOb2lzZTogW10sXHJcbiAgICAgIGxpbmVHYXM6IFtdLFxyXG4gICAgICB0aW1lOiBbXSxcclxuICAgICAga2V5OiAnY2hhcnQxJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnJlY2VpdmVTdGF0c0Zyb21QdXNoZXIoKVxyXG4gICAgdGhpcy5yZWNlaXZlSW1nRnJvbVB1c2hlcigpO1xyXG4gIH1cclxuXHJcbiAgLy8gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgLy8gICB0aGlzLmFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gIC8vIH1cclxuXHJcbiAgcmVjZWl2ZVN0YXRzRnJvbVB1c2hlcigpIHtcclxuICAgIGNoYW5uZWwuYmluZCgnYmFyLXN0YXRzJywgZGF0YSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhXHJcbiAgICAgICAgLy8gdGltZTogWy4uLlsyLCB0aGlzLnN0YXRlLmxpbmVUZW1wLmxlbmd0aCArIDFdXVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXRlLmxpbmVUZW1wLnB1c2goZGF0YVswXSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5saW5lUHJlc3N1cmUucHVzaChkYXRhWzFdKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmxpbmVIdW1pZC5wdXNoKGRhdGFbMl0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUubGluZUxpZ2h0LnB1c2goZGF0YVszXSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5saW5lTm9pc2UucHVzaChkYXRhWzRdKTtcclxuICAgICAgICB0aGlzLnN0YXRlLmxpbmVHYXMucHVzaChkYXRhWzVdKTtcclxuICAgICAgICB0aGlzLnN0YXRlLnRpbWUucHVzaCgobmV3IERhdGUpLnRvVGltZVN0cmluZygpLnN1YnN0cmluZygwLCA4KSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKFwibGluZVRlbXAgOiBcIiArIHRoaXMuc3RhdGUubGluZVRlbXApO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInRpbWUgOiBcIiArIHRoaXMuc3RhdGUudGltZSk7XHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG4gIHJlY2VpdmVJbWdGcm9tUHVzaGVyKCkge1xyXG4gICAgY2hhbm5lbC5iaW5kKCdnYWxsZXJ5JywgZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGltYWdlczogW2RhdGEuaW1hZ2UsIC4uLnRoaXMuc3RhdGUuaW1hZ2VzXSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChPYmplY3QudmFsdWVzKGRhdGEpWzBdLmlkID09IDEpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0QTogWy4uLnRoaXMuc3RhdGUuZGF0YV0gfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LnZhbHVlcyhkYXRhKVswXS5pZCA9PSAyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldEI6IFsuLi50aGlzLnN0YXRlLmRhdGFdIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0YXJnZXRDOiBbLi4udGhpcy5zdGF0ZS5kYXRhXSB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBpbWFnZSA9ICh1cmwsIGluZGV4KSA9PiAoXHJcbiAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwicGhvdG9cIiBrZXk9e2BpbWFnZS0ke2luZGV4fSB9YH0gc3JjPXt1cmx9IC8+XHJcbiAgICApO1xyXG4gICAgY29uc3QgaW1hZ2VzID0gdGhpcy5zdGF0ZS5pbWFnZXMubWFwKChlLCBpKSA9PiBpbWFnZShlLnNlY3VyZV91cmwsIGkpKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IHBhZ2VUaXRsZT1cIlJlYWx0aW1lIERhdGEgVmlzdWFsaXphdGlvblwiPlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCB3ZlwiPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJ3MVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yIGdhbGxlcnlcIj5cclxuICAgICAgICAgICAgICBJbWFnZSBTdHJlYW1cclxuICAgICAgICAgICAgICB7aW1hZ2VzfVxyXG4gICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImh0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHRtanBmcGlwL2ltYWdlL3VwbG9hZC92MTU5OTkxNDU1OC9weGE3d3pxZGx6bnF6ZGkzdG9mNC5qcGdcIiAvPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTggY29sLXNtLTYgd2ZcIj5WaWRlbyBTdHJlYW08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgd2ZcIj5HcmFwaHNcclxuICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgIGlkPVwiY29udHJvbGxlZC10YWItZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVLZXk9e3RoaXMuc3RhdGUua2V5fVxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhrKSA9PiB0aGlzLnNldFN0YXRlKHsga2V5OiBrIH0pfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUYWIgZXZlbnRLZXk9XCJjaGFydDFcIiB0aXRsZT1cIkNoYXJ0IDFcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmVDaGFydCBkYXRhPXt0aGlzLnN0YXRlLmxpbmVUZW1wfSB0aW1lPXt0aGlzLnN0YXRlLnRpbWV9IHRpdGxlPVwiVGVtcGVyYXR1cmUgT3ZlcnRpbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluZUNoYXJ0IGRhdGE9e3RoaXMuc3RhdGUubGluZVByZXNzdXJlfSB0aW1lPXt0aGlzLnN0YXRlLnRpbWV9IHRpdGxlPVwiUHJlc3N1cmUgT3ZlcnRpbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGluZUNoYXJ0IGRhdGE9e3RoaXMuc3RhdGUubGluZUh1bWlkfSB0aW1lPXt0aGlzLnN0YXRlLnRpbWV9IHRpdGxlPVwiSHVtaWRpdHkgT3ZlcnRpbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICA8VGFiIGV2ZW50S2V5PVwiY2hhcnQyXCIgdGl0bGU9XCJDaGFydCAyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5lQ2hhcnQgZGF0YT17dGhpcy5zdGF0ZS5saW5lTGlnaHR9IHRpbWU9e3RoaXMuc3RhdGUudGltZX0gdGl0bGU9XCJMaWdodCBPdmVydGltZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5lQ2hhcnQgZGF0YT17dGhpcy5zdGF0ZS5saW5lTm9pc2V9IHRpbWU9e3RoaXMuc3RhdGUudGltZX0gdGl0bGU9XCJOb2lzZSBPdmVydGltZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5lQ2hhcnQgZGF0YT17dGhpcy5zdGF0ZS5saW5lR2FzfSB0aW1lPXt0aGlzLnN0YXRlLnRpbWV9IHRpdGxlPVwiR2FzIE92ZXJ0aW1lXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBydzJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgd2ZcIj5cclxuICAgICAgICAgICAgICBUYWJsZVxyXG4gICAgICAgICAgICAgIDxUYWJsZSBhPXt0aGlzLnN0YXRlLnRhcmdldEF9IGI9e3RoaXMuc3RhdGUudGFyZ2V0Qn0gYz17dGhpcy5zdGF0ZS50YXJnZXRDfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgd2ZcIj5CYXIgQ2hhcnRcclxuICAgICAgICAgICAgICA8QmFyQ2hhcnQgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgd2ZcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9MYXlvdXQgPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwdXNoZXItanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL1RhYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvVGFic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jaGFydGpzLTJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==