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
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}, props.pageTitle || 'Realtime Data Visualization')), props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Table extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("table", {
      className: "table"
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "Target"), __jsx("th", null, "Temperature (units)"), __jsx("th", null, "Pressure (units)"), __jsx("th", null, "Humidity (units)"), __jsx("th", null, "Light (units)"), __jsx("th", null, "Noise (units)"), __jsx("th", null, "Gas (units)"))), __jsx("tbody", null, __jsx("tr", null, __jsx("td", null, "A"), this.props.a != null ? this.props.a.map(e => __jsx("td", {
      key: e
    }, e)) : __jsx("td", null)), __jsx("tr", null, __jsx("td", null, "B"), this.props.b != null ? this.props.b.map(e => __jsx("td", {
      key: e
    }, e)) : __jsx("td", null)), __jsx("tr", null, __jsx("td", null, "C"), this.props.c != null ? this.props.c.map(e => __jsx("td", {
      key: e
    }, e)) : __jsx("td", null))));
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
      data: [2, 2, 2, 2, 2, 2],
      images: [],
      targeta: [],
      targetb: [],
      targetc: []
    };
  }

  componentDidMount() {
    this.receiveStatsFromPusher();
    this.receiveImgFromPusher();
  }

  receiveStatsFromPusher() {
    channel.bind('bar-stats', data => {
      console.log(data);
      this.setState({
        data
      });
    });
    console.log(this.state.data);
  }

  receiveImgFromPusher() {
    channel.bind('gallery', data => {
      this.setState({
        images: [data.image, ...this.state.images]
      });

      if (data.id === 1) {
        this.setState({
          targeta: [...this.state.data]
        });
      } else if (data.id === 2) {
        this.setState({
          targetb: [...this.state.data]
        });
      } else {
        this.setState({
          targetc: [...this.state.data]
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
    }, "Image Stream", images, __jsx("img", {
      src: "http://res.cloudinary.com/dtmjpfpip/image/upload/v1599914558/pxa7wzqdlznqzdi3tof4.jpg"
    }), __jsx("img", {
      src: "http://res.cloudinary.com/dtmjpfpip/image/upload/v1599914558/pxa7wzqdlznqzdi3tof4.jpg"
    }), __jsx("img", {
      src: "http://res.cloudinary.com/dtmjpfpip/image/upload/v1599914558/pxa7wzqdlznqzdi3tof4.jpg"
    })), __jsx("div", {
      className: "col-8 col-sm-6 wf"
    }, "Video Stream"), __jsx("div", {
      className: "col wf"
    }, "Graphs")), __jsx("div", {
      className: "row rw2"
    }, __jsx("div", {
      className: "col wf"
    }, "Table", __jsx(_components_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
      a: this.state.targeta,
      b: this.state.targetb,
      c: this.state.targetc
    })), __jsx("div", {
      className: "col wf"
    }, "Bar Chart", __jsx(_components_Bar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: this.state.data
    })), __jsx("div", {
      className: "col wf"
    }, "Graph"))));
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

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInB1c2hlci1qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY2hhcnRqcy0yXCIiXSwibmFtZXMiOlsiQmFyQ2hhcnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsInBhcnNlRGF0YSIsImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImhvdmVyQmFja2dyb3VuZENvbG9yIiwiaG92ZXJCb3JkZXJDb2xvciIsIm9wdGlvbnMiLCJzY2FsZXMiLCJ5QXhlcyIsInRpY2tzIiwiYmVnaW5BdFplcm8iLCJtYWludGFpbkFzcGVjdFJhdGlvIiwicHJvcHMiLCJMYXlvdXQiLCJwYWdlVGl0bGUiLCJjaGlsZHJlbiIsIlRhYmxlIiwiYSIsIm1hcCIsImUiLCJiIiwiYyIsInB1c2hlciIsIlB1c2hlciIsImNsdXN0ZXIiLCJlbmNyeXB0ZWQiLCJjaGFubmVsIiwic3Vic2NyaWJlIiwiSW5kZXhQYWdlIiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImltYWdlcyIsInRhcmdldGEiLCJ0YXJnZXRiIiwidGFyZ2V0YyIsImNvbXBvbmVudERpZE1vdW50IiwicmVjZWl2ZVN0YXRzRnJvbVB1c2hlciIsInJlY2VpdmVJbWdGcm9tUHVzaGVyIiwiYmluZCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImltYWdlIiwiaWQiLCJ1cmwiLCJpbmRleCIsImkiLCJzZWN1cmVfdXJsIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBRWUsTUFBTUEsUUFBTixTQUF1QkMsNENBQUssQ0FBQ0MsU0FBN0IsQ0FBdUM7QUFDbERDLFFBQU0sR0FBRztBQUNMO0FBQ0EsVUFBTUMsU0FBUyxHQUFHQyxJQUFJLEtBQUs7QUFDdkJDLFlBQU0sRUFBRSxDQUFDLGFBQUQsRUFBZ0IsVUFBaEIsRUFBNEIsVUFBNUIsRUFBd0MsT0FBeEMsRUFBaUQsT0FBakQsRUFBMEQsS0FBMUQsQ0FEZTtBQUV2QkMsY0FBUSxFQUFFLENBQ047QUFDSUMsYUFBSyxFQUFFLFdBRFg7QUFFSUMsdUJBQWUsRUFBRSxDQUNiLHNCQURhLENBRnJC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LFNBQUcsRUFBQztBQUFULE1BTEYsQ0FERixFQVFFO0FBQUssZUFBUyxFQUFDO0FBQWYsc0JBUkYsRUFTRTtBQUFLLGVBQVMsRUFBQztBQUFmLGdCQVRGLENBRkYsRUFjRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixnQkFFRSxNQUFDLHlEQUFEO0FBQU8sT0FBQyxFQUFFLEtBQUtELEtBQUwsQ0FBV0UsT0FBckI7QUFBOEIsT0FBQyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0csT0FBNUM7QUFBcUQsT0FBQyxFQUFFLEtBQUtILEtBQUwsQ0FBV0k7QUFBbkUsTUFGRixDQURGLEVBS0U7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDRSxNQUFDLHVEQUFEO0FBQVUsVUFBSSxFQUFFLEtBQUtKLEtBQUwsQ0FBV2pDO0FBQTNCLE1BREYsQ0FMRixFQVFFO0FBQUssZUFBUyxFQUFDO0FBQWYsZUFSRixDQWRGLENBREYsQ0FERjtBQTZCRDs7QUE3RW9ELEM7Ozs7Ozs7Ozs7O0FDZHZELGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJhciB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHBhcnNlRGF0YSA9IGRhdGEgPT4gKHtcclxuICAgICAgICAgICAgbGFiZWxzOiBbJ1RlbXBlcmF0dXJlJywgJ1ByZXNzdXJlJywgJ0h1bWlkaXR5JywgJ0xpZ2h0JywgJ05vaXNlJywgJ0dhcyddLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQmFyIENoYXJ0JyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LDk5LDEzMiwwLDIpJyxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSw5OSwxMzIsMCwyKScsXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogNSxcclxuICAgICAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDk5LDEzMiwwLjQpJyxcclxuICAgICAgICAgICAgICAgICAgICBob3ZlckJvcmRlckNvbG9yOiAncmdiYSgyNTUsOTksMTMyLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJhclxyXG4gICAgICAgICAgICAgICAgZGF0YT17cGFyc2VEYXRhKHRoaXMucHJvcHMuZGF0YSl9XHJcbiAgICAgICAgICAgICAgICBvcHRpb249e29wdGlvbnN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXHJcbiAgPEZyYWdtZW50PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LUduNTM4NHhxUTFhb1dYQSswNThSWFB4UGc2Znk0SVd2VE5oMEUyNjNYbUZjSmxTQXdpR2dGQVcvZEFpUzZKWG1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgIDx0aXRsZT57cHJvcHMucGFnZVRpdGxlIHx8ICdSZWFsdGltZSBEYXRhIFZpc3VhbGl6YXRpb24nfTwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgPC9GcmFnbWVudD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UYXJnZXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGVtcGVyYXR1cmUgKHVuaXRzKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmVzc3VyZSAodW5pdHMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkh1bWlkaXR5ICh1bml0cyk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGlnaHQgKHVuaXRzKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ob2lzZSAodW5pdHMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkdhcyAodW5pdHMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYSAhPSBudWxsID8gdGhpcy5wcm9wcy5hLm1hcChlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2V9PntlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpIDogPHRkPjwvdGQ+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmIgIT0gbnVsbCA/IHRoaXMucHJvcHMuYi5tYXAoZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtlfT57ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSA6IDx0ZD48L3RkPn1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jICE9IG51bGwgPyB0aGlzLnByb3BzLmMubWFwKGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17ZX0+e2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSkgOiA8dGQ+PC90ZD59XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFB1c2hlciBmcm9tICdwdXNoZXItanMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEJhckNoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQmFyJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvVGFibGUnO1xyXG5cclxudmFyIHB1c2hlciA9IG5ldyBQdXNoZXIoJzgzZDdmMDA0NGE1OGJiNDFjODZjJywge1xyXG4gIGNsdXN0ZXI6IFwiYXA0XCIsXHJcbiAgZW5jcnlwdGVkOiB0cnVlXHJcbn0pO1xyXG5jb25zdCBjaGFubmVsID0gcHVzaGVyLnN1YnNjcmliZSgnZGVtby1zdGF0cycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogWzIsIDIsIDIsIDIsIDIsIDJdLFxyXG4gICAgICBpbWFnZXM6IFtdLFxyXG4gICAgICB0YXJnZXRhOiBbXSxcclxuICAgICAgdGFyZ2V0YjogW10sXHJcbiAgICAgIHRhcmdldGM6IFtdLCAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnJlY2VpdmVTdGF0c0Zyb21QdXNoZXIoKVxyXG4gICAgdGhpcy5yZWNlaXZlSW1nRnJvbVB1c2hlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVjZWl2ZVN0YXRzRnJvbVB1c2hlcigpIHtcclxuICAgIGNoYW5uZWwuYmluZCgnYmFyLXN0YXRzJywgZGF0YSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kYXRhKTtcclxuICB9IFxyXG5cclxuICByZWNlaXZlSW1nRnJvbVB1c2hlcigpIHtcclxuICAgIGNoYW5uZWwuYmluZCgnZ2FsbGVyeScsIGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpbWFnZXM6IFtkYXRhLmltYWdlLCAuLi50aGlzLnN0YXRlLmltYWdlc10sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoZGF0YS5pZCA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RhcmdldGE6IFsuLi50aGlzLnN0YXRlLmRhdGFdfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5pZCA9PT0gMikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RhcmdldGI6IFsuLi50aGlzLnN0YXRlLmRhdGFdfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGFyZ2V0YzogWy4uLnRoaXMuc3RhdGUuZGF0YV19KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBpbWFnZSA9ICh1cmwsIGluZGV4KSA9PiAoXHJcbiAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3NOYW1lPVwicGhvdG9cIiBrZXk9e2BpbWFnZS0ke2luZGV4fSB9YH0gc3JjPXt1cmx9IC8+IFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGltYWdlcyA9IHRoaXMuc3RhdGUuaW1hZ2VzLm1hcCgoZSwgaSkgPT4gaW1hZ2UoZS5zZWN1cmVfdXJsLCBpKSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQgcGFnZVRpdGxlPVwiUmVhbHRpbWUgRGF0YSBWaXN1YWxpemF0aW9uXCI+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHdmXCI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcncxXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTIgZ2FsbGVyeVwiPlxyXG4gICAgICAgICAgICAgIEltYWdlIFN0cmVhbVxyXG4gICAgICAgICAgICAgIHtpbWFnZXN9XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R0bWpwZnBpcC9pbWFnZS91cGxvYWQvdjE1OTk5MTQ1NTgvcHhhN3d6cWRsem5xemRpM3RvZjQuanBnXCIgLz5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHRtanBmcGlwL2ltYWdlL3VwbG9hZC92MTU5OTkxNDU1OC9weGE3d3pxZGx6bnF6ZGkzdG9mNC5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kdG1qcGZwaXAvaW1hZ2UvdXBsb2FkL3YxNTk5OTE0NTU4L3B4YTd3enFkbHpucXpkaTN0b2Y0LmpwZ1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04IGNvbC1zbS02IHdmXCI+VmlkZW8gU3RyZWFtPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHdmXCI+R3JhcGhzPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBydzJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgd2ZcIj5cclxuICAgICAgICAgICAgICBUYWJsZVxyXG4gICAgICAgICAgICAgIDxUYWJsZSBhPXt0aGlzLnN0YXRlLnRhcmdldGF9IGI9e3RoaXMuc3RhdGUudGFyZ2V0Yn0gYz17dGhpcy5zdGF0ZS50YXJnZXRjfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgd2ZcIj5CYXIgQ2hhcnRcclxuICAgICAgICAgICAgICA8QmFyQ2hhcnQgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB3ZlwiPkdyYXBoPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwdXNoZXItanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY2hhcnRqcy0yXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=