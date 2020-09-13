webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Bar */ "./components/Bar.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Table */ "./components/Table.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_8___default.a('83d7f0044a58bb41c86c', {
  cluster: "ap4",
  encrypted: true
});
var channel = pusher.subscribe('demo-stats');

var IndexPage = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(IndexPage, _React$Component);

  var _super = _createSuper(IndexPage);

  function IndexPage(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, IndexPage);

    _this = _super.call(this, props);
    _this.state = {
      data: [2, 2, 2, 2, 2, 2],
      images: [],
      targeta: [],
      targetb: [],
      targetc: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(IndexPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.receiveStatsFromPusher();
      this.receiveImgFromPusher();
    }
  }, {
    key: "receiveStatsFromPusher",
    value: function receiveStatsFromPusher() {
      var _this2 = this;

      channel.bind('bar-stats', function (data) {
        console.log(data);

        _this2.setState({
          data: data
        });
      });
      console.log(this.state.data);
    }
  }, {
    key: "receiveImgFromPusher",
    value: function receiveImgFromPusher() {
      var _this3 = this;

      channel.bind('gallery', function (data) {
        _this3.setState({
          images: [data.image].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3.state.images))
        });

        if (data.id === 1) {
          targeta: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3.state.data);
        } else if (data.id === 2) {
          targetb: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3.state.data);
        } else {
          targetc: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3.state.data);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var image = function image(url, index) {
        return __jsx("img", {
          alt: "",
          className: "photo",
          key: "image-".concat(index, " }"),
          src: url
        });
      };

      var images = this.state.images.map(function (e, i) {
        return image(e.secure_url, i);
      });
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      }, "Table", __jsx(_components_Table__WEBPACK_IMPORTED_MODULE_11__["default"], {
        a: targeta,
        b: targetb,
        c: targetc
      })), __jsx("div", {
        className: "col wf"
      }, "Bar Chart", __jsx(_components_Bar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        data: this.state.data
      })), __jsx("div", {
        className: "col wf"
      }, "Graph"))));
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsicHVzaGVyIiwiUHVzaGVyIiwiY2x1c3RlciIsImVuY3J5cHRlZCIsImNoYW5uZWwiLCJzdWJzY3JpYmUiLCJJbmRleFBhZ2UiLCJwcm9wcyIsInN0YXRlIiwiZGF0YSIsImltYWdlcyIsInRhcmdldGEiLCJ0YXJnZXRiIiwidGFyZ2V0YyIsInJlY2VpdmVTdGF0c0Zyb21QdXNoZXIiLCJyZWNlaXZlSW1nRnJvbVB1c2hlciIsImJpbmQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJpbWFnZSIsImlkIiwidXJsIiwiaW5kZXgiLCJtYXAiLCJlIiwiaSIsInNlY3VyZV91cmwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsTUFBTSxHQUFHLElBQUlDLGdEQUFKLENBQVcsc0JBQVgsRUFBbUM7QUFDOUNDLFNBQU8sRUFBRSxLQURxQztBQUU5Q0MsV0FBUyxFQUFFO0FBRm1DLENBQW5DLENBQWI7QUFJQSxJQUFNQyxPQUFPLEdBQUdKLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQixZQUFqQixDQUFoQjs7SUFFcUJDLFM7Ozs7O0FBQ25CLHFCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFVBQUksRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBREs7QUFFWEMsWUFBTSxFQUFFLEVBRkc7QUFHWEMsYUFBTyxFQUFFLEVBSEU7QUFJWEMsYUFBTyxFQUFFLEVBSkU7QUFLWEMsYUFBTyxFQUFFO0FBTEUsS0FBYjtBQUZrQjtBQVNuQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0Msc0JBQUw7QUFDQSxXQUFLQyxvQkFBTDtBQUNEOzs7NkNBRXdCO0FBQUE7O0FBQ3ZCWCxhQUFPLENBQUNZLElBQVIsQ0FBYSxXQUFiLEVBQTBCLFVBQUFQLElBQUksRUFBSTtBQUNoQ1EsZUFBTyxDQUFDQyxHQUFSLENBQVlULElBQVo7O0FBQ0EsY0FBSSxDQUFDVSxRQUFMLENBQWM7QUFDWlYsY0FBSSxFQUFKQTtBQURZLFNBQWQ7QUFHRCxPQUxEO0FBTUFRLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtWLEtBQUwsQ0FBV0MsSUFBdkI7QUFDRDs7OzJDQUVzQjtBQUFBOztBQUNyQkwsYUFBTyxDQUFDWSxJQUFSLENBQWEsU0FBYixFQUF3QixVQUFBUCxJQUFJLEVBQUk7QUFDOUIsY0FBSSxDQUFDVSxRQUFMLENBQWM7QUFDWlQsZ0JBQU0sR0FBR0QsSUFBSSxDQUFDVyxLQUFSLHNHQUFrQixNQUFJLENBQUNaLEtBQUwsQ0FBV0UsTUFBN0I7QUFETSxTQUFkOztBQUdBLFlBQUlELElBQUksQ0FBQ1ksRUFBTCxLQUFZLENBQWhCLEVBQW1CO0FBQ2pCVixpQkFBTyxFQUFFLDZGQUFJLE1BQUksQ0FBQ0gsS0FBTCxDQUFXQyxJQUFmO0FBQ1YsU0FGRCxNQUVPLElBQUlBLElBQUksQ0FBQ1ksRUFBTCxLQUFZLENBQWhCLEVBQW1CO0FBQ3hCVCxpQkFBTyxFQUFFLDZGQUFJLE1BQUksQ0FBQ0osS0FBTCxDQUFXQyxJQUFmO0FBQ1YsU0FGTSxNQUVBO0FBQ0xJLGlCQUFPLEVBQUUsNkZBQUksTUFBSSxDQUFDTCxLQUFMLENBQVdDLElBQWY7QUFDVjtBQUNGLE9BWEQ7QUFZRDs7OzZCQUVRO0FBQ1AsVUFBTVcsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0UsR0FBRCxFQUFNQyxLQUFOO0FBQUEsZUFDWjtBQUFLLGFBQUcsRUFBQyxFQUFUO0FBQVksbUJBQVMsRUFBQyxPQUF0QjtBQUE4QixhQUFHLGtCQUFXQSxLQUFYLE9BQWpDO0FBQXVELGFBQUcsRUFBRUQ7QUFBNUQsVUFEWTtBQUFBLE9BQWQ7O0FBR0EsVUFBTVosTUFBTSxHQUFHLEtBQUtGLEtBQUwsQ0FBV0UsTUFBWCxDQUFrQmMsR0FBbEIsQ0FBc0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVU4sS0FBSyxDQUFDSyxDQUFDLENBQUNFLFVBQUgsRUFBZUQsQ0FBZixDQUFmO0FBQUEsT0FBdEIsQ0FBZjtBQUVBLGFBQ0UsTUFBQywwREFBRDtBQUFRLGlCQUFTLEVBQUM7QUFBbEIsU0FDRTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHlCQUVHaEIsTUFGSCxFQUdFO0FBQUssV0FBRyxFQUFDO0FBQVQsUUFIRixFQUlFO0FBQUssV0FBRyxFQUFDO0FBQVQsUUFKRixFQUtFO0FBQUssV0FBRyxFQUFDO0FBQVQsUUFMRixDQURGLEVBUUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsd0JBUkYsRUFTRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixrQkFURixDQUZGLEVBY0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixrQkFFRSxNQUFDLDBEQUFEO0FBQU8sU0FBQyxFQUFFQyxPQUFWO0FBQW1CLFNBQUMsRUFBRUMsT0FBdEI7QUFBK0IsU0FBQyxFQUFFQztBQUFsQyxRQUZGLENBREYsRUFLRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRSxNQUFDLHdEQUFEO0FBQVUsWUFBSSxFQUFFLEtBQUtMLEtBQUwsQ0FBV0M7QUFBM0IsUUFERixDQUxGLEVBUUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsaUJBUkYsQ0FkRixDQURGLENBREY7QUE2QkQ7Ozs7RUE3RW9DbUIsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YTNiZmUxMmU5ODEwZjg5YWY3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUHVzaGVyIGZyb20gJ3B1c2hlci1qcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9CYXInO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJsZSc7XHJcblxyXG52YXIgcHVzaGVyID0gbmV3IFB1c2hlcignODNkN2YwMDQ0YTU4YmI0MWM4NmMnLCB7XHJcbiAgY2x1c3RlcjogXCJhcDRcIixcclxuICBlbmNyeXB0ZWQ6IHRydWVcclxufSk7XHJcbmNvbnN0IGNoYW5uZWwgPSBwdXNoZXIuc3Vic2NyaWJlKCdkZW1vLXN0YXRzJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhOiBbMiwgMiwgMiwgMiwgMiwgMl0sXHJcbiAgICAgIGltYWdlczogW10sXHJcbiAgICAgIHRhcmdldGE6IFtdLFxyXG4gICAgICB0YXJnZXRiOiBbXSxcclxuICAgICAgdGFyZ2V0YzogW10sICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucmVjZWl2ZVN0YXRzRnJvbVB1c2hlcigpXHJcbiAgICB0aGlzLnJlY2VpdmVJbWdGcm9tUHVzaGVyKCk7XHJcbiAgfVxyXG5cclxuICByZWNlaXZlU3RhdHNGcm9tUHVzaGVyKCkge1xyXG4gICAgY2hhbm5lbC5iaW5kKCdiYXItc3RhdHMnLCBkYXRhID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGFcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRhdGEpO1xyXG4gIH0gXHJcblxyXG4gIHJlY2VpdmVJbWdGcm9tUHVzaGVyKCkge1xyXG4gICAgY2hhbm5lbC5iaW5kKCdnYWxsZXJ5JywgZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGltYWdlczogW2RhdGEuaW1hZ2UsIC4uLnRoaXMuc3RhdGUuaW1hZ2VzXSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChkYXRhLmlkID09PSAxKSB7XHJcbiAgICAgICAgdGFyZ2V0YTogWy4uLnRoaXMuc3RhdGUuZGF0YV1cclxuICAgICAgfSBlbHNlIGlmIChkYXRhLmlkID09PSAyKSB7XHJcbiAgICAgICAgdGFyZ2V0YjogWy4uLnRoaXMuc3RhdGUuZGF0YV1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXJnZXRjOiBbLi4udGhpcy5zdGF0ZS5kYXRhXVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGltYWdlID0gKHVybCwgaW5kZXgpID0+IChcclxuICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzc05hbWU9XCJwaG90b1wiIGtleT17YGltYWdlLSR7aW5kZXh9IH1gfSBzcmM9e3VybH0gLz4gXHJcbiAgICApO1xyXG4gICAgY29uc3QgaW1hZ2VzID0gdGhpcy5zdGF0ZS5pbWFnZXMubWFwKChlLCBpKSA9PiBpbWFnZShlLnNlY3VyZV91cmwsIGkpKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dCBwYWdlVGl0bGU9XCJSZWFsdGltZSBEYXRhIFZpc3VhbGl6YXRpb25cIj5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgd2ZcIj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBydzFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMiBnYWxsZXJ5XCI+XHJcbiAgICAgICAgICAgICAgSW1hZ2UgU3RyZWFtXHJcbiAgICAgICAgICAgICAge2ltYWdlc31cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHRtanBmcGlwL2ltYWdlL3VwbG9hZC92MTU5OTkxNDU1OC9weGE3d3pxZGx6bnF6ZGkzdG9mNC5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kdG1qcGZwaXAvaW1hZ2UvdXBsb2FkL3YxNTk5OTE0NTU4L3B4YTd3enFkbHpucXpkaTN0b2Y0LmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R0bWpwZnBpcC9pbWFnZS91cGxvYWQvdjE1OTk5MTQ1NTgvcHhhN3d6cWRsem5xemRpM3RvZjQuanBnXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTggY29sLXNtLTYgd2ZcIj5WaWRlbyBTdHJlYW08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgd2ZcIj5HcmFwaHM8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJ3MlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB3ZlwiPlxyXG4gICAgICAgICAgICAgIFRhYmxlXHJcbiAgICAgICAgICAgICAgPFRhYmxlIGE9e3RhcmdldGF9IGI9e3RhcmdldGJ9IGM9e3RhcmdldGN9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB3ZlwiPkJhciBDaGFydFxyXG4gICAgICAgICAgICAgIDxCYXJDaGFydCBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHdmXCI+R3JhcGg8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==