"use strict";
(self["webpackChunkto_do_app"] = self["webpackChunkto_do_app"] || []).push([["dom_materials"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/clock.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/clock.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/clock.png */ "./src/assets/images/clock.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* @import url(\"https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap\"); */\n\n/* * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background: #090909;\n  background: #07141b;\n}\n\nbody.light {\n  background: #d1dae3;\n} */\n\n.clock * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.clock {\n  /* width: 375px;\n  height: 375px; */\n  height: 9rem;\n  width: 9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-color: var(--old-yellow-lighter);\n  background-size: cover;\n  border: 4px;\n  /* box-shadow: 15px 15px 15px rgba(255, 255, 255, 0.5); */\n  box-shadow: 0em -1.2em 1.2em rgba(255, 255, 255, 0.06),\n    inset 0em -1.2em 1.2em rgba(255, 255, 255, 0.06),\n    0em 1.2em 1.2em rgba(0, 0, 0, 0.3), inset 0em 1.2em 1.2em rgba(0, 0, 0, 0.3);\n  border-radius: 50%;\n}\n\nbody.light .clock {\n  box-shadow: 0em -1.2em 1.2em rgba(255, 255, 255, 0.3),\n    inset 1em 1em -1em rgba(255, 255, 255, 0.3),\n    0em -1.2em -1.2em rgba(0, 0, 0, 0.5), inset 1em -1em 1em rgba(0, 0, 0, 0.1);\n}\n\n/* The small circle int the center */\n.clock:before {\n  content: \"\";\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  /* background: rgb(255, 255, 255); */\n  background: var(--dark-grey);\n  border-radius: 50%;\n\n  /* The z-index property specifies the stack order of an element.\n    /* An element with greater stack order is always in front of an element with a lower stack order.  */\n  /* Note: z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky). */\n  z-index: 10000;\n  /* kept as a high value, since wanted at top */\n}\n\nbody.light .clock:before {\n  background: #1a74be;\n}\n\n.clock .hour,\n.clock .min,\n.clock .sec {\n  position: absolute;\n}\n\n/* length of respective arms; */\n.clock .hour,\n.hr {\n  width: 160px;\n  height: 90px;\n}\n\n.clock .min,\n.mn {\n  width: 190px;\n  height: 120px;\n}\n\n.clock .sec,\n.sc {\n  width: 230px;\n  height: 140px;\n}\n\n.hr,\n.mn,\n.sc {\n  display: flex;\n  justify-content: center;\n  /* align-items: center; */\n  position: absolute;\n  border-radius: 50%;\n}\n\n.hr:before {\n  content: \"\";\n  position: absolute;\n  width: 7px;\n  height: 45px;\n  background: var(--dark-grey);\n  z-index: 10;\n  /* z-index least */\n  border-radius: 2.8px;\n}\n\n.mn:before {\n  content: \"\";\n  position: absolute;\n  width: 3.5px;\n  height: 60px;\n  background: var(--dark-grey);\n  z-index: 11;\n  /* z-index more than hour hand */\n  border-radius: 3px;\n}\n\nbody.light .mn:before {\n  background: #091921;\n}\n\n.sc:before {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 70px;\n  background: #b91c1c;\n  z-index: 12;\n  /* z-index more than hour minute hand */\n  border-radius: 3px;\n}\n\n.toggleClass {\n  position: absolute;\n  top: 35px;\n  right: 150px;\n  width: 20px;\n  margin: 2px;\n  height: 20px;\n  font-size: 18px;\n  border-radius: 50%;\n  background: #d1dae3;\n  color: #d1dae3;\n  font-family: \"Quicksand\", sans-serif;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n\n.toggleClass:before {\n  position: absolute;\n  content: \"Light Mode\";\n  white-space: nowrap;\n  left: 25px;\n}\n\nbody.light .toggleClass {\n  background: #091921;\n  color: #091921;\n  content: \"Dark Mode\";\n}\n\nbody.light .toggleClass:before {\n  content: \"Dark Mode\";\n  white-space: nowrap;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/clock.css"],"names":[],"mappings":"AAAA,6FAA6F;;AAE7F;;;;;;;;;;;;;;;;;GAiBG;;AAEH;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE;kBACgB;EAChB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,mDAA2C;EAC3C,2CAA2C;EAC3C,sBAAsB;EACtB,WAAW;EACX,yDAAyD;EACzD;;gFAE8E;EAC9E,kBAAkB;AACpB;;AAEA;EACE;;+EAE6E;AAC/E;;AAEA,oCAAoC;AACpC;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,4BAA4B;EAC5B,kBAAkB;;EAElB;wGACsG;EACtG,oIAAoI;EACpI,cAAc;EACd,8CAA8C;AAChD;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;;EAGE,kBAAkB;AACpB;;AAEA,+BAA+B;AAC/B;;EAEE,YAAY;EACZ,YAAY;AACd;;AAEA;;EAEE,YAAY;EACZ,aAAa;AACf;;AAEA;;EAEE,YAAY;EACZ,aAAa;AACf;;AAEA;;;EAGE,aAAa;EACb,uBAAuB;EACvB,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,4BAA4B;EAC5B,WAAW;EACX,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,4BAA4B;EAC5B,WAAW;EACX,gCAAgC;EAChC,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,uCAAuC;EACvC,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,WAAW;EACX,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,oCAAoC;EACpC,eAAe;EACf,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;AACrB","sourcesContent":["/* @import url(\"https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap\"); */\n\n/* * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background: #090909;\n  background: #07141b;\n}\n\nbody.light {\n  background: #d1dae3;\n} */\n\n.clock * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.clock {\n  /* width: 375px;\n  height: 375px; */\n  height: 9rem;\n  width: 9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background: url(../assets/images/clock.png);\n  background-color: var(--old-yellow-lighter);\n  background-size: cover;\n  border: 4px;\n  /* box-shadow: 15px 15px 15px rgba(255, 255, 255, 0.5); */\n  box-shadow: 0em -1.2em 1.2em rgba(255, 255, 255, 0.06),\n    inset 0em -1.2em 1.2em rgba(255, 255, 255, 0.06),\n    0em 1.2em 1.2em rgba(0, 0, 0, 0.3), inset 0em 1.2em 1.2em rgba(0, 0, 0, 0.3);\n  border-radius: 50%;\n}\n\nbody.light .clock {\n  box-shadow: 0em -1.2em 1.2em rgba(255, 255, 255, 0.3),\n    inset 1em 1em -1em rgba(255, 255, 255, 0.3),\n    0em -1.2em -1.2em rgba(0, 0, 0, 0.5), inset 1em -1em 1em rgba(0, 0, 0, 0.1);\n}\n\n/* The small circle int the center */\n.clock:before {\n  content: \"\";\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  /* background: rgb(255, 255, 255); */\n  background: var(--dark-grey);\n  border-radius: 50%;\n\n  /* The z-index property specifies the stack order of an element.\n    /* An element with greater stack order is always in front of an element with a lower stack order.  */\n  /* Note: z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky). */\n  z-index: 10000;\n  /* kept as a high value, since wanted at top */\n}\n\nbody.light .clock:before {\n  background: #1a74be;\n}\n\n.clock .hour,\n.clock .min,\n.clock .sec {\n  position: absolute;\n}\n\n/* length of respective arms; */\n.clock .hour,\n.hr {\n  width: 160px;\n  height: 90px;\n}\n\n.clock .min,\n.mn {\n  width: 190px;\n  height: 120px;\n}\n\n.clock .sec,\n.sc {\n  width: 230px;\n  height: 140px;\n}\n\n.hr,\n.mn,\n.sc {\n  display: flex;\n  justify-content: center;\n  /* align-items: center; */\n  position: absolute;\n  border-radius: 50%;\n}\n\n.hr:before {\n  content: \"\";\n  position: absolute;\n  width: 7px;\n  height: 45px;\n  background: var(--dark-grey);\n  z-index: 10;\n  /* z-index least */\n  border-radius: 2.8px;\n}\n\n.mn:before {\n  content: \"\";\n  position: absolute;\n  width: 3.5px;\n  height: 60px;\n  background: var(--dark-grey);\n  z-index: 11;\n  /* z-index more than hour hand */\n  border-radius: 3px;\n}\n\nbody.light .mn:before {\n  background: #091921;\n}\n\n.sc:before {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 70px;\n  background: #b91c1c;\n  z-index: 12;\n  /* z-index more than hour minute hand */\n  border-radius: 3px;\n}\n\n.toggleClass {\n  position: absolute;\n  top: 35px;\n  right: 150px;\n  width: 20px;\n  margin: 2px;\n  height: 20px;\n  font-size: 18px;\n  border-radius: 50%;\n  background: #d1dae3;\n  color: #d1dae3;\n  font-family: \"Quicksand\", sans-serif;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n\n.toggleClass:before {\n  position: absolute;\n  content: \"Light Mode\";\n  white-space: nowrap;\n  left: 25px;\n}\n\nbody.light .toggleClass {\n  background: #091921;\n  color: #091921;\n  content: \"Dark Mode\";\n}\n\nbody.light .toggleClass:before {\n  content: \"Dark Mode\";\n  white-space: nowrap;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/paper.png */ "./src/assets/images/paper.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --background-color: #181a1b;\n  --font_color_white: #e8e6e3;\n  color: var(--font_color_white);\n  font-size: 1.3rem;\n  --main_container_gap: 1rem;\n  --add_button_blue_background: #009de7;\n  --add_button_blue_background_ligther: #42c3ff;\n  --header-background-color: #1e3a8a;\n  --hover-color-default: #d6d3d1;\n  --border_color_grey: #858585;\n  --border_radius: 10px;\n  --min-width-dueDate: 5.5rem;\n  --form_border: 2px var(--border_color_grey) solid;\n\n  --dark-grey: #333333;\n  --old-yellow: #feffcf;\n  --old-yellow-lighter: #ffffe0;\n  --old-yellow-darker: #f8e999;\n\n  --default-text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff,\n    0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;\n\n  --sidebar-box-shadow: 0 2px 5px hsla(0, 0%, 0%, 0.4), inset 0 1px 0 #ccc,\n    inset 1px 0 0 #aaa, inset 0 -1px 0 #ccc, inset -1px 0 0 #aaa,\n    inset 0 2px 0 #c6c6c6, inset 2px 0 0 #a6a6a6, inset 0 -2px 0 #c6c6c6,\n    inset -2px 0 0 #a6a6a6, inset 0 3px 0 #c0c0c0, inset 3px 0 0 #a0a0a0,\n    inset 0 -3px 0 #c0c0c0, inset -3px 0 0 #a0a0a0, inset 0 4px 0 #b9b9b9,\n    inset 4px 0 0 #999, inset 0 -4px 0 #b9b9b9, inset -4px 0 0 #999,\n    inset 0 5px 0 #b6b6b6, inset 5px 0 0 #969696, inset 0 -5px 0 #b6b6b6,\n    inset -5px 0 0 #969696, inset 0 6px 0 #b0b0b0, inset 6px 0 0 #909090,\n    inset 0 -6px 0 #b0b0b0, inset -6px 0 0 #909090, inset 0 7px 0 #a9a9a9,\n    inset 7px 0 0 #898989, inset 0 -7px 0 #a9a9a9, inset -7px 0 0 #898989,\n    inset 0 8px 0 #a6a6a6, inset 8px 0 0 #868686, inset 0 -8px 0 #a6a6a6,\n    inset -8px 0 0 #868686, inset 0 9px 0 #a0a0a0, inset 9px 0 0 #808080,\n    inset 0 -9px 0 #a0a0a0, inset -9px 0 0 #808080, inset 0 10px 0 #888,\n    inset 10px 0 0 #666, inset 0 -10px 0 #888, inset -10px 0 0 #666,\n    inset 0 0 10px 10px hsla(0, 0%, 0%, 0.5);\n}\n\nbody {\n  background-color: var(--font_color_white);\n\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n  font: 1rem sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n/* ************** */\n/* Main Container */\n/* ************** */\n\n.main_container {\n  min-height: 100vh;\n\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 5rem auto 1.5rem;\n  grid-template-areas:\n    \"sidebar header\"\n    \"sidebar main\"\n    \"footer footer\";\n  /* gap: var(--main_container_gap); */\n  /* border: 8px yellow solid; */\n}\n.main_container > .header_main_container,\n.main_container > .side_bar_main_container,\n.main_container > .content_main_container {\n  padding: 1.5rem;\n}\n.header_main_container {\n  grid-area: header;\n}\n.side_bar_main_container {\n  grid-area: sidebar;\n  min-width: 250px;\n}\n.content_main_container {\n  grid-area: main;\n}\nfooter {\n  grid-area: footer;\n}\n\nbutton {\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: var(--border_radius);\n  font-size: 1.2rem;\n  border: none;\n}\nbutton:hover {\n  transform: scale(1.2);\n}\n/* ************** */\n/* ************** */\n\n/* ****** */\n/* Header */\n/* ****** */\n.header_main_container {\n  color: black;\n  display: flex;\n  justify-content: space-between;\n\n  background-color: transparent;\n}\n\n.header_main_container .header_left {\n  display: flex;\n}\n.header_main_container .header_icon {\n  height: 5rem;\n  align-self: center;\n  /* margin-bottom: -1rem; */\n  margin-top: 1rem;\n\n  /* padding-bottom: 0.5rem; */\n}\n\n.header_main_container h1 {\n  color: black;\n  margin: 0;\n  padding: 0;\n  font-family: fantasy;\n  margin-left: -2rem;\n}\n\n.header_main_container .clock {\n  height: 9rem;\n  width: 9rem;\n  border: 1px solid var(--dark-grey);\n  margin-right: 1rem;\n}\n\n/* ****** */\n/* ****** */\n\n/* ******* */\n/* Sidebar */\n/* ******* */\n\n.side_bar_main_container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  color: var(--dark-grey);\n  /* background-color: var(--old-yellow-lighter); */\n  background-color: var(--font_color_white);\n\n  box-shadow: var(--sidebar-box-shadow);\n  border: 1px solid;\n  border-color: #bbb #999;\n}\n\n.sidebar_project_row .project_title_and_buttons {\n  display: flex;\n}\n.project_title_and_buttons > * {\n  display: flex;\n  /* justify-content: center; */\n  align-items: center;\n}\n.project_title_and_buttons .project {\n  flex: 1;\n}\n.project_title_and_buttons input {\n  flex: 1;\n}\n\n.sidebar_icon,\n.taskbar_icon {\n  height: 1rem;\n}\n.edit_task_icon {\n  margin-bottom: -0.2rem;\n  height: 1.2rem;\n}\n.title_icon {\n  height: 3rem;\n  margin-bottom: -0.3rem;\n}\n\n/* calendar */\n\n.calendar {\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n  font-size: 0.8rem;\n}\n\ntable {\n  background-color: var(--old-yellow-darker);\n  font-size: 0.7rem;\n  table-layout: fixed;\n  width: 100%;\n  color: var(--dark-grey);\n  margin-top: 0.1rem;\n\n  box-shadow: 0em -1.2em 1.2em rgba(255, 255, 255, 0.06),\n    inset 0em -1.2em 1.2em rgba(255, 255, 255, 0.06),\n    0em 0.3em 0.3em rgba(0, 0, 0, 0.3);\n}\n\ntable * {\n  text-align: center;\n}\n\ntable,\nth,\ntd {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\n\ntd {\n  /* width: 2.2rem;\n  height: 2rem; */\n}\n\n.calendar_day {\n  height: min-content;\n}\n\ntr.calendar_days {\n  font-weight: bold;\n}\n\n.calendar .today {\n  background-color: #b91c1c;\n  font-weight: bold;\n  box-shadow: inset 0 0 0 2px black;\n  color: black;\n}\n\n/* Home sidebar */\n.home_menu_container {\n  display: flex;\n  flex-direction: column;\n  /* border: 2px blue solid; */\n}\n\n.home_menu_title {\n  text-decoration: underline;\n  font-size: 1.1rem;\n  font-weight: bold;\n  margin-bottom: 0.7rem;\n}\n\n.home_menu {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.home_menu > *:hover {\n  background-color: var(--hover-color-default);\n}\n\n.delete_project_icon:hover {\n  /* filters to red*/\n  filter: invert(37%) sepia(93%) saturate(7471%) hue-rotate(356deg)\n    brightness(91%) contrast(135%);\n\n  /* filter to blue */\n  /* filter: invert(0.5) sepia(1) saturate(5) hue-rotate(175deg); */\n}\n\n/* Projects Menu Sidebar */\n.projects_menu_container {\n  display: flex;\n  flex-direction: column;\n  /* border: 2px blue solid; */\n}\n\n.projects_menu_title {\n  text-decoration: underline;\n  display: flex;\n  font-size: 1.1rem;\n  gap: 0.4rem;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n\n.projects_menu {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.projects_menu > *:hover {\n  background-color: var(--hover-color-default);\n}\n\n.projects_menu .sidebar_project_row:first-child {\n  margin-bottom: 0.5rem;\n}\n\nbutton .add_task_button {\n  align-self: flex-end;\n}\n/* ******* */\n/* ******* */\n\n/* *************** */\n/* Project Display */\n/* *************** */\n\n.content_main_container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  margin-top: 0.6rem;\n  background-color: transparent;\n\n  color: var(--dark-grey);\n}\n\n.display_projects {\n  /* border: 2px darkgoldenrod solid; */\n  padding: 1rem;\n  gap: 0.7rem;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.display_project_title {\n  /* display: flex;\n  justify-content: center;\n  align-items: center; */\n  /* margin: 0 auto; */\n  margin-left: 1rem;\n  align-self: flex-start;\n  border-bottom: 2px black solid;\n  /* text-decoration: underline; */\n\n  font-weight: bold;\n  font-size: 1.4rem;\n  /* padding-right: 5rem; */\n}\n/* .display_project_row {\n  border: 1px brown solid;\n  display: flex;\n  gap: 1rem;\n} */\n\n.container_for_single_task {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n\n  /* background-color: var(--old-yellow-lighter); */\n\n  padding: 0.5rem;\n  font-size: 0.8rem;\n\n  position: relative;\n  border-radius: 5px;\n  background: linear-gradient(\n    to right,\n    var(--old-yellow-lighter) 35%,\n    #fffbeb 100%\n  );\n  box-shadow: 1px 2px 1px -1px var(--dark-grey);\n  transition: all 400ms ease-in-out;\n  position: relative;\n}\n\n.container_for_single_task:before {\n  z-index: -1;\n  position: absolute;\n  content: \"\";\n  bottom: 13px;\n  right: 7px;\n  width: 25%;\n  top: 0;\n  box-shadow: 0 15px 10px var(--dark-grey);\n  transform: rotate(4deg);\n  transition: all 200ms ease-in-out;\n}\n\n.container_for_single_task:hover {\n  background: linear-gradient(\n    to right,\n    var(--old-yellow-darker) 0%,\n    var(--old-yellow-darker) 100%\n  );\n}\n\n.container_for_single_task:hover:before {\n  /* was for shadow */\n  transform: rotate(0deg);\n  bottom: 20px;\n  z-index: -10;\n}\n\n.circle {\n  border-radius: 50%;\n  box-shadow: inset 2px 2px 2px 0px rgba(0, 0, 0, 0.5),\n    inset 0 0 0 25px transparent;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 20px;\n  aspect-ratio: 1/1;\n}\n\n.container_for_single_task.checked {\n  text-decoration: line-through;\n  opacity: 0.4;\n  box-shadow: none;\n}\n.container_for_single_task.checked::before {\n  box-shadow: none;\n}\n\n.container_for_single_task_header {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n\n  font-size: 1rem;\n  font-weight: bolder;\n  /* padding-bottom: 0.2rem; */\n  margin-bottom: 0.5rem;\n  padding-left: 2rem;\n  /* margin-left: calc(var(--min-width-dueDate) + 0.8rem); */\n  /* border-bottom: var(--form_border); */\n  border-bottom: 2px var(--dark-grey) solid;\n}\n.container_for_single_task_header .task_due_date_day {\n  min-width: var(--min-width-dueDate);\n}\n.container_for_single_task_header .task_due_date {\n  min-width: var(--min-width-dueDate);\n}\n.container_for_single_task_header .task_title {\n  /* margin-left: 0.2rem; */\n}\n\n.container_for_single_task .task_title {\n  flex: 1;\n}\n\n.container_for_single_task .task_due_date_day {\n  min-width: var(--min-width-dueDate);\n  font-size: 0.9rem;\n  margin-right: -0.4rem;\n\n  /* color: red; */\n}\n.container_for_single_task .task_due_date {\n  min-width: var(--min-width-dueDate);\n  /* font-size: 0.9rem; */\n}\n.container_for_single_task .check_priority_button {\n  font-size: 1.3rem;\n}\n\n/* ************* */\n/* ************* */\n.container_for_single_task .due_date_expiry_level_0 {\n  /* expired tasks */\n  color: #450a0a;\n  text-shadow: #450a0a 0px 0px 5px;\n}\n.container_for_single_task .due_date_expiry_level_1 {\n  /* today's tasks */\n  color: #b91c1c;\n  text-shadow: #b91c1c 0px 0px 5px;\n}\n.container_for_single_task .due_date_expiry_level_2 {\n  /* this week's tasks */\n  color: #ca8a04;\n  text-shadow: #ca8a04 0px 0px 5px;\n}\n.container_for_single_task .due_date_expiry_level_3 {\n  /* tasks more than a week tasks */\n  color: #65a30d;\n  text-shadow: #65a30d 0px 0px 5px;\n}\n.container_for_single_task .due_date_expiry_level_4 {\n  /* tasks more than a week tasks */\n  color: #78716c;\n  text-shadow: #78716c 0px 0px 5px;\n}\n/* ************* */\n/* ************* */\n\n.container_for_single_task .remove_task_button {\n  margin-left: 0.6rem;\n}\n.container_for_single_task .remove_task_button:hover {\n  color: red;\n}\n\n.container_for_single_task .check_priority_button.checked {\n  color: #eab308;\n  /* text-shadow: #a16207 0px 0px 5px; */\n  text-shadow: 0 0 5px #fde68a, 0 0 10px #fbbf24;\n}\n/* *************** */\n/* *************** */\n\n/* *** */\n\n/* ***** */\n/* Forms */\n/* ***** */\n\n/* .forms_main_container {\n  display: flex;\n  gap: 2rem;\n} */\n\n.form {\n  border: var(--form_border);\n  background-color: var(--font_color_white);\n  color: var(--background-color);\n  font-size: 1rem;\n\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms;\n  border-radius: var(--border_radius);\n  z-index: 10;\n\n  width: 600px;\n  max-width: 80%;\n  height: 400px;\n  max-height: 80%;\n  padding: 40px 30px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 1.4rem;\n}\n\n.form.form_project,\n.form.confirm_delete_project {\n  height: 200px;\n}\n\n.form header {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: var(--form_border);\n  align-items: center;\n  font-size: 1.2rem;\n  font-weight: 600;\n  padding-bottom: 16px;\n}\n\n.form header button {\n  background-color: transparent;\n  color: var(--background-color);\n}\n\n.form .form_row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.form.task_info .form_row {\n  border-top: 2px var(--border_color_grey) dotted;\n  border-bottom: 2px var(--border_color_grey) dotted;\n  padding: 0.1rem;\n}\n.form .form_row > div {\n  font-size: 0.9rem;\n}\n\n.form button.form_submit {\n  align-self: center;\n  padding: 4px 12px;\n  margin-top: auto;\n  border-radius: var(--border_radius);\n  border: var(--form_border);\n  color: var(--background-color);\n  background-color: var(--font_color_white);\n  font-weight: 600;\n  font-size: 1rem;\n}\n.form button.form_submit:hover {\n  background-color: var(--hover-color-default);\n  transform: none;\n}\n\n/* for the Information Pop-up */\n.form .form_task_info_title,\n.form .form_task_info_description,\n.form .form_task_info_duedate,\n.form .form_task_info_importance,\n.form .form_task_info_project {\n  align-self: center;\n  width: 120px;\n}\n\n/* For add Project and Task Form Pop-ups */\n.form .form_project_title,\n.form .form_task_title,\n.form .form_task_description,\n.form .form_task_date {\n  align-self: center;\n  width: 120px;\n}\n.form .form_project_title {\n  width: 60px;\n}\n\n.form .form_edit_project_title,\n.form .form_edit_task_title,\n.form .form_edit_task_description,\n.form .form_edit_task_date {\n  align-self: center;\n  width: 120px;\n}\n.form .form_edit_project_title {\n  width: 60px;\n}\n\n.form input,\n.form textarea {\n  border-radius: var(--border_radius);\n  border: 2px var(--background-color) solid;\n  padding: 12px;\n  resize: none;\n}\n\n/* ***** */\n/* ***** */\n\n/* *** */\n\n/* setting up the pop-up overlay*/\n/* ************************** */\n.overlay_for_form {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  pointer-events: none;\n}\n.overlay_for_form.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.form.active {\n  transform: translate(-50%, -50%) scale(1);\n}\n/* ************************** */\n\n/* ****** */\n/* footer */\n/* ****** */\n\nfooter {\n  background-color: var(--background-color);\n  color: var(--font_color_white);\n  font-size: 0.8rem;\n\n  /* text-align: center; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* z-index: 2; */\n  /* text-shadow: none; */\n  margin-top: auto;\n}\n\nfooter img {\n  height: 1.5rem;\n  scale: 1.2;\n  padding: 0;\n}\n\nfooter img:hover {\n  transform: scale(1.1);\n}\n\n/* ****** */\n/* ****** */\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --background-color: #181a1b;\n  --font_color_white: #e8e6e3;\n  color: var(--font_color_white);\n  font-size: 1.3rem;\n  --main_container_gap: 1rem;\n  --add_button_blue_background: #009de7;\n  --add_button_blue_background_ligther: #42c3ff;\n  --header-background-color: #1e3a8a;\n  --hover-color-default: #d6d3d1;\n  --border_color_grey: #858585;\n  --border_radius: 10px;\n  --min-width-dueDate: 5.5rem;\n  --form_border: 2px var(--border_color_grey) solid;\n\n  --dark-grey: #333333;\n  --old-yellow: #feffcf;\n  --old-yellow-lighter: #ffffe0;\n  --old-yellow-darker: #f8e999;\n\n  --default-text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff,\n    0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;\n\n  --sidebar-box-shadow: 0 2px 5px hsla(0, 0%, 0%, 0.4), inset 0 1px 0 #ccc,\n    inset 1px 0 0 #aaa, inset 0 -1px 0 #ccc, inset -1px 0 0 #aaa,\n    inset 0 2px 0 #c6c6c6, inset 2px 0 0 #a6a6a6, inset 0 -2px 0 #c6c6c6,\n    inset -2px 0 0 #a6a6a6, inset 0 3px 0 #c0c0c0, inset 3px 0 0 #a0a0a0,\n    inset 0 -3px 0 #c0c0c0, inset -3px 0 0 #a0a0a0, inset 0 4px 0 #b9b9b9,\n    inset 4px 0 0 #999, inset 0 -4px 0 #b9b9b9, inset -4px 0 0 #999,\n    inset 0 5px 0 #b6b6b6, inset 5px 0 0 #969696, inset 0 -5px 0 #b6b6b6,\n    inset -5px 0 0 #969696, inset 0 6px 0 #b0b0b0, inset 6px 0 0 #909090,\n    inset 0 -6px 0 #b0b0b0, inset -6px 0 0 #909090, inset 0 7px 0 #a9a9a9,\n    inset 7px 0 0 #898989, inset 0 -7px 0 #a9a9a9, inset -7px 0 0 #898989,\n    inset 0 8px 0 #a6a6a6, inset 8px 0 0 #868686, inset 0 -8px 0 #a6a6a6,\n    inset -8px 0 0 #868686, inset 0 9px 0 #a0a0a0, inset 9px 0 0 #808080,\n    inset 0 -9px 0 #a0a0a0, inset -9px 0 0 #808080, inset 0 10px 0 #888,\n    inset 10px 0 0 #666, inset 0 -10px 0 #888, inset -10px 0 0 #666,\n    inset 0 0 10px 10px hsla(0, 0%, 0%, 0.5);\n}\n\nbody {\n  background-color: var(--font_color_white);\n\n  background-image: url(../assets/images/paper.png);\n  background-position: center;\n  background-size: cover;\n  font: 1rem sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n/* ************** */\n/* Main Container */\n/* ************** */\n\n.main_container {\n  min-height: 100vh;\n\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 5rem auto 1.5rem;\n  grid-template-areas:\n    \"sidebar header\"\n    \"sidebar main\"\n    \"footer footer\";\n  /* gap: var(--main_container_gap); */\n  /* border: 8px yellow solid; */\n}\n.main_container > .header_main_container,\n.main_container > .side_bar_main_container,\n.main_container > .content_main_container {\n  padding: 1.5rem;\n}\n.header_main_container {\n  grid-area: header;\n}\n.side_bar_main_container {\n  grid-area: sidebar;\n  min-width: 250px;\n}\n.content_main_container {\n  grid-area: main;\n}\nfooter {\n  grid-area: footer;\n}\n\nbutton {\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: var(--border_radius);\n  font-size: 1.2rem;\n  border: none;\n}\nbutton:hover {\n  transform: scale(1.2);\n}\n/* ************** */\n/* ************** */\n\n/* ****** */\n/* Header */\n/* ****** */\n.header_main_container {\n  color: black;\n  display: flex;\n  justify-content: space-between;\n\n  background-color: transparent;\n}\n\n.header_main_container .header_left {\n  display: flex;\n}\n.header_main_container .header_icon {\n  height: 5rem;\n  align-self: center;\n  /* margin-bottom: -1rem; */\n  margin-top: 1rem;\n\n  /* padding-bottom: 0.5rem; */\n}\n\n.header_main_container h1 {\n  color: black;\n  margin: 0;\n  padding: 0;\n  font-family: fantasy;\n  margin-left: -2rem;\n}\n\n.header_main_container .clock {\n  height: 9rem;\n  width: 9rem;\n  border: 1px solid var(--dark-grey);\n  margin-right: 1rem;\n}\n\n/* ****** */\n/* ****** */\n\n/* ******* */\n/* Sidebar */\n/* ******* */\n\n.side_bar_main_container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  color: var(--dark-grey);\n  /* background-color: var(--old-yellow-lighter); */\n  background-color: var(--font_color_white);\n\n  box-shadow: var(--sidebar-box-shadow);\n  border: 1px solid;\n  border-color: #bbb #999;\n}\n\n.sidebar_project_row .project_title_and_buttons {\n  display: flex;\n}\n.project_title_and_buttons > * {\n  display: flex;\n  /* justify-content: center; */\n  align-items: center;\n}\n.project_title_and_buttons .project {\n  flex: 1;\n}\n.project_title_and_buttons input {\n  flex: 1;\n}\n\n.sidebar_icon,\n.taskbar_icon {\n  height: 1rem;\n}\n.edit_task_icon {\n  margin-bottom: -0.2rem;\n  height: 1.2rem;\n}\n.title_icon {\n  height: 3rem;\n  margin-bottom: -0.3rem;\n}\n\n/* calendar */\n\n.calendar {\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n  font-size: 0.8rem;\n}\n\ntable {\n  background-color: var(--old-yellow-darker);\n  font-size: 0.7rem;\n  table-layout: fixed;\n  width: 100%;\n  color: var(--dark-grey);\n  margin-top: 0.1rem;\n\n  box-shadow: 0em -1.2em 1.2em rgba(255, 255, 255, 0.06),\n    inset 0em -1.2em 1.2em rgba(255, 255, 255, 0.06),\n    0em 0.3em 0.3em rgba(0, 0, 0, 0.3);\n}\n\ntable * {\n  text-align: center;\n}\n\ntable,\nth,\ntd {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\n\ntd {\n  /* width: 2.2rem;\n  height: 2rem; */\n}\n\n.calendar_day {\n  height: min-content;\n}\n\ntr.calendar_days {\n  font-weight: bold;\n}\n\n.calendar .today {\n  background-color: #b91c1c;\n  font-weight: bold;\n  box-shadow: inset 0 0 0 2px black;\n  color: black;\n}\n\n/* Home sidebar */\n.home_menu_container {\n  display: flex;\n  flex-direction: column;\n  /* border: 2px blue solid; */\n}\n\n.home_menu_title {\n  text-decoration: underline;\n  font-size: 1.1rem;\n  font-weight: bold;\n  margin-bottom: 0.7rem;\n}\n\n.home_menu {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.home_menu > *:hover {\n  background-color: var(--hover-color-default);\n}\n\n.delete_project_icon:hover {\n  /* filters to red*/\n  filter: invert(37%) sepia(93%) saturate(7471%) hue-rotate(356deg)\n    brightness(91%) contrast(135%);\n\n  /* filter to blue */\n  /* filter: invert(0.5) sepia(1) saturate(5) hue-rotate(175deg); */\n}\n\n/* Projects Menu Sidebar */\n.projects_menu_container {\n  display: flex;\n  flex-direction: column;\n  /* border: 2px blue solid; */\n}\n\n.projects_menu_title {\n  text-decoration: underline;\n  display: flex;\n  font-size: 1.1rem;\n  gap: 0.4rem;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n\n.projects_menu {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.projects_menu > *:hover {\n  background-color: var(--hover-color-default);\n}\n\n.projects_menu .sidebar_project_row:first-child {\n  margin-bottom: 0.5rem;\n}\n\nbutton .add_task_button {\n  align-self: flex-end;\n}\n/* ******* */\n/* ******* */\n\n/* *************** */\n/* Project Display */\n/* *************** */\n\n.content_main_container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  margin-top: 0.6rem;\n  background-color: transparent;\n\n  color: var(--dark-grey);\n}\n\n.display_projects {\n  /* border: 2px darkgoldenrod solid; */\n  padding: 1rem;\n  gap: 0.7rem;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.display_project_title {\n  /* display: flex;\n  justify-content: center;\n  align-items: center; */\n  /* margin: 0 auto; */\n  margin-left: 1rem;\n  align-self: flex-start;\n  border-bottom: 2px black solid;\n  /* text-decoration: underline; */\n\n  font-weight: bold;\n  font-size: 1.4rem;\n  /* padding-right: 5rem; */\n}\n/* .display_project_row {\n  border: 1px brown solid;\n  display: flex;\n  gap: 1rem;\n} */\n\n.container_for_single_task {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n\n  /* background-color: var(--old-yellow-lighter); */\n\n  padding: 0.5rem;\n  font-size: 0.8rem;\n\n  position: relative;\n  border-radius: 5px;\n  background: linear-gradient(\n    to right,\n    var(--old-yellow-lighter) 35%,\n    #fffbeb 100%\n  );\n  box-shadow: 1px 2px 1px -1px var(--dark-grey);\n  transition: all 400ms ease-in-out;\n  position: relative;\n}\n\n.container_for_single_task:before {\n  z-index: -1;\n  position: absolute;\n  content: \"\";\n  bottom: 13px;\n  right: 7px;\n  width: 25%;\n  top: 0;\n  box-shadow: 0 15px 10px var(--dark-grey);\n  transform: rotate(4deg);\n  transition: all 200ms ease-in-out;\n}\n\n.container_for_single_task:hover {\n  background: linear-gradient(\n    to right,\n    var(--old-yellow-darker) 0%,\n    var(--old-yellow-darker) 100%\n  );\n}\n\n.container_for_single_task:hover:before {\n  /* was for shadow */\n  transform: rotate(0deg);\n  bottom: 20px;\n  z-index: -10;\n}\n\n.circle {\n  border-radius: 50%;\n  box-shadow: inset 2px 2px 2px 0px rgba(0, 0, 0, 0.5),\n    inset 0 0 0 25px transparent;\n  background-image: url(\"../assets/images/paper.png\");\n  height: 20px;\n  aspect-ratio: 1/1;\n}\n\n.container_for_single_task.checked {\n  text-decoration: line-through;\n  opacity: 0.4;\n  box-shadow: none;\n}\n.container_for_single_task.checked::before {\n  box-shadow: none;\n}\n\n.container_for_single_task_header {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n\n  font-size: 1rem;\n  font-weight: bolder;\n  /* padding-bottom: 0.2rem; */\n  margin-bottom: 0.5rem;\n  padding-left: 2rem;\n  /* margin-left: calc(var(--min-width-dueDate) + 0.8rem); */\n  /* border-bottom: var(--form_border); */\n  border-bottom: 2px var(--dark-grey) solid;\n}\n.container_for_single_task_header .task_due_date_day {\n  min-width: var(--min-width-dueDate);\n}\n.container_for_single_task_header .task_due_date {\n  min-width: var(--min-width-dueDate);\n}\n.container_for_single_task_header .task_title {\n  /* margin-left: 0.2rem; */\n}\n\n.container_for_single_task .task_title {\n  flex: 1;\n}\n\n.container_for_single_task .task_due_date_day {\n  min-width: var(--min-width-dueDate);\n  font-size: 0.9rem;\n  margin-right: -0.4rem;\n\n  /* color: red; */\n}\n.container_for_single_task .task_due_date {\n  min-width: var(--min-width-dueDate);\n  /* font-size: 0.9rem; */\n}\n.container_for_single_task .check_priority_button {\n  font-size: 1.3rem;\n}\n\n/* ************* */\n/* ************* */\n.container_for_single_task .due_date_expiry_level_0 {\n  /* expired tasks */\n  color: #450a0a;\n  text-shadow: #450a0a 0px 0px 5px;\n}\n.container_for_single_task .due_date_expiry_level_1 {\n  /* today's tasks */\n  color: #b91c1c;\n  text-shadow: #b91c1c 0px 0px 5px;\n}\n.container_for_single_task .due_date_expiry_level_2 {\n  /* this week's tasks */\n  color: #ca8a04;\n  text-shadow: #ca8a04 0px 0px 5px;\n}\n.container_for_single_task .due_date_expiry_level_3 {\n  /* tasks more than a week tasks */\n  color: #65a30d;\n  text-shadow: #65a30d 0px 0px 5px;\n}\n.container_for_single_task .due_date_expiry_level_4 {\n  /* tasks more than a week tasks */\n  color: #78716c;\n  text-shadow: #78716c 0px 0px 5px;\n}\n/* ************* */\n/* ************* */\n\n.container_for_single_task .remove_task_button {\n  margin-left: 0.6rem;\n}\n.container_for_single_task .remove_task_button:hover {\n  color: red;\n}\n\n.container_for_single_task .check_priority_button.checked {\n  color: #eab308;\n  /* text-shadow: #a16207 0px 0px 5px; */\n  text-shadow: 0 0 5px #fde68a, 0 0 10px #fbbf24;\n}\n/* *************** */\n/* *************** */\n\n/* *** */\n\n/* ***** */\n/* Forms */\n/* ***** */\n\n/* .forms_main_container {\n  display: flex;\n  gap: 2rem;\n} */\n\n.form {\n  border: var(--form_border);\n  background-color: var(--font_color_white);\n  color: var(--background-color);\n  font-size: 1rem;\n\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms;\n  border-radius: var(--border_radius);\n  z-index: 10;\n\n  width: 600px;\n  max-width: 80%;\n  height: 400px;\n  max-height: 80%;\n  padding: 40px 30px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 1.4rem;\n}\n\n.form.form_project,\n.form.confirm_delete_project {\n  height: 200px;\n}\n\n.form header {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: var(--form_border);\n  align-items: center;\n  font-size: 1.2rem;\n  font-weight: 600;\n  padding-bottom: 16px;\n}\n\n.form header button {\n  background-color: transparent;\n  color: var(--background-color);\n}\n\n.form .form_row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.form.task_info .form_row {\n  border-top: 2px var(--border_color_grey) dotted;\n  border-bottom: 2px var(--border_color_grey) dotted;\n  padding: 0.1rem;\n}\n.form .form_row > div {\n  font-size: 0.9rem;\n}\n\n.form button.form_submit {\n  align-self: center;\n  padding: 4px 12px;\n  margin-top: auto;\n  border-radius: var(--border_radius);\n  border: var(--form_border);\n  color: var(--background-color);\n  background-color: var(--font_color_white);\n  font-weight: 600;\n  font-size: 1rem;\n}\n.form button.form_submit:hover {\n  background-color: var(--hover-color-default);\n  transform: none;\n}\n\n/* for the Information Pop-up */\n.form .form_task_info_title,\n.form .form_task_info_description,\n.form .form_task_info_duedate,\n.form .form_task_info_importance,\n.form .form_task_info_project {\n  align-self: center;\n  width: 120px;\n}\n\n/* For add Project and Task Form Pop-ups */\n.form .form_project_title,\n.form .form_task_title,\n.form .form_task_description,\n.form .form_task_date {\n  align-self: center;\n  width: 120px;\n}\n.form .form_project_title {\n  width: 60px;\n}\n\n.form .form_edit_project_title,\n.form .form_edit_task_title,\n.form .form_edit_task_description,\n.form .form_edit_task_date {\n  align-self: center;\n  width: 120px;\n}\n.form .form_edit_project_title {\n  width: 60px;\n}\n\n.form input,\n.form textarea {\n  border-radius: var(--border_radius);\n  border: 2px var(--background-color) solid;\n  padding: 12px;\n  resize: none;\n}\n\n/* ***** */\n/* ***** */\n\n/* *** */\n\n/* setting up the pop-up overlay*/\n/* ************************** */\n.overlay_for_form {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  pointer-events: none;\n}\n.overlay_for_form.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.form.active {\n  transform: translate(-50%, -50%) scale(1);\n}\n/* ************************** */\n\n/* ****** */\n/* footer */\n/* ****** */\n\nfooter {\n  background-color: var(--background-color);\n  color: var(--font_color_white);\n  font-size: 0.8rem;\n\n  /* text-align: center; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* z-index: 2; */\n  /* text-shadow: none; */\n  margin-top: auto;\n}\n\nfooter img {\n  height: 1.5rem;\n  scale: 1.2;\n  padding: 0;\n}\n\nfooter img:hover {\n  transform: scale(1.1);\n}\n\n/* ****** */\n/* ****** */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInDays/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInDays/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInDays)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.

function compareLocalAsc(dateLeft, dateRight) {
  var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}
/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full days according to the local timezone
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
//=> 92
 */


function differenceInDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = compareLocalAsc(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight));
  dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);
  var result = sign * (difference - isLastDayNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles/clock.css":
/*!******************************!*\
  !*** ./src/styles/clock.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clock_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./clock.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/clock.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clock_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clock_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_clock_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_clock_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appBoard": () => (/* binding */ appBoard),
/* harmony export */   "domCreator": () => (/* binding */ domCreator),
/* harmony export */   "formCreator": () => (/* binding */ formCreator)
/* harmony export */ });
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_clock_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/clock.css */ "./src/styles/clock.css");
/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tasks.js */ "./src/javascript/modules/tasks.js");
/* harmony import */ var _modules_projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/projects.js */ "./src/javascript/modules/projects.js");
/* harmony import */ var _modules_dom_materials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dom_materials */ "./src/javascript/modules/dom_materials.js");
/* harmony import */ var _modules_app_logic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/app_logic.js */ "./src/javascript/modules/app_logic.js");
/* harmony import */ var _modules_forms_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/forms.js */ "./src/javascript/modules/forms.js");
/* harmony import */ var _modules_clock_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/clock.js */ "./src/javascript/modules/clock.js");










