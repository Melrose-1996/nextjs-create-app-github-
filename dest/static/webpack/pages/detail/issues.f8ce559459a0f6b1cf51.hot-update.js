webpackHotUpdate_N_E("pages/detail/issues",{

/***/ "./pages/detail/issues.js":
/*!********************************!*\
  !*** ./pages/detail/issues.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_with_repo_basic_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/with-repo-basic.jsx */ "./components/with-repo-basic.jsx");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\pc\\Desktop\\\u6155\u8BFE\u5B66\u4E60\\nextjs-create-app\\pages\\detail\\issues.js";




function IssueItem(_ref) {
  var issue = _ref.issue;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "jsx-1483408941" + " " + "issue",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "primary",
      size: "small",
      style: {}
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "jsx-1483408941" + " " + "avatar",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: issue.user.avatar_url,
        shape: "square",
        size: 50
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "jsx-1483408941" + " " + "main-info",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h6", {
        className: "jsx-1483408941",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
          className: "jsx-1483408941",
          children: issue.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        className: "jsx-1483408941" + " " + "sub-info",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
          className: "jsx-1483408941",
          children: ["Updataed at ", issue.updated_at]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "1483408941",
      children: ".issue.jsx-1483408941{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding:10px;}.issue.jsx-1483408941:hover{background:#fafafa;}.issue.jsx-1483408941+.issue.jsx-1483408941{border-top:1px solid #eee;}.main-info.jsx-1483408941>h6.jsx-1483408941{max-width:600px;font-size:16px;}.avatar.jsx-1483408941{margin-right:20px;}.sub-info.jsx-1483408941{margin-bottom:0;}.sub-info.jsx-1483408941>span.jsx-1483408941+span.jsx-1483408941{display:inline-block;margin-left:20px;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmtCLEFBR3dCLEFBS00sQUFHTyxBQUdWLEFBSUUsQUFHRixBQUdLLGdCQVROLEFBT2pCLEVBSEEsQ0FWQSxFQWdCbUIsS0FibkIsS0FJQSxPQVVpQixlQUNqQixxQkF2Qm9CLGtCQUNMLGFBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxwY1xcRGVza3RvcFxc5oWV6K++5a2m5LmgXFxuZXh0anMtY3JlYXRlLWFwcFxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgd2l0aFJlcG8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvd2l0aC1yZXBvLWJhc2ljLmpzeFwiO1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiO1xyXG5cclxuZnVuY3Rpb24gSXNzdWVJdGVtKHsgaXNzdWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlXCI+XHJcbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIiBzdHlsZT17e319PjwvQnV0dG9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgIDxBdmF0YXIgc3JjPXtpc3N1ZS51c2VyLmF2YXRhcl91cmx9IHNoYXBlPVwic3F1YXJlXCIgc2l6ZT17NTB9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxyXG4gICAgICAgIDxoNj5cclxuICAgICAgICAgIDxzcGFuPntpc3N1ZS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgPC9oNj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItaW5mb1wiPlxyXG4gICAgICAgICAgPHNwYW4+VXBkYXRhZWQgYXQge2lzc3VlLnVwZGF0ZWRfYXR9PC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuaXNzdWUge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pc3N1ZTpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaXNzdWUgKyAuaXNzdWUge1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYWluLWluZm8gPiBoNiB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN1Yi1pbmZvIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWItaW5mbyA+IHNwYW4gKyBzcGFuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRGV0YWlsKHsgaXNzdWVzIH0pIHtcclxuICBjb25zb2xlLmxvZyhpc3N1ZXMsIFwiKysrKysrKysrKytcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3Vlc1wiPlxyXG4gICAgICAgIHtpc3N1ZXMubWFwKChpc3N1ZSkgPT4gKFxyXG4gICAgICAgICAgPElzc3VlSXRlbSBpc3N1ZT17aXNzdWV9IGtleT17aXNzdWUuaWR9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuaXNzdWVzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5EZXRhaWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeTtcclxuXHJcbiAgY29uc3QgaXNzdWVzUmVzcCA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgLFxyXG4gICAgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVxXHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgaXNzdWVzOiBpc3N1ZXNSZXNwLmRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZXBvKERldGFpbCwgXCJpc3N1ZXNcIik7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\pc\\\\Desktop\\\\\u6155\u8BFE\u5B66\u4E60\\\\nextjs-create-app\\\\pages\\\\detail\\\\issues.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

_c = IssueItem;

function Detail(_ref2) {
  var _this = this;

  var issues = _ref2.issues;
  console.log(issues, "+++++++++++");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "jsx-3345775914" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "jsx-3345775914" + " " + "issues",
      children: issues.map(function (issue) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(IssueItem, {
          issue: issue
        }, issue.id, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "3345775914",
      children: ".issues.jsx-3345775914{border:1px solid #eee;border-radius:5px;margin-bottom:20px;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RFMsQUFHbUMsc0JBQ0osa0JBQ0MsbUJBQ0gsZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHdpdGhSZXBvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYy5qc3hcIjtcclxuXHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcclxuXHJcbmZ1bmN0aW9uIElzc3VlSXRlbSh7IGlzc3VlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxyXG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT1cInNtYWxsXCIgc3R5bGU9e3t9fT48L0J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cclxuICAgICAgICA8aDY+XHJcbiAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgIDwvaDY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWluZm9cIj5cclxuICAgICAgICAgIDxzcGFuPlVwZGF0YWVkIGF0IHtpc3N1ZS51cGRhdGVkX2F0fTwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmlzc3VlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaXNzdWU6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlzc3VlICsgLmlzc3VlIHtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWFpbi1pbmZvID4gaDYge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWItaW5mbyB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERldGFpbCh7IGlzc3VlcyB9KSB7XHJcbiAgY29uc29sZS5sb2coaXNzdWVzLCBcIisrKysrKysrKysrXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZXNcIj5cclxuICAgICAgICB7aXNzdWVzLm1hcCgoaXNzdWUpID0+IChcclxuICAgICAgICAgIDxJc3N1ZUl0ZW0gaXNzdWU9e2lzc3VlfSBrZXk9e2lzc3VlLmlkfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmlzc3VlcyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnk7XHJcblxyXG4gIGNvbnN0IGlzc3Vlc1Jlc3AgPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYCxcclxuICAgIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlcVxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlzc3VlczogaXNzdWVzUmVzcC5kYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVwbyhEZXRhaWwsIFwiaXNzdWVzXCIpO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\pc\\\\Desktop\\\\\u6155\u8BFE\u5B66\u4E60\\\\nextjs-create-app\\\\pages\\\\detail\\\\issues.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

_c2 = Detail;

Detail.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var _ctx$query, owner, name, issuesResp;

    return C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
            _context.next = 3;
            return _lib_api__WEBPACK_IMPORTED_MODULE_7___default.a.request({
              url: "/repos/".concat(owner, "/").concat(name, "/issues")
            }, ctx.req, ctx.req);

          case 3:
            issuesResp = _context.sent;
            return _context.abrupt("return", {
              issues: issuesResp.data
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c3 = Object(_components_with_repo_basic_jsx__WEBPACK_IMPORTED_MODULE_6__["default"])(Detail, "issues"));

var _c, _c2, _c3;

$RefreshReg$(_c, "IssueItem");
$RefreshReg$(_c2, "Detail");
$RefreshReg$(_c3, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6WyJJc3N1ZUl0ZW0iLCJpc3N1ZSIsInVzZXIiLCJhdmF0YXJfdXJsIiwidGl0bGUiLCJ1cGRhdGVkX2F0IiwiRGV0YWlsIiwiaXNzdWVzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJvd25lciIsIm5hbWUiLCJhcGkiLCJyZXF1ZXN0IiwidXJsIiwicmVxIiwiaXNzdWVzUmVzcCIsImRhdGEiLCJ3aXRoUmVwbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFNBQVQsT0FBOEI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDNUIsc0JBQ0U7QUFBQSx3Q0FBZSxPQUFmO0FBQUEsNEJBQ0U7QUFBUSxVQUFJLEVBQUMsU0FBYjtBQUF1QixVQUFJLEVBQUMsT0FBNUI7QUFBb0MsV0FBSyxFQUFFO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsMENBQWUsUUFBZjtBQUFBLDZCQUNFO0FBQVEsV0FBRyxFQUFFQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsVUFBeEI7QUFBb0MsYUFBSyxFQUFDLFFBQTFDO0FBQW1ELFlBQUksRUFBRTtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBS0U7QUFBQSwwQ0FBZSxXQUFmO0FBQUEsOEJBQ0U7QUFBQTtBQUFBLCtCQUNFO0FBQUE7QUFBQSxvQkFBT0YsS0FBSyxDQUFDRztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFBLDRDQUFhLFVBQWI7QUFBQSwrQkFDRTtBQUFBO0FBQUEscUNBQW1CSCxLQUFLLENBQUNJLFVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRDRDs7S0E3Q1FMLFM7O0FBK0NULFNBQVNNLE1BQVQsUUFBNEI7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFNBQVZBLE1BQVU7QUFDMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaLEVBQW9CLGFBQXBCO0FBQ0Esc0JBQ0U7QUFBQSx3Q0FBZSxNQUFmO0FBQUEsNEJBQ0U7QUFBQSwwQ0FBZSxRQUFmO0FBQUEsZ0JBQ0dBLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQUNULEtBQUQ7QUFBQSw0QkFDVixxRUFBQyxTQUFEO0FBQVcsZUFBSyxFQUFFQTtBQUFsQixXQUE4QkEsS0FBSyxDQUFDVSxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBWDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDs7TUFyQlFMLE07O0FBdUJUQSxNQUFNLENBQUNNLGVBQVA7QUFBQSxxVUFBeUIsaUJBQU9DLEdBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUNDQSxHQUFHLENBQUNDLEtBREwsRUFDZkMsS0FEZSxjQUNmQSxLQURlLEVBQ1JDLElBRFEsY0FDUkEsSUFEUTtBQUFBO0FBQUEsbUJBR0VDLCtDQUFHLENBQUNDLE9BQUosQ0FDdkI7QUFDRUMsaUJBQUcsbUJBQVlKLEtBQVosY0FBcUJDLElBQXJCO0FBREwsYUFEdUIsRUFJdkJILEdBQUcsQ0FBQ08sR0FKbUIsRUFLdkJQLEdBQUcsQ0FBQ08sR0FMbUIsQ0FIRjs7QUFBQTtBQUdqQkMsc0JBSGlCO0FBQUEsNkNBVWhCO0FBQ0xkLG9CQUFNLEVBQUVjLFVBQVUsQ0FBQ0M7QUFEZCxhQVZnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFlZSxxRUFBQUMsK0VBQVEsQ0FBQ2pCLE1BQUQsRUFBUyxRQUFULENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbC9pc3N1ZXMuZjhjZTU1OTQ1OWEwZjZiMWNmNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHdpdGhSZXBvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYy5qc3hcIjtcclxuXHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcclxuXHJcbmZ1bmN0aW9uIElzc3VlSXRlbSh7IGlzc3VlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxyXG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT1cInNtYWxsXCIgc3R5bGU9e3t9fT48L0J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cclxuICAgICAgICA8aDY+XHJcbiAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgIDwvaDY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWluZm9cIj5cclxuICAgICAgICAgIDxzcGFuPlVwZGF0YWVkIGF0IHtpc3N1ZS51cGRhdGVkX2F0fTwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmlzc3VlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaXNzdWU6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlzc3VlICsgLmlzc3VlIHtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWFpbi1pbmZvID4gaDYge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWItaW5mbyB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERldGFpbCh7IGlzc3VlcyB9KSB7XHJcbiAgY29uc29sZS5sb2coaXNzdWVzLCBcIisrKysrKysrKysrXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZXNcIj5cclxuICAgICAgICB7aXNzdWVzLm1hcCgoaXNzdWUpID0+IChcclxuICAgICAgICAgIDxJc3N1ZUl0ZW0gaXNzdWU9e2lzc3VlfSBrZXk9e2lzc3VlLmlkfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmlzc3VlcyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnk7XHJcblxyXG4gIGNvbnN0IGlzc3Vlc1Jlc3AgPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHtcclxuICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYCxcclxuICAgIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlcVxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlzc3VlczogaXNzdWVzUmVzcC5kYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVwbyhEZXRhaWwsIFwiaXNzdWVzXCIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9