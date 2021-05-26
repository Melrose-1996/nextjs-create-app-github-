webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/config */ "./node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lru-cache */ "./node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "C:\\Users\\pc\\Desktop\\\u6155\u8BFE\u5B66\u4E60\\nextjs-create-app\\pages\\index.js",
    _s = $RefreshSig$();



var api = __webpack_require__(/*! ../lib/api */ "./lib/api.js");





var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_8___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

 // 存储 tabs 栏的状态,以参数的形式传递下去


 // 加入缓存策略


var cache = new lru_cache__WEBPACK_IMPORTED_MODULE_12___default.a({
  // 表示最长的事件不去使用缓存在里面 key 的数据，就会把该数据删除
  maxAge: 1000 * 60 * 10
}); // const Index = ({ Component, pageProps, reduxStore }) => {
//   // console.log(isLogin);
//   // console.log(userRepos);
//   // console.log(userStaredRepos);
//   return <span>去登录</span>;
// };
// 用于存储传递过来的数据
// 注意：这个是在模块的全局作用域里面的，会一直存在的，永远都会有值
// 所以对于服务端渲染，我们需要做层判断，不应该使用这个全局变量的值

var userLocalRepos, userLocalStaredRepos;
var userFlag;
var isServer = false;

function Index(_ref) {
  _s();

  var _this = this;

  var userRepos = _ref.userRepos,
      userStaredRepos = _ref.userStaredRepos,
      user = _ref.user,
      router = _ref.router;
  var tabKey = router.query.key || "1";

  var handelTabChange = function handelTabChange(activeKey) {
    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/?key=".concat(activeKey));
  }; // 第一进来的时候，如果请求的有数据，就应该把数据缓存起来了
  // 如果不传递参数，则之后在 mounted 的时候调用一次


  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    if (!isServer) {
      // 防止值为 null 的时候也缓存
      // if (userRepos) {
      //   cache.set("userRepos", userRepos);
      // }
      // if (userStaredRepos) {
      //   cache.set("userStaredRepos", userStaredRepos);
      // }
      // 这种方法是不管有没有发起请求获取到数据，一到时间就会刷新数据
      userLocalRepos = userRepos;
      userLocalStaredRepos = userStaredRepos;
      setTimeout(function () {
        userLocalRepos = null;
        userLocalStaredRepos = null;
      }, 1000 * 60 * 10);
    }
  }, [userRepos, userStaredRepos]);

  if (!user || !user.id) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "jsx-3088588873" + " " + "root",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        className: "jsx-3088588873",
        children: "\u4EB2\uFF0C\u60A8\u8FD8\u6CA1\u6709\u767B\u5F55\u54E6~"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        type: "primary",
        href: publicRuntimeConfig.OAUTH_URL,
        children: "\u70B9\u51FB\u767B\u5F55"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3088588873",
        children: ".root.jsx-3088588873{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRVcsQUFHNEIsYUFDQSwwRUFDUyw4RUFDQyxtR0FDSiw2RkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwY1xcRGVza3RvcFxc5oWV6K++5a2m5LmgXFxuZXh0anMtY3JlYXRlLWFwcFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpID0gcmVxdWlyZShcIi4uL2xpYi9hcGlcIik7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24sIFRhYnMgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBNYWlsT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5pbXBvcnQgUmVwbyBmcm9tIFwiLi4vY29tcG9uZW50cy9SZXBvXCI7XHJcblxyXG4vLyDlrZjlgqggdGFicyDmoI/nmoTnirbmgIEs5Lul5Y+C5pWw55qE5b2i5byP5Lyg6YCS5LiL5Y67XHJcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyDliqDlhaXnvJPlrZjnrZbnlaVcclxuaW1wb3J0IExSVSBmcm9tIFwibHJ1LWNhY2hlXCI7XHJcblxyXG5jb25zdCBjYWNoZSA9IG5ldyBMUlUoe1xyXG4gIC8vIOihqOekuuacgOmVv+eahOS6i+S7tuS4jeWOu+S9v+eUqOe8k+WtmOWcqOmHjOmdoiBrZXkg55qE5pWw5o2u77yM5bCx5Lya5oqK6K+l5pWw5o2u5Yig6ZmkXHJcbiAgbWF4QWdlOiAxMDAwICogNjAgKiAxMCxcclxufSk7XHJcblxyXG4vLyBjb25zdCBJbmRleCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByZWR1eFN0b3JlIH0pID0+IHtcclxuLy8gICAvLyBjb25zb2xlLmxvZyhpc0xvZ2luKTtcclxuLy8gICAvLyBjb25zb2xlLmxvZyh1c2VyUmVwb3MpO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHVzZXJTdGFyZWRSZXBvcyk7XHJcbi8vICAgcmV0dXJuIDxzcGFuPuWOu+eZu+W9lTwvc3Bhbj47XHJcbi8vIH07XHJcblxyXG4vLyDnlKjkuo7lrZjlgqjkvKDpgJLov4fmnaXnmoTmlbDmja5cclxuLy8g5rOo5oSP77ya6L+Z5Liq5piv5Zyo5qih5Z2X55qE5YWo5bGA5L2c55So5Z+f6YeM6Z2i55qE77yM5Lya5LiA55u05a2Y5Zyo55qE77yM5rC46L+c6YO95Lya5pyJ5YC8XHJcbi8vIOaJgOS7peWvueS6juacjeWKoeerr+a4suafk++8jOaIkeS7rOmcgOimgeWBmuWxguWIpOaWre+8jOS4jeW6lOivpeS9v+eUqOi/meS4quWFqOWxgOWPmOmHj+eahOWAvFxyXG5cclxubGV0IHVzZXJMb2NhbFJlcG9zLCB1c2VyTG9jYWxTdGFyZWRSZXBvcztcclxuXHJcbmxldCB1c2VyRmxhZztcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHsgdXNlclJlcG9zLCB1c2VyU3RhcmVkUmVwb3MsIHVzZXIsIHJvdXRlciB9KSB7XHJcbiAgY29uc3QgdGFiS2V5ID0gcm91dGVyLnF1ZXJ5LmtleSB8fCBcIjFcIjtcclxuXHJcbiAgY29uc3QgaGFuZGVsVGFiQ2hhbmdlID0gKGFjdGl2ZUtleSkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goYC8/a2V5PSR7YWN0aXZlS2V5fWApO1xyXG4gIH07XHJcblxyXG4gIC8vIOesrOS4gOi/m+adpeeahOaXtuWAme+8jOWmguaenOivt+axgueahOacieaVsOaNru+8jOWwseW6lOivpeaKiuaVsOaNrue8k+WtmOi1t+adpeS6hlxyXG4gIC8vIOWmguaenOS4jeS8oOmAkuWPguaVsO+8jOWImeS5i+WQjuWcqCBtb3VudGVkIOeahOaXtuWAmeiwg+eUqOS4gOasoVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzU2VydmVyKSB7XHJcbiAgICAgIC8vIOmYsuatouWAvOS4uiBudWxsIOeahOaXtuWAmeS5n+e8k+WtmFxyXG4gICAgICAvLyBpZiAodXNlclJlcG9zKSB7XHJcbiAgICAgIC8vICAgY2FjaGUuc2V0KFwidXNlclJlcG9zXCIsIHVzZXJSZXBvcyk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gaWYgKHVzZXJTdGFyZWRSZXBvcykge1xyXG4gICAgICAvLyAgIGNhY2hlLnNldChcInVzZXJTdGFyZWRSZXBvc1wiLCB1c2VyU3RhcmVkUmVwb3MpO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICAvLyDov5nnp43mlrnms5XmmK/kuI3nrqHmnInmsqHmnInlj5Hotbfor7fmsYLojrflj5bliLDmlbDmja7vvIzkuIDliLDml7bpl7TlsLHkvJrliLfmlrDmlbDmja5cclxuICAgICAgdXNlckxvY2FsUmVwb3MgPSB1c2VyUmVwb3M7XHJcbiAgICAgIHVzZXJMb2NhbFN0YXJlZFJlcG9zID0gdXNlclN0YXJlZFJlcG9zO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB1c2VyTG9jYWxSZXBvcyA9IG51bGw7XHJcbiAgICAgICAgdXNlckxvY2FsU3RhcmVkUmVwb3MgPSBudWxsO1xyXG4gICAgICB9LCAxMDAwICogNjAgKiAxMCk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJSZXBvcywgdXNlclN0YXJlZFJlcG9zXSk7XHJcblxyXG4gIGlmICghdXNlciB8fCAhdXNlci5pZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgPHA+5Lqy77yM5oKo6L+Y5rKh5pyJ55m75b2V5ZOmfjwvcD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHJlZj17cHVibGljUnVudGltZUNvbmZpZy5PQVVUSF9VUkx9PlxyXG4gICAgICAgICAg54K55Ye755m75b2VXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cclxuICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJfdXJsfSBjbGFzc05hbWU9XCJhdmF0YXJcIiBhbHQ9XCJ1c2VyIGF2YXRhclwiIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57dXNlci5sb2dpbiB8fCBcIi0tXCJ9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dXNlci5uYW1lIHx8IFwiLS1cIn08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e3VzZXIuYmlvIHx8IFwiLS1cIn08L3NwYW4+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgIDxNYWlsT3V0bGluZWQgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19IC8+XHJcbiAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7dXNlci5lbWFpbH1gfT57dXNlci5lbWFpbCB8fCBcIi0tXCJ9PC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXBvc1wiPlxyXG4gICAgICAgIDxUYWJzIGFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGVsVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDnmoTku5PlupNcIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgIHt1c2VyUmVwb3MubWFwKChyZXBvKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfT48L1JlcG8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOWFs+azqOeahOS7k+W6k1wiIGtleT1cIjJcIj5cclxuICAgICAgICAgICAge3VzZXJTdGFyZWRSZXBvcy5tYXAoKHJlcG8pID0+IChcclxuICAgICAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvfSBrZXk9e3JlcG8uaWR9PjwvUmVwbz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvZ2luIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5iaW8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnVzZXItcmVwb3Mge1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuLy8g5rOo5oSP5oiR5Lus5Zyo57uE5Lu25Lit77yIZ2V0SW5pdGlhbFByb3Bz77yJ5Lit77yM5Y+q5Lya5L2/55So5YiwIHJlcXVlc3Qg77yM5Zug5Li6IHJlcXVlc3Qg5Lya5biu5Yqp5oiR5Lus5Y675Yik5pat5piv5a6i5oi356uv6L+Y5piv5pyN5Yqh56uvXHJcblxyXG4vLyDms6jmhI8gZ2V0SW5pdGlhbFByb3BzIOS8muWcqOWuouaIt+err+S4jeWQjOmhtemdoui3s+i9rOeahOaXtuWAmeS9v+eUqO+8jOWQjOagt+acjeWKoeerr+WmguaenOaIkeS7rOiuv+mXrueahOaYryBpbmRleCDov5nkuKrpobXpnaLvvIzkuZ/kvJrosIPnlKggZ2V0SW5pdGlhbFByb3Bz77yM5Zyo5pyN5Yqh56uv5riy5p+T55qE5pe25YCZ6LCD55So55qE5pe25YCZ77yM5oiR5Lus55qE6L+Q6KGM546v5aKD5aSE5LqOIG5vZGUuanMg546v5aKD77yM6ICM5LiN5piv5rWP6KeI5Zmo55qE546v5aKD77yM5aaC5p6c5oiR5Lus5ZyoIG5vZGUuanMg55qE546v5aKD5LiL6K+35rGC5bCx5Lya5Ye6546w6K+35rGC55qE5pivIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8g6L+Z5qC355qE5Zyw5Z2A77yM5omA5Lul5Lya5aSx6LSl77yI6buY6K6k55qE56uv5Y+j5pivODDvvIlcclxuXHJcbi8vIOazqOaEj+i/memHjOaYryBjdHgg6ICM5LiN5pivIHtjdHh9XHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBpZiAoIXVzZXJGbGFnIHx8ICF1c2VyRmxhZy5pZCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuICAvLyBpZiAoY3R4LnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAvLyByZXR1cm4ge307XHJcbiAgLy8gfVxyXG4gIC8vIGNvbnNvbGUubG9nKGN0eCwgMzMzMyk7XHJcbiAgLy8gcmV0dXJuIHt9O1xyXG4gIC8vIOaKpSBFcnJvcjogY29ubmVjdCBFQ09OTlJFRlVTRUQgMTI3LjAuMC4xOjgwIOeahOmUmeivr1xyXG4gIC8vIOWmguaenOaYr+WcqOa1j+iniOWZqOmHjOmdouWPkemAgeeahO+8jOS8muagueaNruaIkeS7rOaPkOS+m+eahOi3r+W+hOS8muiHquWKqOWKoOS4iuaIkeS7rOW9k+WJjee9keermeeahOWfn+WQje+8iOWwseaYr2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC/vvInmiYDku6XlroPlrozmlbTor7fmsYLot6/lvoTlsLHmmK8gaHR0cDovL2xvY2FsaG9zdDozMDAwL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3RcclxuICAvLyDlpoLmnpzmmK/lnKjmnI3liqHnq6/muLLmn5PnmoTml7blgJnov5vooYzmiafooYznmoTor53vvIzmiYDku6XmsqHmnInmtY/op4jlmajph4zpnaLnmoTln5/lkI3nmoTvvIzov5nkuKrml7blgJnor7fmsYLnmoTot6/lvoToh6rliqjlnKggYXhpb3Mg6YeM6Z2i5aKe5Yqg55qEIGh0dHA6Ly8xMjcuMC4wLjHvvIjpu5jorqQ4MOerr+WPo++8iS9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN077yM6L+Z5Liq5pe25YCZ5bCx5LiN5a+55LqG77yM5oiR5LusIDgwIOerr+WPo+ayoeacieWQr+WKqO+8jOS5n+S4jeaYr+aIkeS7rOaDs+ivt+axgueahOWcsOWdgFxyXG4gIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zXHJcbiAgLy8gICAuZ2V0KFwiL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3RcIilcclxuICAvLyAgIC50aGVuKChyZXNwKSA9PiBjb25zb2xlLmxvZyhyZXNwKSk7XHJcblxyXG4gIC8vIOazqOaEjyByZXEg5ZKMIHJlcyDlj6rmnInlnKjmnI3liqHnq6/muLLmn5PnmoTml7blgJnmiY3kvJrmnIlcclxuXHJcbiAgLy8g5rOo5oSP5LiA5pem55m75Ye65LqG77yM5oiR5Lus6ZyA6KaB5YGa5Liq6K+35rGC55qE5Yik5patXHJcbiAgLy8g5Y+v5Lul6YCa6L+HIGN0eC5yZXEg5ZKMIGN0eC5yZXMg77yIbm9kZS5qcyDlr7nosaHvvIzkuI3kvJrlrZjlnKjkuo7mtY/op4jlmajov5DooYznjq/looPph4zpnaLnmoTvvInmnaXov5vooYzliKTmlq3vvIzkvYbmmK/lnKjnrKblkIjlnKjmnI3liqHnq6/lj6/ku6XliKTmlq3jgILlnKjlrqLmiLfnq6/ov5vooYzliKTmlq3vvIzmmK/msqHmnIkgY3R4IOWvueixoeeahOOAglxyXG5cclxuICBpZiAoIWlzU2VydmVyKSB7XHJcbiAgICAvLyBpZiAoY2FjaGUuZ2V0KFwidXNlclJlcG9zXCIpICYmIGNhY2hlLmdldChcInVzZXJTdGFyZWRSZXBvc1wiKSkge1xyXG4gICAgLy8gICByZXR1cm4ge1xyXG4gICAgLy8gICAgIHVzZXJSZXBvczogY2FjaGUuZ2V0KFwidXNlclJlcG9zXCIpLFxyXG4gICAgLy8gICAgIHVzZXJTdGFyZWRSZXBvczogY2FjaGUuZ2V0KFwidXNlclN0YXJlZFJlcG9zXCIpLFxyXG4gICAgLy8gICB9O1xyXG4gICAgLy8gfVxyXG4gICAgaWYgKHVzZXJMb2NhbFJlcG9zICYmIHVzZXJMb2NhbFN0YXJlZFJlcG9zKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlclJlcG9zOiB1c2VyTG9jYWxSZXBvcyxcclxuICAgICAgICB1c2VyU3RhcmVkUmVwb3M6IHVzZXJMb2NhbFN0YXJlZFJlcG9zLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5Y+R6LW36K+35rGC77yM5YiX5Ye65L2g5omA5pyJ55qE5Yib5bu655qE5LuT5bqTXHJcbiAgY29uc3QgdXNlclJlcG9zID0gYXdhaXQgYXBpLnJlcXVlc3QoeyB1cmw6IFwiL3VzZXIvcmVwb3NcIiB9LCBjdHgucmVxLCBjdHgucmVzKTtcclxuICAvLyDooqvlhbPms6jnmoTku5PlupNcclxuICBjb25zdCB1c2VyU3RhcmVkUmVwb3MgPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHsgdXJsOiBcIi9naXN0cy9zdGFycmVkXCIgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzTG9naW46IHRydWUsXHJcbiAgICB1c2VyUmVwb3M6IHVzZXJSZXBvcy5kYXRhLFxyXG4gICAgdXNlclN0YXJlZFJlcG9zOiB1c2VyU3RhcmVkUmVwb3MuZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuLy8g5rOo5oSP5Zyo5YaZIHdpdGhSb3V0ZXIg5ZKMIGNvbm5lY3Qg55qE5pe25YCZ77yM6ZyA6KaB5oqKIHdpdGhSb3V0ZXIg5pS+5Zyo5aSW6Z2iXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoXHJcbiAgY29ubmVjdChmdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xyXG4gICAgdXNlckZsYWcgPSBzdGF0ZS51c2VyO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcjogc3RhdGUudXNlcixcclxuICAgIH07XHJcbiAgfSkoSW5kZXgpXHJcbik7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\pc\\\\Desktop\\\\\u6155\u8BFE\u5B66\u4E60\\\\nextjs-create-app\\\\pages\\\\index.js */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "jsx-4069790378" + " " + "root",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "jsx-4069790378" + " " + "user-info",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        src: user.avatar_url,
        alt: "user avatar",
        className: "jsx-4069790378" + " " + "avatar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        className: "jsx-4069790378" + " " + "login",
        children: user.login || "--"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        className: "jsx-4069790378" + " " + "name",
        children: user.name || "--"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        className: "jsx-4069790378" + " " + "bio",
        children: user.bio || "--"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        className: "jsx-4069790378" + " " + "email",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["MailOutlined"], {
          style: {
            marginRight: 10
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
          href: "mailto:".concat(user.email),
          className: "jsx-4069790378",
          children: user.email || "--"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "jsx-4069790378" + " " + "user-repos",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a, {
        activeKey: tabKey,
        onChange: handelTabChange,
        animated: false,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a.TabPane, {
          tab: "\u4F60\u7684\u4ED3\u5E93",
          children: userRepos.map(function (repo) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Repo__WEBPACK_IMPORTED_MODULE_9__["default"], {
              repo: repo
            }, repo.id, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, _this);
          })
        }, "1", false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a.TabPane, {
          tab: "\u4F60\u5173\u6CE8\u7684\u4ED3\u5E93",
          children: userStaredRepos.map(function (repo) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Repo__WEBPACK_IMPORTED_MODULE_9__["default"], {
              repo: repo
            }, repo.id, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, _this);
          })
        }, "2", false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "4069790378",
      children: ".root.jsx-4069790378{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:20px 0;}.user-info.jsx-4069790378{width:200px;margin-right:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.login.jsx-4069790378{font-weight:800;font-size:20px;margin-top:20px;}.name.jsx-4069790378{margin-top:20px;color:#333;}.bio.jsx-4069790378{margin-top:20px;color:#333;}.avatar.jsx-4069790378{width:100%;border-radius:5px;}.user-repos.jsx-4069790378{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOaFleivvuWtpuS5oFxcbmV4dGpzLWNyZWF0ZS1hcHBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SFMsQUFHMEIsQUFLRCxBQU9JLEFBS0EsQUFJQSxBQUlMLEFBSUMsV0FITSxDQXBCQSxJQU9ILEFBS0osQUFJQSxXQUhiLEFBSUEsRUFJQSxDQXBCZ0IsQ0FPRSxnQkFDbEIsd0JBZUEsR0E3QnlCLFlBT1YsMEVBQ1MsdUJBUFAsZUFDakIsd0NBT0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxwY1xcRGVza3RvcFxc5oWV6K++5a2m5LmgXFxuZXh0anMtY3JlYXRlLWFwcFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpID0gcmVxdWlyZShcIi4uL2xpYi9hcGlcIik7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24sIFRhYnMgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBNYWlsT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5pbXBvcnQgUmVwbyBmcm9tIFwiLi4vY29tcG9uZW50cy9SZXBvXCI7XHJcblxyXG4vLyDlrZjlgqggdGFicyDmoI/nmoTnirbmgIEs5Lul5Y+C5pWw55qE5b2i5byP5Lyg6YCS5LiL5Y67XHJcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyDliqDlhaXnvJPlrZjnrZbnlaVcclxuaW1wb3J0IExSVSBmcm9tIFwibHJ1LWNhY2hlXCI7XHJcblxyXG5jb25zdCBjYWNoZSA9IG5ldyBMUlUoe1xyXG4gIC8vIOihqOekuuacgOmVv+eahOS6i+S7tuS4jeWOu+S9v+eUqOe8k+WtmOWcqOmHjOmdoiBrZXkg55qE5pWw5o2u77yM5bCx5Lya5oqK6K+l5pWw5o2u5Yig6ZmkXHJcbiAgbWF4QWdlOiAxMDAwICogNjAgKiAxMCxcclxufSk7XHJcblxyXG4vLyBjb25zdCBJbmRleCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByZWR1eFN0b3JlIH0pID0+IHtcclxuLy8gICAvLyBjb25zb2xlLmxvZyhpc0xvZ2luKTtcclxuLy8gICAvLyBjb25zb2xlLmxvZyh1c2VyUmVwb3MpO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHVzZXJTdGFyZWRSZXBvcyk7XHJcbi8vICAgcmV0dXJuIDxzcGFuPuWOu+eZu+W9lTwvc3Bhbj47XHJcbi8vIH07XHJcblxyXG4vLyDnlKjkuo7lrZjlgqjkvKDpgJLov4fmnaXnmoTmlbDmja5cclxuLy8g5rOo5oSP77ya6L+Z5Liq5piv5Zyo5qih5Z2X55qE5YWo5bGA5L2c55So5Z+f6YeM6Z2i55qE77yM5Lya5LiA55u05a2Y5Zyo55qE77yM5rC46L+c6YO95Lya5pyJ5YC8XHJcbi8vIOaJgOS7peWvueS6juacjeWKoeerr+a4suafk++8jOaIkeS7rOmcgOimgeWBmuWxguWIpOaWre+8jOS4jeW6lOivpeS9v+eUqOi/meS4quWFqOWxgOWPmOmHj+eahOWAvFxyXG5cclxubGV0IHVzZXJMb2NhbFJlcG9zLCB1c2VyTG9jYWxTdGFyZWRSZXBvcztcclxuXHJcbmxldCB1c2VyRmxhZztcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHsgdXNlclJlcG9zLCB1c2VyU3RhcmVkUmVwb3MsIHVzZXIsIHJvdXRlciB9KSB7XHJcbiAgY29uc3QgdGFiS2V5ID0gcm91dGVyLnF1ZXJ5LmtleSB8fCBcIjFcIjtcclxuXHJcbiAgY29uc3QgaGFuZGVsVGFiQ2hhbmdlID0gKGFjdGl2ZUtleSkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goYC8/a2V5PSR7YWN0aXZlS2V5fWApO1xyXG4gIH07XHJcblxyXG4gIC8vIOesrOS4gOi/m+adpeeahOaXtuWAme+8jOWmguaenOivt+axgueahOacieaVsOaNru+8jOWwseW6lOivpeaKiuaVsOaNrue8k+WtmOi1t+adpeS6hlxyXG4gIC8vIOWmguaenOS4jeS8oOmAkuWPguaVsO+8jOWImeS5i+WQjuWcqCBtb3VudGVkIOeahOaXtuWAmeiwg+eUqOS4gOasoVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzU2VydmVyKSB7XHJcbiAgICAgIC8vIOmYsuatouWAvOS4uiBudWxsIOeahOaXtuWAmeS5n+e8k+WtmFxyXG4gICAgICAvLyBpZiAodXNlclJlcG9zKSB7XHJcbiAgICAgIC8vICAgY2FjaGUuc2V0KFwidXNlclJlcG9zXCIsIHVzZXJSZXBvcyk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gaWYgKHVzZXJTdGFyZWRSZXBvcykge1xyXG4gICAgICAvLyAgIGNhY2hlLnNldChcInVzZXJTdGFyZWRSZXBvc1wiLCB1c2VyU3RhcmVkUmVwb3MpO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICAvLyDov5nnp43mlrnms5XmmK/kuI3nrqHmnInmsqHmnInlj5Hotbfor7fmsYLojrflj5bliLDmlbDmja7vvIzkuIDliLDml7bpl7TlsLHkvJrliLfmlrDmlbDmja5cclxuICAgICAgdXNlckxvY2FsUmVwb3MgPSB1c2VyUmVwb3M7XHJcbiAgICAgIHVzZXJMb2NhbFN0YXJlZFJlcG9zID0gdXNlclN0YXJlZFJlcG9zO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB1c2VyTG9jYWxSZXBvcyA9IG51bGw7XHJcbiAgICAgICAgdXNlckxvY2FsU3RhcmVkUmVwb3MgPSBudWxsO1xyXG4gICAgICB9LCAxMDAwICogNjAgKiAxMCk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJSZXBvcywgdXNlclN0YXJlZFJlcG9zXSk7XHJcblxyXG4gIGlmICghdXNlciB8fCAhdXNlci5pZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgPHA+5Lqy77yM5oKo6L+Y5rKh5pyJ55m75b2V5ZOmfjwvcD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHJlZj17cHVibGljUnVudGltZUNvbmZpZy5PQVVUSF9VUkx9PlxyXG4gICAgICAgICAg54K55Ye755m75b2VXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cclxuICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJfdXJsfSBjbGFzc05hbWU9XCJhdmF0YXJcIiBhbHQ9XCJ1c2VyIGF2YXRhclwiIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57dXNlci5sb2dpbiB8fCBcIi0tXCJ9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dXNlci5uYW1lIHx8IFwiLS1cIn08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e3VzZXIuYmlvIHx8IFwiLS1cIn08L3NwYW4+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgIDxNYWlsT3V0bGluZWQgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19IC8+XHJcbiAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7dXNlci5lbWFpbH1gfT57dXNlci5lbWFpbCB8fCBcIi0tXCJ9PC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXBvc1wiPlxyXG4gICAgICAgIDxUYWJzIGFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGVsVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDnmoTku5PlupNcIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgIHt1c2VyUmVwb3MubWFwKChyZXBvKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfT48L1JlcG8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOWFs+azqOeahOS7k+W6k1wiIGtleT1cIjJcIj5cclxuICAgICAgICAgICAge3VzZXJTdGFyZWRSZXBvcy5tYXAoKHJlcG8pID0+IChcclxuICAgICAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvfSBrZXk9e3JlcG8uaWR9PjwvUmVwbz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvZ2luIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5iaW8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnVzZXItcmVwb3Mge1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuLy8g5rOo5oSP5oiR5Lus5Zyo57uE5Lu25Lit77yIZ2V0SW5pdGlhbFByb3Bz77yJ5Lit77yM5Y+q5Lya5L2/55So5YiwIHJlcXVlc3Qg77yM5Zug5Li6IHJlcXVlc3Qg5Lya5biu5Yqp5oiR5Lus5Y675Yik5pat5piv5a6i5oi356uv6L+Y5piv5pyN5Yqh56uvXHJcblxyXG4vLyDms6jmhI8gZ2V0SW5pdGlhbFByb3BzIOS8muWcqOWuouaIt+err+S4jeWQjOmhtemdoui3s+i9rOeahOaXtuWAmeS9v+eUqO+8jOWQjOagt+acjeWKoeerr+WmguaenOaIkeS7rOiuv+mXrueahOaYryBpbmRleCDov5nkuKrpobXpnaLvvIzkuZ/kvJrosIPnlKggZ2V0SW5pdGlhbFByb3Bz77yM5Zyo5pyN5Yqh56uv5riy5p+T55qE5pe25YCZ6LCD55So55qE5pe25YCZ77yM5oiR5Lus55qE6L+Q6KGM546v5aKD5aSE5LqOIG5vZGUuanMg546v5aKD77yM6ICM5LiN5piv5rWP6KeI5Zmo55qE546v5aKD77yM5aaC5p6c5oiR5Lus5ZyoIG5vZGUuanMg55qE546v5aKD5LiL6K+35rGC5bCx5Lya5Ye6546w6K+35rGC55qE5pivIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8g6L+Z5qC355qE5Zyw5Z2A77yM5omA5Lul5Lya5aSx6LSl77yI6buY6K6k55qE56uv5Y+j5pivODDvvIlcclxuXHJcbi8vIOazqOaEj+i/memHjOaYryBjdHgg6ICM5LiN5pivIHtjdHh9XHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBpZiAoIXVzZXJGbGFnIHx8ICF1c2VyRmxhZy5pZCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuICAvLyBpZiAoY3R4LnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAvLyByZXR1cm4ge307XHJcbiAgLy8gfVxyXG4gIC8vIGNvbnNvbGUubG9nKGN0eCwgMzMzMyk7XHJcbiAgLy8gcmV0dXJuIHt9O1xyXG4gIC8vIOaKpSBFcnJvcjogY29ubmVjdCBFQ09OTlJFRlVTRUQgMTI3LjAuMC4xOjgwIOeahOmUmeivr1xyXG4gIC8vIOWmguaenOaYr+WcqOa1j+iniOWZqOmHjOmdouWPkemAgeeahO+8jOS8muagueaNruaIkeS7rOaPkOS+m+eahOi3r+W+hOS8muiHquWKqOWKoOS4iuaIkeS7rOW9k+WJjee9keermeeahOWfn+WQje+8iOWwseaYr2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC/vvInmiYDku6XlroPlrozmlbTor7fmsYLot6/lvoTlsLHmmK8gaHR0cDovL2xvY2FsaG9zdDozMDAwL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3RcclxuICAvLyDlpoLmnpzmmK/lnKjmnI3liqHnq6/muLLmn5PnmoTml7blgJnov5vooYzmiafooYznmoTor53vvIzmiYDku6XmsqHmnInmtY/op4jlmajph4zpnaLnmoTln5/lkI3nmoTvvIzov5nkuKrml7blgJnor7fmsYLnmoTot6/lvoToh6rliqjlnKggYXhpb3Mg6YeM6Z2i5aKe5Yqg55qEIGh0dHA6Ly8xMjcuMC4wLjHvvIjpu5jorqQ4MOerr+WPo++8iS9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN077yM6L+Z5Liq5pe25YCZ5bCx5LiN5a+55LqG77yM5oiR5LusIDgwIOerr+WPo+ayoeacieWQr+WKqO+8jOS5n+S4jeaYr+aIkeS7rOaDs+ivt+axgueahOWcsOWdgFxyXG4gIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zXHJcbiAgLy8gICAuZ2V0KFwiL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3RcIilcclxuICAvLyAgIC50aGVuKChyZXNwKSA9PiBjb25zb2xlLmxvZyhyZXNwKSk7XHJcblxyXG4gIC8vIOazqOaEjyByZXEg5ZKMIHJlcyDlj6rmnInlnKjmnI3liqHnq6/muLLmn5PnmoTml7blgJnmiY3kvJrmnIlcclxuXHJcbiAgLy8g5rOo5oSP5LiA5pem55m75Ye65LqG77yM5oiR5Lus6ZyA6KaB5YGa5Liq6K+35rGC55qE5Yik5patXHJcbiAgLy8g5Y+v5Lul6YCa6L+HIGN0eC5yZXEg5ZKMIGN0eC5yZXMg77yIbm9kZS5qcyDlr7nosaHvvIzkuI3kvJrlrZjlnKjkuo7mtY/op4jlmajov5DooYznjq/looPph4zpnaLnmoTvvInmnaXov5vooYzliKTmlq3vvIzkvYbmmK/lnKjnrKblkIjlnKjmnI3liqHnq6/lj6/ku6XliKTmlq3jgILlnKjlrqLmiLfnq6/ov5vooYzliKTmlq3vvIzmmK/msqHmnIkgY3R4IOWvueixoeeahOOAglxyXG5cclxuICBpZiAoIWlzU2VydmVyKSB7XHJcbiAgICAvLyBpZiAoY2FjaGUuZ2V0KFwidXNlclJlcG9zXCIpICYmIGNhY2hlLmdldChcInVzZXJTdGFyZWRSZXBvc1wiKSkge1xyXG4gICAgLy8gICByZXR1cm4ge1xyXG4gICAgLy8gICAgIHVzZXJSZXBvczogY2FjaGUuZ2V0KFwidXNlclJlcG9zXCIpLFxyXG4gICAgLy8gICAgIHVzZXJTdGFyZWRSZXBvczogY2FjaGUuZ2V0KFwidXNlclN0YXJlZFJlcG9zXCIpLFxyXG4gICAgLy8gICB9O1xyXG4gICAgLy8gfVxyXG4gICAgaWYgKHVzZXJMb2NhbFJlcG9zICYmIHVzZXJMb2NhbFN0YXJlZFJlcG9zKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlclJlcG9zOiB1c2VyTG9jYWxSZXBvcyxcclxuICAgICAgICB1c2VyU3RhcmVkUmVwb3M6IHVzZXJMb2NhbFN0YXJlZFJlcG9zLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5Y+R6LW36K+35rGC77yM5YiX5Ye65L2g5omA5pyJ55qE5Yib5bu655qE5LuT5bqTXHJcbiAgY29uc3QgdXNlclJlcG9zID0gYXdhaXQgYXBpLnJlcXVlc3QoeyB1cmw6IFwiL3VzZXIvcmVwb3NcIiB9LCBjdHgucmVxLCBjdHgucmVzKTtcclxuICAvLyDooqvlhbPms6jnmoTku5PlupNcclxuICBjb25zdCB1c2VyU3RhcmVkUmVwb3MgPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHsgdXJsOiBcIi9naXN0cy9zdGFycmVkXCIgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzTG9naW46IHRydWUsXHJcbiAgICB1c2VyUmVwb3M6IHVzZXJSZXBvcy5kYXRhLFxyXG4gICAgdXNlclN0YXJlZFJlcG9zOiB1c2VyU3RhcmVkUmVwb3MuZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuLy8g5rOo5oSP5Zyo5YaZIHdpdGhSb3V0ZXIg5ZKMIGNvbm5lY3Qg55qE5pe25YCZ77yM6ZyA6KaB5oqKIHdpdGhSb3V0ZXIg5pS+5Zyo5aSW6Z2iXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoXHJcbiAgY29ubmVjdChmdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xyXG4gICAgdXNlckZsYWcgPSBzdGF0ZS51c2VyO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcjogc3RhdGUudXNlcixcclxuICAgIH07XHJcbiAgfSkoSW5kZXgpXHJcbik7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\pc\\\\Desktop\\\\\u6155\u8BFE\u5B66\u4E60\\\\nextjs-create-app\\\\pages\\\\index.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 5
  }, this);
} // 注意我们在组件中（getInitialProps）中，只会使用到 request ，因为 request 会帮助我们去判断是客户端还是服务端
// 注意 getInitialProps 会在客户端不同页面跳转的时候使用，同样服务端如果我们访问的是 index 这个页面，也会调用 getInitialProps，在服务端渲染的时候调用的时候，我们的运行环境处于 node.js 环境，而不是浏览器的环境，如果我们在 node.js 的环境下请求就会出现请求的是 http://localhost:3000/ 这样的地址，所以会失败（默认的端口是80）
// 注意这里是 ctx 而不是 {ctx}


