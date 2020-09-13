webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Table = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Table);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Table, [{
    key: "render",
    value: function render() {
      return __jsx("table", {
        className: "table"
      }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "Target"), __jsx("th", null, "Temperature (units)"), __jsx("th", null, "Pressure (units)"), __jsx("th", null, "Humidity (units)"), __jsx("th", null, "Light (units)"), __jsx("th", null, "Noise (units)"), __jsx("th", null, "Gas (units)"))), __jsx("tbody", null, __jsx("tr", null, __jsx("td", null, "A"), this.props.a != null ? this.props.a.map(function (e) {
        return __jsx("td", {
          key: e
        }, e);
      }) : __jsx("td", null)), __jsx("tr", null, __jsx("td", null, "B"), this.props.b != null ? this.props.b.map(function (e) {
        return __jsx("td", {
          key: e
        }, e);
      }) : __jsx("td", null)), __jsx("tr", null, __jsx("td", null, "C"), this.props.c != null ? this.props.c.map(function (e) {
        return __jsx("td", {
          key: e
        }, e);
      }) : __jsx("td", null))));
    }
  }]);

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZS5qcyJdLCJuYW1lcyI6WyJUYWJsZSIsInByb3BzIiwiYSIsIm1hcCIsImUiLCJiIiwiYyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7NkJBQ1I7QUFFTCxhQUNJO0FBQU8saUJBQVMsRUFBQztBQUFqQixTQUNJLHFCQUNJLGtCQUNJLDJCQURKLEVBRUksd0NBRkosRUFHSSxxQ0FISixFQUlJLHFDQUpKLEVBS0ksa0NBTEosRUFNSSxrQ0FOSixFQU9JLGdDQVBKLENBREosQ0FESixFQVlJLHFCQUNJLGtCQUNJLHNCQURKLEVBRUssS0FBS0MsS0FBTCxDQUFXQyxDQUFYLElBQWdCLElBQWhCLEdBQXVCLEtBQUtELEtBQUwsQ0FBV0MsQ0FBWCxDQUFhQyxHQUFiLENBQWlCLFVBQUFDLENBQUM7QUFBQSxlQUN0QztBQUFJLGFBQUcsRUFBRUE7QUFBVCxXQUFhQSxDQUFiLENBRHNDO0FBQUEsT0FBbEIsQ0FBdkIsR0FFSSxpQkFKVCxDQURKLEVBT0ksa0JBQ0ksc0JBREosRUFFSyxLQUFLSCxLQUFMLENBQVdJLENBQVgsSUFBZ0IsSUFBaEIsR0FBdUIsS0FBS0osS0FBTCxDQUFXSSxDQUFYLENBQWFGLEdBQWIsQ0FBaUIsVUFBQUMsQ0FBQztBQUFBLGVBQ3RDO0FBQUksYUFBRyxFQUFFQTtBQUFULFdBQWFBLENBQWIsQ0FEc0M7QUFBQSxPQUFsQixDQUF2QixHQUVJLGlCQUpULENBUEosRUFhSSxrQkFDSSxzQkFESixFQUVLLEtBQUtILEtBQUwsQ0FBV0ssQ0FBWCxJQUFnQixJQUFoQixHQUF1QixLQUFLTCxLQUFMLENBQVdLLENBQVgsQ0FBYUgsR0FBYixDQUFpQixVQUFBQyxDQUFDO0FBQUEsZUFDdEM7QUFBSSxhQUFHLEVBQUVBO0FBQVQsV0FBYUEsQ0FBYixDQURzQztBQUFBLE9BQWxCLENBQXZCLEdBRUksaUJBSlQsQ0FiSixDQVpKLENBREo7QUFtQ0g7Ozs7RUF0QzhCRyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc4NjRiZTIxZmU4OTZkNzgzNjFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UYXJnZXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGVtcGVyYXR1cmUgKHVuaXRzKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmVzc3VyZSAodW5pdHMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkh1bWlkaXR5ICh1bml0cyk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGlnaHQgKHVuaXRzKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ob2lzZSAodW5pdHMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkdhcyAodW5pdHMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYSAhPSBudWxsID8gdGhpcy5wcm9wcy5hLm1hcChlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2V9PntlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpIDogPHRkPjwvdGQ+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmIgIT0gbnVsbCA/IHRoaXMucHJvcHMuYi5tYXAoZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtlfT57ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSA6IDx0ZD48L3RkPn1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jICE9IG51bGwgPyB0aGlzLnByb3BzLmMubWFwKGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17ZX0+e2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSkgOiA8dGQ+PC90ZD59XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=