const appBoard = (0,_modules_app_logic_js__WEBPACK_IMPORTED_MODULE_5__.AppBoard)();
const domCreator = (0,_modules_dom_materials__WEBPACK_IMPORTED_MODULE_4__.DomCreator)();
const formCreator = (0,_modules_forms_js__WEBPACK_IMPORTED_MODULE_6__.FormsCreator)();

formCreator.addProjectFormEventListeners();
(0,_modules_clock_js__WEBPACK_IMPORTED_MODULE_7__.Clock)();

(0,_modules_projects_js__WEBPACK_IMPORTED_MODULE_3__.createTestProjects)(); // set of ready projects and tasks to showcase

// keep these at the end to generate the page
domCreator.displayProjects();
domCreator.displayTasks(appBoard.projectsList[0]); // display today's tasks


/***/ }),

/***/ "./src/javascript/modules/app_logic.js":
/*!*********************************************!*\
  !*** ./src/javascript/modules/app_logic.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppBoard": () => (/* binding */ AppBoard),
/* harmony export */   "taskListSorting": () => (/* binding */ taskListSorting)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/javascript/modules/projects.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ "./src/javascript/modules/tasks.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/differenceInDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ "./src/javascript/index.js");







function taskListSorting(taskList) {
  taskList.sort(function (a, b) {
    //a to x, b to y
    let x;
    let y;
    if (a.dueDate != "") {
      x = new Date(a.dueDate);
    } else {
      x = new Date("2222-11-10");
    }

    if (b.dueDate != "") {
      y = new Date(b.dueDate);
    } else {
      y = new Date("2222-11-10");
    }

    let differenceToReturn = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(x, y);

    if (differenceToReturn === 0) {
      differenceToReturn = b.uniqueID - a.uniqueID;
    }

    return differenceToReturn;
  });

  return taskList;
}

function AppBoard() {
  // adding local storage
  const LOCAL_STORAGE_PROJECTS_KEY = "todoapp.projects";
  let projectsList =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];

  // assigning Object methods back, as they were saved as strings
  for (let i = 0; i < projectsList.length; i++) {
    projectsList[i] = Object.assign(new _projects_js__WEBPACK_IMPORTED_MODULE_0__.Project(), projectsList[i]);

    for (let j = 0; j < projectsList[i].tasksList.length; j++) {
      projectsList[i].tasksList[j] = Object.assign(
        new _tasks_js__WEBPACK_IMPORTED_MODULE_1__.Task(),
        projectsList[i].tasksList[j]
      );
    }
  }

  // let projectsList = [];

  function addProject(project) {
    // adds the task to end of tasksList
    this.projectsList.push(project);
  }

  function removeProject(index) {
    this.projectsList.splice(index, 1);
  }

  // function editProject(index_to_remove, new_project) {
  //   this.projectsList.splice(index_to_remove, 1, new_project);
  // }

  function removeTask(taskUniqueId) {
    projectsList.forEach((project) => {
      for (let i = 0; i < project.tasksList.length; i++) {
        if (taskUniqueId == project.tasksList[i].uniqueID) {
          project.tasksList.splice(i, 1);
          return;
        }
      }
    });
  }

  function saveProjectsToLocalStorage() {
    localStorage.setItem(
      LOCAL_STORAGE_PROJECTS_KEY,
      JSON.stringify(projectsList)
    );
  }

  function getTasksFromAllProjects() {
    let allTasks = [];

    //projectsList[0] for the Main Project
    // projectsList[5].tasksList.forEach((task) => {
    //   allTasks.push(task);
    // });

    for (let i = _projects_js__WEBPACK_IMPORTED_MODULE_0__.ProjectsNotToRemove.length - 1; i < projectsList.length; i++) {
      projectsList[i].tasksList.forEach((task) => {
        allTasks.push(task);
      });
    }

    taskListSorting(allTasks);

    return allTasks;
  }

  function getTasksForTodayTomorrow() {
    //switched to today and tomorrow
    let allTasks = [];

    const now = new Date();
    const todayStart = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(now);

    function checkTasklist(project) {
      project.tasksList.forEach((task) => {
        if (task.dueDate == false) {
          return;
        }

        const taskDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(task.dueDate));
        const daysBetween = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(taskDueDate, todayStart);

        if (daysBetween === 0 || daysBetween === 1) {
          allTasks.push(task);
        }
      });
    }

    // checkTasklist(projectsList[5]);
    for (let i = _projects_js__WEBPACK_IMPORTED_MODULE_0__.ProjectsNotToRemove.length - 1; i < projectsList.length; i++) {
      checkTasklist(projectsList[i]);
    }

    taskListSorting(allTasks);

    return allTasks;
  }

  function getTasksForWeek() {
    let allTasks = [];

    const now = new Date();
    const todayStart = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(now);

    function checkTasklist(project) {
      project.tasksList.forEach((task) => {
        if (task.dueDate == false) {
          return;
        }

        const taskDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(task.dueDate));
        const daysBetween = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(taskDueDate, todayStart);

        if (daysBetween < 0) {
          return;
        }
        if (daysBetween <= 7) {
          allTasks.push(task);
        }
      });
    }

    // checkTasklist(projectsList[5]);
    for (let i = _projects_js__WEBPACK_IMPORTED_MODULE_0__.ProjectsNotToRemove.length - 1; i < projectsList.length; i++) {
      checkTasklist(projectsList[i]);
    }

    taskListSorting(allTasks);

    return allTasks;
  }

  function getTasksForMonth() {
    let allTasks = [];

    const now = new Date();
    const todayStart = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(now);

    function checkTasklist(project) {
      project.tasksList.forEach((task) => {
        if (task.dueDate == false) {
          return;
        }

        const taskDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(task.dueDate));
        const daysBetween = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(taskDueDate, todayStart);

        if (daysBetween < 0) {
          return;
        }
        if (daysBetween <= 31) {
          allTasks.push(task);
        }
      });
    }

    // checkTasklist(projectsList[5]);
    for (let i = _projects_js__WEBPACK_IMPORTED_MODULE_0__.ProjectsNotToRemove.length - 1; i < projectsList.length; i++) {
      checkTasklist(projectsList[i]);
    }

    taskListSorting(allTasks);

    return allTasks;
  }

  function getImportantTasks() {
    let allTasks = [];

    //projectsList[0] for the Main Project
    // projectsList[5].tasksList.forEach((task) => {
    //   if (task.isImportant === true) {
    //     allTasks.push(task);
    //   }
    // });

    for (let i = _projects_js__WEBPACK_IMPORTED_MODULE_0__.ProjectsNotToRemove.length - 1; i < projectsList.length; i++) {
      projectsList[i].tasksList.forEach((task) => {
        if (task.isImportant === true) {
          allTasks.push(task);
        }
      });
    }

    taskListSorting(allTasks);

    return allTasks;
  }

  function getExpiredTasks() {
    let allTasks = [];

    const now = new Date();
    const todayStart = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(now);

    function checkTasklist(project) {
      project.tasksList.forEach((task) => {
        if (task.dueDate == false) {
          return;
        }

        const taskDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(task.dueDate));
        const daysBetween = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(taskDueDate, todayStart);

        if (daysBetween < 0) {
          allTasks.push(task);
        }
      });
    }

    // checkTasklist(projectsList[5]);
    for (let i = _projects_js__WEBPACK_IMPORTED_MODULE_0__.ProjectsNotToRemove.length - 1; i < projectsList.length; i++) {
      checkTasklist(projectsList[i]);
    }

    taskListSorting(allTasks);

    return allTasks;
  }

  return {
    projectsList,
    removeTask,
    addProject,
    removeProject,
    saveProjectsToLocalStorage,
    getTasksFromAllProjects,
    getTasksForTodayTomorrow,
    getTasksForWeek,
    getTasksForMonth,
    getImportantTasks,
    getExpiredTasks,
  };
}


/***/ }),

/***/ "./src/javascript/modules/calendar.js":
/*!********************************************!*\
  !*** ./src/javascript/modules/calendar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCalendar": () => (/* binding */ createCalendar)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");


function createCalendar() {
  // Get the current date
  var currentDate = new Date();

  // Get the year and month of the current date
  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth();
  var currentDay = currentDate.getDate();

  // Get the number of days in the previous month
  var daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  // Get the first day of the current month
  var firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Calculate the number of days to display from the previous month
  var daysToDisplayFromPrevMonth =
    firstDayOfMonth > 0 ? firstDayOfMonth - 1 : 6;

  // Calculate the number of days to display from the next month
  var daysToDisplayFromNextMonth =
    7 -
    ((daysToDisplayFromPrevMonth +
      new Date(currentYear, currentMonth + 1, 0).getDate()) %
      7);

  // Create an array to store the calendar days
  var calendarDays = [];

  // Add the previous month's days to the calendar days array
  for (
    var i = daysInPrevMonth - daysToDisplayFromPrevMonth + 1;
    i <= daysInPrevMonth;
    i++
  ) {
    calendarDays.push({ day: i, isCurrentMonth: false });
  }

  // Add the current month's days to the calendar days array
  for (
    var i = 1;
    i <= new Date(currentYear, currentMonth + 1, 0).getDate();
    i++
  ) {
    calendarDays.push({ day: i, isCurrentMonth: true });
  }

  // Add the next month's days to the calendar days array
  for (var i = 1; i <= daysToDisplayFromNextMonth; i++) {
    calendarDays.push({ day: i, isCurrentMonth: false });
  }

  // Get a reference to the calendar div element
  var calendar = document.getElementById("calendar");

  // Create a table element to display the calendar
  var calendarTable = document.createElement("table");

  // Create a row for the day names
  var dayNamesRow = calendarTable.insertRow();
  dayNamesRow.classList.add("calendar_days");
  var dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  for (var i = 0; i < dayNames.length; i++) {
    var cell = dayNamesRow.insertCell();
    cell.textContent = dayNames[i];
    cell.classList.add("calendar_day");
  }

  // Create rows for the calendar days
  for (var i = 0; i < calendarDays.length; i += 7) {
    var row = calendarTable.insertRow();

    for (var j = i; j < i + 7; j++) {
      var cell = row.insertCell();
      cell.textContent = calendarDays[j].day;
      if (
        calendarDays[j].isCurrentMonth &&
        calendarDays[j].day === currentDay
      ) {
        cell.classList.add("today");
      }
    }
  }

  // Add the calendar table to the calendar div element
  calendar.innerHTML = `&#8880;${(0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(currentDate, "MMMM dd, yyyy")}&#8881;`;
  calendar.appendChild(calendarTable);
}


/***/ }),

/***/ "./src/javascript/modules/clock.js":
/*!*****************************************!*\
  !*** ./src/javascript/modules/clock.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Clock": () => (/* binding */ Clock)
/* harmony export */ });
// For toggle button;

function toggleClass() {
  const body = document.querySelector("body");
  body.classList.toggle("light");
  body.style.transition = `0.3s linear`;
}

function Clock() {
  // for time;
  const deg = 6;
  // 360 / (12 * 5);

  const hr = document.querySelector("#hr");
  const mn = document.querySelector("#mn");
  const sc = document.querySelector("#sc");

  setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    let msec = day.getMilliseconds();

    // VERY IMPORTANT STEP:

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // gives the smooth transitioning effect, but there's a bug here!
    // sc.style.transition = `1s`;
  });
}


/***/ }),

/***/ "./src/javascript/modules/dom_materials.js":
/*!*************************************************!*\
  !*** ./src/javascript/modules/dom_materials.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomCreator": () => (/* binding */ DomCreator)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/javascript/index.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/javascript/modules/projects.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ "./src/javascript/modules/tasks.js");
/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.js */ "./src/javascript/modules/calendar.js");
/* harmony import */ var _app_logic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app_logic.js */ "./src/javascript/modules/app_logic.js");
/* harmony import */ var _assets_images_delete_folder_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/delete_folder_icon.svg */ "./src/assets/images/delete_folder_icon.svg");
/* harmony import */ var _assets_images_delete_folder_icon_red_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/delete_folder_icon_red.svg */ "./src/assets/images/delete_folder_icon_red.svg");
/* harmony import */ var _assets_images_expand_lines_icon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/expand_lines_icon.png */ "./src/assets/images/expand_lines_icon.png");
/* harmony import */ var _assets_images_expand_lines_icon_red_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/expand_lines_icon_red.png */ "./src/assets/images/expand_lines_icon_red.png");
/* harmony import */ var _assets_images_expand_lines_icon_yellow_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/expand_lines_icon_yellow.png */ "./src/assets/images/expand_lines_icon_yellow.png");
/* harmony import */ var _assets_images_expand_lines_icon_green_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/images/expand_lines_icon_green.png */ "./src/assets/images/expand_lines_icon_green.png");
/* harmony import */ var _assets_images_add_icon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/images/add_icon.png */ "./src/assets/images/add_icon.png");
/* harmony import */ var _assets_images_info_icon_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/images/info_icon.png */ "./src/assets/images/info_icon.png");
/* harmony import */ var _assets_images_finish_flag_icon_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/images/finish_flag_icon.png */ "./src/assets/images/finish_flag_icon.png");
/* harmony import */ var _assets_images_edit_pencil_icon_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/images/edit_pencil_icon.png */ "./src/assets/images/edit_pencil_icon.png");




















function DomCreator() {
  const mainContainer = document.querySelector(".main_container");

  const overlay = document.querySelector(".overlay_for_form");
  const taskForm = document.querySelector(".form.form_task");
  const projectForm = document.querySelector(".form.form_project");

  const submitProjectButton = document.querySelector(
    "form.form_project button.form_submit"
  );
  const submitTaskButton = document.querySelector(
    "form.form_task button.form_submit"
  );

  function displayProjects() {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.saveProjectsToLocalStorage();

    let i = 0;
    const displayForProjects = document.querySelector(".display_projects");
    let displaySideBarforProjects;

    // clearing the menus
    document.querySelector(".home_menu").innerHTML = "";
    document.querySelector(".projects_menu").innerHTML = "";

    (0,_calendar_js__WEBPACK_IMPORTED_MODULE_3__.createCalendar)();

    _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.projectsList.forEach((project) => {
      (0,_app_logic_js__WEBPACK_IMPORTED_MODULE_4__.taskListSorting)(project.tasksList);
      if (i < _projects_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsNotToRemove.length - 1) {
        displaySideBarforProjects = document.querySelector(".home_menu");
      } else {
        displaySideBarforProjects = document.querySelector(".projects_menu");
      }

      //creating display for the sidebar
      //***************************** */
      const newSideBarRow = document.createElement("div");
      newSideBarRow.classList.add("sidebar_project_row");
      newSideBarRow.setAttribute("data-sidebar-project-index", `${i}`);
      displaySideBarforProjects.appendChild(newSideBarRow);

      const newProjectTitleAndButtons = document.createElement("div");
      newProjectTitleAndButtons.classList.add("project_title_and_buttons");
      newProjectTitleAndButtons.setAttribute("data-project-index", `${i}`);
      newSideBarRow.appendChild(newProjectTitleAndButtons);

      const newDisplayTasksButton = document.createElement("button");
      newDisplayTasksButton.setAttribute("data-project-index", `${i}`);
      newProjectTitleAndButtons.appendChild(newDisplayTasksButton);

      newDisplayTasksButton.addEventListener("click", (event) => {
        displayTasks(project, displayForProjects);
      });

      const newDisplayTasksButtonImage = document.createElement("img");
      newDisplayTasksButtonImage.setAttribute("alt", "expand icon");
      newDisplayTasksButtonImage.classList.add("sidebar_icon");
      newDisplayTasksButton.appendChild(newDisplayTasksButtonImage);
      if (i === 0) {
        newDisplayTasksButtonImage.setAttribute("src", _assets_images_expand_lines_icon_red_png__WEBPACK_IMPORTED_MODULE_8__);
      } else if (i === 1) {
        newDisplayTasksButtonImage.setAttribute("src", _assets_images_expand_lines_icon_yellow_png__WEBPACK_IMPORTED_MODULE_9__);
      } else if (i === 2) {
        newDisplayTasksButtonImage.setAttribute("src", _assets_images_expand_lines_icon_green_png__WEBPACK_IMPORTED_MODULE_10__);
      } else {
        newDisplayTasksButtonImage.setAttribute("src", _assets_images_expand_lines_icon_png__WEBPACK_IMPORTED_MODULE_7__);
      }

      const newProject = document.createElement("div");
      newProject.classList.add("project");
      newProject.innerHTML = project.projectName;
      newProject.setAttribute("data-project-index", `${i}`);
      newProjectTitleAndButtons.appendChild(newProject);

      if (i >= _projects_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsNotToRemove.length - 1) {
        newProject.addEventListener("click", () => {
          function replaceWithInput(element) {
            var input = document.createElement("input");
            input.type = "text";
            input.value = element.innerHTML;
            input.maxlength = "40";
            element.parentNode.replaceChild(input, element);
            input.focus();

            function updateProject() {
              project.setProjectName(input.value);
              var updatedElement = document.createElement("div");
              updatedElement.className = "project";
              updatedElement.setAttribute(
                "data-project-index",
                element.getAttribute("data-project-index")
              );
              updatedElement.innerHTML = input.value;
              updatedElement.addEventListener("click", function () {
                replaceWithInput(updatedElement);
              });

              project.tasksList.forEach((task) => {
                task.projectName = input.value;
              });

              input.parentNode.replaceChild(updatedElement, input);

              _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.saveProjectsToLocalStorage();
            }

            input.addEventListener("keyup", (event) => {
              if (event.key === "Enter") {
                input.removeEventListener("blur", updateProject);
                updateProject();
              }
            });
            input.addEventListener("blur", updateProject);
          }
          replaceWithInput(newProject);
        });
      }

      // remove button
      // if condition prevents removing the main categories
      if (i >= _projects_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsNotToRemove.length) {
        const newRemoveButton = document.createElement("button");
        newRemoveButton.setAttribute("data-project-index", `${i}`);
        newProjectTitleAndButtons.appendChild(newRemoveButton);

        newRemoveButton.onclick = function () {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.formCreator.confirmDeleteProjectEventListeners(
            newRemoveButton,
            project
          );
        };

        const newRemoveButtonImage = document.createElement("img");
        newRemoveButtonImage.setAttribute("alt", "delete icon");
        newRemoveButtonImage.setAttribute("src", _assets_images_delete_folder_icon_svg__WEBPACK_IMPORTED_MODULE_5__);
        newRemoveButtonImage.setAttribute("data-project-index", `${i}`);
        newRemoveButtonImage.classList.add("sidebar_icon");
        newRemoveButtonImage.classList.add("delete_project_icon");
        newRemoveButton.appendChild(newRemoveButtonImage);
      }

      if (i >= _projects_js__WEBPACK_IMPORTED_MODULE_1__.ProjectsNotToRemove.length - 1) {
        const newAddTaskButton = document.createElement("button");
        newAddTaskButton.classList.add("add_task_button");
        newAddTaskButton.setAttribute("data-project-index", `${i}`);
        newProjectTitleAndButtons.appendChild(newAddTaskButton);

        const newAddTaskButtonImage = document.createElement("img");
        newAddTaskButtonImage.setAttribute("alt", "add icon");
        newAddTaskButtonImage.setAttribute("src", _assets_images_add_icon_png__WEBPACK_IMPORTED_MODULE_11__);
        newAddTaskButtonImage.classList.add("sidebar_icon");
        newAddTaskButton.appendChild(newAddTaskButtonImage);

        newAddTaskButton.addEventListener("click", (event) => {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.formCreator.addTaskFormEventListeners(project, newAddTaskButton);
        });
      }
      //**************

      i++;
    });
  }

  // Displays the tasks in a Project
  function displayTasks(project) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.saveProjectsToLocalStorage();

    const newContainerForProjectTitle = document.querySelector(
      ".display_project_title"
    );
    const newContainerForTasks = document.querySelector(".display_projects");
    newContainerForProjectTitle.innerHTML = project.projectName;
    newContainerForTasks.innerHTML = "";

    // settings for main categories..
    // ******************************
    // ******************************

    //Today
    if (project === _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.projectsList[0]) {
      project.tasksList = _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.getTasksForTodayTomorrow();
    }

    //This week
    if (project === _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.projectsList[1]) {
      project.tasksList = _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.getTasksForWeek();
    }

    //This Month
    if (project === _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.projectsList[2]) {
      project.tasksList = _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.getTasksForMonth();
    }

    //Important
    if (project === _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.projectsList[3]) {
      project.tasksList = _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.getImportantTasks();
    }

    //Expired
    if (project === _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.projectsList[4]) {
      project.tasksList = _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.getExpiredTasks();
    }

    // All Tasks
    if (project === _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.projectsList[5]) {
      project.tasksList = _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.getTasksFromAllProjects();
    }

    // ******************************
    // ******************************

    //adding the header titles for tasks
    (function addHeaderForTasks() {
      const newContainerForSingleTask = document.createElement("div");
      newContainerForSingleTask.classList.add(
        "container_for_single_task_header"
      );
      newContainerForTasks.appendChild(newContainerForSingleTask);

      const newTaskDaysLeftDiv = document.createElement("div");
      newTaskDaysLeftDiv.classList.add("task_due_date_day");
      newTaskDaysLeftDiv.innerHTML = "";
      newContainerForSingleTask.appendChild(newTaskDaysLeftDiv);

      const newTaskDaysLeftImg = document.createElement("img");
      newTaskDaysLeftImg.setAttribute("alt", "expand icon");
      newTaskDaysLeftImg.setAttribute("src", _assets_images_finish_flag_icon_png__WEBPACK_IMPORTED_MODULE_13__);
      newTaskDaysLeftImg.classList.add("title_icon");
      newTaskDaysLeftDiv.appendChild(newTaskDaysLeftImg);

      const newTaskDateDiv = document.createElement("div");
      newTaskDateDiv.classList.add("task_due_date");
      newTaskDateDiv.innerHTML = "Due Date";
      newContainerForSingleTask.appendChild(newTaskDateDiv);

      const newTaskTitleDiv = document.createElement("div");
      newTaskTitleDiv.classList.add("task_title");
      newTaskTitleDiv.innerHTML = "Task Title";
      newContainerForSingleTask.appendChild(newTaskTitleDiv);
    })();

    project.tasksList.forEach((task) => {
      const newContainerForSingleTask = document.createElement("div");
      newContainerForSingleTask.classList.add("container_for_single_task");
      newContainerForTasks.appendChild(newContainerForSingleTask);

      const newCircleForTask = document.createElement("div");
      newCircleForTask.classList.add("circle");
      newContainerForSingleTask.appendChild(newCircleForTask);

      const newTaskDaysLeftDiv = document.createElement("div");
      newTaskDaysLeftDiv.classList.add(task.uniqueID);
      newTaskDaysLeftDiv.classList.add("task_due_date_day");
      newTaskDaysLeftDiv.classList.add(task.getClassForDuedate());
      newTaskDaysLeftDiv.innerHTML = task.getDaysLeftStatus();
      newContainerForSingleTask.appendChild(newTaskDaysLeftDiv);

      const newTaskDateDiv = document.createElement("div");
      newTaskDateDiv.classList.add(task.uniqueID);
      newTaskDateDiv.classList.add("task_due_date");
      // newTaskDateDiv.classList.add(task.getClassForDuedate());
      newTaskDateDiv.innerHTML = task.formatDateString();
      newContainerForSingleTask.appendChild(newTaskDateDiv);

      const newTaskTitleDiv = document.createElement("div");
      newTaskTitleDiv.classList.add(task.uniqueID);
      newTaskTitleDiv.classList.add("task_title");
      newTaskTitleDiv.innerHTML = task.title;
      newContainerForSingleTask.appendChild(newTaskTitleDiv);

      const newTaskButtonsContainer = document.createElement("div");
      newTaskButtonsContainer.classList.add(task.uniqueID);
      newTaskButtonsContainer.classList.add("task_buttons_container");
      newContainerForSingleTask.appendChild(newTaskButtonsContainer);

      const newCheckTaskButton = document.createElement("button");
      newCheckTaskButton.classList.add("check_task_button");
      newCheckTaskButton.innerHTML = task.isTaskChecked ? "&#9745;" : "&#9744;";
      newTaskButtonsContainer.appendChild(newCheckTaskButton);
      if (task.isTaskChecked) {
        newContainerForSingleTask.classList.add("checked");
      }

      newCheckTaskButton.addEventListener("click", () => {
        task.isTaskChecked = !task.isTaskChecked;
        displayTasks(project); // selects the closest parent
      });

      const newImportantTaskButton = document.createElement("button");
      newImportantTaskButton.classList.add("check_priority_button");
      newImportantTaskButton.innerHTML = "&#9734;";
      newTaskButtonsContainer.appendChild(newImportantTaskButton);
      if (task.isImportant) {
        newImportantTaskButton.innerHTML = "&#9733;";
        newImportantTaskButton.classList.add("checked");
      }

      newImportantTaskButton.addEventListener("click", () => {
        task.isImportant = !task.isImportant;
        displayTasks(project); // selects the closest parent
      });

      const newEditTaskButton = document.createElement("button");
      newEditTaskButton.classList.add("info_task_button");
      newTaskButtonsContainer.appendChild(newEditTaskButton);

      newEditTaskButton.addEventListener("click", (event) => {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.formCreator.editTaskFormEventListeners(
          project,
          task,
          newEditTaskButton
        );
      });

      const newEditTaskButtonImage = document.createElement("img");
      newEditTaskButtonImage.setAttribute("alt", "edit task icon");
      newEditTaskButtonImage.setAttribute("src", _assets_images_edit_pencil_icon_png__WEBPACK_IMPORTED_MODULE_14__);
      newEditTaskButtonImage.classList.add("sidebar_icon");
      newEditTaskButtonImage.classList.add("edit_task_icon");
      newEditTaskButton.appendChild(newEditTaskButtonImage);

      const newInfoTaskButton = document.createElement("button");
      newInfoTaskButton.classList.add("info_task_button");
      newTaskButtonsContainer.appendChild(newInfoTaskButton);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.formCreator.addTaskInfoEventListeners(newInfoTaskButton, task);

      const newInfoTaskButtonImage = document.createElement("img");
      newInfoTaskButtonImage.setAttribute("alt", "info icon");
      newInfoTaskButtonImage.setAttribute("src", _assets_images_info_icon_png__WEBPACK_IMPORTED_MODULE_12__);
      newInfoTaskButtonImage.classList.add("sidebar_icon");
      newInfoTaskButton.appendChild(newInfoTaskButtonImage);

      const newRemoveTaskButton = document.createElement("button");
      newRemoveTaskButton.classList.add("remove_task_button");
      newRemoveTaskButton.innerHTML = "&#x2716;";
      newTaskButtonsContainer.appendChild(newRemoveTaskButton);
      newRemoveTaskButton.addEventListener("click", () => {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.removeTask(task.uniqueID);
        displayTasks(project);
      });
    });
  }

  return { displayProjects, displayTasks };
}