_s(Index, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Index;

Index.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var userRepos, userStaredRepos;
    return C_Users_pc_Desktop_nextjs_create_app_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!userFlag || !userFlag.id)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", {});

          case 2:
            if (isServer) {
              _context.next = 5;
              break;
            }

            if (!(userLocalRepos && userLocalStaredRepos)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", {
              userRepos: userLocalRepos,
              userStaredRepos: userLocalStaredRepos
            });

          case 5:
            _context.next = 7;
            return api.request({
              url: "/user/repos"
            }, ctx.req, ctx.res);

          case 7:
            userRepos = _context.sent;
            _context.next = 10;
            return api.request({
              url: "/gists/starred"
            }, ctx.req, ctx.res);

          case 10:
            userStaredRepos = _context.sent;
            return _context.abrupt("return", {
              isLogin: true,
              userRepos: userRepos.data,
              userStaredRepos: userStaredRepos.data
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}(); // 注意在写 withRouter 和 connect 的时候，需要把 withRouter 放在外面


/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(function mapState(state) {
  userFlag = state.user;
  return {
    user: state.user
  };
})(Index)));

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiYXBpIiwicmVxdWlyZSIsImdldENvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJjYWNoZSIsIkxSVSIsIm1heEFnZSIsInVzZXJMb2NhbFJlcG9zIiwidXNlckxvY2FsU3RhcmVkUmVwb3MiLCJ1c2VyRmxhZyIsImlzU2VydmVyIiwiSW5kZXgiLCJ1c2VyUmVwb3MiLCJ1c2VyU3RhcmVkUmVwb3MiLCJ1c2VyIiwicm91dGVyIiwidGFiS2V5IiwicXVlcnkiLCJrZXkiLCJoYW5kZWxUYWJDaGFuZ2UiLCJhY3RpdmVLZXkiLCJSb3V0ZXIiLCJwdXNoIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImlkIiwiT0FVVEhfVVJMIiwiYXZhdGFyX3VybCIsImxvZ2luIiwibmFtZSIsImJpbyIsIm1hcmdpblJpZ2h0IiwiZW1haWwiLCJtYXAiLCJyZXBvIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVxdWVzdCIsInVybCIsInJlcSIsInJlcyIsImlzTG9naW4iLCJkYXRhIiwid2l0aFJvdXRlciIsImNvbm5lY3QiLCJtYXBTdGF0ZSIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFuQjs7QUFHQTtBQUVBO0FBRUE7O2lCQUNnQ0Msa0RBQVMsRTtJQUFqQ0MsbUIsY0FBQUEsbUI7O0NBSVI7O0FBQ0E7Q0FJQTs7QUFDQTtBQUVBLElBQU1DLEtBQUssR0FBRyxJQUFJQyxpREFBSixDQUFRO0FBQ3BCO0FBQ0FDLFFBQU0sRUFBRSxPQUFPLEVBQVAsR0FBWTtBQUZBLENBQVIsQ0FBZCxDLENBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUlDLGNBQUosRUFBb0JDLG9CQUFwQjtBQUVBLElB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N0JXOztBQUFBO0FBQUE7QUFBQSxtQkFxQ0VSLEdBQUcsQ0FBQ3FDLE9BQUosQ0FBWTtBQUFFQyxpQkFBRyxFQUFFO0FBQVAsYUFBWixFQUFvQ0YsR0FBRyxDQUFDRyxHQUF4QyxFQUE2Q0gsR0FBRyxDQUFDSSxHQUFqRCxDQXJDRjs7QUFBQTtBQXFDaEI1QixxQkFyQ2dCO0FBQUE7QUFBQSxtQkF1Q1FaLEdBQUcsQ0FBQ3FDLE9BQUosQ0FDNUI7QUFBRUMsaUJBQUcsRUFBRTtBQUFQLGFBRDRCLEVBRTVCRixHQUFHLENBQUNHLEdBRndCLEVBRzVCSCxHQUFHLENBQUNJLEdBSHdCLENBdkNSOztBQUFBO0FBdUNoQjNCLDJCQXZDZ0I7QUFBQSw2Q0E2Q2Y7QUFDTDRCLHFCQUFPLEVBQUUsSUFESjtBQUVMN0IsdUJBQVMsRUFBRUEsU0FBUyxDQUFDOEIsSUFGaEI7QUFHTDdCLDZCQUFlLEVBQUVBLGVBQWUsQ0FBQzZCO0FBSDVCLGFBN0NlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBLEksQ0FvREE7OztBQUNlQyw4SEFBVSxDQUN2QkMsMkRBQU8sQ0FBQyxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUMvQnJDLFVBQVEsR0FBR3FDLEtBQUssQ0FBQ2hDLElBQWpCO0FBQ0EsU0FBTztBQUNMQSxRQUFJLEVBQUVnQyxLQUFLLENBQUNoQztBQURQLEdBQVA7QUFHRCxDQUxNLENBQVAsQ0FLR0gsS0FMSCxDQUR1QixDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zOGY0MzRiYTJkYWFjNzViMzYxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpID0gcmVxdWlyZShcIi4uL2xpYi9hcGlcIik7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24sIFRhYnMgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBNYWlsT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5pbXBvcnQgUmVwbyBmcm9tIFwiLi4vY29tcG9uZW50cy9SZXBvXCI7XHJcblxyXG4vLyDlrZjlgqggdGFicyDmoI/nmoTnirbmgIEs5Lul5Y+C5pWw55qE5b2i5byP5Lyg6YCS5LiL5Y67XHJcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyDliqDlhaXnvJPlrZjnrZbnlaVcclxuaW1wb3J0IExSVSBmcm9tIFwibHJ1LWNhY2hlXCI7XHJcblxyXG5jb25zdCBjYWNoZSA9IG5ldyBMUlUoe1xyXG4gIC8vIOihqOekuuacgOmVv+eahOS6i+S7tuS4jeWOu+S9v+eUqOe8k+WtmOWcqOmHjOmdoiBrZXkg55qE5pWw5o2u77yM5bCx5Lya5oqK6K+l5pWw5o2u5Yig6ZmkXHJcbiAgbWF4QWdlOiAxMDAwICogNjAgKiAxMCxcclxufSk7XHJcblxyXG4vLyBjb25zdCBJbmRleCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByZWR1eFN0b3JlIH0pID0+IHtcclxuLy8gICAvLyBjb25zb2xlLmxvZyhpc0xvZ2luKTtcclxuLy8gICAvLyBjb25zb2xlLmxvZyh1c2VyUmVwb3MpO1xyXG4vLyAgIC8vIGNvbnNvbGUubG9nKHVzZXJTdGFyZWRSZXBvcyk7XHJcbi8vICAgcmV0dXJuIDxzcGFuPuWOu+eZu+W9lTwvc3Bhbj47XHJcbi8vIH07XHJcblxyXG4vLyDnlKjkuo7lrZjlgqjkvKDpgJLov4fmnaXnmoTmlbDmja5cclxuLy8g5rOo5oSP77ya6L+Z5Liq5piv5Zyo5qih5Z2X55qE5YWo5bGA5L2c55So5Z+f6YeM6Z2i55qE77yM5Lya5LiA55u05a2Y5Zyo55qE77yM5rC46L+c6YO95Lya5pyJ5YC8XHJcbi8vIOaJgOS7peWvueS6juacjeWKoeerr+a4suafk++8jOaIkeS7rOmcgOimgeWBmuWxguWIpOaWre+8jOS4jeW6lOivpeS9v+eUqOi/meS4quWFqOWxgOWPmOmHj+eahOWAvFxyXG5cclxubGV0IHVzZXJMb2NhbFJlcG9zLCB1c2VyTG9jYWxTdGFyZWRSZXBvcztcclxuXHJcbmxldCB1c2VyRmxhZztcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHsgdXNlclJlcG9zLCB1c2VyU3RhcmVkUmVwb3MsIHVzZXIsIHJvdXRlciB9KSB7XHJcbiAgY29uc3QgdGFiS2V5ID0gcm91dGVyLnF1ZXJ5LmtleSB8fCBcIjFcIjtcclxuXHJcbiAgY29uc3QgaGFuZGVsVGFiQ2hhbmdlID0gKGFjdGl2ZUtleSkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goYC8/a2V5PSR7YWN0aXZlS2V5fWApO1xyXG4gIH07XHJcblxyXG4gIC8vIOesrOS4gOi/m+adpeeahOaXtuWAme+8jOWmguaenOivt+axgueahOacieaVsOaNru+8jOWwseW6lOivpeaKiuaVsOaNrue8k+WtmOi1t+adpeS6hlxyXG4gIC8vIOWmguaenOS4jeS8oOmAkuWPguaVsO+8jOWImeS5i+WQjuWcqCBtb3VudGVkIOeahOaXtuWAmeiwg+eUqOS4gOasoVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzU2VydmVyKSB7XHJcbiAgICAgIC8vIOmYsuatouWAvOS4uiBudWxsIOeahOaXtuWAmeS5n+e8k+WtmFxyXG4gICAgICAvLyBpZiAodXNlclJlcG9zKSB7XHJcbiAgICAgIC8vICAgY2FjaGUuc2V0KFwidXNlclJlcG9zXCIsIHVzZXJSZXBvcyk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gaWYgKHVzZXJTdGFyZWRSZXBvcykge1xyXG4gICAgICAvLyAgIGNhY2hlLnNldChcInVzZXJTdGFyZWRSZXBvc1wiLCB1c2VyU3RhcmVkUmVwb3MpO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICAvLyDov5nnp43mlrnms5XmmK/kuI3nrqHmnInmsqHmnInlj5Hotbfor7fmsYLojrflj5bliLDmlbDmja7vvIzkuIDliLDml7bpl7TlsLHkvJrliLfmlrDmlbDmja5cclxuICAgICAgdXNlckxvY2FsUmVwb3MgPSB1c2VyUmVwb3M7XHJcbiAgICAgIHVzZXJMb2NhbFN0YXJlZFJlcG9zID0gdXNlclN0YXJlZFJlcG9zO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB1c2VyTG9jYWxSZXBvcyA9IG51bGw7XHJcbiAgICAgICAgdXNlckxvY2FsU3RhcmVkUmVwb3MgPSBudWxsO1xyXG4gICAgICB9LCAxMDAwICogNjAgKiAxMCk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJSZXBvcywgdXNlclN0YXJlZFJlcG9zXSk7XHJcblxyXG4gIGlmICghdXNlciB8fCAhdXNlci5pZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgPHA+5Lqy77yM5oKo6L+Y5rKh5pyJ55m75b2V5ZOmfjwvcD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHJlZj17cHVibGljUnVudGltZUNvbmZpZy5PQVVUSF9VUkx9PlxyXG4gICAgICAgICAg54K55Ye755m75b2VXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5yb290IHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cclxuICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJfdXJsfSBjbGFzc05hbWU9XCJhdmF0YXJcIiBhbHQ9XCJ1c2VyIGF2YXRhclwiIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW5cIj57dXNlci5sb2dpbiB8fCBcIi0tXCJ9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dXNlci5uYW1lIHx8IFwiLS1cIn08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlvXCI+e3VzZXIuYmlvIHx8IFwiLS1cIn08L3NwYW4+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgIDxNYWlsT3V0bGluZWQgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19IC8+XHJcbiAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7dXNlci5lbWFpbH1gfT57dXNlci5lbWFpbCB8fCBcIi0tXCJ9PC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZXBvc1wiPlxyXG4gICAgICAgIDxUYWJzIGFjdGl2ZUtleT17dGFiS2V5fSBvbkNoYW5nZT17aGFuZGVsVGFiQ2hhbmdlfSBhbmltYXRlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDnmoTku5PlupNcIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgIHt1c2VyUmVwb3MubWFwKChyZXBvKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFJlcG8gcmVwbz17cmVwb30ga2V5PXtyZXBvLmlkfT48L1JlcG8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYWJzLlRhYlBhbmU+XHJcbiAgICAgICAgICA8VGFicy5UYWJQYW5lIHRhYj1cIuS9oOWFs+azqOeahOS7k+W6k1wiIGtleT1cIjJcIj5cclxuICAgICAgICAgICAge3VzZXJTdGFyZWRSZXBvcy5tYXAoKHJlcG8pID0+IChcclxuICAgICAgICAgICAgICA8UmVwbyByZXBvPXtyZXBvfSBrZXk9e3JlcG8uaWR9PjwvUmVwbz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvZ2luIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5iaW8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnVzZXItcmVwb3Mge1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuLy8g5rOo5oSP5oiR5Lus5Zyo57uE5Lu25Lit77yIZ2V0SW5pdGlhbFByb3Bz77yJ5Lit77yM5Y+q5Lya5L2/55So5YiwIHJlcXVlc3Qg77yM5Zug5Li6IHJlcXVlc3Qg5Lya5biu5Yqp5oiR5Lus5Y675Yik5pat5piv5a6i5oi356uv6L+Y5piv5pyN5Yqh56uvXHJcblxyXG4vLyDms6jmhI8gZ2V0SW5pdGlhbFByb3BzIOS8muWcqOWuouaIt+err+S4jeWQjOmhtemdoui3s+i9rOeahOaXtuWAmeS9v+eUqO+8jOWQjOagt+acjeWKoeerr+WmguaenOaIkeS7rOiuv+mXrueahOaYryBpbmRleCDov5nkuKrpobXpnaLvvIzkuZ/kvJrosIPnlKggZ2V0SW5pdGlhbFByb3Bz77yM5Zyo5pyN5Yqh56uv5riy5p+T55qE5pe25YCZ6LCD55So55qE5pe25YCZ77yM5oiR5Lus55qE6L+Q6KGM546v5aKD5aSE5LqOIG5vZGUuanMg546v5aKD77yM6ICM5LiN5piv5rWP6KeI5Zmo55qE546v5aKD77yM5aaC5p6c5oiR5Lus5ZyoIG5vZGUuanMg55qE546v5aKD5LiL6K+35rGC5bCx5Lya5Ye6546w6K+35rGC55qE5pivIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8g6L+Z5qC355qE5Zyw5Z2A77yM5omA5Lul5Lya5aSx6LSl77yI6buY6K6k55qE56uv5Y+j5pivODDvvIlcclxuXHJcbi8vIOazqOaEj+i/memHjOaYryBjdHgg6ICM5LiN5pivIHtjdHh9XHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBpZiAoIXVzZXJGbGFnIHx8ICF1c2VyRmxhZy5pZCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuICAvLyBpZiAoY3R4LnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAvLyByZXR1cm4ge307XHJcbiAgLy8gfVxyXG4gIC8vIGNvbnNvbGUubG9nKGN0eCwgMzMzMyk7XHJcbiAgLy8gcmV0dXJuIHt9O1xyXG4gIC8vIOaKpSBFcnJvcjogY29ubmVjdCBFQ09OTlJFRlVTRUQgMTI3LjAuMC4xOjgwIOeahOmUmeivr1xyXG4gIC8vIOWmguaenOaYr+WcqOa1j+iniOWZqOmHjOmdouWPkemAgeeahO+8jOS8muagueaNruaIkeS7rOaPkOS+m+eahOi3r+W+hOS8muiHquWKqOWKoOS4iuaIkeS7rOW9k+WJjee9keermeeahOWfn+WQje+8iOWwseaYr2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC/vvInmiYDku6XlroPlrozmlbTor7fmsYLot6/lvoTlsLHmmK8gaHR0cDovL2xvY2FsaG9zdDozMDAwL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3RcclxuICAvLyDlpoLmnpzmmK/lnKjmnI3liqHnq6/muLLmn5PnmoTml7blgJnov5vooYzmiafooYznmoTor53vvIzmiYDku6XmsqHmnInmtY/op4jlmajph4zpnaLnmoTln5/lkI3nmoTvvIzov5nkuKrml7blgJnor7fmsYLnmoTot6/lvoToh6rliqjlnKggYXhpb3Mg6YeM6Z2i5aKe5Yqg55qEIGh0dHA6Ly8xMjcuMC4wLjHvvIjpu5jorqQ4MOerr+WPo++8iS9naXRodWIvc2VhcmNoL3JlcG9zaXRvcmllcz9xPXJlYWN077yM6L+Z5Liq5pe25YCZ5bCx5LiN5a+55LqG77yM5oiR5LusIDgwIOerr+WPo+ayoeacieWQr+WKqO+8jOS5n+S4jeaYr+aIkeS7rOaDs+ivt+axgueahOWcsOWdgFxyXG4gIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zXHJcbiAgLy8gICAuZ2V0KFwiL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3RcIilcclxuICAvLyAgIC50aGVuKChyZXNwKSA9PiBjb25zb2xlLmxvZyhyZXNwKSk7XHJcblxyXG4gIC8vIOazqOaEjyByZXEg5ZKMIHJlcyDlj6rmnInlnKjmnI3liqHnq6/muLLmn5PnmoTml7blgJnmiY3kvJrmnIlcclxuXHJcbiAgLy8g5rOo5oSP5LiA5pem55m75Ye65LqG77yM5oiR5Lus6ZyA6KaB5YGa5Liq6K+35rGC55qE5Yik5patXHJcbiAgLy8g5Y+v5Lul6YCa6L+HIGN0eC5yZXEg5ZKMIGN0eC5yZXMg77yIbm9kZS5qcyDlr7nosaHvvIzkuI3kvJrlrZjlnKjkuo7mtY/op4jlmajov5DooYznjq/looPph4zpnaLnmoTvvInmnaXov5vooYzliKTmlq3vvIzkvYbmmK/lnKjnrKblkIjlnKjmnI3liqHnq6/lj6/ku6XliKTmlq3jgILlnKjlrqLmiLfnq6/ov5vooYzliKTmlq3vvIzmmK/msqHmnIkgY3R4IOWvueixoeeahOOAglxyXG5cclxuICBpZiAoIWlzU2VydmVyKSB7XHJcbiAgICAvLyBpZiAoY2FjaGUuZ2V0KFwidXNlclJlcG9zXCIpICYmIGNhY2hlLmdldChcInVzZXJTdGFyZWRSZXBvc1wiKSkge1xyXG4gICAgLy8gICByZXR1cm4ge1xyXG4gICAgLy8gICAgIHVzZXJSZXBvczogY2FjaGUuZ2V0KFwidXNlclJlcG9zXCIpLFxyXG4gICAgLy8gICAgIHVzZXJTdGFyZWRSZXBvczogY2FjaGUuZ2V0KFwidXNlclN0YXJlZFJlcG9zXCIpLFxyXG4gICAgLy8gICB9O1xyXG4gICAgLy8gfVxyXG4gICAgaWYgKHVzZXJMb2NhbFJlcG9zICYmIHVzZXJMb2NhbFN0YXJlZFJlcG9zKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlclJlcG9zOiB1c2VyTG9jYWxSZXBvcyxcclxuICAgICAgICB1c2VyU3RhcmVkUmVwb3M6IHVzZXJMb2NhbFN0YXJlZFJlcG9zLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5Y+R6LW36K+35rGC77yM5YiX5Ye65L2g5omA5pyJ55qE5Yib5bu655qE5LuT5bqTXHJcbiAgY29uc3QgdXNlclJlcG9zID0gYXdhaXQgYXBpLnJlcXVlc3QoeyB1cmw6IFwiL3VzZXIvcmVwb3NcIiB9LCBjdHgucmVxLCBjdHgucmVzKTtcclxuICAvLyDooqvlhbPms6jnmoTku5PlupNcclxuICBjb25zdCB1c2VyU3RhcmVkUmVwb3MgPSBhd2FpdCBhcGkucmVxdWVzdChcclxuICAgIHsgdXJsOiBcIi9naXN0cy9zdGFycmVkXCIgfSxcclxuICAgIGN0eC5yZXEsXHJcbiAgICBjdHgucmVzXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlzTG9naW46IHRydWUsXHJcbiAgICB1c2VyUmVwb3M6IHVzZXJSZXBvcy5kYXRhLFxyXG4gICAgdXNlclN0YXJlZFJlcG9zOiB1c2VyU3RhcmVkUmVwb3MuZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuLy8g5rOo5oSP5Zyo5YaZIHdpdGhSb3V0ZXIg5ZKMIGNvbm5lY3Qg55qE5pe25YCZ77yM6ZyA6KaB5oqKIHdpdGhSb3V0ZXIg5pS+5Zyo5aSW6Z2iXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoXHJcbiAgY29ubmVjdChmdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xyXG4gICAgdXNlckZsYWcgPSBzdGF0ZS51c2VyO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcjogc3RhdGUudXNlcixcclxuICAgIH07XHJcbiAgfSkoSW5kZXgpXHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=