/***/ }),

/***/ "./src/javascript/modules/forms.js":
/*!*****************************************!*\
  !*** ./src/javascript/modules/forms.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsCreator": () => (/* binding */ FormsCreator)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/javascript/index.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/javascript/modules/projects.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ "./src/javascript/modules/tasks.js");
/* harmony import */ var _assets_images_add_folder_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/add_folder_icon.png */ "./src/assets/images/add_folder_icon.png");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");








function FormsCreator() {
  const mainContainer = document.querySelector(".main_container");

  const overlay = document.querySelector(".overlay_for_form");
  const formsMainContainer = document.querySelector(".forms_main_container");
  const infoForm = document.querySelector(".form.task_info");
  const taskForm = document.querySelector(".form.form_task");
  const editTaskForm = document.querySelector(".form.form_edit_task");
  const projectForm = document.querySelector(".form.form_project");
  const confirmDeleteProjectForm = document.querySelector(
    ".form.confirm_delete_project"
  );

  const submitProjectButton = document.querySelector(
    "form.form_project button.form_submit"
  );
  const submitTaskButton = document.querySelector(
    "form.form_task button.form_submit"
  );
  const submitEditTaskButton = document.querySelector(
    "form.form_edit_task button.form_submit"
  );

  const submitConfirmDeleteProjectButton = document.querySelector(
    "form.confirm_delete_project button.form_submit"
  );

  // *******************************
  // *******************************
  // *******************************

  // *******************************
  // *******************************
  // *******************************

  function addProjectFormEventListeners() {
    const addProjectButton = document.querySelector(".add_project_button");
    const closeProjectFormButton = document.querySelector(
      "form.form_project .close_form_button"
    );

    addProjectButton.innerHTML = "";
    const addProjectButtonImage = document.createElement("img");
    addProjectButtonImage.setAttribute("alt", "add project");
    addProjectButtonImage.setAttribute("src", _assets_images_add_folder_icon_png__WEBPACK_IMPORTED_MODULE_3__);
    addProjectButtonImage.classList.add("sidebar_icon");
    addProjectButton.appendChild(addProjectButtonImage);

    function openProjectForm() {
      projectForm.classList.add("active");
      overlay.classList.add("active");
      projectForm.querySelector("input#form_project_title").focus();
      projectForm.addEventListener("keydown", (event) => {
        if (event.keyCode === 13 || event.which === 13) {
          projectForm.querySelector("button.form_submit").focus();
        }
      });
    }
    function closeProjectForm() {
      projectForm.classList.remove("active");
      overlay.classList.remove("active");
    }

    addProjectButton.addEventListener("click", () => {
      openProjectForm();
    });
    closeProjectFormButton.addEventListener("click", () => {
      closeProjectForm();
    });
    overlay.addEventListener("click", () => {
      closeProjectForm();
    });

    function submitProject(event) {
      function clearProjectFormFields() {
        titleFromProjectForm.value = "";
      }

      event.preventDefault();

      const titleFromProjectForm = document.querySelector(
        "#form_project_title"
      );

      const newProject = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.Project)(titleFromProjectForm.value);

      _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.addProject(newProject);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.domCreator.displayProjects();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.domCreator.displayTasks(newProject);

      clearProjectFormFields();
    }

    submitProjectButton.addEventListener("click", (event) => {
      if (
        projectForm.querySelector("input#form_project_title").value == false
      ) {
        return;
      }
      submitProject(event);
      closeProjectForm();
    });
  }

  // *******************************
  // *******************************
  // *******************************

  // *******************************
  // *******************************
  // *******************************

  function addTaskFormEventListeners(project, addTaskButton) {
    const selectedProject = project;
    const closeTaskFormButton = document.querySelector(
      "form.form_task .close_form_button"
    );
    function openTaskForm() {
      taskForm.classList.add("active");
      overlay.classList.add("active");
      taskForm.querySelector("input#form_task_title").focus();
      taskForm.addEventListener("keydown", (event) => {
        if (event.keyCode === 13 || event.which === 13) {
          taskForm.querySelector("button.form_submit").focus();
        }
      });
    }
    function closeTaskForm() {
      taskForm.classList.remove("active");
      overlay.classList.remove("active");
    }
    addTaskButton.addEventListener("click", () => {
      openTaskForm();
    });
    closeTaskFormButton.addEventListener("click", () => {
      closeTaskForm();
    });
    overlay.addEventListener("click", () => {
      closeTaskForm();
    });

    function submitTask(event) {
      function clearTaskFormFields() {
        titleFromTaskForm.value = "";
        descriptionFromTaskForm.value = "";
        dateFromTaskForm.value = "";
      }
      event.preventDefault();
      const titleFromTaskForm = document.querySelector("#form_task_title");
      const descriptionFromTaskForm = document.querySelector(
        "#form_task_description"
      );
      const dateFromTaskForm = document.querySelector("#form_task_date");

      const newTask = (0,_tasks_js__WEBPACK_IMPORTED_MODULE_2__.Task)(
        titleFromTaskForm.value,
        selectedProject.projectName
      );
      if (descriptionFromTaskForm.value != false) {
        newTask.description = descriptionFromTaskForm.value;
      }
      if (dateFromTaskForm.value != false) {
        newTask.dueDate = dateFromTaskForm.value;
      }

      selectedProject.addTask(newTask);

      clearTaskFormFields();
    }

    const controller = new AbortController();
    // IMPORTANT: do not delete { signal: controller.signal } from the eventListener!
    submitTaskButton.addEventListener(
      "click",
      (event) => {
        if (taskForm.querySelector("input#form_task_title").value == false) {
          return;
        }
        submitTask(event);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.domCreator.displayTasks(project);
        closeTaskForm();

        controller.abort();
      },
      { signal: controller.signal }
    );

    openTaskForm();
  }

  // *******************************
  // *******************************
  // *******************************

  // *******************************
  // *******************************
  // *******************************

  function editTaskFormEventListeners(project, task, editTaskButton) {
    const selectedProject = project;
    const selectedTask = task;
    const closeTaskFormButton = document.querySelector(
      "form.form_edit_task .close_form_button"
    );
    function openTaskForm() {
      editTaskForm.classList.add("active");
      overlay.classList.add("active");
      editTaskForm.querySelector("input#form_edit_task_title").focus();
      editTaskForm.addEventListener("keydown", (event) => {
        if (event.keyCode === 13 || event.which === 13) {
          editTaskForm.querySelector("button.form_edit_submit").focus();
        }
      });

      titleFromEditTaskForm.value = selectedTask.title;
      descriptionFromEditTaskForm.value = selectedTask.description;
      if (selectedTask.dueDate !== "") {
        dateFromEditTaskForm.value = selectedTask.dueDate;
      }

      console.log(task);
      console.log(project);
    }
    function closeTaskForm() {
      editTaskForm.classList.remove("active");
      overlay.classList.remove("active");
    }
    editTaskButton.addEventListener("click", () => {
      openTaskForm();
    });
    closeTaskFormButton.addEventListener("click", () => {
      closeTaskForm();
    });
    overlay.addEventListener("click", () => {
      closeTaskForm();
    });

    const titleFromEditTaskForm = document.querySelector(
      "#form_edit_task_title"
    );
    const descriptionFromEditTaskForm = document.querySelector(
      "#form_edit_task_description"
    );

    const dateFromEditTaskForm = document.querySelector("#form_edit_task_date");

    // console.log(selectedTask);
    // console.log(titleFromEditTaskForm.value);
    // console.log(descriptionFromEditTaskForm.value);
    // console.log(dateFromEditTaskForm.value);

    const submitEditTask = function (event) {
      function clearTaskFormFields() {
        titleFromEditTaskForm.value = "";
        descriptionFromEditTaskForm.value = "";
        dateFromEditTaskForm.value = "";
      }
      task.title = titleFromEditTaskForm.value;
      task.description = descriptionFromEditTaskForm.value;
      task.dueDate = dateFromEditTaskForm.value;

      if (descriptionFromEditTaskForm.value != false) {
        task.description = descriptionFromEditTaskForm.value;
      } else {
        task.description = "";
      }

      if (dateFromEditTaskForm.value != false) {
        task.dueDate = dateFromEditTaskForm.value;
      } else {
        task.dueDate = "";
      }

      event.preventDefault();
      clearTaskFormFields();
    };

    const controller = new AbortController();
    // IMPORTANT: do not delete { signal: controller.signal } from the eventListener!
    submitEditTaskButton.addEventListener(
      "click",
      (event) => {
        if (
          editTaskForm.querySelector("input#form_edit_task_title").value ==
          false
        ) {
          return;
        }
        submitEditTask(event);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.domCreator.displayTasks(project);
        closeTaskForm();

        controller.abort();
      },
      { signal: controller.signal }
    );

    openTaskForm();
  }

  // *******************************
  // *******************************
  // *******************************

  // *******************************
  // *******************************
  // *******************************

  function addTaskInfoEventListeners(openInfoButton, task) {
    const selectedTask = task;
    const infoTitleField = infoForm.querySelector(".fill_task_info_title");
    const infoDescriptionField = infoForm.querySelector(
      ".fill_task_info_description"
    );
    const infoDueDateField = infoForm.querySelector(".fill_task_info_duedate");
    const infoImportanceField = infoForm.querySelector(
      ".fill_task_info_importance"
    );
    const infoProjectField = infoForm.querySelector(".fill_task_info_project");

    const closeInfoFormButton = document.querySelector(
      "form.task_info .close_form_button"
    );

    function setTaskInfoFields() {
      infoTitleField.innerHTML = selectedTask.title;
      infoDescriptionField.innerHTML = selectedTask.description;

      if (selectedTask.dueDate == false) {
        infoDueDateField.innerHTML = "not stated";
      } else {
        infoDueDateField.innerHTML = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(
          new Date(selectedTask.dueDate),
          "MMMM dd, yyyy"
        );
      }

      infoImportanceField.innerHTML = selectedTask.isImportant
        ? "High"
        : "Normal";
      infoProjectField.innerHTML = selectedTask.projectName;
    }

    function openInfoForm() {
      infoForm.classList.add("active");
      overlay.classList.add("active");
    }
    function closeInfoForm() {
      infoForm.classList.remove("active");
      overlay.classList.remove("active");
    }
    openInfoButton.addEventListener("click", () => {
      openInfoForm();
      setTaskInfoFields();
    });
    closeInfoFormButton.addEventListener("click", () => {
      closeInfoForm();
    });
    overlay.addEventListener("click", () => {
      closeInfoForm();
    });
  }

  // *******************************
  // *******************************
  // *******************************

  // *******************************
  // *******************************
  // *******************************

  function confirmDeleteProjectEventListeners(
    openConfirmDeleteProjectButton,
    project
  ) {
    const closeConfirmDeleteProjectButton = document.querySelector(
      "form.confirm_delete_project .close_form_button"
    );

    function openConfirmDeleteProjectForm() {
      confirmDeleteProjectForm.classList.add("active");
      overlay.classList.add("active");
    }
    function closeConfirmDeleteProjectForm() {
      confirmDeleteProjectForm.classList.remove("active");
      overlay.classList.remove("active");
    }
    openConfirmDeleteProjectButton.addEventListener("click", () => {
      openConfirmDeleteProjectForm();
    });
    closeConfirmDeleteProjectButton.addEventListener("click", () => {
      closeConfirmDeleteProjectForm();
    });
    overlay.addEventListener("click", () => {
      closeConfirmDeleteProjectForm();
    });

    function submitDeleteProjectRequest() {
      let projectIndex = openConfirmDeleteProjectButton.dataset.projectIndex;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.appBoard.removeProject(projectIndex);
    }

    submitConfirmDeleteProjectButton.onclick = function (event) {
      submitDeleteProjectRequest();

      _index_js__WEBPACK_IMPORTED_MODULE_0__.domCreator.displayProjects();
      closeConfirmDeleteProjectForm();
    };

    openConfirmDeleteProjectForm();
  }

  return {
    addProjectFormEventListeners,
    addTaskFormEventListeners,
    editTaskFormEventListeners,
    addTaskInfoEventListeners,
    confirmDeleteProjectEventListeners,
  };
}


/***/ }),

/***/ "./src/javascript/modules/projects.js":
/*!********************************************!*\
  !*** ./src/javascript/modules/projects.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ProjectsNotToRemove": () => (/* binding */ ProjectsNotToRemove),
/* harmony export */   "createTestProjects": () => (/* binding */ createTestProjects)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/javascript/modules/tasks.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./src/javascript/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/differenceInDays/index.js");





const ProjectsNotToRemove = [
  "Today/Tomorrow",
  "Next 7 Days",
  "Next 30 Days",
  "Important",
  "Expired",
  "All Tasks",
  "General Tasks",
];

function Project(project_name) {
  let projectName = project_name;
  let isProjectChecked = false;

  function setProjectName(new_projectName) {
    this.projectName = new_projectName;
  }

  let tasksList = [];

  function addTask(task) {
    this.tasksList.push(task);
  }

  function replaceTask(index_to_remove, new_task) {
    this.tasksList.splice(index_to_remove, 1, new_task);
  }

  return {
    projectName,
    tasksList,
    isProjectChecked,
    addTask,
    replaceTask,
    setProjectName,
  };
}

function createTestProjects() {
  if (_index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.projectsList.length !== 0) {
    return;
  }

  function getFutureEventDate(days_later) {
    const startOfCurrentWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), { weekStartsOn: 1 }); // Assuming Monday is the first day of the week

    const futureDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(
      (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(startOfCurrentWeek, days_later),
      "yyyy-MM-dd"
    );

    return futureDate;
  }

  function isDatePast(date) {
    //date in "yyyy-MM-dd" format as input

    let daysBetween = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(date), new Date());
    return daysBetween < 0 ? true : false;
  }

  //adding default projects
  ProjectsNotToRemove.forEach((title) => {
    _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.addProject(Project(title));
  });

  //adding test projects
  _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.addProject(Project("Work"));
  _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.addProject(Project("Gym"));
  _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.addProject(Project("Birthdays"));
  _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.addProject(Project("Coding Projects"));

  let testTask_1 = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.Task)("call your parents", ProjectsNotToRemove[6]);
  testTask_1.description = "wie geht's?";
  testTask_1.dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), "yyyy-MM-dd");
  testTask_1.uniqueID = 10;
  _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.projectsList[6].addTask(testTask_1);

  let testTask_2 = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.Task)("car maintenance", ProjectsNotToRemove[6]);
  testTask_2.description = "weird noise from the gear..";
  testTask_2.dueDate = getFutureEventDate(19);
  testTask_2.isImportant = true;
  testTask_2.uniqueID = 20;
  _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.projectsList[6].addTask(testTask_2);

  let testTask_3 = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.Task)("Organise emergency procedures", "Work");
  testTask_3.description = "Airplane emergency procedures";
  testTask_3.dueDate = getFutureEventDate(3);
  testTask_3.isTaskChecked = isDatePast(testTask_3.dueDate) ? true : false;
  testTask_3.uniqueID = 30;
  _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.projectsList[7].addTask(testTask_3);

  let testTask_4 = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.Task)("Meeting with the CTO", "Work");
  testTask_4.description = "Medical device costs are increasing";
  testTask_4.dueDate = getFutureEventDate(4);
  testTask_4.isTaskChecked = isDatePast(testTask_4.dueDate) ? true : false;
  testTask_4.isImportant = true;
  testTask_4.uniqueID = 40;
  _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.projectsList[7].addTask(testTask_4);

  let testTask_5 = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.Task)("Team Meeting", "Work");
  testTask_5.description = "weekly team meeting";
  testTask_5.dueDate = getFutureEventDate(4);
  testTask_5.isTaskChecked = isDatePast(testTask_5.dueDate) ? true : false;
  testTask_5.uniqueID = 50;
  _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.projectsList[7].addTask(testTask_5);

  let testTask_6 = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.Task)("Chest Day", "Gym");
  testTask_6.description = "International Chest day";
  testTask_6.dueDate = getFutureEventDate(0);
  testTask_6.isTaskChecked = isDatePast(testTask_6.dueDate) ? true : false;
  testTask_6.uniqueID = 60;
  _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.projectsList[8].addTask(testTask_6);

  let testTask_7 = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.Task)("Arm Day", "Gym");
  testTask_7.description = "working on those guns";
  testTask_7.dueDate = getFutureEventDate(2);
  testTask_7.isTaskChecked = isDatePast(testTask_7.dueDate) ? true : false;
  testTask_7.isImportant = true;
  testTask_7.uniqueID = 70;
  _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.projectsList[8].addTask(testTask_7);

  let testTask_8 = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.Task)("Chest and Arm Day", "Gym");
  testTask_8.description = "brooo";
  testTask_8.dueDate = getFutureEventDate(4);
  testTask_8.isTaskChecked = isDatePast(testTask_8.dueDate) ? true : false;
  testTask_8.uniqueID = 80;
  _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.projectsList[8].addTask(testTask_8);

  let testTask_9 = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.Task)("Brother birthday", "Birthdays");
  testTask_9.description = "brooo";
  testTask_9.dueDate = "2024-01-26";
  testTask_9.uniqueID = 90;
  _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.projectsList[9].addTask(testTask_9);

  let testTask_10 = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.Task)("Mom birthday", "Birthdays");
  testTask_10.description = "yeeey";
  testTask_10.dueDate = "2024-03-18";
  testTask_10.uniqueID = 100;
  _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.projectsList[9].addTask(testTask_10);

  let testTask_11 = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.Task)("Dad birthday", "Birthdays");
  testTask_11.description = "yuaaay";
  testTask_11.dueDate = "2024-02-13";
  testTask_11.uniqueID = 110;
  _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.projectsList[9].addTask(testTask_11);

  let testTask_12 = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.Task)("Weather App", "Coding Projects");
  testTask_12.description = "working with APIs";
  testTask_12.dueDate = getFutureEventDate(27);
  testTask_12.uniqueID = 120;
  _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.projectsList[10].addTask(testTask_12);

  let testTask_13 = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.Task)("To Do App", "Coding Projects");
  testTask_13.description = "https://berkgirgin.github.io/To_Do_App/";
  testTask_13.dueDate = "2023-03-26";
  testTask_13.isImportant = true;
  testTask_13.isTaskChecked = true;
  testTask_13.uniqueID = 130;
  _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.projectsList[10].addTask(testTask_13);

  let testTask_14 = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.Task)("Connect Four Game", "Coding Projects");
  testTask_14.description = "https://berkgirgin.github.io/Connect-Four/";
  testTask_14.dueDate = "2023-03-12";
  testTask_14.isTaskChecked = true;
  testTask_14.uniqueID = 140;
  _index_js__WEBPACK_IMPORTED_MODULE_1__.appBoard.projectsList[10].addTask(testTask_14);
}


/***/ }),

/***/ "./src/javascript/modules/tasks.js":
/*!*****************************************!*\
  !*** ./src/javascript/modules/tasks.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/differenceInDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");


function Task(arg_title, arg_project_name) {
  let title = arg_title;
  let projectName = arg_project_name;

  let uniqueID = Date.now();
  let description = "";
  let dueDate = "";
  let isImportant = false; //by default tasks have normal priority
  let isTaskChecked = false; //by default tasks are not done

  function getDaysLeft(task) {
    const now = new Date();
    const todayStart = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(now);
    const dueDateStr = task.dueDate;
    let daysBetween;

    if (dueDateStr == "") {
      daysBetween = false;
      return daysBetween;
    }

    const taskDueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(dueDateStr));
    daysBetween = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDueDate, todayStart);

    return daysBetween;
  }

  function getDaysLeftStatus() {
    //returns a string message
    let statusMessage = "";
    const daysBetween = getDaysLeft(this);

    if (daysBetween < 0) {
      statusMessage = `${-daysBetween} days ago`;
    } else if (daysBetween === 0) {
      statusMessage = "today";
    } else if (daysBetween === 1) {
      statusMessage = `in ${daysBetween} day`;
    } else if (daysBetween > 1) {
      statusMessage = `in ${daysBetween} days`;
    }

    return statusMessage;
  }

  function getClassForDuedate() {
    let statusClass = "";
    const daysBetween = getDaysLeft(this);

    if (daysBetween < 0) {
      statusClass = "due_date_expiry_level_0";
    } else if (daysBetween === 0 || daysBetween === 1) {
      statusClass = "due_date_expiry_level_1";
    } else if (daysBetween >= 2 && daysBetween <= 7) {
      statusClass = "due_date_expiry_level_2";
    } else if (daysBetween > 7 && daysBetween <= 31) {
      statusClass = "due_date_expiry_level_3";
    } else if (daysBetween > 31 || daysBetween == false) {
      statusClass = "due_date_expiry_level_4";
    }

    return statusClass;
  }

  function formatDateString() {
    //format it for displayTasks function
    let dateStr = this.dueDate;
    let dateOriginalFormat = new Date(dateStr);

    if (dateStr === "") {
      return;
    }

    return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(dateOriginalFormat, "dd.MM.yyyy");
  }

  return {
    title,
    projectName,
    uniqueID,
    description,
    dueDate,
    isImportant,
    isTaskChecked,
    getDaysLeftStatus,
    getClassForDuedate,
    formatDateString,
  };
}


/***/ }),

/***/ "./src/assets/images/add_folder_icon.png":
/*!***********************************************!*\
  !*** ./src/assets/images/add_folder_icon.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8e65f0adc9dd5886160.png";

/***/ }),

/***/ "./src/assets/images/add_icon.png":
/*!****************************************!*\
  !*** ./src/assets/images/add_icon.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60a5243d74b30a5a424e.png";

/***/ }),

/***/ "./src/assets/images/clock.png":
/*!*************************************!*\
  !*** ./src/assets/images/clock.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef10f67136a2dc0f5dbc.png";

/***/ }),

/***/ "./src/assets/images/delete_folder_icon.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/delete_folder_icon.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22e7e7ae438e701e7626.svg";

/***/ }),

/***/ "./src/assets/images/delete_folder_icon_red.svg":
/*!******************************************************!*\
  !*** ./src/assets/images/delete_folder_icon_red.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7813c029477149e2eaa3.svg";

/***/ }),

/***/ "./src/assets/images/edit_pencil_icon.png":
/*!************************************************!*\
  !*** ./src/assets/images/edit_pencil_icon.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fe14f86abb784efa468.png";

/***/ }),

/***/ "./src/assets/images/expand_lines_icon.png":
/*!*************************************************!*\
  !*** ./src/assets/images/expand_lines_icon.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80122f7b175f569bbf1b.png";

/***/ }),

/***/ "./src/assets/images/expand_lines_icon_green.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/expand_lines_icon_green.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72a2d8e82a9e685ba830.png";

/***/ }),

/***/ "./src/assets/images/expand_lines_icon_red.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/expand_lines_icon_red.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e732fdae63a7f8c5b2e.png";

/***/ }),

/***/ "./src/assets/images/expand_lines_icon_yellow.png":
/*!********************************************************!*\
  !*** ./src/assets/images/expand_lines_icon_yellow.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08ce2a7bfa15593f29d8.png";

/***/ }),

/***/ "./src/assets/images/finish_flag_icon.png":
/*!************************************************!*\
  !*** ./src/assets/images/finish_flag_icon.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "311d8281b79db82a9245.png";

/***/ }),

/***/ "./src/assets/images/info_icon.png":
/*!*****************************************!*\
  !*** ./src/assets/images/info_icon.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05a24a2b6a861653e5e2.png";

/***/ }),

/***/ "./src/assets/images/paper.png":
/*!*************************************!*\
  !*** ./src/assets/images/paper.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a3326c6236e212f1138.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/javascript/modules/dom_materials.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsYUFBYSxNQUFNLE9BQU8sVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxZQUFZLGNBQWMsV0FBVyxVQUFVLFVBQVUsS0FBSyxVQUFVLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxRQUFRLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sVUFBVSxXQUFXLFlBQVksYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssTUFBTSxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxNQUFNLFFBQVEsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLGNBQWMsV0FBVyxhQUFhLGFBQWEsYUFBYSxTQUFTLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxjQUFjLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLFlBQVksY0FBYyxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFL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QUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLCtDQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLDRCQUE0QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQXVCO0FBQy9COztBQUVBO0FBQ0EsT0FBTztBQUNQLFFBQVE7QUFDUjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLDRCQUE0QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQXVCO0FBQy9COztBQUVBO0FBQ0EsT0FBTztBQUNQLFFBQVE7QUFDUjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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O0FBQ0EsRUFBRSx3RUFBaUM7QUFDbkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdLa0I7O0FBRVg7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQiw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQSx1QkFBdUIsb0RBQVU7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isb0RBQVU7QUFDbEMsa0JBQWtCLG9EQUFnQjs7QUFFbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTiw0QkFBNEIsYUFBYTtBQUN6QyxNQUFNO0FBQ04sNEJBQTRCLGFBQWE7QUFDekM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVcsb0RBQU07QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b19kb19hcHAvLi9zcmMvc3R5bGVzL2Nsb2NrLmNzcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL3NyYy9zdHlsZXMvY2xvY2suY3NzPzNiM2EiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL3NyYy9qYXZhc2NyaXB0L2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL3NyYy9qYXZhc2NyaXB0L21vZHVsZXMvYXBwX2xvZ2ljLmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL3NyYy9qYXZhc2NyaXB0L21vZHVsZXMvY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vc3JjL2phdmFzY3JpcHQvbW9kdWxlcy9jbG9jay5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9zcmMvamF2YXNjcmlwdC9tb2R1bGVzL2RvbV9tYXRlcmlhbHMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vc3JjL2phdmFzY3JpcHQvbW9kdWxlcy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9zcmMvamF2YXNjcmlwdC9tb2R1bGVzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL3NyYy9qYXZhc2NyaXB0L21vZHVsZXMvdGFza3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvY2xvY2sucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRANTAwJmRpc3BsYXk9c3dhcFxcXCIpOyAqL1xcblxcbi8qICoge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogIzA5MDkwOTtcXG4gIGJhY2tncm91bmQ6ICMwNzE0MWI7XFxufVxcblxcbmJvZHkubGlnaHQge1xcbiAgYmFja2dyb3VuZDogI2QxZGFlMztcXG59ICovXFxuXFxuLmNsb2NrICoge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jbG9jayB7XFxuICAvKiB3aWR0aDogMzc1cHg7XFxuICBoZWlnaHQ6IDM3NXB4OyAqL1xcbiAgaGVpZ2h0OiA5cmVtO1xcbiAgd2lkdGg6IDlyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9sZC15ZWxsb3ctbGlnaHRlcik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyOiA0cHg7XFxuICAvKiBib3gtc2hhZG93OiAxNXB4IDE1cHggMTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7ICovXFxuICBib3gtc2hhZG93OiAwZW0gLTEuMmVtIDEuMmVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNiksXFxuICAgIGluc2V0IDBlbSAtMS4yZW0gMS4yZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KSxcXG4gICAgMGVtIDEuMmVtIDEuMmVtIHJnYmEoMCwgMCwgMCwgMC4zKSwgaW5zZXQgMGVtIDEuMmVtIDEuMmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuYm9keS5saWdodCAuY2xvY2sge1xcbiAgYm94LXNoYWRvdzogMGVtIC0xLjJlbSAxLjJlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksXFxuICAgIGluc2V0IDFlbSAxZW0gLTFlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksXFxuICAgIDBlbSAtMS4yZW0gLTEuMmVtIHJnYmEoMCwgMCwgMCwgMC41KSwgaW5zZXQgMWVtIC0xZW0gMWVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLyogVGhlIHNtYWxsIGNpcmNsZSBpbnQgdGhlIGNlbnRlciAqL1xcbi5jbG9jazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIC8qIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTsgKi9cXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstZ3JleSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxuICAvKiBUaGUgei1pbmRleCBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIHN0YWNrIG9yZGVyIG9mIGFuIGVsZW1lbnQuXFxuICAgIC8qIEFuIGVsZW1lbnQgd2l0aCBncmVhdGVyIHN0YWNrIG9yZGVyIGlzIGFsd2F5cyBpbiBmcm9udCBvZiBhbiBlbGVtZW50IHdpdGggYSBsb3dlciBzdGFjayBvcmRlci4gICovXFxuICAvKiBOb3RlOiB6LWluZGV4IG9ubHkgd29ya3Mgb24gcG9zaXRpb25lZCBlbGVtZW50cyAocG9zaXRpb246IGFic29sdXRlLCBwb3NpdGlvbjogcmVsYXRpdmUsIHBvc2l0aW9uOiBmaXhlZCwgb3IgcG9zaXRpb246IHN0aWNreSkuICovXFxuICB6LWluZGV4OiAxMDAwMDtcXG4gIC8qIGtlcHQgYXMgYSBoaWdoIHZhbHVlLCBzaW5jZSB3YW50ZWQgYXQgdG9wICovXFxufVxcblxcbmJvZHkubGlnaHQgLmNsb2NrOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiAjMWE3NGJlO1xcbn1cXG5cXG4uY2xvY2sgLmhvdXIsXFxuLmNsb2NrIC5taW4sXFxuLmNsb2NrIC5zZWMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4vKiBsZW5ndGggb2YgcmVzcGVjdGl2ZSBhcm1zOyAqL1xcbi5jbG9jayAuaG91cixcXG4uaHIge1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgaGVpZ2h0OiA5MHB4O1xcbn1cXG5cXG4uY2xvY2sgLm1pbixcXG4ubW4ge1xcbiAgd2lkdGg6IDE5MHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG59XFxuXFxuLmNsb2NrIC5zZWMsXFxuLnNjIHtcXG4gIHdpZHRoOiAyMzBweDtcXG4gIGhlaWdodDogMTQwcHg7XFxufVxcblxcbi5ocixcXG4ubW4sXFxuLnNjIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5ocjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogN3B4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ncmV5KTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgLyogei1pbmRleCBsZWFzdCAqL1xcbiAgYm9yZGVyLXJhZGl1czogMi44cHg7XFxufVxcblxcbi5tbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMy41cHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgei1pbmRleDogMTE7XFxuICAvKiB6LWluZGV4IG1vcmUgdGhhbiBob3VyIGhhbmQgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuYm9keS5saWdodCAubW46YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6ICMwOTE5MjE7XFxufVxcblxcbi5zYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgYmFja2dyb3VuZDogI2I5MWMxYztcXG4gIHotaW5kZXg6IDEyO1xcbiAgLyogei1pbmRleCBtb3JlIHRoYW4gaG91ciBtaW51dGUgaGFuZCAqL1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4udG9nZ2xlQ2xhc3Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzNXB4O1xcbiAgcmlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW46IDJweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICNkMWRhZTM7XFxuICBjb2xvcjogI2QxZGFlMztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9nZ2xlQ2xhc3M6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJMaWdodCBNb2RlXFxcIjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBsZWZ0OiAyNXB4O1xcbn1cXG5cXG5ib2R5LmxpZ2h0IC50b2dnbGVDbGFzcyB7XFxuICBiYWNrZ3JvdW5kOiAjMDkxOTIxO1xcbiAgY29sb3I6ICMwOTE5MjE7XFxuICBjb250ZW50OiBcXFwiRGFyayBNb2RlXFxcIjtcXG59XFxuXFxuYm9keS5saWdodCAudG9nZ2xlQ2xhc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJEYXJrIE1vZGVcXFwiO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9jbG9jay5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNkZBQTZGOztBQUU3Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7O0FBRUg7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO2tCQUNnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixtREFBMkM7RUFDM0MsMkNBQTJDO0VBQzNDLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gseURBQXlEO0VBQ3pEOztnRkFFOEU7RUFDOUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7OytFQUU2RTtBQUMvRTs7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUM1QixrQkFBa0I7O0VBRWxCO3dHQUNzRztFQUN0RyxvSUFBb0k7RUFDcEksY0FBYztFQUNkLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0Usa0JBQWtCO0FBQ3BCOztBQUVBLCtCQUErQjtBQUMvQjs7RUFFRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBOztFQUVFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRANTAwJmRpc3BsYXk9c3dhcFxcXCIpOyAqL1xcblxcbi8qICoge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogIzA5MDkwOTtcXG4gIGJhY2tncm91bmQ6ICMwNzE0MWI7XFxufVxcblxcbmJvZHkubGlnaHQge1xcbiAgYmFja2dyb3VuZDogI2QxZGFlMztcXG59ICovXFxuXFxuLmNsb2NrICoge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jbG9jayB7XFxuICAvKiB3aWR0aDogMzc1cHg7XFxuICBoZWlnaHQ6IDM3NXB4OyAqL1xcbiAgaGVpZ2h0OiA5cmVtO1xcbiAgd2lkdGg6IDlyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvY2xvY2sucG5nKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9sZC15ZWxsb3ctbGlnaHRlcik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyOiA0cHg7XFxuICAvKiBib3gtc2hhZG93OiAxNXB4IDE1cHggMTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7ICovXFxuICBib3gtc2hhZG93OiAwZW0gLTEuMmVtIDEuMmVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNiksXFxuICAgIGluc2V0IDBlbSAtMS4yZW0gMS4yZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KSxcXG4gICAgMGVtIDEuMmVtIDEuMmVtIHJnYmEoMCwgMCwgMCwgMC4zKSwgaW5zZXQgMGVtIDEuMmVtIDEuMmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuYm9keS5saWdodCAuY2xvY2sge1xcbiAgYm94LXNoYWRvdzogMGVtIC0xLjJlbSAxLjJlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksXFxuICAgIGluc2V0IDFlbSAxZW0gLTFlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksXFxuICAgIDBlbSAtMS4yZW0gLTEuMmVtIHJnYmEoMCwgMCwgMCwgMC41KSwgaW5zZXQgMWVtIC0xZW0gMWVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLyogVGhlIHNtYWxsIGNpcmNsZSBpbnQgdGhlIGNlbnRlciAqL1xcbi5jbG9jazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIC8qIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTsgKi9cXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstZ3JleSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuXFxuICAvKiBUaGUgei1pbmRleCBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIHN0YWNrIG9yZGVyIG9mIGFuIGVsZW1lbnQuXFxuICAgIC8qIEFuIGVsZW1lbnQgd2l0aCBncmVhdGVyIHN0YWNrIG9yZGVyIGlzIGFsd2F5cyBpbiBmcm9udCBvZiBhbiBlbGVtZW50IHdpdGggYSBsb3dlciBzdGFjayBvcmRlci4gICovXFxuICAvKiBOb3RlOiB6LWluZGV4IG9ubHkgd29ya3Mgb24gcG9zaXRpb25lZCBlbGVtZW50cyAocG9zaXRpb246IGFic29sdXRlLCBwb3NpdGlvbjogcmVsYXRpdmUsIHBvc2l0aW9uOiBmaXhlZCwgb3IgcG9zaXRpb246IHN0aWNreSkuICovXFxuICB6LWluZGV4OiAxMDAwMDtcXG4gIC8qIGtlcHQgYXMgYSBoaWdoIHZhbHVlLCBzaW5jZSB3YW50ZWQgYXQgdG9wICovXFxufVxcblxcbmJvZHkubGlnaHQgLmNsb2NrOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiAjMWE3NGJlO1xcbn1cXG5cXG4uY2xvY2sgLmhvdXIsXFxuLmNsb2NrIC5taW4sXFxuLmNsb2NrIC5zZWMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4vKiBsZW5ndGggb2YgcmVzcGVjdGl2ZSBhcm1zOyAqL1xcbi5jbG9jayAuaG91cixcXG4uaHIge1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgaGVpZ2h0OiA5MHB4O1xcbn1cXG5cXG4uY2xvY2sgLm1pbixcXG4ubW4ge1xcbiAgd2lkdGg6IDE5MHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG59XFxuXFxuLmNsb2NrIC5zZWMsXFxuLnNjIHtcXG4gIHdpZHRoOiAyMzBweDtcXG4gIGhlaWdodDogMTQwcHg7XFxufVxcblxcbi5ocixcXG4ubW4sXFxuLnNjIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5ocjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogN3B4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ncmV5KTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgLyogei1pbmRleCBsZWFzdCAqL1xcbiAgYm9yZGVyLXJhZGl1czogMi44cHg7XFxufVxcblxcbi5tbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMy41cHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgei1pbmRleDogMTE7XFxuICAvKiB6LWluZGV4IG1vcmUgdGhhbiBob3VyIGhhbmQgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuYm9keS5saWdodCAubW46YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6ICMwOTE5MjE7XFxufVxcblxcbi5zYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMnB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgYmFja2dyb3VuZDogI2I5MWMxYztcXG4gIHotaW5kZXg6IDEyO1xcbiAgLyogei1pbmRleCBtb3JlIHRoYW4gaG91ciBtaW51dGUgaGFuZCAqL1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4udG9nZ2xlQ2xhc3Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzNXB4O1xcbiAgcmlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW46IDJweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICNkMWRhZTM7XFxuICBjb2xvcjogI2QxZGFlMztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9nZ2xlQ2xhc3M6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJMaWdodCBNb2RlXFxcIjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBsZWZ0OiAyNXB4O1xcbn1cXG5cXG5ib2R5LmxpZ2h0IC50b2dnbGVDbGFzcyB7XFxuICBiYWNrZ3JvdW5kOiAjMDkxOTIxO1xcbiAgY29sb3I6ICMwOTE5MjE7XFxuICBjb250ZW50OiBcXFwiRGFyayBNb2RlXFxcIjtcXG59XFxuXFxuYm9keS5saWdodCAudG9nZ2xlQ2xhc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJEYXJrIE1vZGVcXFwiO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3BhcGVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzE4MWExYjtcXG4gIC0tZm9udF9jb2xvcl93aGl0ZTogI2U4ZTZlMztcXG4gIGNvbG9yOiB2YXIoLS1mb250X2NvbG9yX3doaXRlKTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgLS1tYWluX2NvbnRhaW5lcl9nYXA6IDFyZW07XFxuICAtLWFkZF9idXR0b25fYmx1ZV9iYWNrZ3JvdW5kOiAjMDA5ZGU3O1xcbiAgLS1hZGRfYnV0dG9uX2JsdWVfYmFja2dyb3VuZF9saWd0aGVyOiAjNDJjM2ZmO1xcbiAgLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogIzFlM2E4YTtcXG4gIC0taG92ZXItY29sb3ItZGVmYXVsdDogI2Q2ZDNkMTtcXG4gIC0tYm9yZGVyX2NvbG9yX2dyZXk6ICM4NTg1ODU7XFxuICAtLWJvcmRlcl9yYWRpdXM6IDEwcHg7XFxuICAtLW1pbi13aWR0aC1kdWVEYXRlOiA1LjVyZW07XFxuICAtLWZvcm1fYm9yZGVyOiAycHggdmFyKC0tYm9yZGVyX2NvbG9yX2dyZXkpIHNvbGlkO1xcblxcbiAgLS1kYXJrLWdyZXk6ICMzMzMzMzM7XFxuICAtLW9sZC15ZWxsb3c6ICNmZWZmY2Y7XFxuICAtLW9sZC15ZWxsb3ctbGlnaHRlcjogI2ZmZmZlMDtcXG4gIC0tb2xkLXllbGxvdy1kYXJrZXI6ICNmOGU5OTk7XFxuXFxuICAtLWRlZmF1bHQtdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZmZiwgMCAwIDEwcHggI2ZmZiwgMCAwIDIwcHggI2ZmZixcXG4gICAgMCAwIDQwcHggIzBmZiwgMCAwIDgwcHggIzBmZiwgMCAwIDkwcHggIzBmZiwgMCAwIDEwMHB4ICMwZmYsIDAgMCAxNTBweCAjMGZmO1xcblxcbiAgLS1zaWRlYmFyLWJveC1zaGFkb3c6IDAgMnB4IDVweCBoc2xhKDAsIDAlLCAwJSwgMC40KSwgaW5zZXQgMCAxcHggMCAjY2NjLFxcbiAgICBpbnNldCAxcHggMCAwICNhYWEsIGluc2V0IDAgLTFweCAwICNjY2MsIGluc2V0IC0xcHggMCAwICNhYWEsXFxuICAgIGluc2V0IDAgMnB4IDAgI2M2YzZjNiwgaW5zZXQgMnB4IDAgMCAjYTZhNmE2LCBpbnNldCAwIC0ycHggMCAjYzZjNmM2LFxcbiAgICBpbnNldCAtMnB4IDAgMCAjYTZhNmE2LCBpbnNldCAwIDNweCAwICNjMGMwYzAsIGluc2V0IDNweCAwIDAgI2EwYTBhMCxcXG4gICAgaW5zZXQgMCAtM3B4IDAgI2MwYzBjMCwgaW5zZXQgLTNweCAwIDAgI2EwYTBhMCwgaW5zZXQgMCA0cHggMCAjYjliOWI5LFxcbiAgICBpbnNldCA0cHggMCAwICM5OTksIGluc2V0IDAgLTRweCAwICNiOWI5YjksIGluc2V0IC00cHggMCAwICM5OTksXFxuICAgIGluc2V0IDAgNXB4IDAgI2I2YjZiNiwgaW5zZXQgNXB4IDAgMCAjOTY5Njk2LCBpbnNldCAwIC01cHggMCAjYjZiNmI2LFxcbiAgICBpbnNldCAtNXB4IDAgMCAjOTY5Njk2LCBpbnNldCAwIDZweCAwICNiMGIwYjAsIGluc2V0IDZweCAwIDAgIzkwOTA5MCxcXG4gICAgaW5zZXQgMCAtNnB4IDAgI2IwYjBiMCwgaW5zZXQgLTZweCAwIDAgIzkwOTA5MCwgaW5zZXQgMCA3cHggMCAjYTlhOWE5LFxcbiAgICBpbnNldCA3cHggMCAwICM4OTg5ODksIGluc2V0IDAgLTdweCAwICNhOWE5YTksIGluc2V0IC03cHggMCAwICM4OTg5ODksXFxuICAgIGluc2V0IDAgOHB4IDAgI2E2YTZhNiwgaW5zZXQgOHB4IDAgMCAjODY4Njg2LCBpbnNldCAwIC04cHggMCAjYTZhNmE2LFxcbiAgICBpbnNldCAtOHB4IDAgMCAjODY4Njg2LCBpbnNldCAwIDlweCAwICNhMGEwYTAsIGluc2V0IDlweCAwIDAgIzgwODA4MCxcXG4gICAgaW5zZXQgMCAtOXB4IDAgI2EwYTBhMCwgaW5zZXQgLTlweCAwIDAgIzgwODA4MCwgaW5zZXQgMCAxMHB4IDAgIzg4OCxcXG4gICAgaW5zZXQgMTBweCAwIDAgIzY2NiwgaW5zZXQgMCAtMTBweCAwICM4ODgsIGluc2V0IC0xMHB4IDAgMCAjNjY2LFxcbiAgICBpbnNldCAwIDAgMTBweCAxMHB4IGhzbGEoMCwgMCUsIDAlLCAwLjUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcblxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBmb250OiAxcmVtIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKiAqL1xcbi8qIE1haW4gQ29udGFpbmVyICovXFxuLyogKioqKioqKioqKioqKiogKi9cXG5cXG4ubWFpbl9jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIGF1dG8gMS41cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInNpZGViYXIgaGVhZGVyXFxcIlxcbiAgICBcXFwic2lkZWJhciBtYWluXFxcIlxcbiAgICBcXFwiZm9vdGVyIGZvb3RlclxcXCI7XFxuICAvKiBnYXA6IHZhcigtLW1haW5fY29udGFpbmVyX2dhcCk7ICovXFxuICAvKiBib3JkZXI6IDhweCB5ZWxsb3cgc29saWQ7ICovXFxufVxcbi5tYWluX2NvbnRhaW5lciA+IC5oZWFkZXJfbWFpbl9jb250YWluZXIsXFxuLm1haW5fY29udGFpbmVyID4gLnNpZGVfYmFyX21haW5fY29udGFpbmVyLFxcbi5tYWluX2NvbnRhaW5lciA+IC5jb250ZW50X21haW5fY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuLmhlYWRlcl9tYWluX2NvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuLnNpZGVfYmFyX21haW5fY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxufVxcbi5jb250ZW50X21haW5fY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG59XFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJfcmFkaXVzKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG4vKiAqKioqKioqKioqKioqKiAqL1xcbi8qICoqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqICovXFxuLyogSGVhZGVyICovXFxuLyogKioqKioqICovXFxuLmhlYWRlcl9tYWluX2NvbnRhaW5lciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5oZWFkZXJfbWFpbl9jb250YWluZXIgLmhlYWRlcl9sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5oZWFkZXJfbWFpbl9jb250YWluZXIgLmhlYWRlcl9pY29uIHtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIC8qIG1hcmdpbi1ib3R0b206IC0xcmVtOyAqL1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG5cXG4gIC8qIHBhZGRpbmctYm90dG9tOiAwLjVyZW07ICovXFxufVxcblxcbi5oZWFkZXJfbWFpbl9jb250YWluZXIgaDEge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xcbiAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xcbn1cXG5cXG4uaGVhZGVyX21haW5fY29udGFpbmVyIC5jbG9jayB7XFxuICBoZWlnaHQ6IDlyZW07XFxuICB3aWR0aDogOXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JleSk7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi8qICoqKioqKiAqL1xcbi8qICoqKioqKiAqL1xcblxcbi8qICoqKioqKiogKi9cXG4vKiBTaWRlYmFyICovXFxuLyogKioqKioqKiAqL1xcblxcbi5zaWRlX2Jhcl9tYWluX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2xkLXllbGxvdy1saWdodGVyKTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcblxcbiAgYm94LXNoYWRvdzogdmFyKC0tc2lkZWJhci1ib3gtc2hhZG93KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjYmJiICM5OTk7XFxufVxcblxcbi5zaWRlYmFyX3Byb2plY3Rfcm93IC5wcm9qZWN0X3RpdGxlX2FuZF9idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wcm9qZWN0X3RpdGxlX2FuZF9idXR0b25zID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdF90aXRsZV9hbmRfYnV0dG9ucyAucHJvamVjdCB7XFxuICBmbGV4OiAxO1xcbn1cXG4ucHJvamVjdF90aXRsZV9hbmRfYnV0dG9ucyBpbnB1dCB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uc2lkZWJhcl9pY29uLFxcbi50YXNrYmFyX2ljb24ge1xcbiAgaGVpZ2h0OiAxcmVtO1xcbn1cXG4uZWRpdF90YXNrX2ljb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogLTAuMnJlbTtcXG4gIGhlaWdodDogMS4ycmVtO1xcbn1cXG4udGl0bGVfaWNvbiB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAtMC4zcmVtO1xcbn1cXG5cXG4vKiBjYWxlbmRhciAqL1xcblxcbi5jYWxlbmRhciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxudGFibGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2xkLXllbGxvdy1kYXJrZXIpO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gIG1hcmdpbi10b3A6IDAuMXJlbTtcXG5cXG4gIGJveC1zaGFkb3c6IDBlbSAtMS4yZW0gMS4yZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KSxcXG4gICAgaW5zZXQgMGVtIC0xLjJlbSAxLjJlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpLFxcbiAgICAwZW0gMC4zZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG50YWJsZSAqIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxudGFibGUsXFxudGgsXFxudGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG50ZCB7XFxuICAvKiB3aWR0aDogMi4ycmVtO1xcbiAgaGVpZ2h0OiAycmVtOyAqL1xcbn1cXG5cXG4uY2FsZW5kYXJfZGF5IHtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbnRyLmNhbGVuZGFyX2RheXMge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jYWxlbmRhciAudG9kYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5MWMxYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IGJsYWNrO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKiBIb21lIHNpZGViYXIgKi9cXG4uaG9tZV9tZW51X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIGJvcmRlcjogMnB4IGJsdWUgc29saWQ7ICovXFxufVxcblxcbi5ob21lX21lbnVfdGl0bGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xcbn1cXG5cXG4uaG9tZV9tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbi5ob21lX21lbnUgPiAqOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yLWRlZmF1bHQpO1xcbn1cXG5cXG4uZGVsZXRlX3Byb2plY3RfaWNvbjpob3ZlciB7XFxuICAvKiBmaWx0ZXJzIHRvIHJlZCovXFxuICBmaWx0ZXI6IGludmVydCgzNyUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNzQ3MSUpIGh1ZS1yb3RhdGUoMzU2ZGVnKVxcbiAgICBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoMTM1JSk7XFxuXFxuICAvKiBmaWx0ZXIgdG8gYmx1ZSAqL1xcbiAgLyogZmlsdGVyOiBpbnZlcnQoMC41KSBzZXBpYSgxKSBzYXR1cmF0ZSg1KSBodWUtcm90YXRlKDE3NWRlZyk7ICovXFxufVxcblxcbi8qIFByb2plY3RzIE1lbnUgU2lkZWJhciAqL1xcbi5wcm9qZWN0c19tZW51X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIGJvcmRlcjogMnB4IGJsdWUgc29saWQ7ICovXFxufVxcblxcbi5wcm9qZWN0c19tZW51X3RpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZ2FwOiAwLjRyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3RzX21lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLnByb2plY3RzX21lbnUgPiAqOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yLWRlZmF1bHQpO1xcbn1cXG5cXG4ucHJvamVjdHNfbWVudSAuc2lkZWJhcl9wcm9qZWN0X3JvdzpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbmJ1dHRvbiAuYWRkX3Rhc2tfYnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG4vKiAqKioqKioqICovXFxuLyogKioqKioqKiAqL1xcblxcbi8qICoqKioqKioqKioqKioqKiAqL1xcbi8qIFByb2plY3QgRGlzcGxheSAqL1xcbi8qICoqKioqKioqKioqKioqKiAqL1xcblxcbi5jb250ZW50X21haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjJyZW07XFxuICBtYXJnaW4tdG9wOiAwLjZyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbn1cXG5cXG4uZGlzcGxheV9wcm9qZWN0cyB7XFxuICAvKiBib3JkZXI6IDJweCBkYXJrZ29sZGVucm9kIHNvbGlkOyAqL1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdhcDogMC43cmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kaXNwbGF5X3Byb2plY3RfdGl0bGUge1xcbiAgLyogZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGJsYWNrIHNvbGlkO1xcbiAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICovXFxuXFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgLyogcGFkZGluZy1yaWdodDogNXJlbTsgKi9cXG59XFxuLyogLmRpc3BsYXlfcHJvamVjdF9yb3cge1xcbiAgYm9yZGVyOiAxcHggYnJvd24gc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn0gKi9cXG5cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9sZC15ZWxsb3ctbGlnaHRlcik7ICovXFxuXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQsXFxuICAgIHZhcigtLW9sZC15ZWxsb3ctbGlnaHRlcikgMzUlLFxcbiAgICAjZmZmYmViIDEwMCVcXG4gICk7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDFweCAtMXB4IHZhcigtLWRhcmstZ3JleSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZS1pbi1vdXQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrOmJlZm9yZSB7XFxuICB6LWluZGV4OiAtMTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm90dG9tOiAxM3B4O1xcbiAgcmlnaHQ6IDdweDtcXG4gIHdpZHRoOiAyNSU7XFxuICB0b3A6IDA7XFxuICBib3gtc2hhZG93OiAwIDE1cHggMTBweCB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNGRlZyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQsXFxuICAgIHZhcigtLW9sZC15ZWxsb3ctZGFya2VyKSAwJSxcXG4gICAgdmFyKC0tb2xkLXllbGxvdy1kYXJrZXIpIDEwMCVcXG4gICk7XFxufVxcblxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrOmhvdmVyOmJlZm9yZSB7XFxuICAvKiB3YXMgZm9yIHNoYWRvdyAqL1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICBib3R0b206IDIwcHg7XFxuICB6LWluZGV4OiAtMTA7XFxufVxcblxcbi5jaXJjbGUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KSxcXG4gICAgaW5zZXQgMCAwIDAgMjVweCB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuXFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2suY2hlY2tlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrLmNoZWNrZWQ6OmJlZm9yZSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFza19oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgLyogcGFkZGluZy1ib3R0b206IDAuMnJlbTsgKi9cXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIC8qIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLW1pbi13aWR0aC1kdWVEYXRlKSArIDAuOHJlbSk7ICovXFxuICAvKiBib3JkZXItYm90dG9tOiB2YXIoLS1mb3JtX2JvcmRlcik7ICovXFxuICBib3JkZXItYm90dG9tOiAycHggdmFyKC0tZGFyay1ncmV5KSBzb2xpZDtcXG59XFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2tfaGVhZGVyIC50YXNrX2R1ZV9kYXRlX2RheSB7XFxuICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aC1kdWVEYXRlKTtcXG59XFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2tfaGVhZGVyIC50YXNrX2R1ZV9kYXRlIHtcXG4gIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoLWR1ZURhdGUpO1xcbn1cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFza19oZWFkZXIgLnRhc2tfdGl0bGUge1xcbiAgLyogbWFyZ2luLWxlZnQ6IDAuMnJlbTsgKi9cXG59XFxuXFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sgLnRhc2tfdGl0bGUge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sgLnRhc2tfZHVlX2RhdGVfZGF5IHtcXG4gIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoLWR1ZURhdGUpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBtYXJnaW4tcmlnaHQ6IC0wLjRyZW07XFxuXFxuICAvKiBjb2xvcjogcmVkOyAqL1xcbn1cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayAudGFza19kdWVfZGF0ZSB7XFxuICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aC1kdWVEYXRlKTtcXG4gIC8qIGZvbnQtc2l6ZTogMC45cmVtOyAqL1xcbn1cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayAuY2hlY2tfcHJpb3JpdHlfYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqICovXFxuLyogKioqKioqKioqKioqKiAqL1xcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrIC5kdWVfZGF0ZV9leHBpcnlfbGV2ZWxfMCB7XFxuICAvKiBleHBpcmVkIHRhc2tzICovXFxuICBjb2xvcjogIzQ1MGEwYTtcXG4gIHRleHQtc2hhZG93OiAjNDUwYTBhIDBweCAwcHggNXB4O1xcbn1cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayAuZHVlX2RhdGVfZXhwaXJ5X2xldmVsXzEge1xcbiAgLyogdG9kYXkncyB0YXNrcyAqL1xcbiAgY29sb3I6ICNiOTFjMWM7XFxuICB0ZXh0LXNoYWRvdzogI2I5MWMxYyAwcHggMHB4IDVweDtcXG59XFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sgLmR1ZV9kYXRlX2V4cGlyeV9sZXZlbF8yIHtcXG4gIC8qIHRoaXMgd2VlaydzIHRhc2tzICovXFxuICBjb2xvcjogI2NhOGEwNDtcXG4gIHRleHQtc2hhZG93OiAjY2E4YTA0IDBweCAwcHggNXB4O1xcbn1cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayAuZHVlX2RhdGVfZXhwaXJ5X2xldmVsXzMge1xcbiAgLyogdGFza3MgbW9yZSB0aGFuIGEgd2VlayB0YXNrcyAqL1xcbiAgY29sb3I6ICM2NWEzMGQ7XFxuICB0ZXh0LXNoYWRvdzogIzY1YTMwZCAwcHggMHB4IDVweDtcXG59XFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sgLmR1ZV9kYXRlX2V4cGlyeV9sZXZlbF80IHtcXG4gIC8qIHRhc2tzIG1vcmUgdGhhbiBhIHdlZWsgdGFza3MgKi9cXG4gIGNvbG9yOiAjNzg3MTZjO1xcbiAgdGV4dC1zaGFkb3c6ICM3ODcxNmMgMHB4IDBweCA1cHg7XFxufVxcbi8qICoqKioqKioqKioqKiogKi9cXG4vKiAqKioqKioqKioqKioqICovXFxuXFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sgLnJlbW92ZV90YXNrX2J1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogMC42cmVtO1xcbn1cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayAucmVtb3ZlX3Rhc2tfYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrIC5jaGVja19wcmlvcml0eV9idXR0b24uY2hlY2tlZCB7XFxuICBjb2xvcjogI2VhYjMwODtcXG4gIC8qIHRleHQtc2hhZG93OiAjYTE2MjA3IDBweCAwcHggNXB4OyAqL1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZkZTY4YSwgMCAwIDEwcHggI2ZiYmYyNDtcXG59XFxuLyogKioqKioqKioqKioqKioqICovXFxuLyogKioqKioqKioqKioqKioqICovXFxuXFxuLyogKioqICovXFxuXFxuLyogKioqKiogKi9cXG4vKiBGb3JtcyAqL1xcbi8qICoqKioqICovXFxuXFxuLyogLmZvcm1zX21haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxufSAqL1xcblxcbi5mb3JtIHtcXG4gIGJvcmRlcjogdmFyKC0tZm9ybV9ib3JkZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udF9jb2xvcl93aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBmb250LXNpemU6IDFyZW07XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJfcmFkaXVzKTtcXG4gIHotaW5kZXg6IDEwO1xcblxcbiAgd2lkdGg6IDYwMHB4O1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgbWF4LWhlaWdodDogODAlO1xcbiAgcGFkZGluZzogNDBweCAzMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNHJlbTtcXG59XFxuXFxuLmZvcm0uZm9ybV9wcm9qZWN0LFxcbi5mb3JtLmNvbmZpcm1fZGVsZXRlX3Byb2plY3Qge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLmZvcm0gaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItYm90dG9tOiB2YXIoLS1mb3JtX2JvcmRlcik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxufVxcblxcbi5mb3JtIGhlYWRlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5mb3JtIC5mb3JtX3JvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9ybS50YXNrX2luZm8gLmZvcm1fcm93IHtcXG4gIGJvcmRlci10b3A6IDJweCB2YXIoLS1ib3JkZXJfY29sb3JfZ3JleSkgZG90dGVkO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHZhcigtLWJvcmRlcl9jb2xvcl9ncmV5KSBkb3R0ZWQ7XFxuICBwYWRkaW5nOiAwLjFyZW07XFxufVxcbi5mb3JtIC5mb3JtX3JvdyA+IGRpdiB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmZvcm0gYnV0dG9uLmZvcm1fc3VibWl0IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlcl9yYWRpdXMpO1xcbiAgYm9yZGVyOiB2YXIoLS1mb3JtX2JvcmRlcik7XFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250X2NvbG9yX3doaXRlKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5mb3JtIGJ1dHRvbi5mb3JtX3N1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvci1kZWZhdWx0KTtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyogZm9yIHRoZSBJbmZvcm1hdGlvbiBQb3AtdXAgKi9cXG4uZm9ybSAuZm9ybV90YXNrX2luZm9fdGl0bGUsXFxuLmZvcm0gLmZvcm1fdGFza19pbmZvX2Rlc2NyaXB0aW9uLFxcbi5mb3JtIC5mb3JtX3Rhc2tfaW5mb19kdWVkYXRlLFxcbi5mb3JtIC5mb3JtX3Rhc2tfaW5mb19pbXBvcnRhbmNlLFxcbi5mb3JtIC5mb3JtX3Rhc2tfaW5mb19wcm9qZWN0IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuLyogRm9yIGFkZCBQcm9qZWN0IGFuZCBUYXNrIEZvcm0gUG9wLXVwcyAqL1xcbi5mb3JtIC5mb3JtX3Byb2plY3RfdGl0bGUsXFxuLmZvcm0gLmZvcm1fdGFza190aXRsZSxcXG4uZm9ybSAuZm9ybV90YXNrX2Rlc2NyaXB0aW9uLFxcbi5mb3JtIC5mb3JtX3Rhc2tfZGF0ZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcbi5mb3JtIC5mb3JtX3Byb2plY3RfdGl0bGUge1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi5mb3JtIC5mb3JtX2VkaXRfcHJvamVjdF90aXRsZSxcXG4uZm9ybSAuZm9ybV9lZGl0X3Rhc2tfdGl0bGUsXFxuLmZvcm0gLmZvcm1fZWRpdF90YXNrX2Rlc2NyaXB0aW9uLFxcbi5mb3JtIC5mb3JtX2VkaXRfdGFza19kYXRlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuLmZvcm0gLmZvcm1fZWRpdF9wcm9qZWN0X3RpdGxlIHtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4uZm9ybSBpbnB1dCxcXG4uZm9ybSB0ZXh0YXJlYSB7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJfcmFkaXVzKTtcXG4gIGJvcmRlcjogMnB4IHZhcigtLWJhY2tncm91bmQtY29sb3IpIHNvbGlkO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLyogKioqKiogKi9cXG4vKiAqKioqKiAqL1xcblxcbi8qICoqKiAqL1xcblxcbi8qIHNldHRpbmcgdXAgdGhlIHBvcC11cCBvdmVybGF5Ki9cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi5vdmVybGF5X2Zvcl9mb3JtIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLm92ZXJsYXlfZm9yX2Zvcm0uYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4uZm9ybS5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxufVxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqICovXFxuLyogZm9vdGVyICovXFxuLyogKioqKioqICovXFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuXFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogei1pbmRleDogMjsgKi9cXG4gIC8qIHRleHQtc2hhZG93OiBub25lOyAqL1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHNjYWxlOiAxLjI7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5mb290ZXIgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLyogKioqKioqICovXFxuLyogKioqKioqICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLHFDQUFxQztFQUNyQyw2Q0FBNkM7RUFDN0Msa0NBQWtDO0VBQ2xDLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixpREFBaUQ7O0VBRWpELG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLDRCQUE0Qjs7RUFFNUI7K0VBQzZFOztFQUU3RTs7Ozs7Ozs7Ozs7Ozs7NENBYzBDO0FBQzVDOztBQUVBO0VBQ0UseUNBQXlDOztFQUV6Qyx5REFBaUQ7RUFDakQsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUEsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQixtQkFBbUI7O0FBRW5CO0VBQ0UsaUJBQWlCOztFQUVqQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQzs7O21CQUdpQjtFQUNqQixvQ0FBb0M7RUFDcEMsOEJBQThCO0FBQ2hDO0FBQ0E7OztFQUdFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0EsbUJBQW1CO0FBQ25CLG1CQUFtQjs7QUFFbkIsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXO0FBQ1g7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4Qjs7RUFFOUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixnQkFBZ0I7O0VBRWhCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtDQUFrQztFQUNsQyxrQkFBa0I7QUFDcEI7O0FBRUEsV0FBVztBQUNYLFdBQVc7O0FBRVgsWUFBWTtBQUNaLFlBQVk7QUFDWixZQUFZOztBQUVaO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGlEQUFpRDtFQUNqRCx5Q0FBeUM7O0VBRXpDLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsT0FBTztBQUNUO0FBQ0E7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQSxhQUFhOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7O0VBRWxCOztzQ0FFb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtpQkFDZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBQ0E7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEI7a0NBQ2dDOztFQUVoQyxtQkFBbUI7RUFDbkIsaUVBQWlFO0FBQ25FOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0EsWUFBWTtBQUNaLFlBQVk7O0FBRVosb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7O0FBRXBCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDZCQUE2Qjs7RUFFN0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixXQUFXOztFQUVYLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTs7d0JBRXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixnQ0FBZ0M7O0VBRWhDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCO0FBQ0E7Ozs7R0FJRzs7QUFFSDtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1COztFQUVuQixpREFBaUQ7O0VBRWpELGVBQWU7RUFDZixpQkFBaUI7O0VBRWpCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEI7Ozs7R0FJQztFQUNELDZDQUE2QztFQUM3QyxpQ0FBaUM7RUFDakMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixVQUFVO0VBQ1YsTUFBTTtFQUNOLHdDQUF3QztFQUN4Qyx1QkFBdUI7RUFDdkIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0U7Ozs7R0FJQztBQUNIOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCO2dDQUM4QjtFQUM5Qix5REFBbUQ7RUFDbkQsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjs7RUFFbkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQiwwREFBMEQ7RUFDMUQsdUNBQXVDO0VBQ3ZDLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIscUJBQXFCOztFQUVyQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjs7QUFFbEI7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQ0FBc0M7RUFDdEMsOENBQThDO0FBQ2hEO0FBQ0Esb0JBQW9CO0FBQ3BCLG9CQUFvQjs7QUFFcEIsUUFBUTs7QUFFUixVQUFVO0FBQ1YsVUFBVTtBQUNWLFVBQVU7O0FBRVY7OztHQUdHOztBQUVIO0VBQ0UsMEJBQTBCO0VBQzFCLHlDQUF5QztFQUN6Qyw4QkFBOEI7RUFDOUIsZUFBZTs7RUFFZixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCx5Q0FBeUM7RUFDekMsaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUNuQyxXQUFXOztFQUVYLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7O0VBRWxCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsK0NBQStDO0VBQy9DLGtEQUFrRDtFQUNsRCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5Qix5Q0FBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLDRDQUE0QztFQUM1QyxlQUFlO0FBQ2pCOztBQUVBLCtCQUErQjtBQUMvQjs7Ozs7RUFLRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBLDBDQUEwQztBQUMxQzs7OztFQUlFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7OztFQUlFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxtQ0FBbUM7RUFDbkMseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUEsVUFBVTtBQUNWLFVBQVU7O0FBRVYsUUFBUTs7QUFFUixpQ0FBaUM7QUFDakMsK0JBQStCO0FBQy9CO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQ0FBb0M7RUFDcEMsVUFBVTtFQUNWLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQztBQUNBLCtCQUErQjs7QUFFL0IsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXOztBQUVYO0VBQ0UseUNBQXlDO0VBQ3pDLDhCQUE4QjtFQUM5QixpQkFBaUI7O0VBRWpCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLFdBQVc7QUFDWCxXQUFXXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzE4MWExYjtcXG4gIC0tZm9udF9jb2xvcl93aGl0ZTogI2U4ZTZlMztcXG4gIGNvbG9yOiB2YXIoLS1mb250X2NvbG9yX3doaXRlKTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgLS1tYWluX2NvbnRhaW5lcl9nYXA6IDFyZW07XFxuICAtLWFkZF9idXR0b25fYmx1ZV9iYWNrZ3JvdW5kOiAjMDA5ZGU3O1xcbiAgLS1hZGRfYnV0dG9uX2JsdWVfYmFja2dyb3VuZF9saWd0aGVyOiAjNDJjM2ZmO1xcbiAgLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogIzFlM2E4YTtcXG4gIC0taG92ZXItY29sb3ItZGVmYXVsdDogI2Q2ZDNkMTtcXG4gIC0tYm9yZGVyX2NvbG9yX2dyZXk6ICM4NTg1ODU7XFxuICAtLWJvcmRlcl9yYWRpdXM6IDEwcHg7XFxuICAtLW1pbi13aWR0aC1kdWVEYXRlOiA1LjVyZW07XFxuICAtLWZvcm1fYm9yZGVyOiAycHggdmFyKC0tYm9yZGVyX2NvbG9yX2dyZXkpIHNvbGlkO1xcblxcbiAgLS1kYXJrLWdyZXk6ICMzMzMzMzM7XFxuICAtLW9sZC15ZWxsb3c6ICNmZWZmY2Y7XFxuICAtLW9sZC15ZWxsb3ctbGlnaHRlcjogI2ZmZmZlMDtcXG4gIC0tb2xkLXllbGxvdy1kYXJrZXI6ICNmOGU5OTk7XFxuXFxuICAtLWRlZmF1bHQtdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZmZiwgMCAwIDEwcHggI2ZmZiwgMCAwIDIwcHggI2ZmZixcXG4gICAgMCAwIDQwcHggIzBmZiwgMCAwIDgwcHggIzBmZiwgMCAwIDkwcHggIzBmZiwgMCAwIDEwMHB4ICMwZmYsIDAgMCAxNTBweCAjMGZmO1xcblxcbiAgLS1zaWRlYmFyLWJveC1zaGFkb3c6IDAgMnB4IDVweCBoc2xhKDAsIDAlLCAwJSwgMC40KSwgaW5zZXQgMCAxcHggMCAjY2NjLFxcbiAgICBpbnNldCAxcHggMCAwICNhYWEsIGluc2V0IDAgLTFweCAwICNjY2MsIGluc2V0IC0xcHggMCAwICNhYWEsXFxuICAgIGluc2V0IDAgMnB4IDAgI2M2YzZjNiwgaW5zZXQgMnB4IDAgMCAjYTZhNmE2LCBpbnNldCAwIC0ycHggMCAjYzZjNmM2LFxcbiAgICBpbnNldCAtMnB4IDAgMCAjYTZhNmE2LCBpbnNldCAwIDNweCAwICNjMGMwYzAsIGluc2V0IDNweCAwIDAgI2EwYTBhMCxcXG4gICAgaW5zZXQgMCAtM3B4IDAgI2MwYzBjMCwgaW5zZXQgLTNweCAwIDAgI2EwYTBhMCwgaW5zZXQgMCA0cHggMCAjYjliOWI5LFxcbiAgICBpbnNldCA0cHggMCAwICM5OTksIGluc2V0IDAgLTRweCAwICNiOWI5YjksIGluc2V0IC00cHggMCAwICM5OTksXFxuICAgIGluc2V0IDAgNXB4IDAgI2I2YjZiNiwgaW5zZXQgNXB4IDAgMCAjOTY5Njk2LCBpbnNldCAwIC01cHggMCAjYjZiNmI2LFxcbiAgICBpbnNldCAtNXB4IDAgMCAjOTY5Njk2LCBpbnNldCAwIDZweCAwICNiMGIwYjAsIGluc2V0IDZweCAwIDAgIzkwOTA5MCxcXG4gICAgaW5zZXQgMCAtNnB4IDAgI2IwYjBiMCwgaW5zZXQgLTZweCAwIDAgIzkwOTA5MCwgaW5zZXQgMCA3cHggMCAjYTlhOWE5LFxcbiAgICBpbnNldCA3cHggMCAwICM4OTg5ODksIGluc2V0IDAgLTdweCAwICNhOWE5YTksIGluc2V0IC03cHggMCAwICM4OTg5ODksXFxuICAgIGluc2V0IDAgOHB4IDAgI2E2YTZhNiwgaW5zZXQgOHB4IDAgMCAjODY4Njg2LCBpbnNldCAwIC04cHggMCAjYTZhNmE2LFxcbiAgICBpbnNldCAtOHB4IDAgMCAjODY4Njg2LCBpbnNldCAwIDlweCAwICNhMGEwYTAsIGluc2V0IDlweCAwIDAgIzgwODA4MCxcXG4gICAgaW5zZXQgMCAtOXB4IDAgI2EwYTBhMCwgaW5zZXQgLTlweCAwIDAgIzgwODA4MCwgaW5zZXQgMCAxMHB4IDAgIzg4OCxcXG4gICAgaW5zZXQgMTBweCAwIDAgIzY2NiwgaW5zZXQgMCAtMTBweCAwICM4ODgsIGluc2V0IC0xMHB4IDAgMCAjNjY2LFxcbiAgICBpbnNldCAwIDAgMTBweCAxMHB4IGhzbGEoMCwgMCUsIDAlLCAwLjUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcblxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvcGFwZXIucG5nKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBmb250OiAxcmVtIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqKiAqL1xcbi8qIE1haW4gQ29udGFpbmVyICovXFxuLyogKioqKioqKioqKioqKiogKi9cXG5cXG4ubWFpbl9jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIGF1dG8gMS41cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInNpZGViYXIgaGVhZGVyXFxcIlxcbiAgICBcXFwic2lkZWJhciBtYWluXFxcIlxcbiAgICBcXFwiZm9vdGVyIGZvb3RlclxcXCI7XFxuICAvKiBnYXA6IHZhcigtLW1haW5fY29udGFpbmVyX2dhcCk7ICovXFxuICAvKiBib3JkZXI6IDhweCB5ZWxsb3cgc29saWQ7ICovXFxufVxcbi5tYWluX2NvbnRhaW5lciA+IC5oZWFkZXJfbWFpbl9jb250YWluZXIsXFxuLm1haW5fY29udGFpbmVyID4gLnNpZGVfYmFyX21haW5fY29udGFpbmVyLFxcbi5tYWluX2NvbnRhaW5lciA+IC5jb250ZW50X21haW5fY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuLmhlYWRlcl9tYWluX2NvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuLnNpZGVfYmFyX21haW5fY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxufVxcbi5jb250ZW50X21haW5fY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG59XFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJfcmFkaXVzKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG4vKiAqKioqKioqKioqKioqKiAqL1xcbi8qICoqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqICovXFxuLyogSGVhZGVyICovXFxuLyogKioqKioqICovXFxuLmhlYWRlcl9tYWluX2NvbnRhaW5lciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5oZWFkZXJfbWFpbl9jb250YWluZXIgLmhlYWRlcl9sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5oZWFkZXJfbWFpbl9jb250YWluZXIgLmhlYWRlcl9pY29uIHtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIC8qIG1hcmdpbi1ib3R0b206IC0xcmVtOyAqL1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG5cXG4gIC8qIHBhZGRpbmctYm90dG9tOiAwLjVyZW07ICovXFxufVxcblxcbi5oZWFkZXJfbWFpbl9jb250YWluZXIgaDEge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xcbiAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xcbn1cXG5cXG4uaGVhZGVyX21haW5fY29udGFpbmVyIC5jbG9jayB7XFxuICBoZWlnaHQ6IDlyZW07XFxuICB3aWR0aDogOXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JleSk7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi8qICoqKioqKiAqL1xcbi8qICoqKioqKiAqL1xcblxcbi8qICoqKioqKiogKi9cXG4vKiBTaWRlYmFyICovXFxuLyogKioqKioqKiAqL1xcblxcbi5zaWRlX2Jhcl9tYWluX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2xkLXllbGxvdy1saWdodGVyKTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcblxcbiAgYm94LXNoYWRvdzogdmFyKC0tc2lkZWJhci1ib3gtc2hhZG93KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjYmJiICM5OTk7XFxufVxcblxcbi5zaWRlYmFyX3Byb2plY3Rfcm93IC5wcm9qZWN0X3RpdGxlX2FuZF9idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wcm9qZWN0X3RpdGxlX2FuZF9idXR0b25zID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdF90aXRsZV9hbmRfYnV0dG9ucyAucHJvamVjdCB7XFxuICBmbGV4OiAxO1xcbn1cXG4ucHJvamVjdF90aXRsZV9hbmRfYnV0dG9ucyBpbnB1dCB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uc2lkZWJhcl9pY29uLFxcbi50YXNrYmFyX2ljb24ge1xcbiAgaGVpZ2h0OiAxcmVtO1xcbn1cXG4uZWRpdF90YXNrX2ljb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogLTAuMnJlbTtcXG4gIGhlaWdodDogMS4ycmVtO1xcbn1cXG4udGl0bGVfaWNvbiB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAtMC4zcmVtO1xcbn1cXG5cXG4vKiBjYWxlbmRhciAqL1xcblxcbi5jYWxlbmRhciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxudGFibGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2xkLXllbGxvdy1kYXJrZXIpO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gIG1hcmdpbi10b3A6IDAuMXJlbTtcXG5cXG4gIGJveC1zaGFkb3c6IDBlbSAtMS4yZW0gMS4yZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KSxcXG4gICAgaW5zZXQgMGVtIC0xLjJlbSAxLjJlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpLFxcbiAgICAwZW0gMC4zZW0gMC4zZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG50YWJsZSAqIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxudGFibGUsXFxudGgsXFxudGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG50ZCB7XFxuICAvKiB3aWR0aDogMi4ycmVtO1xcbiAgaGVpZ2h0OiAycmVtOyAqL1xcbn1cXG5cXG4uY2FsZW5kYXJfZGF5IHtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbnRyLmNhbGVuZGFyX2RheXMge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jYWxlbmRhciAudG9kYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5MWMxYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IGJsYWNrO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKiBIb21lIHNpZGViYXIgKi9cXG4uaG9tZV9tZW51X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIGJvcmRlcjogMnB4IGJsdWUgc29saWQ7ICovXFxufVxcblxcbi5ob21lX21lbnVfdGl0bGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xcbn1cXG5cXG4uaG9tZV9tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbi5ob21lX21lbnUgPiAqOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yLWRlZmF1bHQpO1xcbn1cXG5cXG4uZGVsZXRlX3Byb2plY3RfaWNvbjpob3ZlciB7XFxuICAvKiBmaWx0ZXJzIHRvIHJlZCovXFxuICBmaWx0ZXI6IGludmVydCgzNyUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNzQ3MSUpIGh1ZS1yb3RhdGUoMzU2ZGVnKVxcbiAgICBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoMTM1JSk7XFxuXFxuICAvKiBmaWx0ZXIgdG8gYmx1ZSAqL1xcbiAgLyogZmlsdGVyOiBpbnZlcnQoMC41KSBzZXBpYSgxKSBzYXR1cmF0ZSg1KSBodWUtcm90YXRlKDE3NWRlZyk7ICovXFxufVxcblxcbi8qIFByb2plY3RzIE1lbnUgU2lkZWJhciAqL1xcbi5wcm9qZWN0c19tZW51X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIGJvcmRlcjogMnB4IGJsdWUgc29saWQ7ICovXFxufVxcblxcbi5wcm9qZWN0c19tZW51X3RpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZ2FwOiAwLjRyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3RzX21lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLnByb2plY3RzX21lbnUgPiAqOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yLWRlZmF1bHQpO1xcbn1cXG5cXG4ucHJvamVjdHNfbWVudSAuc2lkZWJhcl9wcm9qZWN0X3JvdzpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbmJ1dHRvbiAuYWRkX3Rhc2tfYnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG4vKiAqKioqKioqICovXFxuLyogKioqKioqKiAqL1xcblxcbi8qICoqKioqKioqKioqKioqKiAqL1xcbi8qIFByb2plY3QgRGlzcGxheSAqL1xcbi8qICoqKioqKioqKioqKioqKiAqL1xcblxcbi5jb250ZW50X21haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjJyZW07XFxuICBtYXJnaW4tdG9wOiAwLjZyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbn1cXG5cXG4uZGlzcGxheV9wcm9qZWN0cyB7XFxuICAvKiBib3JkZXI6IDJweCBkYXJrZ29sZGVucm9kIHNvbGlkOyAqL1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdhcDogMC43cmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kaXNwbGF5X3Byb2plY3RfdGl0bGUge1xcbiAgLyogZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGJsYWNrIHNvbGlkO1xcbiAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICovXFxuXFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgLyogcGFkZGluZy1yaWdodDogNXJlbTsgKi9cXG59XFxuLyogLmRpc3BsYXlfcHJvamVjdF9yb3cge1xcbiAgYm9yZGVyOiAxcHggYnJvd24gc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn0gKi9cXG5cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9sZC15ZWxsb3ctbGlnaHRlcik7ICovXFxuXFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQsXFxuICAgIHZhcigtLW9sZC15ZWxsb3ctbGlnaHRlcikgMzUlLFxcbiAgICAjZmZmYmViIDEwMCVcXG4gICk7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDFweCAtMXB4IHZhcigtLWRhcmstZ3JleSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZS1pbi1vdXQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrOmJlZm9yZSB7XFxuICB6LWluZGV4OiAtMTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm90dG9tOiAxM3B4O1xcbiAgcmlnaHQ6IDdweDtcXG4gIHdpZHRoOiAyNSU7XFxuICB0b3A6IDA7XFxuICBib3gtc2hhZG93OiAwIDE1cHggMTBweCB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNGRlZyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQsXFxuICAgIHZhcigtLW9sZC15ZWxsb3ctZGFya2VyKSAwJSxcXG4gICAgdmFyKC0tb2xkLXllbGxvdy1kYXJrZXIpIDEwMCVcXG4gICk7XFxufVxcblxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrOmhvdmVyOmJlZm9yZSB7XFxuICAvKiB3YXMgZm9yIHNoYWRvdyAqL1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICBib3R0b206IDIwcHg7XFxuICB6LWluZGV4OiAtMTA7XFxufVxcblxcbi5jaXJjbGUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KSxcXG4gICAgaW5zZXQgMCAwIDAgMjVweCB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ltYWdlcy9wYXBlci5wbmdcXFwiKTtcXG4gIGhlaWdodDogMjBweDtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbn1cXG5cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzay5jaGVja2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgb3BhY2l0eTogMC40O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2suY2hlY2tlZDo6YmVmb3JlIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrX2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAvKiBwYWRkaW5nLWJvdHRvbTogMC4ycmVtOyAqL1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgLyogbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tbWluLXdpZHRoLWR1ZURhdGUpICsgMC44cmVtKTsgKi9cXG4gIC8qIGJvcmRlci1ib3R0b206IHZhcigtLWZvcm1fYm9yZGVyKTsgKi9cXG4gIGJvcmRlci1ib3R0b206IDJweCB2YXIoLS1kYXJrLWdyZXkpIHNvbGlkO1xcbn1cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFza19oZWFkZXIgLnRhc2tfZHVlX2RhdGVfZGF5IHtcXG4gIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoLWR1ZURhdGUpO1xcbn1cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFza19oZWFkZXIgLnRhc2tfZHVlX2RhdGUge1xcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgtZHVlRGF0ZSk7XFxufVxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrX2hlYWRlciAudGFza190aXRsZSB7XFxuICAvKiBtYXJnaW4tbGVmdDogMC4ycmVtOyAqL1xcbn1cXG5cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayAudGFza190aXRsZSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayAudGFza19kdWVfZGF0ZV9kYXkge1xcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgtZHVlRGF0ZSk7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIG1hcmdpbi1yaWdodDogLTAuNHJlbTtcXG5cXG4gIC8qIGNvbG9yOiByZWQ7ICovXFxufVxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrIC50YXNrX2R1ZV9kYXRlIHtcXG4gIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoLWR1ZURhdGUpO1xcbiAgLyogZm9udC1zaXplOiAwLjlyZW07ICovXFxufVxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrIC5jaGVja19wcmlvcml0eV9idXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi8qICoqKioqKioqKioqKiogKi9cXG4vKiAqKioqKioqKioqKioqICovXFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sgLmR1ZV9kYXRlX2V4cGlyeV9sZXZlbF8wIHtcXG4gIC8qIGV4cGlyZWQgdGFza3MgKi9cXG4gIGNvbG9yOiAjNDUwYTBhO1xcbiAgdGV4dC1zaGFkb3c6ICM0NTBhMGEgMHB4IDBweCA1cHg7XFxufVxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrIC5kdWVfZGF0ZV9leHBpcnlfbGV2ZWxfMSB7XFxuICAvKiB0b2RheSdzIHRhc2tzICovXFxuICBjb2xvcjogI2I5MWMxYztcXG4gIHRleHQtc2hhZG93OiAjYjkxYzFjIDBweCAwcHggNXB4O1xcbn1cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayAuZHVlX2RhdGVfZXhwaXJ5X2xldmVsXzIge1xcbiAgLyogdGhpcyB3ZWVrJ3MgdGFza3MgKi9cXG4gIGNvbG9yOiAjY2E4YTA0O1xcbiAgdGV4dC1zaGFkb3c6ICNjYThhMDQgMHB4IDBweCA1cHg7XFxufVxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrIC5kdWVfZGF0ZV9leHBpcnlfbGV2ZWxfMyB7XFxuICAvKiB0YXNrcyBtb3JlIHRoYW4gYSB3ZWVrIHRhc2tzICovXFxuICBjb2xvcjogIzY1YTMwZDtcXG4gIHRleHQtc2hhZG93OiAjNjVhMzBkIDBweCAwcHggNXB4O1xcbn1cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayAuZHVlX2RhdGVfZXhwaXJ5X2xldmVsXzQge1xcbiAgLyogdGFza3MgbW9yZSB0aGFuIGEgd2VlayB0YXNrcyAqL1xcbiAgY29sb3I6ICM3ODcxNmM7XFxuICB0ZXh0LXNoYWRvdzogIzc4NzE2YyAwcHggMHB4IDVweDtcXG59XFxuLyogKioqKioqKioqKioqKiAqL1xcbi8qICoqKioqKioqKioqKiogKi9cXG5cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayAucmVtb3ZlX3Rhc2tfYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjZyZW07XFxufVxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrIC5yZW1vdmVfdGFza19idXR0b246aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sgLmNoZWNrX3ByaW9yaXR5X2J1dHRvbi5jaGVja2VkIHtcXG4gIGNvbG9yOiAjZWFiMzA4O1xcbiAgLyogdGV4dC1zaGFkb3c6ICNhMTYyMDcgMHB4IDBweCA1cHg7ICovXFxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjZmRlNjhhLCAwIDAgMTBweCAjZmJiZjI0O1xcbn1cXG4vKiAqKioqKioqKioqKioqKiogKi9cXG4vKiAqKioqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKiogKi9cXG5cXG4vKiAqKioqKiAqL1xcbi8qIEZvcm1zICovXFxuLyogKioqKiogKi9cXG5cXG4vKiAuZm9ybXNfbWFpbl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG59ICovXFxuXFxuLmZvcm0ge1xcbiAgYm9yZGVyOiB2YXIoLS1mb3JtX2JvcmRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250X2NvbG9yX3doaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlcl9yYWRpdXMpO1xcbiAgei1pbmRleDogMTA7XFxuXFxuICB3aWR0aDogNjAwcHg7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBtYXgtaGVpZ2h0OiA4MCU7XFxuICBwYWRkaW5nOiA0MHB4IDMwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS40cmVtO1xcbn1cXG5cXG4uZm9ybS5mb3JtX3Byb2plY3QsXFxuLmZvcm0uY29uZmlybV9kZWxldGVfcHJvamVjdCB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4uZm9ybSBoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWZvcm1fYm9yZGVyKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmZvcm0gaGVhZGVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLmZvcm0gLmZvcm1fcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb3JtLnRhc2tfaW5mbyAuZm9ybV9yb3cge1xcbiAgYm9yZGVyLXRvcDogMnB4IHZhcigtLWJvcmRlcl9jb2xvcl9ncmV5KSBkb3R0ZWQ7XFxuICBib3JkZXItYm90dG9tOiAycHggdmFyKC0tYm9yZGVyX2NvbG9yX2dyZXkpIGRvdHRlZDtcXG4gIHBhZGRpbmc6IDAuMXJlbTtcXG59XFxuLmZvcm0gLmZvcm1fcm93ID4gZGl2IHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uZm9ybSBidXR0b24uZm9ybV9zdWJtaXQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogNHB4IDEycHg7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyX3JhZGl1cyk7XFxuICBib3JkZXI6IHZhcigtLWZvcm1fYm9yZGVyKTtcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmZvcm0gYnV0dG9uLmZvcm1fc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yLWRlZmF1bHQpO1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKiBmb3IgdGhlIEluZm9ybWF0aW9uIFBvcC11cCAqL1xcbi5mb3JtIC5mb3JtX3Rhc2tfaW5mb190aXRsZSxcXG4uZm9ybSAuZm9ybV90YXNrX2luZm9fZGVzY3JpcHRpb24sXFxuLmZvcm0gLmZvcm1fdGFza19pbmZvX2R1ZWRhdGUsXFxuLmZvcm0gLmZvcm1fdGFza19pbmZvX2ltcG9ydGFuY2UsXFxuLmZvcm0gLmZvcm1fdGFza19pbmZvX3Byb2plY3Qge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEyMHB4O1xcbn1cXG5cXG4vKiBGb3IgYWRkIFByb2plY3QgYW5kIFRhc2sgRm9ybSBQb3AtdXBzICovXFxuLmZvcm0gLmZvcm1fcHJvamVjdF90aXRsZSxcXG4uZm9ybSAuZm9ybV90YXNrX3RpdGxlLFxcbi5mb3JtIC5mb3JtX3Rhc2tfZGVzY3JpcHRpb24sXFxuLmZvcm0gLmZvcm1fdGFza19kYXRlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuLmZvcm0gLmZvcm1fcHJvamVjdF90aXRsZSB7XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuLmZvcm0gLmZvcm1fZWRpdF9wcm9qZWN0X3RpdGxlLFxcbi5mb3JtIC5mb3JtX2VkaXRfdGFza190aXRsZSxcXG4uZm9ybSAuZm9ybV9lZGl0X3Rhc2tfZGVzY3JpcHRpb24sXFxuLmZvcm0gLmZvcm1fZWRpdF90YXNrX2RhdGUge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEyMHB4O1xcbn1cXG4uZm9ybSAuZm9ybV9lZGl0X3Byb2plY3RfdGl0bGUge1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi5mb3JtIGlucHV0LFxcbi5mb3JtIHRleHRhcmVhIHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlcl9yYWRpdXMpO1xcbiAgYm9yZGVyOiAycHggdmFyKC0tYmFja2dyb3VuZC1jb2xvcikgc29saWQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4vKiAqKioqKiAqL1xcbi8qICoqKioqICovXFxuXFxuLyogKioqICovXFxuXFxuLyogc2V0dGluZyB1cCB0aGUgcG9wLXVwIG92ZXJsYXkqL1xcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuLm92ZXJsYXlfZm9yX2Zvcm0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ub3ZlcmxheV9mb3JfZm9ybS5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5mb3JtLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG59XFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4vKiAqKioqKiogKi9cXG4vKiBmb290ZXIgKi9cXG4vKiAqKioqKiogKi9cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm9udF9jb2xvcl93aGl0ZSk7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG5cXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiB6LWluZGV4OiAyOyAqL1xcbiAgLyogdGV4dC1zaGFkb3c6IG5vbmU7ICovXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG5mb290ZXIgaW1nIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgc2NhbGU6IDEuMjtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmZvb3RlciBpbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4vKiAqKioqKiogKi9cXG4vKiAqKioqKiogKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gRyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiBZKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gUihkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiB1KGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIFEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gcShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gTChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gdyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gSShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gRChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiBFKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiBlKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gYyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gaShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gYihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIEIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gSyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiBrKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiBYKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiB4KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIE8oZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiB6KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gdChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiBUKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgdGltZXN0YW1wTGVmdCA9IHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICB2YXIgdGltZXN0YW1wUmlnaHQgPSBzdGFydE9mRGF5UmlnaHQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgZGF5IG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9EQVkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBMaWtlIGBjb21wYXJlQXNjYCBidXQgdXNlcyBsb2NhbCB0aW1lIG5vdCBVVEMsIHdoaWNoIGlzIG5lZWRlZFxuLy8gZm9yIGFjY3VyYXRlIGVxdWFsaXR5IGNvbXBhcmlzb25zIG9mIFVUQyB0aW1lc3RhbXBzIHRoYXQgZW5kIHVwXG4vLyBoYXZpbmcgdGhlIHNhbWUgcmVwcmVzZW50YXRpb24gaW4gbG9jYWwgdGltZSwgZS5nLiBvbmUgaG91ciBiZWZvcmVcbi8vIERTVCBlbmRzIHZzLiB0aGUgaW5zdGFudCB0aGF0IERTVCBlbmRzLlxuXG5mdW5jdGlvbiBjb21wYXJlTG9jYWxBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKSB8fCBkYXRlTGVmdC5nZXRNb250aCgpIC0gZGF0ZVJpZ2h0LmdldE1vbnRoKCkgfHwgZGF0ZUxlZnQuZ2V0RGF0ZSgpIC0gZGF0ZVJpZ2h0LmdldERhdGUoKSB8fCBkYXRlTGVmdC5nZXRIb3VycygpIC0gZGF0ZVJpZ2h0LmdldEhvdXJzKCkgfHwgZGF0ZUxlZnQuZ2V0TWludXRlcygpIC0gZGF0ZVJpZ2h0LmdldE1pbnV0ZXMoKSB8fCBkYXRlTGVmdC5nZXRTZWNvbmRzKCkgLSBkYXRlUmlnaHQuZ2V0U2Vjb25kcygpIHx8IGRhdGVMZWZ0LmdldE1pbGxpc2Vjb25kcygpIC0gZGF0ZVJpZ2h0LmdldE1pbGxpc2Vjb25kcygpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufVxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5EYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgZGF5IHBlcmlvZHMgYmV0d2VlbiB0d28gZGF0ZXMuIEZyYWN0aW9uYWwgZGF5cyBhcmVcbiAqIHRydW5jYXRlZCB0b3dhcmRzIHplcm8uXG4gKlxuICogT25lIFwiZnVsbCBkYXlcIiBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiBhIGxvY2FsIHRpbWUgaW4gb25lIGRheSB0byB0aGUgc2FtZVxuICogbG9jYWwgdGltZSBvbiB0aGUgbmV4dCBvciBwcmV2aW91cyBkYXkuIEEgZnVsbCBkYXkgY2FuIHNvbWV0aW1lcyBiZSBsZXNzIHRoYW5cbiAqIG9yIG1vcmUgdGhhbiAyNCBob3VycyBpZiBhIGRheWxpZ2h0IHNhdmluZ3MgY2hhbmdlIGhhcHBlbnMgYmV0d2VlbiB0d28gZGF0ZXMuXG4gKlxuICogVG8gaWdub3JlIERTVCBhbmQgb25seSBtZWFzdXJlIGV4YWN0IDI0LWhvdXIgcGVyaW9kcywgdXNlIHRoaXMgaW5zdGVhZDpcbiAqIGBNYXRoLmZsb29yKGRpZmZlcmVuY2VJbkhvdXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpLzI0KXwwYC5cbiAqXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBmdWxsIGRheXMgYWNjb3JkaW5nIHRvIHRoZSBsb2NhbCB0aW1lem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY1XG4gKiAvLyBIb3cgbWFueSBmdWxsIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDBcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMSBNYXJjaCAyMDIwIDA6MDAgYW5kIDEgSnVuZSAyMDIwIDA6MDAgP1xuICogLy8gTm90ZTogYmVjYXVzZSBsb2NhbCB0aW1lIGlzIHVzZWQsIHRoZVxuICogLy8gcmVzdWx0IHdpbGwgYWx3YXlzIGJlIDkyIGRheXMsIGV2ZW4gaW5cbiAqIC8vIHRpbWUgem9uZXMgd2hlcmUgRFNUIHN0YXJ0cyBhbmQgdGhlXG4gKiAvLyBwZXJpb2QgaGFzIG9ubHkgOTIqMjQtMSBob3Vycy5cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMjAsIDUsIDEpLFxuICogICBuZXcgRGF0ZSgyMDIwLCAyLCAxKVxuICogKVxuLy89PiA5MlxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluRGF5cyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHNpZ24gPSBjb21wYXJlTG9jYWxBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gIHZhciBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpKTtcbiAgZGF0ZUxlZnQuc2V0RGF0ZShkYXRlTGVmdC5nZXREYXRlKCkgLSBzaWduICogZGlmZmVyZW5jZSk7IC8vIE1hdGguYWJzKGRpZmYgaW4gZnVsbCBkYXlzIC0gZGlmZiBpbiBjYWxlbmRhciBkYXlzKSA9PT0gMSBpZiBsYXN0IGNhbGVuZGFyIGRheSBpcyBub3QgZnVsbFxuICAvLyBJZiBzbywgcmVzdWx0IG11c3QgYmUgZGVjcmVhc2VkIGJ5IDEgaW4gYWJzb2x1dGUgdmFsdWVcblxuICB2YXIgaXNMYXN0RGF5Tm90RnVsbCA9IE51bWJlcihjb21wYXJlTG9jYWxBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IC1zaWduKTtcbiAgdmFyIHJlc3VsdCA9IHNpZ24gKiAoZGlmZmVyZW5jZSAtIGlzTGFzdERheU5vdEZ1bGwpOyAvLyBQcmV2ZW50IG5lZ2F0aXZlIHplcm9cblxuICByZXR1cm4gcmVzdWx0ID09PSAwID8gMCA6IHJlc3VsdDtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XG5cbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2xvY2suY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jbG9jay5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9jbG9jay5jc3NcIjtcblxuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL21vZHVsZXMvdGFza3MuanNcIjtcbmltcG9ydCB7XG4gIFByb2plY3QsXG4gIFByb2plY3RzTm90VG9SZW1vdmUsXG4gIGNyZWF0ZVRlc3RQcm9qZWN0cyxcbn0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgRG9tQ3JlYXRvciB9IGZyb20gXCIuL21vZHVsZXMvZG9tX21hdGVyaWFsc1wiO1xuaW1wb3J0IHsgQXBwQm9hcmQgfSBmcm9tIFwiLi9tb2R1bGVzL2FwcF9sb2dpYy5qc1wiO1xuaW1wb3J0IHsgRm9ybXNDcmVhdG9yIH0gZnJvbSBcIi4vbW9kdWxlcy9mb3Jtcy5qc1wiO1xuaW1wb3J0IHsgQ2xvY2sgfSBmcm9tIFwiLi9tb2R1bGVzL2Nsb2NrLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBhcHBCb2FyZCA9IEFwcEJvYXJkKCk7XG5leHBvcnQgY29uc3QgZG9tQ3JlYXRvciA9IERvbUNyZWF0b3IoKTtcbmV4cG9ydCBjb25zdCBmb3JtQ3JlYXRvciA9IEZvcm1zQ3JlYXRvcigpO1xuXG5mb3JtQ3JlYXRvci5hZGRQcm9qZWN0Rm9ybUV2ZW50TGlzdGVuZXJzKCk7XG5DbG9jaygpO1xuXG5jcmVhdGVUZXN0UHJvamVjdHMoKTsgLy8gc2V0IG9mIHJlYWR5IHByb2plY3RzIGFuZCB0YXNrcyB0byBzaG93Y2FzZVxuXG4vLyBrZWVwIHRoZXNlIGF0IHRoZSBlbmQgdG8gZ2VuZXJhdGUgdGhlIHBhZ2VcbmRvbUNyZWF0b3IuZGlzcGxheVByb2plY3RzKCk7XG5kb21DcmVhdG9yLmRpc3BsYXlUYXNrcyhhcHBCb2FyZC5wcm9qZWN0c0xpc3RbMF0pOyAvLyBkaXNwbGF5IHRvZGF5J3MgdGFza3NcbiIsImltcG9ydCB7IFByb2plY3QsIFByb2plY3RzTm90VG9SZW1vdmUgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tzLmpzXCI7XG5pbXBvcnQgeyBkb21DcmVhdG9yIH0gZnJvbSBcIi4vdGFza3MuanNcIjtcblxuaW1wb3J0IHsgZm9ybWF0LCBkaWZmZXJlbmNlSW5EYXlzLCBzdGFydE9mRGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBhcHBCb2FyZCB9IGZyb20gXCIuLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFza0xpc3RTb3J0aW5nKHRhc2tMaXN0KSB7XG4gIHRhc2tMaXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAvL2EgdG8geCwgYiB0byB5XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgaWYgKGEuZHVlRGF0ZSAhPSBcIlwiKSB7XG4gICAgICB4ID0gbmV3IERhdGUoYS5kdWVEYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9IG5ldyBEYXRlKFwiMjIyMi0xMS0xMFwiKTtcbiAgICB9XG5cbiAgICBpZiAoYi5kdWVEYXRlICE9IFwiXCIpIHtcbiAgICAgIHkgPSBuZXcgRGF0ZShiLmR1ZURhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB5ID0gbmV3IERhdGUoXCIyMjIyLTExLTEwXCIpO1xuICAgIH1cblxuICAgIGxldCBkaWZmZXJlbmNlVG9SZXR1cm4gPSBkaWZmZXJlbmNlSW5EYXlzKHgsIHkpO1xuXG4gICAgaWYgKGRpZmZlcmVuY2VUb1JldHVybiA9PT0gMCkge1xuICAgICAgZGlmZmVyZW5jZVRvUmV0dXJuID0gYi51bmlxdWVJRCAtIGEudW5pcXVlSUQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpZmZlcmVuY2VUb1JldHVybjtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhc2tMaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQXBwQm9hcmQoKSB7XG4gIC8vIGFkZGluZyBsb2NhbCBzdG9yYWdlXG4gIGNvbnN0IExPQ0FMX1NUT1JBR0VfUFJPSkVDVFNfS0VZID0gXCJ0b2RvYXBwLnByb2plY3RzXCI7XG4gIGxldCBwcm9qZWN0c0xpc3QgPVxuICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19LRVkpKSB8fCBbXTtcblxuICAvLyBhc3NpZ25pbmcgT2JqZWN0IG1ldGhvZHMgYmFjaywgYXMgdGhleSB3ZXJlIHNhdmVkIGFzIHN0cmluZ3NcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0c0xpc3RbaV0gPSBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3RzTGlzdFtpXSk7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3RzTGlzdFtpXS50YXNrc0xpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgIHByb2plY3RzTGlzdFtpXS50YXNrc0xpc3Rbal0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBuZXcgVGFzaygpLFxuICAgICAgICBwcm9qZWN0c0xpc3RbaV0udGFza3NMaXN0W2pdXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxldCBwcm9qZWN0c0xpc3QgPSBbXTtcblxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAvLyBhZGRzIHRoZSB0YXNrIHRvIGVuZCBvZiB0YXNrc0xpc3RcbiAgICB0aGlzLnByb2plY3RzTGlzdC5wdXNoKHByb2plY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpbmRleCkge1xuICAgIHRoaXMucHJvamVjdHNMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICAvLyBmdW5jdGlvbiBlZGl0UHJvamVjdChpbmRleF90b19yZW1vdmUsIG5ld19wcm9qZWN0KSB7XG4gIC8vICAgdGhpcy5wcm9qZWN0c0xpc3Quc3BsaWNlKGluZGV4X3RvX3JlbW92ZSwgMSwgbmV3X3Byb2plY3QpO1xuICAvLyB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrVW5pcXVlSWQpIHtcbiAgICBwcm9qZWN0c0xpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRhc2tzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGFza1VuaXF1ZUlkID09IHByb2plY3QudGFza3NMaXN0W2ldLnVuaXF1ZUlEKSB7XG4gICAgICAgICAgcHJvamVjdC50YXNrc0xpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0tFWSxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdClcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VGFza3NGcm9tQWxsUHJvamVjdHMoKSB7XG4gICAgbGV0IGFsbFRhc2tzID0gW107XG5cbiAgICAvL3Byb2plY3RzTGlzdFswXSBmb3IgdGhlIE1haW4gUHJvamVjdFxuICAgIC8vIHByb2plY3RzTGlzdFs1XS50YXNrc0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIC8vICAgYWxsVGFza3MucHVzaCh0YXNrKTtcbiAgICAvLyB9KTtcblxuICAgIGZvciAobGV0IGkgPSBQcm9qZWN0c05vdFRvUmVtb3ZlLmxlbmd0aCAtIDE7IGkgPCBwcm9qZWN0c0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb2plY3RzTGlzdFtpXS50YXNrc0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBhbGxUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGFza0xpc3RTb3J0aW5nKGFsbFRhc2tzKTtcblxuICAgIHJldHVybiBhbGxUYXNrcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRhc2tzRm9yVG9kYXlUb21vcnJvdygpIHtcbiAgICAvL3N3aXRjaGVkIHRvIHRvZGF5IGFuZCB0b21vcnJvd1xuICAgIGxldCBhbGxUYXNrcyA9IFtdO1xuXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB0b2RheVN0YXJ0ID0gc3RhcnRPZkRheShub3cpO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tUYXNrbGlzdChwcm9qZWN0KSB7XG4gICAgICBwcm9qZWN0LnRhc2tzTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmICh0YXNrLmR1ZURhdGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHN0YXJ0T2ZEYXkobmV3IERhdGUodGFzay5kdWVEYXRlKSk7XG4gICAgICAgIGNvbnN0IGRheXNCZXR3ZWVuID0gZGlmZmVyZW5jZUluRGF5cyh0YXNrRHVlRGF0ZSwgdG9kYXlTdGFydCk7XG5cbiAgICAgICAgaWYgKGRheXNCZXR3ZWVuID09PSAwIHx8IGRheXNCZXR3ZWVuID09PSAxKSB7XG4gICAgICAgICAgYWxsVGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY2hlY2tUYXNrbGlzdChwcm9qZWN0c0xpc3RbNV0pO1xuICAgIGZvciAobGV0IGkgPSBQcm9qZWN0c05vdFRvUmVtb3ZlLmxlbmd0aCAtIDE7IGkgPCBwcm9qZWN0c0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoZWNrVGFza2xpc3QocHJvamVjdHNMaXN0W2ldKTtcbiAgICB9XG5cbiAgICB0YXNrTGlzdFNvcnRpbmcoYWxsVGFza3MpO1xuXG4gICAgcmV0dXJuIGFsbFRhc2tzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VGFza3NGb3JXZWVrKCkge1xuICAgIGxldCBhbGxUYXNrcyA9IFtdO1xuXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB0b2RheVN0YXJ0ID0gc3RhcnRPZkRheShub3cpO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tUYXNrbGlzdChwcm9qZWN0KSB7XG4gICAgICBwcm9qZWN0LnRhc2tzTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmICh0YXNrLmR1ZURhdGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHN0YXJ0T2ZEYXkobmV3IERhdGUodGFzay5kdWVEYXRlKSk7XG4gICAgICAgIGNvbnN0IGRheXNCZXR3ZWVuID0gZGlmZmVyZW5jZUluRGF5cyh0YXNrRHVlRGF0ZSwgdG9kYXlTdGFydCk7XG5cbiAgICAgICAgaWYgKGRheXNCZXR3ZWVuIDwgMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF5c0JldHdlZW4gPD0gNykge1xuICAgICAgICAgIGFsbFRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNoZWNrVGFza2xpc3QocHJvamVjdHNMaXN0WzVdKTtcbiAgICBmb3IgKGxldCBpID0gUHJvamVjdHNOb3RUb1JlbW92ZS5sZW5ndGggLSAxOyBpIDwgcHJvamVjdHNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGVja1Rhc2tsaXN0KHByb2plY3RzTGlzdFtpXSk7XG4gICAgfVxuXG4gICAgdGFza0xpc3RTb3J0aW5nKGFsbFRhc2tzKTtcblxuICAgIHJldHVybiBhbGxUYXNrcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRhc2tzRm9yTW9udGgoKSB7XG4gICAgbGV0IGFsbFRhc2tzID0gW107XG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRvZGF5U3RhcnQgPSBzdGFydE9mRGF5KG5vdyk7XG5cbiAgICBmdW5jdGlvbiBjaGVja1Rhc2tsaXN0KHByb2plY3QpIHtcbiAgICAgIHByb2plY3QudGFza3NMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKHRhc2suZHVlRGF0ZSA9PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gc3RhcnRPZkRheShuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpKTtcbiAgICAgICAgY29uc3QgZGF5c0JldHdlZW4gPSBkaWZmZXJlbmNlSW5EYXlzKHRhc2tEdWVEYXRlLCB0b2RheVN0YXJ0KTtcblxuICAgICAgICBpZiAoZGF5c0JldHdlZW4gPCAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXlzQmV0d2VlbiA8PSAzMSkge1xuICAgICAgICAgIGFsbFRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNoZWNrVGFza2xpc3QocHJvamVjdHNMaXN0WzVdKTtcbiAgICBmb3IgKGxldCBpID0gUHJvamVjdHNOb3RUb1JlbW92ZS5sZW5ndGggLSAxOyBpIDwgcHJvamVjdHNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGVja1Rhc2tsaXN0KHByb2plY3RzTGlzdFtpXSk7XG4gICAgfVxuXG4gICAgdGFza0xpc3RTb3J0aW5nKGFsbFRhc2tzKTtcblxuICAgIHJldHVybiBhbGxUYXNrcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEltcG9ydGFudFRhc2tzKCkge1xuICAgIGxldCBhbGxUYXNrcyA9IFtdO1xuXG4gICAgLy9wcm9qZWN0c0xpc3RbMF0gZm9yIHRoZSBNYWluIFByb2plY3RcbiAgICAvLyBwcm9qZWN0c0xpc3RbNV0udGFza3NMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAvLyAgIGlmICh0YXNrLmlzSW1wb3J0YW50ID09PSB0cnVlKSB7XG4gICAgLy8gICAgIGFsbFRhc2tzLnB1c2godGFzayk7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cbiAgICBmb3IgKGxldCBpID0gUHJvamVjdHNOb3RUb1JlbW92ZS5sZW5ndGggLSAxOyBpIDwgcHJvamVjdHNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9qZWN0c0xpc3RbaV0udGFza3NMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKHRhc2suaXNJbXBvcnRhbnQgPT09IHRydWUpIHtcbiAgICAgICAgICBhbGxUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0YXNrTGlzdFNvcnRpbmcoYWxsVGFza3MpO1xuXG4gICAgcmV0dXJuIGFsbFRhc2tzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RXhwaXJlZFRhc2tzKCkge1xuICAgIGxldCBhbGxUYXNrcyA9IFtdO1xuXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB0b2RheVN0YXJ0ID0gc3RhcnRPZkRheShub3cpO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tUYXNrbGlzdChwcm9qZWN0KSB7XG4gICAgICBwcm9qZWN0LnRhc2tzTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmICh0YXNrLmR1ZURhdGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHN0YXJ0T2ZEYXkobmV3IERhdGUodGFzay5kdWVEYXRlKSk7XG4gICAgICAgIGNvbnN0IGRheXNCZXR3ZWVuID0gZGlmZmVyZW5jZUluRGF5cyh0YXNrRHVlRGF0ZSwgdG9kYXlTdGFydCk7XG5cbiAgICAgICAgaWYgKGRheXNCZXR3ZWVuIDwgMCkge1xuICAgICAgICAgIGFsbFRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNoZWNrVGFza2xpc3QocHJvamVjdHNMaXN0WzVdKTtcbiAgICBmb3IgKGxldCBpID0gUHJvamVjdHNOb3RUb1JlbW92ZS5sZW5ndGggLSAxOyBpIDwgcHJvamVjdHNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGVja1Rhc2tsaXN0KHByb2plY3RzTGlzdFtpXSk7XG4gICAgfVxuXG4gICAgdGFza0xpc3RTb3J0aW5nKGFsbFRhc2tzKTtcblxuICAgIHJldHVybiBhbGxUYXNrcztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdHNMaXN0LFxuICAgIHJlbW92ZVRhc2ssXG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlLFxuICAgIGdldFRhc2tzRnJvbUFsbFByb2plY3RzLFxuICAgIGdldFRhc2tzRm9yVG9kYXlUb21vcnJvdyxcbiAgICBnZXRUYXNrc0ZvcldlZWssXG4gICAgZ2V0VGFza3NGb3JNb250aCxcbiAgICBnZXRJbXBvcnRhbnRUYXNrcyxcbiAgICBnZXRFeHBpcmVkVGFza3MsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhbGVuZGFyKCkge1xuICAvLyBHZXQgdGhlIGN1cnJlbnQgZGF0ZVxuICB2YXIgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gIC8vIEdldCB0aGUgeWVhciBhbmQgbW9udGggb2YgdGhlIGN1cnJlbnQgZGF0ZVxuICB2YXIgY3VycmVudFllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICB2YXIgY3VycmVudE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgdmFyIGN1cnJlbnREYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG5cbiAgLy8gR2V0IHRoZSBudW1iZXIgb2YgZGF5cyBpbiB0aGUgcHJldmlvdXMgbW9udGhcbiAgdmFyIGRheXNJblByZXZNb250aCA9IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgsIDApLmdldERhdGUoKTtcblxuICAvLyBHZXQgdGhlIGZpcnN0IGRheSBvZiB0aGUgY3VycmVudCBtb250aFxuICB2YXIgZmlyc3REYXlPZk1vbnRoID0gbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCwgMSkuZ2V0RGF5KCk7XG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgZGF5cyB0byBkaXNwbGF5IGZyb20gdGhlIHByZXZpb3VzIG1vbnRoXG4gIHZhciBkYXlzVG9EaXNwbGF5RnJvbVByZXZNb250aCA9XG4gICAgZmlyc3REYXlPZk1vbnRoID4gMCA/IGZpcnN0RGF5T2ZNb250aCAtIDEgOiA2O1xuXG4gIC8vIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGRheXMgdG8gZGlzcGxheSBmcm9tIHRoZSBuZXh0IG1vbnRoXG4gIHZhciBkYXlzVG9EaXNwbGF5RnJvbU5leHRNb250aCA9XG4gICAgNyAtXG4gICAgKChkYXlzVG9EaXNwbGF5RnJvbVByZXZNb250aCArXG4gICAgICBuZXcgRGF0ZShjdXJyZW50WWVhciwgY3VycmVudE1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpKSAlXG4gICAgICA3KTtcblxuICAvLyBDcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGNhbGVuZGFyIGRheXNcbiAgdmFyIGNhbGVuZGFyRGF5cyA9IFtdO1xuXG4gIC8vIEFkZCB0aGUgcHJldmlvdXMgbW9udGgncyBkYXlzIHRvIHRoZSBjYWxlbmRhciBkYXlzIGFycmF5XG4gIGZvciAoXG4gICAgdmFyIGkgPSBkYXlzSW5QcmV2TW9udGggLSBkYXlzVG9EaXNwbGF5RnJvbVByZXZNb250aCArIDE7XG4gICAgaSA8PSBkYXlzSW5QcmV2TW9udGg7XG4gICAgaSsrXG4gICkge1xuICAgIGNhbGVuZGFyRGF5cy5wdXNoKHsgZGF5OiBpLCBpc0N1cnJlbnRNb250aDogZmFsc2UgfSk7XG4gIH1cblxuICAvLyBBZGQgdGhlIGN1cnJlbnQgbW9udGgncyBkYXlzIHRvIHRoZSBjYWxlbmRhciBkYXlzIGFycmF5XG4gIGZvciAoXG4gICAgdmFyIGkgPSAxO1xuICAgIGkgPD0gbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCArIDEsIDApLmdldERhdGUoKTtcbiAgICBpKytcbiAgKSB7XG4gICAgY2FsZW5kYXJEYXlzLnB1c2goeyBkYXk6IGksIGlzQ3VycmVudE1vbnRoOiB0cnVlIH0pO1xuICB9XG5cbiAgLy8gQWRkIHRoZSBuZXh0IG1vbnRoJ3MgZGF5cyB0byB0aGUgY2FsZW5kYXIgZGF5cyBhcnJheVxuICBmb3IgKHZhciBpID0gMTsgaSA8PSBkYXlzVG9EaXNwbGF5RnJvbU5leHRNb250aDsgaSsrKSB7XG4gICAgY2FsZW5kYXJEYXlzLnB1c2goeyBkYXk6IGksIGlzQ3VycmVudE1vbnRoOiBmYWxzZSB9KTtcbiAgfVxuXG4gIC8vIEdldCBhIHJlZmVyZW5jZSB0byB0aGUgY2FsZW5kYXIgZGl2IGVsZW1lbnRcbiAgdmFyIGNhbGVuZGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxlbmRhclwiKTtcblxuICAvLyBDcmVhdGUgYSB0YWJsZSBlbGVtZW50IHRvIGRpc3BsYXkgdGhlIGNhbGVuZGFyXG4gIHZhciBjYWxlbmRhclRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuXG4gIC8vIENyZWF0ZSBhIHJvdyBmb3IgdGhlIGRheSBuYW1lc1xuICB2YXIgZGF5TmFtZXNSb3cgPSBjYWxlbmRhclRhYmxlLmluc2VydFJvdygpO1xuICBkYXlOYW1lc1Jvdy5jbGFzc0xpc3QuYWRkKFwiY2FsZW5kYXJfZGF5c1wiKTtcbiAgdmFyIGRheU5hbWVzID0gW1wiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCIsIFwiU3VuXCJdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZGF5TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY2VsbCA9IGRheU5hbWVzUm93Lmluc2VydENlbGwoKTtcbiAgICBjZWxsLnRleHRDb250ZW50ID0gZGF5TmFtZXNbaV07XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2FsZW5kYXJfZGF5XCIpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIHJvd3MgZm9yIHRoZSBjYWxlbmRhciBkYXlzXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsZW5kYXJEYXlzLmxlbmd0aDsgaSArPSA3KSB7XG4gICAgdmFyIHJvdyA9IGNhbGVuZGFyVGFibGUuaW5zZXJ0Um93KCk7XG5cbiAgICBmb3IgKHZhciBqID0gaTsgaiA8IGkgKyA3OyBqKyspIHtcbiAgICAgIHZhciBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjYWxlbmRhckRheXNbal0uZGF5O1xuICAgICAgaWYgKFxuICAgICAgICBjYWxlbmRhckRheXNbal0uaXNDdXJyZW50TW9udGggJiZcbiAgICAgICAgY2FsZW5kYXJEYXlzW2pdLmRheSA9PT0gY3VycmVudERheVxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInRvZGF5XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB0aGUgY2FsZW5kYXIgdGFibGUgdG8gdGhlIGNhbGVuZGFyIGRpdiBlbGVtZW50XG4gIGNhbGVuZGFyLmlubmVySFRNTCA9IGAmIzg4ODA7JHtmb3JtYXQoY3VycmVudERhdGUsIFwiTU1NTSBkZCwgeXl5eVwiKX0mIzg4ODE7YDtcbiAgY2FsZW5kYXIuYXBwZW5kQ2hpbGQoY2FsZW5kYXJUYWJsZSk7XG59XG4iLCIvLyBGb3IgdG9nZ2xlIGJ1dHRvbjtcblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibGlnaHRcIik7XG4gIGJvZHkuc3R5bGUudHJhbnNpdGlvbiA9IGAwLjNzIGxpbmVhcmA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDbG9jaygpIHtcbiAgLy8gZm9yIHRpbWU7XG4gIGNvbnN0IGRlZyA9IDY7XG4gIC8vIDM2MCAvICgxMiAqIDUpO1xuXG4gIGNvbnN0IGhyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoclwiKTtcbiAgY29uc3QgbW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21uXCIpO1xuICBjb25zdCBzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2NcIik7XG5cbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGxldCBkYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBoaCA9IGRheS5nZXRIb3VycygpICogMzA7XG4gICAgbGV0IG1tID0gZGF5LmdldE1pbnV0ZXMoKSAqIGRlZztcbiAgICBsZXQgc3MgPSBkYXkuZ2V0U2Vjb25kcygpICogZGVnO1xuICAgIGxldCBtc2VjID0gZGF5LmdldE1pbGxpc2Vjb25kcygpO1xuXG4gICAgLy8gVkVSWSBJTVBPUlRBTlQgU1RFUDpcblxuICAgIGhyLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVaKCR7aGggKyBtbSAvIDEyfWRlZylgO1xuICAgIG1uLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVaKCR7bW19ZGVnKWA7XG4gICAgc2Muc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVooJHtzc31kZWcpYDtcblxuICAgIC8vIGdpdmVzIHRoZSBzbW9vdGggdHJhbnNpdGlvbmluZyBlZmZlY3QsIGJ1dCB0aGVyZSdzIGEgYnVnIGhlcmUhXG4gICAgLy8gc2Muc3R5bGUudHJhbnNpdGlvbiA9IGAxc2A7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgYXBwQm9hcmQsIGZvcm1DcmVhdG9yIH0gZnJvbSBcIi4uL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0c05vdFRvUmVtb3ZlIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrcy5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ2FsZW5kYXIgfSBmcm9tIFwiLi9jYWxlbmRhci5qc1wiO1xuaW1wb3J0IHsgdGFza0xpc3RTb3J0aW5nIH0gZnJvbSBcIi4vYXBwX2xvZ2ljLmpzXCI7XG5cbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2RlbGV0ZV9mb2xkZXJfaWNvbi5zdmdcIjtcbmltcG9ydCBkZWxldGVJY29uUmVkIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2RlbGV0ZV9mb2xkZXJfaWNvbl9yZWQuc3ZnXCI7XG5cbmltcG9ydCBleHBhbmRMaW5lc0ljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZXhwYW5kX2xpbmVzX2ljb24ucG5nXCI7XG5pbXBvcnQgZXhwYW5kTGluZXNSZWRJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2V4cGFuZF9saW5lc19pY29uX3JlZC5wbmdcIjtcbmltcG9ydCBleHBhbmRMaW5lc1llbGxvd0ljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZXhwYW5kX2xpbmVzX2ljb25feWVsbG93LnBuZ1wiO1xuaW1wb3J0IGV4cGFuZExpbmVzR3JlZW5JY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2V4cGFuZF9saW5lc19pY29uX2dyZWVuLnBuZ1wiO1xuXG5pbXBvcnQgYWRkSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9hZGRfaWNvbi5wbmdcIjtcblxuaW1wb3J0IGluZm9JY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2luZm9faWNvbi5wbmdcIjtcbmltcG9ydCBmaW5pc2hGbGFnSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9maW5pc2hfZmxhZ19pY29uLnBuZ1wiO1xuaW1wb3J0IGVkaXRQZW5jaWxJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2VkaXRfcGVuY2lsX2ljb24ucG5nXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBEb21DcmVhdG9yKCkge1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX2NvbnRhaW5lclwiKTtcblxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5X2Zvcl9mb3JtXCIpO1xuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS5mb3JtX3Rhc2tcIik7XG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLmZvcm1fcHJvamVjdFwiKTtcblxuICBjb25zdCBzdWJtaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcImZvcm0uZm9ybV9wcm9qZWN0IGJ1dHRvbi5mb3JtX3N1Ym1pdFwiXG4gICk7XG4gIGNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiZm9ybS5mb3JtX3Rhc2sgYnV0dG9uLmZvcm1fc3VibWl0XCJcbiAgKTtcblxuICBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG4gICAgYXBwQm9hcmQuc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcblxuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBkaXNwbGF5Rm9yUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXlfcHJvamVjdHNcIik7XG4gICAgbGV0IGRpc3BsYXlTaWRlQmFyZm9yUHJvamVjdHM7XG5cbiAgICAvLyBjbGVhcmluZyB0aGUgbWVudXNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfbWVudVwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNfbWVudVwiKS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY3JlYXRlQ2FsZW5kYXIoKTtcblxuICAgIGFwcEJvYXJkLnByb2plY3RzTGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICB0YXNrTGlzdFNvcnRpbmcocHJvamVjdC50YXNrc0xpc3QpO1xuICAgICAgaWYgKGkgPCBQcm9qZWN0c05vdFRvUmVtb3ZlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgZGlzcGxheVNpZGVCYXJmb3JQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9tZW51XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGxheVNpZGVCYXJmb3JQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNfbWVudVwiKTtcbiAgICAgIH1cblxuICAgICAgLy9jcmVhdGluZyBkaXNwbGF5IGZvciB0aGUgc2lkZWJhclxuICAgICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICAgICAgY29uc3QgbmV3U2lkZUJhclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdTaWRlQmFyUm93LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyX3Byb2plY3Rfcm93XCIpO1xuICAgICAgbmV3U2lkZUJhclJvdy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNpZGViYXItcHJvamVjdC1pbmRleFwiLCBgJHtpfWApO1xuICAgICAgZGlzcGxheVNpZGVCYXJmb3JQcm9qZWN0cy5hcHBlbmRDaGlsZChuZXdTaWRlQmFyUm93KTtcblxuICAgICAgY29uc3QgbmV3UHJvamVjdFRpdGxlQW5kQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdQcm9qZWN0VGl0bGVBbmRCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X3RpdGxlX2FuZF9idXR0b25zXCIpO1xuICAgICAgbmV3UHJvamVjdFRpdGxlQW5kQnV0dG9ucy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIiwgYCR7aX1gKTtcbiAgICAgIG5ld1NpZGVCYXJSb3cuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRpdGxlQW5kQnV0dG9ucyk7XG5cbiAgICAgIGNvbnN0IG5ld0Rpc3BsYXlUYXNrc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBuZXdEaXNwbGF5VGFza3NCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWluZGV4XCIsIGAke2l9YCk7XG4gICAgICBuZXdQcm9qZWN0VGl0bGVBbmRCdXR0b25zLmFwcGVuZENoaWxkKG5ld0Rpc3BsYXlUYXNrc0J1dHRvbik7XG5cbiAgICAgIG5ld0Rpc3BsYXlUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGRpc3BsYXlUYXNrcyhwcm9qZWN0LCBkaXNwbGF5Rm9yUHJvamVjdHMpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG5ld0Rpc3BsYXlUYXNrc0J1dHRvbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIG5ld0Rpc3BsYXlUYXNrc0J1dHRvbkltYWdlLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImV4cGFuZCBpY29uXCIpO1xuICAgICAgbmV3RGlzcGxheVRhc2tzQnV0dG9uSW1hZ2UuY2xhc3NMaXN0LmFkZChcInNpZGViYXJfaWNvblwiKTtcbiAgICAgIG5ld0Rpc3BsYXlUYXNrc0J1dHRvbi5hcHBlbmRDaGlsZChuZXdEaXNwbGF5VGFza3NCdXR0b25JbWFnZSk7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBuZXdEaXNwbGF5VGFza3NCdXR0b25JbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZXhwYW5kTGluZXNSZWRJY29uKTtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMSkge1xuICAgICAgICBuZXdEaXNwbGF5VGFza3NCdXR0b25JbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZXhwYW5kTGluZXNZZWxsb3dJY29uKTtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMikge1xuICAgICAgICBuZXdEaXNwbGF5VGFza3NCdXR0b25JbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZXhwYW5kTGluZXNHcmVlbkljb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RGlzcGxheVRhc2tzQnV0dG9uSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGV4cGFuZExpbmVzSWNvbik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICAgIG5ld1Byb2plY3QuaW5uZXJIVE1MID0gcHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWluZGV4XCIsIGAke2l9YCk7XG4gICAgICBuZXdQcm9qZWN0VGl0bGVBbmRCdXR0b25zLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuXG4gICAgICBpZiAoaSA+PSBQcm9qZWN0c05vdFRvUmVtb3ZlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGZ1bmN0aW9uIHJlcGxhY2VXaXRoSW5wdXQoZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBlbGVtZW50LmlubmVySFRNTDtcbiAgICAgICAgICAgIGlucHV0Lm1heGxlbmd0aCA9IFwiNDBcIjtcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaW5wdXQsIGVsZW1lbnQpO1xuICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlUHJvamVjdCgpIHtcbiAgICAgICAgICAgICAgcHJvamVjdC5zZXRQcm9qZWN0TmFtZShpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgIHZhciB1cGRhdGVkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgIHVwZGF0ZWRFbGVtZW50LmNsYXNzTmFtZSA9IFwicHJvamVjdFwiO1xuICAgICAgICAgICAgICB1cGRhdGVkRWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgXCJkYXRhLXByb2plY3QtaW5kZXhcIixcbiAgICAgICAgICAgICAgICBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB1cGRhdGVkRWxlbWVudC5pbm5lckhUTUwgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgdXBkYXRlZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlV2l0aElucHV0KHVwZGF0ZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgcHJvamVjdC50YXNrc0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2sucHJvamVjdE5hbWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaW5wdXQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodXBkYXRlZEVsZW1lbnQsIGlucHV0KTtcblxuICAgICAgICAgICAgICBhcHBCb2FyZC5zYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHVwZGF0ZVByb2plY3QpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2plY3QoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB1cGRhdGVQcm9qZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVwbGFjZVdpdGhJbnB1dChuZXdQcm9qZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHJlbW92ZSBidXR0b25cbiAgICAgIC8vIGlmIGNvbmRpdGlvbiBwcmV2ZW50cyByZW1vdmluZyB0aGUgbWFpbiBjYXRlZ29yaWVzXG4gICAgICBpZiAoaSA+PSBQcm9qZWN0c05vdFRvUmVtb3ZlLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBuZXdSZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBuZXdSZW1vdmVCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWluZGV4XCIsIGAke2l9YCk7XG4gICAgICAgIG5ld1Byb2plY3RUaXRsZUFuZEJ1dHRvbnMuYXBwZW5kQ2hpbGQobmV3UmVtb3ZlQnV0dG9uKTtcblxuICAgICAgICBuZXdSZW1vdmVCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmb3JtQ3JlYXRvci5jb25maXJtRGVsZXRlUHJvamVjdEV2ZW50TGlzdGVuZXJzKFxuICAgICAgICAgICAgbmV3UmVtb3ZlQnV0dG9uLFxuICAgICAgICAgICAgcHJvamVjdFxuICAgICAgICAgICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbmV3UmVtb3ZlQnV0dG9uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBuZXdSZW1vdmVCdXR0b25JbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJkZWxldGUgaWNvblwiKTtcbiAgICAgICAgbmV3UmVtb3ZlQnV0dG9uSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGRlbGV0ZUljb24pO1xuICAgICAgICBuZXdSZW1vdmVCdXR0b25JbWFnZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIiwgYCR7aX1gKTtcbiAgICAgICAgbmV3UmVtb3ZlQnV0dG9uSW1hZ2UuY2xhc3NMaXN0LmFkZChcInNpZGViYXJfaWNvblwiKTtcbiAgICAgICAgbmV3UmVtb3ZlQnV0dG9uSW1hZ2UuY2xhc3NMaXN0LmFkZChcImRlbGV0ZV9wcm9qZWN0X2ljb25cIik7XG4gICAgICAgIG5ld1JlbW92ZUJ1dHRvbi5hcHBlbmRDaGlsZChuZXdSZW1vdmVCdXR0b25JbWFnZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpID49IFByb2plY3RzTm90VG9SZW1vdmUubGVuZ3RoIC0gMSkge1xuICAgICAgICBjb25zdCBuZXdBZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbmV3QWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkX3Rhc2tfYnV0dG9uXCIpO1xuICAgICAgICBuZXdBZGRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiLCBgJHtpfWApO1xuICAgICAgICBuZXdQcm9qZWN0VGl0bGVBbmRCdXR0b25zLmFwcGVuZENoaWxkKG5ld0FkZFRhc2tCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IG5ld0FkZFRhc2tCdXR0b25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIG5ld0FkZFRhc2tCdXR0b25JbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJhZGQgaWNvblwiKTtcbiAgICAgICAgbmV3QWRkVGFza0J1dHRvbkltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBhZGRJY29uKTtcbiAgICAgICAgbmV3QWRkVGFza0J1dHRvbkltYWdlLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyX2ljb25cIik7XG4gICAgICAgIG5ld0FkZFRhc2tCdXR0b24uYXBwZW5kQ2hpbGQobmV3QWRkVGFza0J1dHRvbkltYWdlKTtcblxuICAgICAgICBuZXdBZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBmb3JtQ3JlYXRvci5hZGRUYXNrRm9ybUV2ZW50TGlzdGVuZXJzKHByb2plY3QsIG5ld0FkZFRhc2tCdXR0b24pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vKioqKioqKioqKioqKipcblxuICAgICAgaSsrO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRGlzcGxheXMgdGhlIHRhc2tzIGluIGEgUHJvamVjdFxuICBmdW5jdGlvbiBkaXNwbGF5VGFza3MocHJvamVjdCkge1xuICAgIGFwcEJvYXJkLnNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG5cbiAgICBjb25zdCBuZXdDb250YWluZXJGb3JQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuZGlzcGxheV9wcm9qZWN0X3RpdGxlXCJcbiAgICApO1xuICAgIGNvbnN0IG5ld0NvbnRhaW5lckZvclRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5X3Byb2plY3RzXCIpO1xuICAgIG5ld0NvbnRhaW5lckZvclByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0LnByb2plY3ROYW1lO1xuICAgIG5ld0NvbnRhaW5lckZvclRhc2tzLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAvLyBzZXR0aW5ncyBmb3IgbWFpbiBjYXRlZ29yaWVzLi5cbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIC8vVG9kYXlcbiAgICBpZiAocHJvamVjdCA9PT0gYXBwQm9hcmQucHJvamVjdHNMaXN0WzBdKSB7XG4gICAgICBwcm9qZWN0LnRhc2tzTGlzdCA9IGFwcEJvYXJkLmdldFRhc2tzRm9yVG9kYXlUb21vcnJvdygpO1xuICAgIH1cblxuICAgIC8vVGhpcyB3ZWVrXG4gICAgaWYgKHByb2plY3QgPT09IGFwcEJvYXJkLnByb2plY3RzTGlzdFsxXSkge1xuICAgICAgcHJvamVjdC50YXNrc0xpc3QgPSBhcHBCb2FyZC5nZXRUYXNrc0ZvcldlZWsoKTtcbiAgICB9XG5cbiAgICAvL1RoaXMgTW9udGhcbiAgICBpZiAocHJvamVjdCA9PT0gYXBwQm9hcmQucHJvamVjdHNMaXN0WzJdKSB7XG4gICAgICBwcm9qZWN0LnRhc2tzTGlzdCA9IGFwcEJvYXJkLmdldFRhc2tzRm9yTW9udGgoKTtcbiAgICB9XG5cbiAgICAvL0ltcG9ydGFudFxuICAgIGlmIChwcm9qZWN0ID09PSBhcHBCb2FyZC5wcm9qZWN0c0xpc3RbM10pIHtcbiAgICAgIHByb2plY3QudGFza3NMaXN0ID0gYXBwQm9hcmQuZ2V0SW1wb3J0YW50VGFza3MoKTtcbiAgICB9XG5cbiAgICAvL0V4cGlyZWRcbiAgICBpZiAocHJvamVjdCA9PT0gYXBwQm9hcmQucHJvamVjdHNMaXN0WzRdKSB7XG4gICAgICBwcm9qZWN0LnRhc2tzTGlzdCA9IGFwcEJvYXJkLmdldEV4cGlyZWRUYXNrcygpO1xuICAgIH1cblxuICAgIC8vIEFsbCBUYXNrc1xuICAgIGlmIChwcm9qZWN0ID09PSBhcHBCb2FyZC5wcm9qZWN0c0xpc3RbNV0pIHtcbiAgICAgIHByb2plY3QudGFza3NMaXN0ID0gYXBwQm9hcmQuZ2V0VGFza3NGcm9tQWxsUHJvamVjdHMoKTtcbiAgICB9XG5cbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAgIC8vYWRkaW5nIHRoZSBoZWFkZXIgdGl0bGVzIGZvciB0YXNrc1xuICAgIChmdW5jdGlvbiBhZGRIZWFkZXJGb3JUYXNrcygpIHtcbiAgICAgIGNvbnN0IG5ld0NvbnRhaW5lckZvclNpbmdsZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3Q29udGFpbmVyRm9yU2luZ2xlVGFzay5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBcImNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2tfaGVhZGVyXCJcbiAgICAgICk7XG4gICAgICBuZXdDb250YWluZXJGb3JUYXNrcy5hcHBlbmRDaGlsZChuZXdDb250YWluZXJGb3JTaW5nbGVUYXNrKTtcblxuICAgICAgY29uc3QgbmV3VGFza0RheXNMZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld1Rhc2tEYXlzTGVmdERpdi5jbGFzc0xpc3QuYWRkKFwidGFza19kdWVfZGF0ZV9kYXlcIik7XG4gICAgICBuZXdUYXNrRGF5c0xlZnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIG5ld0NvbnRhaW5lckZvclNpbmdsZVRhc2suYXBwZW5kQ2hpbGQobmV3VGFza0RheXNMZWZ0RGl2KTtcblxuICAgICAgY29uc3QgbmV3VGFza0RheXNMZWZ0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIG5ld1Rhc2tEYXlzTGVmdEltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJleHBhbmQgaWNvblwiKTtcbiAgICAgIG5ld1Rhc2tEYXlzTGVmdEltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZmluaXNoRmxhZ0ljb24pO1xuICAgICAgbmV3VGFza0RheXNMZWZ0SW1nLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZV9pY29uXCIpO1xuICAgICAgbmV3VGFza0RheXNMZWZ0RGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tEYXlzTGVmdEltZyk7XG5cbiAgICAgIGNvbnN0IG5ld1Rhc2tEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld1Rhc2tEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2R1ZV9kYXRlXCIpO1xuICAgICAgbmV3VGFza0RhdGVEaXYuaW5uZXJIVE1MID0gXCJEdWUgRGF0ZVwiO1xuICAgICAgbmV3Q29udGFpbmVyRm9yU2luZ2xlVGFzay5hcHBlbmRDaGlsZChuZXdUYXNrRGF0ZURpdik7XG5cbiAgICAgIGNvbnN0IG5ld1Rhc2tUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdUYXNrVGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tfdGl0bGVcIik7XG4gICAgICBuZXdUYXNrVGl0bGVEaXYuaW5uZXJIVE1MID0gXCJUYXNrIFRpdGxlXCI7XG4gICAgICBuZXdDb250YWluZXJGb3JTaW5nbGVUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tUaXRsZURpdik7XG4gICAgfSkoKTtcblxuICAgIHByb2plY3QudGFza3NMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IG5ld0NvbnRhaW5lckZvclNpbmdsZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3Q29udGFpbmVyRm9yU2luZ2xlVGFzay5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFza1wiKTtcbiAgICAgIG5ld0NvbnRhaW5lckZvclRhc2tzLmFwcGVuZENoaWxkKG5ld0NvbnRhaW5lckZvclNpbmdsZVRhc2spO1xuXG4gICAgICBjb25zdCBuZXdDaXJjbGVGb3JUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0NpcmNsZUZvclRhc2suY2xhc3NMaXN0LmFkZChcImNpcmNsZVwiKTtcbiAgICAgIG5ld0NvbnRhaW5lckZvclNpbmdsZVRhc2suYXBwZW5kQ2hpbGQobmV3Q2lyY2xlRm9yVGFzayk7XG5cbiAgICAgIGNvbnN0IG5ld1Rhc2tEYXlzTGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdUYXNrRGF5c0xlZnREaXYuY2xhc3NMaXN0LmFkZCh0YXNrLnVuaXF1ZUlEKTtcbiAgICAgIG5ld1Rhc2tEYXlzTGVmdERpdi5jbGFzc0xpc3QuYWRkKFwidGFza19kdWVfZGF0ZV9kYXlcIik7XG4gICAgICBuZXdUYXNrRGF5c0xlZnREaXYuY2xhc3NMaXN0LmFkZCh0YXNrLmdldENsYXNzRm9yRHVlZGF0ZSgpKTtcbiAgICAgIG5ld1Rhc2tEYXlzTGVmdERpdi5pbm5lckhUTUwgPSB0YXNrLmdldERheXNMZWZ0U3RhdHVzKCk7XG4gICAgICBuZXdDb250YWluZXJGb3JTaW5nbGVUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tEYXlzTGVmdERpdik7XG5cbiAgICAgIGNvbnN0IG5ld1Rhc2tEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld1Rhc2tEYXRlRGl2LmNsYXNzTGlzdC5hZGQodGFzay51bmlxdWVJRCk7XG4gICAgICBuZXdUYXNrRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwidGFza19kdWVfZGF0ZVwiKTtcbiAgICAgIC8vIG5ld1Rhc2tEYXRlRGl2LmNsYXNzTGlzdC5hZGQodGFzay5nZXRDbGFzc0ZvckR1ZWRhdGUoKSk7XG4gICAgICBuZXdUYXNrRGF0ZURpdi5pbm5lckhUTUwgPSB0YXNrLmZvcm1hdERhdGVTdHJpbmcoKTtcbiAgICAgIG5ld0NvbnRhaW5lckZvclNpbmdsZVRhc2suYXBwZW5kQ2hpbGQobmV3VGFza0RhdGVEaXYpO1xuXG4gICAgICBjb25zdCBuZXdUYXNrVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3VGFza1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQodGFzay51bmlxdWVJRCk7XG4gICAgICBuZXdUYXNrVGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tfdGl0bGVcIik7XG4gICAgICBuZXdUYXNrVGl0bGVEaXYuaW5uZXJIVE1MID0gdGFzay50aXRsZTtcbiAgICAgIG5ld0NvbnRhaW5lckZvclNpbmdsZVRhc2suYXBwZW5kQ2hpbGQobmV3VGFza1RpdGxlRGl2KTtcblxuICAgICAgY29uc3QgbmV3VGFza0J1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3VGFza0J1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0YXNrLnVuaXF1ZUlEKTtcbiAgICAgIG5ld1Rhc2tCdXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2J1dHRvbnNfY29udGFpbmVyXCIpO1xuICAgICAgbmV3Q29udGFpbmVyRm9yU2luZ2xlVGFzay5hcHBlbmRDaGlsZChuZXdUYXNrQnV0dG9uc0NvbnRhaW5lcik7XG5cbiAgICAgIGNvbnN0IG5ld0NoZWNrVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBuZXdDaGVja1Rhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImNoZWNrX3Rhc2tfYnV0dG9uXCIpO1xuICAgICAgbmV3Q2hlY2tUYXNrQnV0dG9uLmlubmVySFRNTCA9IHRhc2suaXNUYXNrQ2hlY2tlZCA/IFwiJiM5NzQ1O1wiIDogXCImIzk3NDQ7XCI7XG4gICAgICBuZXdUYXNrQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDaGVja1Rhc2tCdXR0b24pO1xuICAgICAgaWYgKHRhc2suaXNUYXNrQ2hlY2tlZCkge1xuICAgICAgICBuZXdDb250YWluZXJGb3JTaW5nbGVUYXNrLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgfVxuXG4gICAgICBuZXdDaGVja1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGFzay5pc1Rhc2tDaGVja2VkID0gIXRhc2suaXNUYXNrQ2hlY2tlZDtcbiAgICAgICAgZGlzcGxheVRhc2tzKHByb2plY3QpOyAvLyBzZWxlY3RzIHRoZSBjbG9zZXN0IHBhcmVudFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG5ld0ltcG9ydGFudFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgbmV3SW1wb3J0YW50VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2hlY2tfcHJpb3JpdHlfYnV0dG9uXCIpO1xuICAgICAgbmV3SW1wb3J0YW50VGFza0J1dHRvbi5pbm5lckhUTUwgPSBcIiYjOTczNDtcIjtcbiAgICAgIG5ld1Rhc2tCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0ltcG9ydGFudFRhc2tCdXR0b24pO1xuICAgICAgaWYgKHRhc2suaXNJbXBvcnRhbnQpIHtcbiAgICAgICAgbmV3SW1wb3J0YW50VGFza0J1dHRvbi5pbm5lckhUTUwgPSBcIiYjOTczMztcIjtcbiAgICAgICAgbmV3SW1wb3J0YW50VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICAgIH1cblxuICAgICAgbmV3SW1wb3J0YW50VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0YXNrLmlzSW1wb3J0YW50ID0gIXRhc2suaXNJbXBvcnRhbnQ7XG4gICAgICAgIGRpc3BsYXlUYXNrcyhwcm9qZWN0KTsgLy8gc2VsZWN0cyB0aGUgY2xvc2VzdCBwYXJlbnRcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBuZXdFZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBuZXdFZGl0VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaW5mb190YXNrX2J1dHRvblwiKTtcbiAgICAgIG5ld1Rhc2tCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VkaXRUYXNrQnV0dG9uKTtcblxuICAgICAgbmV3RWRpdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBmb3JtQ3JlYXRvci5lZGl0VGFza0Zvcm1FdmVudExpc3RlbmVycyhcbiAgICAgICAgICBwcm9qZWN0LFxuICAgICAgICAgIHRhc2ssXG4gICAgICAgICAgbmV3RWRpdFRhc2tCdXR0b25cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBuZXdFZGl0VGFza0J1dHRvbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIG5ld0VkaXRUYXNrQnV0dG9uSW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiZWRpdCB0YXNrIGljb25cIik7XG4gICAgICBuZXdFZGl0VGFza0J1dHRvbkltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBlZGl0UGVuY2lsSWNvbik7XG4gICAgICBuZXdFZGl0VGFza0J1dHRvbkltYWdlLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyX2ljb25cIik7XG4gICAgICBuZXdFZGl0VGFza0J1dHRvbkltYWdlLmNsYXNzTGlzdC5hZGQoXCJlZGl0X3Rhc2tfaWNvblwiKTtcbiAgICAgIG5ld0VkaXRUYXNrQnV0dG9uLmFwcGVuZENoaWxkKG5ld0VkaXRUYXNrQnV0dG9uSW1hZ2UpO1xuXG4gICAgICBjb25zdCBuZXdJbmZvVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBuZXdJbmZvVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaW5mb190YXNrX2J1dHRvblwiKTtcbiAgICAgIG5ld1Rhc2tCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0luZm9UYXNrQnV0dG9uKTtcbiAgICAgIGZvcm1DcmVhdG9yLmFkZFRhc2tJbmZvRXZlbnRMaXN0ZW5lcnMobmV3SW5mb1Rhc2tCdXR0b24sIHRhc2spO1xuXG4gICAgICBjb25zdCBuZXdJbmZvVGFza0J1dHRvbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIG5ld0luZm9UYXNrQnV0dG9uSW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiaW5mbyBpY29uXCIpO1xuICAgICAgbmV3SW5mb1Rhc2tCdXR0b25JbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW5mb0ljb24pO1xuICAgICAgbmV3SW5mb1Rhc2tCdXR0b25JbWFnZS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhcl9pY29uXCIpO1xuICAgICAgbmV3SW5mb1Rhc2tCdXR0b24uYXBwZW5kQ2hpbGQobmV3SW5mb1Rhc2tCdXR0b25JbWFnZSk7XG5cbiAgICAgIGNvbnN0IG5ld1JlbW92ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgbmV3UmVtb3ZlVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlX3Rhc2tfYnV0dG9uXCIpO1xuICAgICAgbmV3UmVtb3ZlVGFza0J1dHRvbi5pbm5lckhUTUwgPSBcIiYjeDI3MTY7XCI7XG4gICAgICBuZXdUYXNrQnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdSZW1vdmVUYXNrQnV0dG9uKTtcbiAgICAgIG5ld1JlbW92ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYXBwQm9hcmQucmVtb3ZlVGFzayh0YXNrLnVuaXF1ZUlEKTtcbiAgICAgICAgZGlzcGxheVRhc2tzKHByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4geyBkaXNwbGF5UHJvamVjdHMsIGRpc3BsYXlUYXNrcyB9O1xufVxuIiwiaW1wb3J0IHsgYXBwQm9hcmQsIGRvbUNyZWF0b3IgfSBmcm9tIFwiLi4vaW5kZXguanNcIjtcbmltcG9ydCB7IFByb2plY3QsIFByb2plY3RzTm90VG9SZW1vdmUgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tzLmpzXCI7XG5cbmltcG9ydCBhcHBQcm9qZWN0SWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9hZGRfZm9sZGVyX2ljb24ucG5nXCI7XG5cbmltcG9ydCB7IGZvcm1hdCwgZGlmZmVyZW5jZUluRGF5cywgc3RhcnRPZkRheSwgZW5kT2ZEYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEZvcm1zQ3JlYXRvcigpIHtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9jb250YWluZXJcIik7XG5cbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheV9mb3JfZm9ybVwiKTtcbiAgY29uc3QgZm9ybXNNYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3Jtc19tYWluX2NvbnRhaW5lclwiKTtcbiAgY29uc3QgaW5mb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0udGFza19pbmZvXCIpO1xuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS5mb3JtX3Rhc2tcIik7XG4gIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS5mb3JtX2VkaXRfdGFza1wiKTtcbiAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0uZm9ybV9wcm9qZWN0XCIpO1xuICBjb25zdCBjb25maXJtRGVsZXRlUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmZvcm0uY29uZmlybV9kZWxldGVfcHJvamVjdFwiXG4gICk7XG5cbiAgY29uc3Qgc3VibWl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCJmb3JtLmZvcm1fcHJvamVjdCBidXR0b24uZm9ybV9zdWJtaXRcIlxuICApO1xuICBjb25zdCBzdWJtaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcImZvcm0uZm9ybV90YXNrIGJ1dHRvbi5mb3JtX3N1Ym1pdFwiXG4gICk7XG4gIGNvbnN0IHN1Ym1pdEVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcImZvcm0uZm9ybV9lZGl0X3Rhc2sgYnV0dG9uLmZvcm1fc3VibWl0XCJcbiAgKTtcblxuICBjb25zdCBzdWJtaXRDb25maXJtRGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCJmb3JtLmNvbmZpcm1fZGVsZXRlX3Byb2plY3QgYnV0dG9uLmZvcm1fc3VibWl0XCJcbiAgKTtcblxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdEZvcm1FdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRfcHJvamVjdF9idXR0b25cIik7XG4gICAgY29uc3QgY2xvc2VQcm9qZWN0Rm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcImZvcm0uZm9ybV9wcm9qZWN0IC5jbG9zZV9mb3JtX2J1dHRvblwiXG4gICAgKTtcblxuICAgIGFkZFByb2plY3RCdXR0b24uaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGFkZFByb2plY3RCdXR0b25JbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJhZGQgcHJvamVjdFwiKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGFwcFByb2plY3RJY29uKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uSW1hZ2UuY2xhc3NMaXN0LmFkZChcInNpZGViYXJfaWNvblwiKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b25JbWFnZSk7XG5cbiAgICBmdW5jdGlvbiBvcGVuUHJvamVjdEZvcm0oKSB7XG4gICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgcHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0I2Zvcm1fcHJvamVjdF90aXRsZVwiKS5mb2N1cygpO1xuICAgICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC53aGljaCA9PT0gMTMpIHtcbiAgICAgICAgICBwcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmZvcm1fc3VibWl0XCIpLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9zZVByb2plY3RGb3JtKCkge1xuICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBvcGVuUHJvamVjdEZvcm0oKTtcbiAgICB9KTtcbiAgICBjbG9zZVByb2plY3RGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgfSk7XG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xvc2VQcm9qZWN0Rm9ybSgpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gc3VibWl0UHJvamVjdChldmVudCkge1xuICAgICAgZnVuY3Rpb24gY2xlYXJQcm9qZWN0Rm9ybUZpZWxkcygpIHtcbiAgICAgICAgdGl0bGVGcm9tUHJvamVjdEZvcm0udmFsdWUgPSBcIlwiO1xuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCB0aXRsZUZyb21Qcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiI2Zvcm1fcHJvamVjdF90aXRsZVwiXG4gICAgICApO1xuXG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdCh0aXRsZUZyb21Qcm9qZWN0Rm9ybS52YWx1ZSk7XG5cbiAgICAgIGFwcEJvYXJkLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICBkb21DcmVhdG9yLmRpc3BsYXlQcm9qZWN0cygpO1xuICAgICAgZG9tQ3JlYXRvci5kaXNwbGF5VGFza3MobmV3UHJvamVjdCk7XG5cbiAgICAgIGNsZWFyUHJvamVjdEZvcm1GaWVsZHMoKTtcbiAgICB9XG5cbiAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgcHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0I2Zvcm1fcHJvamVjdF90aXRsZVwiKS52YWx1ZSA9PSBmYWxzZVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHN1Ym1pdFByb2plY3QoZXZlbnQpO1xuICAgICAgY2xvc2VQcm9qZWN0Rm9ybSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIGZ1bmN0aW9uIGFkZFRhc2tGb3JtRXZlbnRMaXN0ZW5lcnMocHJvamVjdCwgYWRkVGFza0J1dHRvbikge1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3Q7XG4gICAgY29uc3QgY2xvc2VUYXNrRm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcImZvcm0uZm9ybV90YXNrIC5jbG9zZV9mb3JtX2J1dHRvblwiXG4gICAgKTtcbiAgICBmdW5jdGlvbiBvcGVuVGFza0Zvcm0oKSB7XG4gICAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgdGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0I2Zvcm1fdGFza190aXRsZVwiKS5mb2N1cygpO1xuICAgICAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC53aGljaCA9PT0gMTMpIHtcbiAgICAgICAgICB0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmZvcm1fc3VibWl0XCIpLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9zZVRhc2tGb3JtKCkge1xuICAgICAgdGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgb3BlblRhc2tGb3JtKCk7XG4gICAgfSk7XG4gICAgY2xvc2VUYXNrRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xvc2VUYXNrRm9ybSgpO1xuICAgIH0pO1xuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNsb3NlVGFza0Zvcm0oKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHN1Ym1pdFRhc2soZXZlbnQpIHtcbiAgICAgIGZ1bmN0aW9uIGNsZWFyVGFza0Zvcm1GaWVsZHMoKSB7XG4gICAgICAgIHRpdGxlRnJvbVRhc2tGb3JtLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGVzY3JpcHRpb25Gcm9tVGFza0Zvcm0udmFsdWUgPSBcIlwiO1xuICAgICAgICBkYXRlRnJvbVRhc2tGb3JtLnZhbHVlID0gXCJcIjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB0aXRsZUZyb21UYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybV90YXNrX3RpdGxlXCIpO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb25Gcm9tVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIiNmb3JtX3Rhc2tfZGVzY3JpcHRpb25cIlxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGVGcm9tVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1fdGFza19kYXRlXCIpO1xuXG4gICAgICBjb25zdCBuZXdUYXNrID0gVGFzayhcbiAgICAgICAgdGl0bGVGcm9tVGFza0Zvcm0udmFsdWUsXG4gICAgICAgIHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0TmFtZVxuICAgICAgKTtcbiAgICAgIGlmIChkZXNjcmlwdGlvbkZyb21UYXNrRm9ybS52YWx1ZSAhPSBmYWxzZSkge1xuICAgICAgICBuZXdUYXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25Gcm9tVGFza0Zvcm0udmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAoZGF0ZUZyb21UYXNrRm9ybS52YWx1ZSAhPSBmYWxzZSkge1xuICAgICAgICBuZXdUYXNrLmR1ZURhdGUgPSBkYXRlRnJvbVRhc2tGb3JtLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICBzZWxlY3RlZFByb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcblxuICAgICAgY2xlYXJUYXNrRm9ybUZpZWxkcygpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgLy8gSU1QT1JUQU5UOiBkbyBub3QgZGVsZXRlIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9IGZyb20gdGhlIGV2ZW50TGlzdGVuZXIhXG4gICAgc3VibWl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZm9ybV90YXNrX3RpdGxlXCIpLnZhbHVlID09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN1Ym1pdFRhc2soZXZlbnQpO1xuICAgICAgICBkb21DcmVhdG9yLmRpc3BsYXlUYXNrcyhwcm9qZWN0KTtcbiAgICAgICAgY2xvc2VUYXNrRm9ybSgpO1xuXG4gICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgIH0sXG4gICAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxuICAgICk7XG5cbiAgICBvcGVuVGFza0Zvcm0oKTtcbiAgfVxuXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICBmdW5jdGlvbiBlZGl0VGFza0Zvcm1FdmVudExpc3RlbmVycyhwcm9qZWN0LCB0YXNrLCBlZGl0VGFza0J1dHRvbikge1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3Q7XG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gdGFzaztcbiAgICBjb25zdCBjbG9zZVRhc2tGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiZm9ybS5mb3JtX2VkaXRfdGFzayAuY2xvc2VfZm9ybV9idXR0b25cIlxuICAgICk7XG4gICAgZnVuY3Rpb24gb3BlblRhc2tGb3JtKCkge1xuICAgICAgZWRpdFRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBlZGl0VGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0I2Zvcm1fZWRpdF90YXNrX3RpdGxlXCIpLmZvY3VzKCk7XG4gICAgICBlZGl0VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC53aGljaCA9PT0gMTMpIHtcbiAgICAgICAgICBlZGl0VGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5mb3JtX2VkaXRfc3VibWl0XCIpLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aXRsZUZyb21FZGl0VGFza0Zvcm0udmFsdWUgPSBzZWxlY3RlZFRhc2sudGl0bGU7XG4gICAgICBkZXNjcmlwdGlvbkZyb21FZGl0VGFza0Zvcm0udmFsdWUgPSBzZWxlY3RlZFRhc2suZGVzY3JpcHRpb247XG4gICAgICBpZiAoc2VsZWN0ZWRUYXNrLmR1ZURhdGUgIT09IFwiXCIpIHtcbiAgICAgICAgZGF0ZUZyb21FZGl0VGFza0Zvcm0udmFsdWUgPSBzZWxlY3RlZFRhc2suZHVlRGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2codGFzayk7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xvc2VUYXNrRm9ybSgpIHtcbiAgICAgIGVkaXRUYXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgICBlZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgb3BlblRhc2tGb3JtKCk7XG4gICAgfSk7XG4gICAgY2xvc2VUYXNrRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xvc2VUYXNrRm9ybSgpO1xuICAgIH0pO1xuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNsb3NlVGFza0Zvcm0oKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRpdGxlRnJvbUVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiNmb3JtX2VkaXRfdGFza190aXRsZVwiXG4gICAgKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkZyb21FZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjZm9ybV9lZGl0X3Rhc2tfZGVzY3JpcHRpb25cIlxuICAgICk7XG5cbiAgICBjb25zdCBkYXRlRnJvbUVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybV9lZGl0X3Rhc2tfZGF0ZVwiKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkVGFzayk7XG4gICAgLy8gY29uc29sZS5sb2codGl0bGVGcm9tRWRpdFRhc2tGb3JtLnZhbHVlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkZXNjcmlwdGlvbkZyb21FZGl0VGFza0Zvcm0udmFsdWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGVGcm9tRWRpdFRhc2tGb3JtLnZhbHVlKTtcblxuICAgIGNvbnN0IHN1Ym1pdEVkaXRUYXNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBmdW5jdGlvbiBjbGVhclRhc2tGb3JtRmllbGRzKCkge1xuICAgICAgICB0aXRsZUZyb21FZGl0VGFza0Zvcm0udmFsdWUgPSBcIlwiO1xuICAgICAgICBkZXNjcmlwdGlvbkZyb21FZGl0VGFza0Zvcm0udmFsdWUgPSBcIlwiO1xuICAgICAgICBkYXRlRnJvbUVkaXRUYXNrRm9ybS52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgICB0YXNrLnRpdGxlID0gdGl0bGVGcm9tRWRpdFRhc2tGb3JtLnZhbHVlO1xuICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uRnJvbUVkaXRUYXNrRm9ybS52YWx1ZTtcbiAgICAgIHRhc2suZHVlRGF0ZSA9IGRhdGVGcm9tRWRpdFRhc2tGb3JtLnZhbHVlO1xuXG4gICAgICBpZiAoZGVzY3JpcHRpb25Gcm9tRWRpdFRhc2tGb3JtLnZhbHVlICE9IGZhbHNlKSB7XG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbkZyb21FZGl0VGFza0Zvcm0udmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gXCJcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGVGcm9tRWRpdFRhc2tGb3JtLnZhbHVlICE9IGZhbHNlKSB7XG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IGRhdGVGcm9tRWRpdFRhc2tGb3JtLnZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFzay5kdWVEYXRlID0gXCJcIjtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNsZWFyVGFza0Zvcm1GaWVsZHMoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAvLyBJTVBPUlRBTlQ6IGRvIG5vdCBkZWxldGUgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH0gZnJvbSB0aGUgZXZlbnRMaXN0ZW5lciFcbiAgICBzdWJtaXRFZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBlZGl0VGFza0Zvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0I2Zvcm1fZWRpdF90YXNrX3RpdGxlXCIpLnZhbHVlID09XG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN1Ym1pdEVkaXRUYXNrKGV2ZW50KTtcbiAgICAgICAgZG9tQ3JlYXRvci5kaXNwbGF5VGFza3MocHJvamVjdCk7XG4gICAgICAgIGNsb3NlVGFza0Zvcm0oKTtcblxuICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICB9LFxuICAgICAgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH1cbiAgICApO1xuXG4gICAgb3BlblRhc2tGb3JtKCk7XG4gIH1cblxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgZnVuY3Rpb24gYWRkVGFza0luZm9FdmVudExpc3RlbmVycyhvcGVuSW5mb0J1dHRvbiwgdGFzaykge1xuICAgIGNvbnN0IHNlbGVjdGVkVGFzayA9IHRhc2s7XG4gICAgY29uc3QgaW5mb1RpdGxlRmllbGQgPSBpbmZvRm9ybS5xdWVyeVNlbGVjdG9yKFwiLmZpbGxfdGFza19pbmZvX3RpdGxlXCIpO1xuICAgIGNvbnN0IGluZm9EZXNjcmlwdGlvbkZpZWxkID0gaW5mb0Zvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmZpbGxfdGFza19pbmZvX2Rlc2NyaXB0aW9uXCJcbiAgICApO1xuICAgIGNvbnN0IGluZm9EdWVEYXRlRmllbGQgPSBpbmZvRm9ybS5xdWVyeVNlbGVjdG9yKFwiLmZpbGxfdGFza19pbmZvX2R1ZWRhdGVcIik7XG4gICAgY29uc3QgaW5mb0ltcG9ydGFuY2VGaWVsZCA9IGluZm9Gb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5maWxsX3Rhc2tfaW5mb19pbXBvcnRhbmNlXCJcbiAgICApO1xuICAgIGNvbnN0IGluZm9Qcm9qZWN0RmllbGQgPSBpbmZvRm9ybS5xdWVyeVNlbGVjdG9yKFwiLmZpbGxfdGFza19pbmZvX3Byb2plY3RcIik7XG5cbiAgICBjb25zdCBjbG9zZUluZm9Gb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiZm9ybS50YXNrX2luZm8gLmNsb3NlX2Zvcm1fYnV0dG9uXCJcbiAgICApO1xuXG4gICAgZnVuY3Rpb24gc2V0VGFza0luZm9GaWVsZHMoKSB7XG4gICAgICBpbmZvVGl0bGVGaWVsZC5pbm5lckhUTUwgPSBzZWxlY3RlZFRhc2sudGl0bGU7XG4gICAgICBpbmZvRGVzY3JpcHRpb25GaWVsZC5pbm5lckhUTUwgPSBzZWxlY3RlZFRhc2suZGVzY3JpcHRpb247XG5cbiAgICAgIGlmIChzZWxlY3RlZFRhc2suZHVlRGF0ZSA9PSBmYWxzZSkge1xuICAgICAgICBpbmZvRHVlRGF0ZUZpZWxkLmlubmVySFRNTCA9IFwibm90IHN0YXRlZFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mb0R1ZURhdGVGaWVsZC5pbm5lckhUTUwgPSBmb3JtYXQoXG4gICAgICAgICAgbmV3IERhdGUoc2VsZWN0ZWRUYXNrLmR1ZURhdGUpLFxuICAgICAgICAgIFwiTU1NTSBkZCwgeXl5eVwiXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGluZm9JbXBvcnRhbmNlRmllbGQuaW5uZXJIVE1MID0gc2VsZWN0ZWRUYXNrLmlzSW1wb3J0YW50XG4gICAgICAgID8gXCJIaWdoXCJcbiAgICAgICAgOiBcIk5vcm1hbFwiO1xuICAgICAgaW5mb1Byb2plY3RGaWVsZC5pbm5lckhUTUwgPSBzZWxlY3RlZFRhc2sucHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3BlbkluZm9Gb3JtKCkge1xuICAgICAgaW5mb0Zvcm0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xvc2VJbmZvRm9ybSgpIHtcbiAgICAgIGluZm9Gb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIG9wZW5JbmZvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBvcGVuSW5mb0Zvcm0oKTtcbiAgICAgIHNldFRhc2tJbmZvRmllbGRzKCk7XG4gICAgfSk7XG4gICAgY2xvc2VJbmZvRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xvc2VJbmZvRm9ybSgpO1xuICAgIH0pO1xuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNsb3NlSW5mb0Zvcm0oKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICBmdW5jdGlvbiBjb25maXJtRGVsZXRlUHJvamVjdEV2ZW50TGlzdGVuZXJzKFxuICAgIG9wZW5Db25maXJtRGVsZXRlUHJvamVjdEJ1dHRvbixcbiAgICBwcm9qZWN0XG4gICkge1xuICAgIGNvbnN0IGNsb3NlQ29uZmlybURlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCJmb3JtLmNvbmZpcm1fZGVsZXRlX3Byb2plY3QgLmNsb3NlX2Zvcm1fYnV0dG9uXCJcbiAgICApO1xuXG4gICAgZnVuY3Rpb24gb3BlbkNvbmZpcm1EZWxldGVQcm9qZWN0Rm9ybSgpIHtcbiAgICAgIGNvbmZpcm1EZWxldGVQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9zZUNvbmZpcm1EZWxldGVQcm9qZWN0Rm9ybSgpIHtcbiAgICAgIGNvbmZpcm1EZWxldGVQcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgICBvcGVuQ29uZmlybURlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG9wZW5Db25maXJtRGVsZXRlUHJvamVjdEZvcm0oKTtcbiAgICB9KTtcbiAgICBjbG9zZUNvbmZpcm1EZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjbG9zZUNvbmZpcm1EZWxldGVQcm9qZWN0Rm9ybSgpO1xuICAgIH0pO1xuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNsb3NlQ29uZmlybURlbGV0ZVByb2plY3RGb3JtKCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzdWJtaXREZWxldGVQcm9qZWN0UmVxdWVzdCgpIHtcbiAgICAgIGxldCBwcm9qZWN0SW5kZXggPSBvcGVuQ29uZmlybURlbGV0ZVByb2plY3RCdXR0b24uZGF0YXNldC5wcm9qZWN0SW5kZXg7XG4gICAgICBhcHBCb2FyZC5yZW1vdmVQcm9qZWN0KHByb2plY3RJbmRleCk7XG4gICAgfVxuXG4gICAgc3VibWl0Q29uZmlybURlbGV0ZVByb2plY3RCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgc3VibWl0RGVsZXRlUHJvamVjdFJlcXVlc3QoKTtcblxuICAgICAgZG9tQ3JlYXRvci5kaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgIGNsb3NlQ29uZmlybURlbGV0ZVByb2plY3RGb3JtKCk7XG4gICAgfTtcblxuICAgIG9wZW5Db25maXJtRGVsZXRlUHJvamVjdEZvcm0oKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkUHJvamVjdEZvcm1FdmVudExpc3RlbmVycyxcbiAgICBhZGRUYXNrRm9ybUV2ZW50TGlzdGVuZXJzLFxuICAgIGVkaXRUYXNrRm9ybUV2ZW50TGlzdGVuZXJzLFxuICAgIGFkZFRhc2tJbmZvRXZlbnRMaXN0ZW5lcnMsXG4gICAgY29uZmlybURlbGV0ZVByb2plY3RFdmVudExpc3RlbmVycyxcbiAgfTtcbn1cbiIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHsgYXBwQm9hcmQgfSBmcm9tIFwiLi4vaW5kZXguanNcIjtcblxuaW1wb3J0IHtcbiAgZm9ybWF0LFxuICBkaWZmZXJlbmNlSW5EYXlzLFxuICBzdGFydE9mRGF5LFxuICBlbmRPZkRheSxcbiAgc3RhcnRPZldlZWssXG4gIGFkZERheXMsXG59IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdHNOb3RUb1JlbW92ZSA9IFtcbiAgXCJUb2RheS9Ub21vcnJvd1wiLFxuICBcIk5leHQgNyBEYXlzXCIsXG4gIFwiTmV4dCAzMCBEYXlzXCIsXG4gIFwiSW1wb3J0YW50XCIsXG4gIFwiRXhwaXJlZFwiLFxuICBcIkFsbCBUYXNrc1wiLFxuICBcIkdlbmVyYWwgVGFza3NcIixcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0KHByb2plY3RfbmFtZSkge1xuICBsZXQgcHJvamVjdE5hbWUgPSBwcm9qZWN0X25hbWU7XG4gIGxldCBpc1Byb2plY3RDaGVja2VkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gc2V0UHJvamVjdE5hbWUobmV3X3Byb2plY3ROYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0TmFtZSA9IG5ld19wcm9qZWN0TmFtZTtcbiAgfVxuXG4gIGxldCB0YXNrc0xpc3QgPSBbXTtcblxuICBmdW5jdGlvbiBhZGRUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzTGlzdC5wdXNoKHRhc2spO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZVRhc2soaW5kZXhfdG9fcmVtb3ZlLCBuZXdfdGFzaykge1xuICAgIHRoaXMudGFza3NMaXN0LnNwbGljZShpbmRleF90b19yZW1vdmUsIDEsIG5ld190YXNrKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdE5hbWUsXG4gICAgdGFza3NMaXN0LFxuICAgIGlzUHJvamVjdENoZWNrZWQsXG4gICAgYWRkVGFzayxcbiAgICByZXBsYWNlVGFzayxcbiAgICBzZXRQcm9qZWN0TmFtZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRlc3RQcm9qZWN0cygpIHtcbiAgaWYgKGFwcEJvYXJkLnByb2plY3RzTGlzdC5sZW5ndGggIT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGdXR1cmVFdmVudERhdGUoZGF5c19sYXRlcikge1xuICAgIGNvbnN0IHN0YXJ0T2ZDdXJyZW50V2VlayA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pOyAvLyBBc3N1bWluZyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vla1xuXG4gICAgY29uc3QgZnV0dXJlRGF0ZSA9IGZvcm1hdChcbiAgICAgIGFkZERheXMoc3RhcnRPZkN1cnJlbnRXZWVrLCBkYXlzX2xhdGVyKSxcbiAgICAgIFwieXl5eS1NTS1kZFwiXG4gICAgKTtcblxuICAgIHJldHVybiBmdXR1cmVEYXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNEYXRlUGFzdChkYXRlKSB7XG4gICAgLy9kYXRlIGluIFwieXl5eS1NTS1kZFwiIGZvcm1hdCBhcyBpbnB1dFxuXG4gICAgbGV0IGRheXNCZXR3ZWVuID0gZGlmZmVyZW5jZUluRGF5cyhuZXcgRGF0ZShkYXRlKSwgbmV3IERhdGUoKSk7XG4gICAgcmV0dXJuIGRheXNCZXR3ZWVuIDwgMCA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8vYWRkaW5nIGRlZmF1bHQgcHJvamVjdHNcbiAgUHJvamVjdHNOb3RUb1JlbW92ZS5mb3JFYWNoKCh0aXRsZSkgPT4ge1xuICAgIGFwcEJvYXJkLmFkZFByb2plY3QoUHJvamVjdCh0aXRsZSkpO1xuICB9KTtcblxuICAvL2FkZGluZyB0ZXN0IHByb2plY3RzXG4gIGFwcEJvYXJkLmFkZFByb2plY3QoUHJvamVjdChcIldvcmtcIikpO1xuICBhcHBCb2FyZC5hZGRQcm9qZWN0KFByb2plY3QoXCJHeW1cIikpO1xuICBhcHBCb2FyZC5hZGRQcm9qZWN0KFByb2plY3QoXCJCaXJ0aGRheXNcIikpO1xuICBhcHBCb2FyZC5hZGRQcm9qZWN0KFByb2plY3QoXCJDb2RpbmcgUHJvamVjdHNcIikpO1xuXG4gIGxldCB0ZXN0VGFza18xID0gVGFzayhcImNhbGwgeW91ciBwYXJlbnRzXCIsIFByb2plY3RzTm90VG9SZW1vdmVbNl0pO1xuICB0ZXN0VGFza18xLmRlc2NyaXB0aW9uID0gXCJ3aWUgZ2VodCdzP1wiO1xuICB0ZXN0VGFza18xLmR1ZURhdGUgPSBmb3JtYXQobmV3IERhdGUoKSwgXCJ5eXl5LU1NLWRkXCIpO1xuICB0ZXN0VGFza18xLnVuaXF1ZUlEID0gMTA7XG4gIGFwcEJvYXJkLnByb2plY3RzTGlzdFs2XS5hZGRUYXNrKHRlc3RUYXNrXzEpO1xuXG4gIGxldCB0ZXN0VGFza18yID0gVGFzayhcImNhciBtYWludGVuYW5jZVwiLCBQcm9qZWN0c05vdFRvUmVtb3ZlWzZdKTtcbiAgdGVzdFRhc2tfMi5kZXNjcmlwdGlvbiA9IFwid2VpcmQgbm9pc2UgZnJvbSB0aGUgZ2Vhci4uXCI7XG4gIHRlc3RUYXNrXzIuZHVlRGF0ZSA9IGdldEZ1dHVyZUV2ZW50RGF0ZSgxOSk7XG4gIHRlc3RUYXNrXzIuaXNJbXBvcnRhbnQgPSB0cnVlO1xuICB0ZXN0VGFza18yLnVuaXF1ZUlEID0gMjA7XG4gIGFwcEJvYXJkLnByb2plY3RzTGlzdFs2XS5hZGRUYXNrKHRlc3RUYXNrXzIpO1xuXG4gIGxldCB0ZXN0VGFza18zID0gVGFzayhcIk9yZ2FuaXNlIGVtZXJnZW5jeSBwcm9jZWR1cmVzXCIsIFwiV29ya1wiKTtcbiAgdGVzdFRhc2tfMy5kZXNjcmlwdGlvbiA9IFwiQWlycGxhbmUgZW1lcmdlbmN5IHByb2NlZHVyZXNcIjtcbiAgdGVzdFRhc2tfMy5kdWVEYXRlID0gZ2V0RnV0dXJlRXZlbnREYXRlKDMpO1xuICB0ZXN0VGFza18zLmlzVGFza0NoZWNrZWQgPSBpc0RhdGVQYXN0KHRlc3RUYXNrXzMuZHVlRGF0ZSkgPyB0cnVlIDogZmFsc2U7XG4gIHRlc3RUYXNrXzMudW5pcXVlSUQgPSAzMDtcbiAgYXBwQm9hcmQucHJvamVjdHNMaXN0WzddLmFkZFRhc2sodGVzdFRhc2tfMyk7XG5cbiAgbGV0IHRlc3RUYXNrXzQgPSBUYXNrKFwiTWVldGluZyB3aXRoIHRoZSBDVE9cIiwgXCJXb3JrXCIpO1xuICB0ZXN0VGFza180LmRlc2NyaXB0aW9uID0gXCJNZWRpY2FsIGRldmljZSBjb3N0cyBhcmUgaW5jcmVhc2luZ1wiO1xuICB0ZXN0VGFza180LmR1ZURhdGUgPSBnZXRGdXR1cmVFdmVudERhdGUoNCk7XG4gIHRlc3RUYXNrXzQuaXNUYXNrQ2hlY2tlZCA9IGlzRGF0ZVBhc3QodGVzdFRhc2tfNC5kdWVEYXRlKSA/IHRydWUgOiBmYWxzZTtcbiAgdGVzdFRhc2tfNC5pc0ltcG9ydGFudCA9IHRydWU7XG4gIHRlc3RUYXNrXzQudW5pcXVlSUQgPSA0MDtcbiAgYXBwQm9hcmQucHJvamVjdHNMaXN0WzddLmFkZFRhc2sodGVzdFRhc2tfNCk7XG5cbiAgbGV0IHRlc3RUYXNrXzUgPSBUYXNrKFwiVGVhbSBNZWV0aW5nXCIsIFwiV29ya1wiKTtcbiAgdGVzdFRhc2tfNS5kZXNjcmlwdGlvbiA9IFwid2Vla2x5IHRlYW0gbWVldGluZ1wiO1xuICB0ZXN0VGFza181LmR1ZURhdGUgPSBnZXRGdXR1cmVFdmVudERhdGUoNCk7XG4gIHRlc3RUYXNrXzUuaXNUYXNrQ2hlY2tlZCA9IGlzRGF0ZVBhc3QodGVzdFRhc2tfNS5kdWVEYXRlKSA/IHRydWUgOiBmYWxzZTtcbiAgdGVzdFRhc2tfNS51bmlxdWVJRCA9IDUwO1xuICBhcHBCb2FyZC5wcm9qZWN0c0xpc3RbN10uYWRkVGFzayh0ZXN0VGFza181KTtcblxuICBsZXQgdGVzdFRhc2tfNiA9IFRhc2soXCJDaGVzdCBEYXlcIiwgXCJHeW1cIik7XG4gIHRlc3RUYXNrXzYuZGVzY3JpcHRpb24gPSBcIkludGVybmF0aW9uYWwgQ2hlc3QgZGF5XCI7XG4gIHRlc3RUYXNrXzYuZHVlRGF0ZSA9IGdldEZ1dHVyZUV2ZW50RGF0ZSgwKTtcbiAgdGVzdFRhc2tfNi5pc1Rhc2tDaGVja2VkID0gaXNEYXRlUGFzdCh0ZXN0VGFza182LmR1ZURhdGUpID8gdHJ1ZSA6IGZhbHNlO1xuICB0ZXN0VGFza182LnVuaXF1ZUlEID0gNjA7XG4gIGFwcEJvYXJkLnByb2plY3RzTGlzdFs4XS5hZGRUYXNrKHRlc3RUYXNrXzYpO1xuXG4gIGxldCB0ZXN0VGFza183ID0gVGFzayhcIkFybSBEYXlcIiwgXCJHeW1cIik7XG4gIHRlc3RUYXNrXzcuZGVzY3JpcHRpb24gPSBcIndvcmtpbmcgb24gdGhvc2UgZ3Vuc1wiO1xuICB0ZXN0VGFza183LmR1ZURhdGUgPSBnZXRGdXR1cmVFdmVudERhdGUoMik7XG4gIHRlc3RUYXNrXzcuaXNUYXNrQ2hlY2tlZCA9IGlzRGF0ZVBhc3QodGVzdFRhc2tfNy5kdWVEYXRlKSA/IHRydWUgOiBmYWxzZTtcbiAgdGVzdFRhc2tfNy5pc0ltcG9ydGFudCA9IHRydWU7XG4gIHRlc3RUYXNrXzcudW5pcXVlSUQgPSA3MDtcbiAgYXBwQm9hcmQucHJvamVjdHNMaXN0WzhdLmFkZFRhc2sodGVzdFRhc2tfNyk7XG5cbiAgbGV0IHRlc3RUYXNrXzggPSBUYXNrKFwiQ2hlc3QgYW5kIEFybSBEYXlcIiwgXCJHeW1cIik7XG4gIHRlc3RUYXNrXzguZGVzY3JpcHRpb24gPSBcImJyb29vXCI7XG4gIHRlc3RUYXNrXzguZHVlRGF0ZSA9IGdldEZ1dHVyZUV2ZW50RGF0ZSg0KTtcbiAgdGVzdFRhc2tfOC5pc1Rhc2tDaGVja2VkID0gaXNEYXRlUGFzdCh0ZXN0VGFza184LmR1ZURhdGUpID8gdHJ1ZSA6IGZhbHNlO1xuICB0ZXN0VGFza184LnVuaXF1ZUlEID0gODA7XG4gIGFwcEJvYXJkLnByb2plY3RzTGlzdFs4XS5hZGRUYXNrKHRlc3RUYXNrXzgpO1xuXG4gIGxldCB0ZXN0VGFza185ID0gVGFzayhcIkJyb3RoZXIgYmlydGhkYXlcIiwgXCJCaXJ0aGRheXNcIik7XG4gIHRlc3RUYXNrXzkuZGVzY3JpcHRpb24gPSBcImJyb29vXCI7XG4gIHRlc3RUYXNrXzkuZHVlRGF0ZSA9IFwiMjAyNC0wMS0yNlwiO1xuICB0ZXN0VGFza185LnVuaXF1ZUlEID0gOTA7XG4gIGFwcEJvYXJkLnByb2plY3RzTGlzdFs5XS5hZGRUYXNrKHRlc3RUYXNrXzkpO1xuXG4gIGxldCB0ZXN0VGFza18xMCA9IFRhc2soXCJNb20gYmlydGhkYXlcIiwgXCJCaXJ0aGRheXNcIik7XG4gIHRlc3RUYXNrXzEwLmRlc2NyaXB0aW9uID0gXCJ5ZWVleVwiO1xuICB0ZXN0VGFza18xMC5kdWVEYXRlID0gXCIyMDI0LTAzLTE4XCI7XG4gIHRlc3RUYXNrXzEwLnVuaXF1ZUlEID0gMTAwO1xuICBhcHBCb2FyZC5wcm9qZWN0c0xpc3RbOV0uYWRkVGFzayh0ZXN0VGFza18xMCk7XG5cbiAgbGV0IHRlc3RUYXNrXzExID0gVGFzayhcIkRhZCBiaXJ0aGRheVwiLCBcIkJpcnRoZGF5c1wiKTtcbiAgdGVzdFRhc2tfMTEuZGVzY3JpcHRpb24gPSBcInl1YWFheVwiO1xuICB0ZXN0VGFza18xMS5kdWVEYXRlID0gXCIyMDI0LTAyLTEzXCI7XG4gIHRlc3RUYXNrXzExLnVuaXF1ZUlEID0gMTEwO1xuICBhcHBCb2FyZC5wcm9qZWN0c0xpc3RbOV0uYWRkVGFzayh0ZXN0VGFza18xMSk7XG5cbiAgbGV0IHRlc3RUYXNrXzEyID0gVGFzayhcIldlYXRoZXIgQXBwXCIsIFwiQ29kaW5nIFByb2plY3RzXCIpO1xuICB0ZXN0VGFza18xMi5kZXNjcmlwdGlvbiA9IFwid29ya2luZyB3aXRoIEFQSXNcIjtcbiAgdGVzdFRhc2tfMTIuZHVlRGF0ZSA9IGdldEZ1dHVyZUV2ZW50RGF0ZSgyNyk7XG4gIHRlc3RUYXNrXzEyLnVuaXF1ZUlEID0gMTIwO1xuICBhcHBCb2FyZC5wcm9qZWN0c0xpc3RbMTBdLmFkZFRhc2sodGVzdFRhc2tfMTIpO1xuXG4gIGxldCB0ZXN0VGFza18xMyA9IFRhc2soXCJUbyBEbyBBcHBcIiwgXCJDb2RpbmcgUHJvamVjdHNcIik7XG4gIHRlc3RUYXNrXzEzLmRlc2NyaXB0aW9uID0gXCJodHRwczovL2JlcmtnaXJnaW4uZ2l0aHViLmlvL1RvX0RvX0FwcC9cIjtcbiAgdGVzdFRhc2tfMTMuZHVlRGF0ZSA9IFwiMjAyMy0wMy0yNlwiO1xuICB0ZXN0VGFza18xMy5pc0ltcG9ydGFudCA9IHRydWU7XG4gIHRlc3RUYXNrXzEzLmlzVGFza0NoZWNrZWQgPSB0cnVlO1xuICB0ZXN0VGFza18xMy51bmlxdWVJRCA9IDEzMDtcbiAgYXBwQm9hcmQucHJvamVjdHNMaXN0WzEwXS5hZGRUYXNrKHRlc3RUYXNrXzEzKTtcblxuICBsZXQgdGVzdFRhc2tfMTQgPSBUYXNrKFwiQ29ubmVjdCBGb3VyIEdhbWVcIiwgXCJDb2RpbmcgUHJvamVjdHNcIik7XG4gIHRlc3RUYXNrXzE0LmRlc2NyaXB0aW9uID0gXCJodHRwczovL2JlcmtnaXJnaW4uZ2l0aHViLmlvL0Nvbm5lY3QtRm91ci9cIjtcbiAgdGVzdFRhc2tfMTQuZHVlRGF0ZSA9IFwiMjAyMy0wMy0xMlwiO1xuICB0ZXN0VGFza18xNC5pc1Rhc2tDaGVja2VkID0gdHJ1ZTtcbiAgdGVzdFRhc2tfMTQudW5pcXVlSUQgPSAxNDA7XG4gIGFwcEJvYXJkLnByb2plY3RzTGlzdFsxMF0uYWRkVGFzayh0ZXN0VGFza18xNCk7XG59XG4iLCJpbXBvcnQge1xuICBjb21wYXJlQXNjLFxuICBmb3JtYXQsXG4gIGRpZmZlcmVuY2VJbkRheXMsXG4gIHN0YXJ0T2ZEYXksXG4gIGVuZE9mRGF5LFxufSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFRhc2soYXJnX3RpdGxlLCBhcmdfcHJvamVjdF9uYW1lKSB7XG4gIGxldCB0aXRsZSA9IGFyZ190aXRsZTtcbiAgbGV0IHByb2plY3ROYW1lID0gYXJnX3Byb2plY3RfbmFtZTtcblxuICBsZXQgdW5pcXVlSUQgPSBEYXRlLm5vdygpO1xuICBsZXQgZGVzY3JpcHRpb24gPSBcIlwiO1xuICBsZXQgZHVlRGF0ZSA9IFwiXCI7XG4gIGxldCBpc0ltcG9ydGFudCA9IGZhbHNlOyAvL2J5IGRlZmF1bHQgdGFza3MgaGF2ZSBub3JtYWwgcHJpb3JpdHlcbiAgbGV0IGlzVGFza0NoZWNrZWQgPSBmYWxzZTsgLy9ieSBkZWZhdWx0IHRhc2tzIGFyZSBub3QgZG9uZVxuXG4gIGZ1bmN0aW9uIGdldERheXNMZWZ0KHRhc2spIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRvZGF5U3RhcnQgPSBzdGFydE9mRGF5KG5vdyk7XG4gICAgY29uc3QgZHVlRGF0ZVN0ciA9IHRhc2suZHVlRGF0ZTtcbiAgICBsZXQgZGF5c0JldHdlZW47XG5cbiAgICBpZiAoZHVlRGF0ZVN0ciA9PSBcIlwiKSB7XG4gICAgICBkYXlzQmV0d2VlbiA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGRheXNCZXR3ZWVuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gc3RhcnRPZkRheShuZXcgRGF0ZShkdWVEYXRlU3RyKSk7XG4gICAgZGF5c0JldHdlZW4gPSBkaWZmZXJlbmNlSW5EYXlzKHRhc2tEdWVEYXRlLCB0b2RheVN0YXJ0KTtcblxuICAgIHJldHVybiBkYXlzQmV0d2VlbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERheXNMZWZ0U3RhdHVzKCkge1xuICAgIC8vcmV0dXJucyBhIHN0cmluZyBtZXNzYWdlXG4gICAgbGV0IHN0YXR1c01lc3NhZ2UgPSBcIlwiO1xuICAgIGNvbnN0IGRheXNCZXR3ZWVuID0gZ2V0RGF5c0xlZnQodGhpcyk7XG5cbiAgICBpZiAoZGF5c0JldHdlZW4gPCAwKSB7XG4gICAgICBzdGF0dXNNZXNzYWdlID0gYCR7LWRheXNCZXR3ZWVufSBkYXlzIGFnb2A7XG4gICAgfSBlbHNlIGlmIChkYXlzQmV0d2VlbiA9PT0gMCkge1xuICAgICAgc3RhdHVzTWVzc2FnZSA9IFwidG9kYXlcIjtcbiAgICB9IGVsc2UgaWYgKGRheXNCZXR3ZWVuID09PSAxKSB7XG4gICAgICBzdGF0dXNNZXNzYWdlID0gYGluICR7ZGF5c0JldHdlZW59IGRheWA7XG4gICAgfSBlbHNlIGlmIChkYXlzQmV0d2VlbiA+IDEpIHtcbiAgICAgIHN0YXR1c01lc3NhZ2UgPSBgaW4gJHtkYXlzQmV0d2Vlbn0gZGF5c2A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXR1c01lc3NhZ2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDbGFzc0ZvckR1ZWRhdGUoKSB7XG4gICAgbGV0IHN0YXR1c0NsYXNzID0gXCJcIjtcbiAgICBjb25zdCBkYXlzQmV0d2VlbiA9IGdldERheXNMZWZ0KHRoaXMpO1xuXG4gICAgaWYgKGRheXNCZXR3ZWVuIDwgMCkge1xuICAgICAgc3RhdHVzQ2xhc3MgPSBcImR1ZV9kYXRlX2V4cGlyeV9sZXZlbF8wXCI7XG4gICAgfSBlbHNlIGlmIChkYXlzQmV0d2VlbiA9PT0gMCB8fCBkYXlzQmV0d2VlbiA9PT0gMSkge1xuICAgICAgc3RhdHVzQ2xhc3MgPSBcImR1ZV9kYXRlX2V4cGlyeV9sZXZlbF8xXCI7XG4gICAgfSBlbHNlIGlmIChkYXlzQmV0d2VlbiA+PSAyICYmIGRheXNCZXR3ZWVuIDw9IDcpIHtcbiAgICAgIHN0YXR1c0NsYXNzID0gXCJkdWVfZGF0ZV9leHBpcnlfbGV2ZWxfMlwiO1xuICAgIH0gZWxzZSBpZiAoZGF5c0JldHdlZW4gPiA3ICYmIGRheXNCZXR3ZWVuIDw9IDMxKSB7XG4gICAgICBzdGF0dXNDbGFzcyA9IFwiZHVlX2RhdGVfZXhwaXJ5X2xldmVsXzNcIjtcbiAgICB9IGVsc2UgaWYgKGRheXNCZXR3ZWVuID4gMzEgfHwgZGF5c0JldHdlZW4gPT0gZmFsc2UpIHtcbiAgICAgIHN0YXR1c0NsYXNzID0gXCJkdWVfZGF0ZV9leHBpcnlfbGV2ZWxfNFwiO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0dXNDbGFzcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdERhdGVTdHJpbmcoKSB7XG4gICAgLy9mb3JtYXQgaXQgZm9yIGRpc3BsYXlUYXNrcyBmdW5jdGlvblxuICAgIGxldCBkYXRlU3RyID0gdGhpcy5kdWVEYXRlO1xuICAgIGxldCBkYXRlT3JpZ2luYWxGb3JtYXQgPSBuZXcgRGF0ZShkYXRlU3RyKTtcblxuICAgIGlmIChkYXRlU3RyID09PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdChkYXRlT3JpZ2luYWxGb3JtYXQsIFwiZGQuTU0ueXl5eVwiKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgcHJvamVjdE5hbWUsXG4gICAgdW5pcXVlSUQsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBpc0ltcG9ydGFudCxcbiAgICBpc1Rhc2tDaGVja2VkLFxuICAgIGdldERheXNMZWZ0U3RhdHVzLFxuICAgIGdldENsYXNzRm9yRHVlZGF0ZSxcbiAgICBmb3JtYXREYXRlU3RyaW5nLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9