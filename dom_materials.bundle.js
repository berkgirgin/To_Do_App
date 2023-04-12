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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --background-color: #181a1b;\n  --font_color_white: #e8e6e3;\n  color: var(--font_color_white);\n  font-size: 1.3rem;\n  --main_container_gap: 1rem;\n  --add_button_blue_background: #009de7;\n  --add_button_blue_background_ligther: #42c3ff;\n  --header-background-color: #1e3a8a;\n  --hover-color-default: #d6d3d1;\n  --border_color_grey: #858585;\n  --border_radius: 10px;\n  --min-width-dueDate: 5.5rem;\n  --form_border: 2px var(--border_color_grey) solid;\n\n  --dark-grey: #333333;\n  --old-yellow: #feffcf;\n  --old-yellow-lighter: #ffffe0;\n  --old-yellow-darker: #f8e999;\n\n  --default-text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff,\n    0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;\n\n  --sidebar-box-shadow: 0 2px 5px hsla(0, 0%, 0%, 0.4), inset 0 1px 0 #ccc,\n    inset 1px 0 0 #aaa, inset 0 -1px 0 #ccc, inset -1px 0 0 #aaa,\n    inset 0 2px 0 #c6c6c6, inset 2px 0 0 #a6a6a6, inset 0 -2px 0 #c6c6c6,\n    inset -2px 0 0 #a6a6a6, inset 0 3px 0 #c0c0c0, inset 3px 0 0 #a0a0a0,\n    inset 0 -3px 0 #c0c0c0, inset -3px 0 0 #a0a0a0, inset 0 4px 0 #b9b9b9,\n    inset 4px 0 0 #999, inset 0 -4px 0 #b9b9b9, inset -4px 0 0 #999,\n    inset 0 5px 0 #b6b6b6, inset 5px 0 0 #969696, inset 0 -5px 0 #b6b6b6,\n    inset -5px 0 0 #969696, inset 0 6px 0 #b0b0b0, inset 6px 0 0 #909090,\n    inset 0 -6px 0 #b0b0b0, inset -6px 0 0 #909090, inset 0 7px 0 #a9a9a9,\n    inset 7px 0 0 #898989, inset 0 -7px 0 #a9a9a9, inset -7px 0 0 #898989,\n    inset 0 8px 0 #a6a6a6, inset 8px 0 0 #868686, inset 0 -8px 0 #a6a6a6,\n    inset -8px 0 0 #868686, inset 0 9px 0 #a0a0a0, inset 9px 0 0 #808080,\n    inset 0 -9px 0 #a0a0a0, inset -9px 0 0 #808080, inset 0 10px 0 #888,\n    inset 10px 0 0 #666, inset 0 -10px 0 #888, inset -10px 0 0 #666,\n    inset 0 0 10px 10px hsla(0, 0%, 0%, 0.5);\n}\n\nbody {\n  background-color: var(--font_color_white);\n\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n  font: 1rem sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n\n  /* box-shadow: var(--sidebar-box-shadow);\n  border: 1px solid;\n  border-color: #bbb #999; */\n}\n\n/* ************** */\n/* Main Container */\n/* ************** */\n\n.main_container {\n  min-height: 100vh;\n\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 5rem auto 1.5rem;\n  grid-template-areas:\n    \"sidebar header\"\n    \"sidebar main\"\n    \"footer footer\";\n  /* gap: var(--main_container_gap); */\n  /* border: 8px yellow solid; */\n}\n.main_container > .header_main_container,\n.main_container > .side_bar_main_container,\n.main_container > .content_main_container {\n  /* padding: 1,5rem; */\n}\n.header_main_container {\n  grid-area: header;\n}\n.side_bar_main_container {\n  grid-area: sidebar;\n}\n.content_main_container {\n  grid-area: main;\n}\nfooter {\n  grid-area: footer;\n}\n\nbutton {\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: var(--border_radius);\n  font-size: 1.2rem;\n  border: none;\n}\nbutton:hover {\n  transform: scale(1.2);\n}\n/* ************** */\n/* ************** */\n\n/* ****** */\n/* Header */\n/* ****** */\n.header_main_container {\n  color: black;\n  display: flex;\n  justify-content: space-between;\n\n  background-color: transparent;\n  padding: 1.5rem;\n}\n\n.header_main_container .header_left {\n  display: flex;\n}\n.header_main_container .header_icon {\n  height: 5rem;\n  align-self: center;\n  /* margin-bottom: -1rem; */\n  margin-top: 1rem;\n\n  /* padding-bottom: 0.5rem; */\n}\n\n.header_main_container h1 {\n  color: black;\n  margin: 0;\n  padding: 0;\n  font-family: fantasy;\n  margin-left: -2rem;\n}\n\n.header_main_container .clock {\n  height: 9rem;\n  width: 9rem;\n  border: 1px solid var(--dark-grey);\n  margin-right: 1rem;\n}\n\n/* ****** */\n/* ****** */\n\n/* ******* */\n/* Sidebar */\n/* ******* */\n\n.side_bar_main_container {\n  min-width: 250px;\n  padding: 1rem;\n\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  color: var(--dark-grey);\n  background-color: var(--old-yellow-lighter);\n}\n\n.sidebar_project_row .project_title_and_buttons {\n  display: flex;\n}\n.project_title_and_buttons > * {\n  display: flex;\n  /* justify-content: center; */\n  align-items: center;\n}\n.project_title_and_buttons .project {\n  flex: 1;\n}\n.project_title_and_buttons input {\n  flex: 1;\n}\n\n.sidebar_icon,\n.taskbar_icon {\n  height: 1rem;\n}\n.edit_task_icon {\n  margin-bottom: -0.2rem;\n  height: 1.2rem;\n}\n.title_icon {\n  height: 3rem;\n  margin-bottom: -0.3rem;\n}\n\n/* calendar */\n\n.calendar {\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n  font-size: 0.8rem;\n}\n\ntable {\n  background-color: var(--old-yellow-darker);\n  font-size: 0.7rem;\n  table-layout: fixed;\n  width: 100%;\n  color: var(--dark-grey);\n  margin-top: 0.1rem;\n\n  box-shadow: 1px 2px 4px #888888;\n}\n\ntable * {\n  text-align: center;\n}\n\ntable,\nth,\ntd {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\n\ntd {\n  /* width: 2.2rem;\n  height: 2rem; */\n}\n\n.calendar_day {\n  height: min-content;\n}\n\ntr.calendar_days {\n  font-weight: bold;\n}\n\n.calendar .today {\n  background-color: #b91c1c;\n  font-weight: bold;\n  box-shadow: inset 0 0 0 2px black;\n  color: black;\n}\n\n/* Home sidebar */\n.home_menu_container {\n  display: flex;\n  flex-direction: column;\n  /* border: 2px blue solid; */\n}\n\n.home_menu_title {\n  text-decoration: underline;\n  font-size: 1.1rem;\n  font-weight: bold;\n  margin-bottom: 0.7rem;\n}\n\n.home_menu {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.home_menu > *:hover {\n  background-color: var(--hover-color-default);\n}\n\n.delete_project_icon:hover {\n  /* filters to red*/\n  filter: invert(37%) sepia(93%) saturate(7471%) hue-rotate(356deg)\n    brightness(91%) contrast(135%);\n\n  /* filter to blue */\n  /* filter: invert(0.5) sepia(1) saturate(5) hue-rotate(175deg); */\n}\n\n/* Projects Menu Sidebar */\n.projects_menu_container {\n  display: flex;\n  flex-direction: column;\n  /* border: 2px blue solid; */\n}\n\n.projects_menu_title {\n  text-decoration: underline;\n  display: flex;\n  font-size: 1.1rem;\n  gap: 0.4rem;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n\n.projects_menu {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n}\n.projects_menu > *:hover {\n  background-color: var(--hover-color-default);\n}\n\n.projects_menu .sidebar_project_row:first-child {\n  margin-bottom: 0.5rem;\n  font-size: 1rem;\n}\n.projects_menu .sidebar_project_row:first-child.sidebar_icon {\n  height: 0.9rem;\n}\n\nbutton .add_task_button {\n  align-self: flex-end;\n}\n/* ******* */\n/* ******* */\n\n/* *************** */\n/* Project Display */\n/* *************** */\n\n.content_main_container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  margin-top: 0.6rem;\n  padding: 1.5rem;\n  background-color: transparent;\n\n  color: var(--dark-grey);\n}\n\n.display_projects {\n  /* border: 2px darkgoldenrod solid; */\n  padding: 1rem;\n  gap: 0.7rem;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.display_project_title {\n  /* display: flex;\n  justify-content: center;\n  align-items: center; */\n  /* margin: 0 auto; */\n  margin-left: 1rem;\n  align-self: flex-start;\n  border-bottom: 2px black solid;\n  /* text-decoration: underline; */\n\n  font-weight: bold;\n  font-size: 1.4rem;\n  /* padding-right: 5rem; */\n}\n/* .display_project_row {\n  border: 1px brown solid;\n  display: flex;\n  gap: 1rem;\n} */\n\n.container_for_single_task {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n\n  /* background-color: var(--old-yellow-lighter); */\n\n  padding: 0.5rem;\n  font-size: 0.8rem;\n\n  position: relative;\n  border-radius: 5px;\n  background: linear-gradient(\n    to right,\n    var(--old-yellow-lighter) 35%,\n    #fffbeb 100%\n  );\n  box-shadow: 1px 2px 1px -1px var(--dark-grey);\n  transition: all 400ms ease-in-out;\n  position: relative;\n}\n\n.container_for_single_task:before {\n  z-index: -1;\n  position: absolute;\n  content: \"\";\n  bottom: 13px;\n  right: 7px;\n  width: 25%;\n  top: 0;\n  box-shadow: 0 15px 10px var(--dark-grey);\n  transform: rotate(4deg);\n  transition: all 200ms ease-in-out;\n}\n\n.container_for_single_task:hover {\n  background: linear-gradient(\n    to right,\n    var(--old-yellow-darker) 0%,\n    var(--old-yellow-darker) 100%\n  );\n}\n\n.container_for_single_task:hover:before {\n  /* was for shadow */\n  transform: rotate(0deg);\n  bottom: 20px;\n  z-index: -10;\n}\n\n.circle {\n  border-radius: 50%;\n  box-shadow: inset 2px 2px 2px 0px rgba(0, 0, 0, 0.5),\n    inset 0 0 0 25px transparent;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 20px;\n  aspect-ratio: 1/1;\n}\n\n.container_for_single_task.checked {\n  text-decoration: line-through;\n  opacity: 0.5;\n  box-shadow: none;\n}\n.container_for_single_task.checked::before {\n  box-shadow: none;\n}\n\n.container_for_single_task_header {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n\n  font-size: 1rem;\n  font-weight: bolder;\n  /* padding-bottom: 0.2rem; */\n  margin-bottom: 0.5rem;\n  padding-left: 2rem;\n  /* margin-left: calc(var(--min-width-dueDate) + 0.8rem); */\n  /* border-bottom: var(--form_border); */\n  border-bottom: 2px var(--dark-grey) solid;\n}\n.container_for_single_task_header .task_due_date_day {\n  min-width: var(--min-width-dueDate);\n}\n.container_for_single_task_header .task_due_date {\n  min-width: var(--min-width-dueDate);\n}\n.container_for_single_task_header .task_title {\n  /* margin-left: 0.2rem; */\n}\n\n.container_for_single_task .task_title {\n  flex: 1;\n}\n\n.container_for_single_task .task_due_date_day {\n  min-width: var(--min-width-dueDate);\n  font-size: 0.9rem;\n  margin-right: -0.4rem;\n\n  /* color: red; */\n}\n.container_for_single_task .task_due_date {\n  min-width: var(--min-width-dueDate);\n  /* font-size: 0.9rem; */\n}\n.container_for_single_task .check_priority_button {\n  font-size: 1.3rem;\n}\n\n/* ************* */\n/* ************* */\n.container_for_single_task .due_date_expiry_level_0 {\n  /* expired tasks */\n  color: #450a0a;\n  text-shadow: #450a0a 0px 0px 5px;\n}\n.container_for_single_task .due_date_expiry_level_1 {\n  /* today's tasks */\n  color: #b91c1c;\n  text-shadow: #b91c1c 0px 0px 5px;\n}\n.container_for_single_task .due_date_expiry_level_2 {\n  /* this week's tasks */\n  color: #ca8a04;\n  text-shadow: #ca8a04 0px 0px 5px;\n}\n.container_for_single_task .due_date_expiry_level_3 {\n  /* tasks more than a week tasks */\n  color: #65a30d;\n  text-shadow: #65a30d 0px 0px 5px;\n}\n.container_for_single_task .due_date_expiry_level_4 {\n  /* tasks more than a week tasks */\n  color: #78716c;\n  text-shadow: #78716c 0px 0px 5px;\n}\n/* ************* */\n/* ************* */\n\n.container_for_single_task .remove_task_button {\n  margin-left: 0.6rem;\n}\n.container_for_single_task .remove_task_button:hover {\n  color: red;\n}\n\n.container_for_single_task .check_priority_button.checked {\n  color: #eab308;\n  /* text-shadow: #a16207 0px 0px 5px; */\n  text-shadow: 0 0 5px #fde68a, 0 0 10px #fbbf24;\n}\n/* *************** */\n/* *************** */\n\n/* *** */\n\n/* ***** */\n/* Forms */\n/* ***** */\n\n/* .forms_main_container {\n  display: flex;\n  gap: 2rem;\n} */\n\n.form {\n  border: var(--form_border);\n  background-color: var(--font_color_white);\n  color: var(--background-color);\n  font-size: 1rem;\n\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms;\n  border-radius: var(--border_radius);\n  z-index: 10;\n\n  width: 600px;\n  max-width: 80%;\n  height: 400px;\n  max-height: 80%;\n  padding: 40px 30px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 1.4rem;\n}\n\n.form.form_project,\n.form.confirm_delete_project {\n  height: 200px;\n}\n\n.form header {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: var(--form_border);\n  align-items: center;\n  font-size: 1.2rem;\n  font-weight: 600;\n  padding-bottom: 16px;\n}\n\n.form header button {\n  background-color: transparent;\n  color: var(--background-color);\n}\n\n.form .form_row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.form.task_info .form_row {\n  border-top: 2px var(--border_color_grey) dotted;\n  border-bottom: 2px var(--border_color_grey) dotted;\n  padding: 0.1rem;\n}\n.form .form_row > div {\n  font-size: 0.9rem;\n}\n\n.form button.form_submit {\n  align-self: center;\n  padding: 4px 12px;\n  margin-top: auto;\n  border-radius: var(--border_radius);\n  border: var(--form_border);\n  color: var(--background-color);\n  background-color: var(--font_color_white);\n  font-weight: 600;\n  font-size: 1rem;\n}\n.form button.form_submit:hover {\n  background-color: var(--hover-color-default);\n  transform: none;\n}\n\n/* for the Information Pop-up */\n.form .form_task_info_title,\n.form .form_task_info_description,\n.form .form_task_info_duedate,\n.form .form_task_info_importance,\n.form .form_task_info_project {\n  align-self: center;\n  width: 120px;\n}\n\n/* For add Project and Task Form Pop-ups */\n.form .form_project_title,\n.form .form_task_title,\n.form .form_task_description,\n.form .form_task_date {\n  align-self: center;\n  width: 120px;\n}\n.form .form_project_title {\n  width: 60px;\n}\n\n.form .form_edit_project_title,\n.form .form_edit_task_title,\n.form .form_edit_task_description,\n.form .form_edit_task_date {\n  align-self: center;\n  width: 120px;\n}\n.form .form_edit_project_title {\n  width: 60px;\n}\n\n.form input,\n.form textarea {\n  border-radius: var(--border_radius);\n  border: 2px var(--background-color) solid;\n  padding: 12px;\n  resize: none;\n}\n\n/* ***** */\n/* ***** */\n\n/* *** */\n\n/* setting up the pop-up overlay*/\n/* ************************** */\n.overlay_for_form {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  pointer-events: none;\n}\n.overlay_for_form.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.form.active {\n  transform: translate(-50%, -50%) scale(1);\n}\n/* ************************** */\n\n/* ****** */\n/* footer */\n/* ****** */\n\nfooter {\n  background-color: var(--background-color);\n  color: var(--font_color_white);\n  font-size: 0.8rem;\n\n  /* text-align: center; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* z-index: 2; */\n  /* text-shadow: none; */\n  margin-top: auto;\n}\n\nfooter img {\n  height: 1.5rem;\n  scale: 1.2;\n  padding: 0;\n}\n\nfooter img:hover {\n  transform: scale(1.1);\n}\n\n/* ****** */\n/* ****** */\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --background-color: #181a1b;\n  --font_color_white: #e8e6e3;\n  color: var(--font_color_white);\n  font-size: 1.3rem;\n  --main_container_gap: 1rem;\n  --add_button_blue_background: #009de7;\n  --add_button_blue_background_ligther: #42c3ff;\n  --header-background-color: #1e3a8a;\n  --hover-color-default: #d6d3d1;\n  --border_color_grey: #858585;\n  --border_radius: 10px;\n  --min-width-dueDate: 5.5rem;\n  --form_border: 2px var(--border_color_grey) solid;\n\n  --dark-grey: #333333;\n  --old-yellow: #feffcf;\n  --old-yellow-lighter: #ffffe0;\n  --old-yellow-darker: #f8e999;\n\n  --default-text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff,\n    0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;\n\n  --sidebar-box-shadow: 0 2px 5px hsla(0, 0%, 0%, 0.4), inset 0 1px 0 #ccc,\n    inset 1px 0 0 #aaa, inset 0 -1px 0 #ccc, inset -1px 0 0 #aaa,\n    inset 0 2px 0 #c6c6c6, inset 2px 0 0 #a6a6a6, inset 0 -2px 0 #c6c6c6,\n    inset -2px 0 0 #a6a6a6, inset 0 3px 0 #c0c0c0, inset 3px 0 0 #a0a0a0,\n    inset 0 -3px 0 #c0c0c0, inset -3px 0 0 #a0a0a0, inset 0 4px 0 #b9b9b9,\n    inset 4px 0 0 #999, inset 0 -4px 0 #b9b9b9, inset -4px 0 0 #999,\n    inset 0 5px 0 #b6b6b6, inset 5px 0 0 #969696, inset 0 -5px 0 #b6b6b6,\n    inset -5px 0 0 #969696, inset 0 6px 0 #b0b0b0, inset 6px 0 0 #909090,\n    inset 0 -6px 0 #b0b0b0, inset -6px 0 0 #909090, inset 0 7px 0 #a9a9a9,\n    inset 7px 0 0 #898989, inset 0 -7px 0 #a9a9a9, inset -7px 0 0 #898989,\n    inset 0 8px 0 #a6a6a6, inset 8px 0 0 #868686, inset 0 -8px 0 #a6a6a6,\n    inset -8px 0 0 #868686, inset 0 9px 0 #a0a0a0, inset 9px 0 0 #808080,\n    inset 0 -9px 0 #a0a0a0, inset -9px 0 0 #808080, inset 0 10px 0 #888,\n    inset 10px 0 0 #666, inset 0 -10px 0 #888, inset -10px 0 0 #666,\n    inset 0 0 10px 10px hsla(0, 0%, 0%, 0.5);\n}\n\nbody {\n  background-color: var(--font_color_white);\n\n  background-image: url(../assets/images/paper.png);\n  background-position: center;\n  background-size: cover;\n  font: 1rem sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n\n  /* box-shadow: var(--sidebar-box-shadow);\n  border: 1px solid;\n  border-color: #bbb #999; */\n}\n\n/* ************** */\n/* Main Container */\n/* ************** */\n\n.main_container {\n  min-height: 100vh;\n\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 5rem auto 1.5rem;\n  grid-template-areas:\n    \"sidebar header\"\n    \"sidebar main\"\n    \"footer footer\";\n  /* gap: var(--main_container_gap); */\n  /* border: 8px yellow solid; */\n}\n.main_container > .header_main_container,\n.main_container > .side_bar_main_container,\n.main_container > .content_main_container {\n  /* padding: 1,5rem; */\n}\n.header_main_container {\n  grid-area: header;\n}\n.side_bar_main_container {\n  grid-area: sidebar;\n}\n.content_main_container {\n  grid-area: main;\n}\nfooter {\n  grid-area: footer;\n}\n\nbutton {\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: var(--border_radius);\n  font-size: 1.2rem;\n  border: none;\n}\nbutton:hover {\n  transform: scale(1.2);\n}\n/* ************** */\n/* ************** */\n\n/* ****** */\n/* Header */\n/* ****** */\n.header_main_container {\n  color: black;\n  display: flex;\n  justify-content: space-between;\n\n  background-color: transparent;\n  padding: 1.5rem;\n}\n\n.header_main_container .header_left {\n  display: flex;\n}\n.header_main_container .header_icon {\n  height: 5rem;\n  align-self: center;\n  /* margin-bottom: -1rem; */\n  margin-top: 1rem;\n\n  /* padding-bottom: 0.5rem; */\n}\n\n.header_main_container h1 {\n  color: black;\n  margin: 0;\n  padding: 0;\n  font-family: fantasy;\n  margin-left: -2rem;\n}\n\n.header_main_container .clock {\n  height: 9rem;\n  width: 9rem;\n  border: 1px solid var(--dark-grey);\n  margin-right: 1rem;\n}\n\n/* ****** */\n/* ****** */\n\n/* ******* */\n/* Sidebar */\n/* ******* */\n\n.side_bar_main_container {\n  min-width: 250px;\n  padding: 1rem;\n\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  color: var(--dark-grey);\n  background-color: var(--old-yellow-lighter);\n}\n\n.sidebar_project_row .project_title_and_buttons {\n  display: flex;\n}\n.project_title_and_buttons > * {\n  display: flex;\n  /* justify-content: center; */\n  align-items: center;\n}\n.project_title_and_buttons .project {\n  flex: 1;\n}\n.project_title_and_buttons input {\n  flex: 1;\n}\n\n.sidebar_icon,\n.taskbar_icon {\n  height: 1rem;\n}\n.edit_task_icon {\n  margin-bottom: -0.2rem;\n  height: 1.2rem;\n}\n.title_icon {\n  height: 3rem;\n  margin-bottom: -0.3rem;\n}\n\n/* calendar */\n\n.calendar {\n  text-align: center;\n  vertical-align: middle;\n  font-weight: bold;\n  font-size: 0.8rem;\n}\n\ntable {\n  background-color: var(--old-yellow-darker);\n  font-size: 0.7rem;\n  table-layout: fixed;\n  width: 100%;\n  color: var(--dark-grey);\n  margin-top: 0.1rem;\n\n  box-shadow: 1px 2px 4px #888888;\n}\n\ntable * {\n  text-align: center;\n}\n\ntable,\nth,\ntd {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\n\ntd {\n  /* width: 2.2rem;\n  height: 2rem; */\n}\n\n.calendar_day {\n  height: min-content;\n}\n\ntr.calendar_days {\n  font-weight: bold;\n}\n\n.calendar .today {\n  background-color: #b91c1c;\n  font-weight: bold;\n  box-shadow: inset 0 0 0 2px black;\n  color: black;\n}\n\n/* Home sidebar */\n.home_menu_container {\n  display: flex;\n  flex-direction: column;\n  /* border: 2px blue solid; */\n}\n\n.home_menu_title {\n  text-decoration: underline;\n  font-size: 1.1rem;\n  font-weight: bold;\n  margin-bottom: 0.7rem;\n}\n\n.home_menu {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.home_menu > *:hover {\n  background-color: var(--hover-color-default);\n}\n\n.delete_project_icon:hover {\n  /* filters to red*/\n  filter: invert(37%) sepia(93%) saturate(7471%) hue-rotate(356deg)\n    brightness(91%) contrast(135%);\n\n  /* filter to blue */\n  /* filter: invert(0.5) sepia(1) saturate(5) hue-rotate(175deg); */\n}\n\n/* Projects Menu Sidebar */\n.projects_menu_container {\n  display: flex;\n  flex-direction: column;\n  /* border: 2px blue solid; */\n}\n\n.projects_menu_title {\n  text-decoration: underline;\n  display: flex;\n  font-size: 1.1rem;\n  gap: 0.4rem;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n\n.projects_menu {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n}\n.projects_menu > *:hover {\n  background-color: var(--hover-color-default);\n}\n\n.projects_menu .sidebar_project_row:first-child {\n  margin-bottom: 0.5rem;\n  font-size: 1rem;\n}\n.projects_menu .sidebar_project_row:first-child.sidebar_icon {\n  height: 0.9rem;\n}\n\nbutton .add_task_button {\n  align-self: flex-end;\n}\n/* ******* */\n/* ******* */\n\n/* *************** */\n/* Project Display */\n/* *************** */\n\n.content_main_container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  margin-top: 0.6rem;\n  padding: 1.5rem;\n  background-color: transparent;\n\n  color: var(--dark-grey);\n}\n\n.display_projects {\n  /* border: 2px darkgoldenrod solid; */\n  padding: 1rem;\n  gap: 0.7rem;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.display_project_title {\n  /* display: flex;\n  justify-content: center;\n  align-items: center; */\n  /* margin: 0 auto; */\n  margin-left: 1rem;\n  align-self: flex-start;\n  border-bottom: 2px black solid;\n  /* text-decoration: underline; */\n\n  font-weight: bold;\n  font-size: 1.4rem;\n  /* padding-right: 5rem; */\n}\n/* .display_project_row {\n  border: 1px brown solid;\n  display: flex;\n  gap: 1rem;\n} */\n\n.container_for_single_task {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n\n  /* background-color: var(--old-yellow-lighter); */\n\n  padding: 0.5rem;\n  font-size: 0.8rem;\n\n  position: relative;\n  border-radius: 5px;\n  background: linear-gradient(\n    to right,\n    var(--old-yellow-lighter) 35%,\n    #fffbeb 100%\n  );\n  box-shadow: 1px 2px 1px -1px var(--dark-grey);\n  transition: all 400ms ease-in-out;\n  position: relative;\n}\n\n.container_for_single_task:before {\n  z-index: -1;\n  position: absolute;\n  content: \"\";\n  bottom: 13px;\n  right: 7px;\n  width: 25%;\n  top: 0;\n  box-shadow: 0 15px 10px var(--dark-grey);\n  transform: rotate(4deg);\n  transition: all 200ms ease-in-out;\n}\n\n.container_for_single_task:hover {\n  background: linear-gradient(\n    to right,\n    var(--old-yellow-darker) 0%,\n    var(--old-yellow-darker) 100%\n  );\n}\n\n.container_for_single_task:hover:before {\n  /* was for shadow */\n  transform: rotate(0deg);\n  bottom: 20px;\n  z-index: -10;\n}\n\n.circle {\n  border-radius: 50%;\n  box-shadow: inset 2px 2px 2px 0px rgba(0, 0, 0, 0.5),\n    inset 0 0 0 25px transparent;\n  background-image: url(\"../assets/images/paper.png\");\n  height: 20px;\n  aspect-ratio: 1/1;\n}\n\n.container_for_single_task.checked {\n  text-decoration: line-through;\n  opacity: 0.5;\n  box-shadow: none;\n}\n.container_for_single_task.checked::before {\n  box-shadow: none;\n}\n\n.container_for_single_task_header {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n\n  font-size: 1rem;\n  font-weight: bolder;\n  /* padding-bottom: 0.2rem; */\n  margin-bottom: 0.5rem;\n  padding-left: 2rem;\n  /* margin-left: calc(var(--min-width-dueDate) + 0.8rem); */\n  /* border-bottom: var(--form_border); */\n  border-bottom: 2px var(--dark-grey) solid;\n}\n.container_for_single_task_header .task_due_date_day {\n  min-width: var(--min-width-dueDate);\n}\n.container_for_single_task_header .task_due_date {\n  min-width: var(--min-width-dueDate);\n}\n.container_for_single_task_header .task_title {\n  /* margin-left: 0.2rem; */\n}\n\n.container_for_single_task .task_title {\n  flex: 1;\n}\n\n.container_for_single_task .task_due_date_day {\n  min-width: var(--min-width-dueDate);\n  font-size: 0.9rem;\n  margin-right: -0.4rem;\n\n  /* color: red; */\n}\n.container_for_single_task .task_due_date {\n  min-width: var(--min-width-dueDate);\n  /* font-size: 0.9rem; */\n}\n.container_for_single_task .check_priority_button {\n  font-size: 1.3rem;\n}\n\n/* ************* */\n/* ************* */\n.container_for_single_task .due_date_expiry_level_0 {\n  /* expired tasks */\n  color: #450a0a;\n  text-shadow: #450a0a 0px 0px 5px;\n}\n.container_for_single_task .due_date_expiry_level_1 {\n  /* today's tasks */\n  color: #b91c1c;\n  text-shadow: #b91c1c 0px 0px 5px;\n}\n.container_for_single_task .due_date_expiry_level_2 {\n  /* this week's tasks */\n  color: #ca8a04;\n  text-shadow: #ca8a04 0px 0px 5px;\n}\n.container_for_single_task .due_date_expiry_level_3 {\n  /* tasks more than a week tasks */\n  color: #65a30d;\n  text-shadow: #65a30d 0px 0px 5px;\n}\n.container_for_single_task .due_date_expiry_level_4 {\n  /* tasks more than a week tasks */\n  color: #78716c;\n  text-shadow: #78716c 0px 0px 5px;\n}\n/* ************* */\n/* ************* */\n\n.container_for_single_task .remove_task_button {\n  margin-left: 0.6rem;\n}\n.container_for_single_task .remove_task_button:hover {\n  color: red;\n}\n\n.container_for_single_task .check_priority_button.checked {\n  color: #eab308;\n  /* text-shadow: #a16207 0px 0px 5px; */\n  text-shadow: 0 0 5px #fde68a, 0 0 10px #fbbf24;\n}\n/* *************** */\n/* *************** */\n\n/* *** */\n\n/* ***** */\n/* Forms */\n/* ***** */\n\n/* .forms_main_container {\n  display: flex;\n  gap: 2rem;\n} */\n\n.form {\n  border: var(--form_border);\n  background-color: var(--font_color_white);\n  color: var(--background-color);\n  font-size: 1rem;\n\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms;\n  border-radius: var(--border_radius);\n  z-index: 10;\n\n  width: 600px;\n  max-width: 80%;\n  height: 400px;\n  max-height: 80%;\n  padding: 40px 30px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 1.4rem;\n}\n\n.form.form_project,\n.form.confirm_delete_project {\n  height: 200px;\n}\n\n.form header {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: var(--form_border);\n  align-items: center;\n  font-size: 1.2rem;\n  font-weight: 600;\n  padding-bottom: 16px;\n}\n\n.form header button {\n  background-color: transparent;\n  color: var(--background-color);\n}\n\n.form .form_row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.form.task_info .form_row {\n  border-top: 2px var(--border_color_grey) dotted;\n  border-bottom: 2px var(--border_color_grey) dotted;\n  padding: 0.1rem;\n}\n.form .form_row > div {\n  font-size: 0.9rem;\n}\n\n.form button.form_submit {\n  align-self: center;\n  padding: 4px 12px;\n  margin-top: auto;\n  border-radius: var(--border_radius);\n  border: var(--form_border);\n  color: var(--background-color);\n  background-color: var(--font_color_white);\n  font-weight: 600;\n  font-size: 1rem;\n}\n.form button.form_submit:hover {\n  background-color: var(--hover-color-default);\n  transform: none;\n}\n\n/* for the Information Pop-up */\n.form .form_task_info_title,\n.form .form_task_info_description,\n.form .form_task_info_duedate,\n.form .form_task_info_importance,\n.form .form_task_info_project {\n  align-self: center;\n  width: 120px;\n}\n\n/* For add Project and Task Form Pop-ups */\n.form .form_project_title,\n.form .form_task_title,\n.form .form_task_description,\n.form .form_task_date {\n  align-self: center;\n  width: 120px;\n}\n.form .form_project_title {\n  width: 60px;\n}\n\n.form .form_edit_project_title,\n.form .form_edit_task_title,\n.form .form_edit_task_description,\n.form .form_edit_task_date {\n  align-self: center;\n  width: 120px;\n}\n.form .form_edit_project_title {\n  width: 60px;\n}\n\n.form input,\n.form textarea {\n  border-radius: var(--border_radius);\n  border: 2px var(--background-color) solid;\n  padding: 12px;\n  resize: none;\n}\n\n/* ***** */\n/* ***** */\n\n/* *** */\n\n/* setting up the pop-up overlay*/\n/* ************************** */\n.overlay_for_form {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  pointer-events: none;\n}\n.overlay_for_form.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.form.active {\n  transform: translate(-50%, -50%) scale(1);\n}\n/* ************************** */\n\n/* ****** */\n/* footer */\n/* ****** */\n\nfooter {\n  background-color: var(--background-color);\n  color: var(--font_color_white);\n  font-size: 0.8rem;\n\n  /* text-align: center; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* z-index: 2; */\n  /* text-shadow: none; */\n  margin-top: auto;\n}\n\nfooter img {\n  height: 1.5rem;\n  scale: 1.2;\n  padding: 0;\n}\n\nfooter img:hover {\n  transform: scale(1.1);\n}\n\n/* ****** */\n/* ****** */\n"],"sourceRoot":""}]);
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
    (0,_app_logic_js__WEBPACK_IMPORTED_MODULE_4__.taskListSorting)(project.tasksList);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLGFBQWEsV0FBVyxZQUFZLGFBQWEsUUFBUSxPQUFPLGFBQWEsYUFBYSxNQUFNLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sWUFBWSxjQUFjLFdBQVcsVUFBVSxVQUFVLEtBQUssVUFBVSxVQUFVLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxRQUFRLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLFVBQVUsV0FBVyxZQUFZLGFBQWEsY0FBYyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssTUFBTSxPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxNQUFNLFFBQVEsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLGNBQWMsV0FBVyxhQUFhLGFBQWEsYUFBYSxTQUFTLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxjQUFjLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1B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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNB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QUNULENBQUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEUsd0JBQXdCLDRDQUE0QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLGlFQUFpRTtBQUNwRixXQUFXLGVBQWU7QUFDMUIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLGFBQWEsUUFBUTtBQUNyQixZQUFZLFdBQVc7QUFDdkIsWUFBWSxZQUFZO0FBQ3hCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVk7QUFDeEIsWUFBWSxZQUFZO0FBQ3hCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVkseUdBQXlHO0FBQ2pJLFlBQVksWUFBWSxxR0FBcUc7QUFDN0gsWUFBWSxZQUFZLCtHQUErRztBQUN2SSxZQUFZLFlBQVksaUhBQWlIO0FBQ3pJLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQSxFQUFFLHNFQUFZO0FBQ2Q7QUFDQSx1QkFBdUIsK0VBQWlCO0FBQ3hDLG1PQUFtTyxtRUFBYTtBQUNoUCw4QkFBOEIsbUVBQVMscTVCQUFxNUI7O0FBRTU3QjtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLG1FQUFTLG8zQkFBbzNCOztBQUVsNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDREQUFNOztBQUUzQixPQUFPLDZEQUFPO0FBQ2Q7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7O0FBR0EsdUJBQXVCLHlGQUErQjtBQUN0RCxnQkFBZ0IscUVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQiwyRUFBYztBQUN4QztBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsdUVBQVU7O0FBRTlCO0FBQ0EsOEZBQThGLHdGQUF3QjtBQUN0SCxRQUFRLG1GQUFtQjtBQUMzQjs7QUFFQSwrRkFBK0YseUZBQXlCO0FBQ3hILFFBQVEsbUZBQW1CO0FBQzNCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDamFBLHdCQUF3QiwyQkFBMkIsMkVBQTJFLGtDQUFrQyx3QkFBd0IsT0FBTyxrQ0FBa0MsbUlBQW1JOztBQUUzUztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDd0M7QUFDQTtBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZOztBQUVkLE9BQU8sNERBQU07QUFDYjtBQUNBOztBQUVBLGFBQWEsNERBQU07QUFDbkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsd0ZBQXdGOztBQUV4RjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0NlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKLHlDQUF5QyxPQUFPO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7QUN2RjRDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPLE9BQU8sTUFBTTtBQUMvQixXQUFXLE9BQU8sT0FBTyxNQUFNO0FBQy9CLGFBQWEsTUFBTSxJQUFJLE1BQU07QUFDN0IsWUFBWSxNQUFNLElBQUksTUFBTTtBQUM1QjtBQUNBO0FBQ0EsUUFBUSwyRUFBaUI7QUFDekI7QUFDQTtBQUNBLEdBQUc7QUFDSCxRQUFRLDJFQUFpQjtBQUN6QjtBQUNBO0FBQ0EsR0FBRztBQUNILFlBQVksMkVBQWlCO0FBQzdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ2pDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7O0FDYndDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8seUVBQWU7QUFDdEI7QUFDQTtBQUNBLEdBQUc7QUFDSCxXQUFXLHlFQUFlO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsU0FBUyx5RUFBZTtBQUN4QjtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8seUVBQWU7QUFDdEI7QUFDQTtBQUNBLEdBQUc7QUFDSCxhQUFhLHlFQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pKd0M7QUFDYztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkVBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxzRUFBWTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxXQUFXLHNFQUFZO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMsc0VBQVk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxzRUFBWTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxhQUFhLHNFQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHd0M7QUFDUjtBQUNRO0FBQ1o7QUFDTjs7QUFFMUM7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvRUFBYztBQUNoQyxjQUFjLGdFQUFVO0FBQ3hCLGtCQUFrQixvRUFBYztBQUNoQyxZQUFZLDhEQUFRO0FBQ3BCLFNBQVMsMkRBQUs7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Qm1CO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ3QztBQUNXO0FBQ007QUFDVztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUSxpRUFBaUU7QUFDcEYsV0FBVyxlQUFlO0FBQzFCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkIsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsaUJBQWlCO0FBQ2xGO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQSxFQUFFLHNFQUFZO0FBQ2QsdUJBQXVCLCtFQUFpQjtBQUN4QyxxQkFBcUIsbUVBQVMsMjJCQUEyMkI7O0FBRXo0QjtBQUNBO0FBQ0E7O0FBRUEsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakQwRDtBQUNEO0FBQ047QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsZUFBZSxtRUFBUztBQUN4QixTQUFTLHFFQUFlO0FBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkEsd0JBQXdCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLHdCQUF3QixPQUFPLGtDQUFrQyxtSUFBbUk7O0FBRTNTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsME9BQTBPOztBQUUxTztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiNkI7QUFDQTs7QUFFYTtBQUtYO0FBQ3NCO0FBQ0g7QUFDQTtBQUNQOztBQUVwQyxpQkFBaUIsK0RBQVE7QUFDekIsbUJBQW1CLGtFQUFVO0FBQzdCLG9CQUFvQiwrREFBWTs7QUFFdkM7QUFDQSx3REFBSzs7QUFFTCx3RUFBa0IsSUFBSTs7QUFFdEI7QUFDQTtBQUNBLG1EQUFtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJVO0FBQzNCO0FBQ007O0FBRXdCO0FBQ3pCOztBQUVoQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQSw2QkFBNkIsb0RBQWdCOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0Msd0NBQXdDLGlEQUFPOztBQUUvQyxvQkFBb0Isc0NBQXNDO0FBQzFEO0FBQ0EsWUFBWSwyQ0FBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsOEJBQThCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUixpQkFBaUIsb0VBQTBCLE1BQU0seUJBQXlCO0FBQzFFO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsb0RBQVU7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLG9EQUFVO0FBQ3RDLDRCQUE0QixvREFBZ0I7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLGlCQUFpQixvRUFBMEIsTUFBTSx5QkFBeUI7QUFDMUU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsb0RBQVU7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLG9EQUFVO0FBQ3RDLDRCQUE0QixvREFBZ0I7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLGlCQUFpQixvRUFBMEIsTUFBTSx5QkFBeUI7QUFDMUU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsb0RBQVU7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLG9EQUFVO0FBQ3RDLDRCQUE0QixvREFBZ0I7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLGlCQUFpQixvRUFBMEIsTUFBTSx5QkFBeUI7QUFDMUU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVIsaUJBQWlCLG9FQUEwQixNQUFNLHlCQUF5QjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsb0RBQVU7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLG9EQUFVO0FBQ3RDLDRCQUE0QixvREFBZ0I7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLGlCQUFpQixvRUFBMEIsTUFBTSx5QkFBeUI7QUFDMUU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqUmtDOztBQUUzQjtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0JBQStCO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4QkFBOEI7QUFDdEQ7O0FBRUE7QUFDQSxrQkFBa0IsaUNBQWlDO0FBQ25ELHdCQUF3QiwrQkFBK0I7QUFDdkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IseUJBQXlCO0FBQzNDOztBQUVBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLEVBQUUsb0RBQU0sK0JBQStCLE9BQU87QUFDN0U7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQ0FBb0MsYUFBYTtBQUNqRCxvQ0FBb0MsR0FBRztBQUN2QyxvQ0FBb0MsR0FBRzs7QUFFdkM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNvRDtBQUNTO0FBQzNCO0FBQ2E7QUFDRTs7QUFFbUI7QUFDTzs7QUFFSDtBQUNPO0FBQ007QUFDRjs7QUFFNUI7O0FBRUU7QUFDYTtBQUNBOztBQUUvRDtBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDBFQUFtQzs7QUFFdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDREQUFjOztBQUVsQixJQUFJLG9FQUE2QjtBQUNqQyxNQUFNLDhEQUFlO0FBQ3JCLGNBQWMsb0VBQTBCO0FBQ3hDO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsRUFBRTtBQUNwRTs7QUFFQTtBQUNBO0FBQ0Esc0VBQXNFLEVBQUU7QUFDeEU7O0FBRUE7QUFDQSxrRUFBa0UsRUFBRTtBQUNwRTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELHFFQUFrQjtBQUN6RSxRQUFRO0FBQ1IsdURBQXVELHdFQUFxQjtBQUM1RSxRQUFRO0FBQ1IsdURBQXVELHdFQUFvQjtBQUMzRSxRQUFRO0FBQ1IsdURBQXVELGlFQUFlO0FBQ3RFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxFQUFFO0FBQ3pEOztBQUVBLGVBQWUsb0VBQTBCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBLGVBQWU7O0FBRWY7O0FBRUEsY0FBYywwRUFBbUM7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsb0VBQTBCO0FBQ3pDO0FBQ0EsOERBQThELEVBQUU7QUFDaEU7O0FBRUE7QUFDQSxVQUFVLHFGQUE4QztBQUN4RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlELGtFQUFVO0FBQzNELG1FQUFtRSxFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsb0VBQTBCO0FBQ3pDO0FBQ0E7QUFDQSwrREFBK0QsRUFBRTtBQUNqRTs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtELHlEQUFPO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDRFQUFxQztBQUMvQyxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw4REFBZTs7QUFFbkIsSUFBSSwwRUFBbUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsK0RBQXdCO0FBQzVDLDBCQUEwQix3RUFBaUM7QUFDM0Q7O0FBRUE7QUFDQSxvQkFBb0IsK0RBQXdCO0FBQzVDLDBCQUEwQiwrREFBd0I7QUFDbEQ7O0FBRUE7QUFDQSxvQkFBb0IsK0RBQXdCO0FBQzVDLDBCQUEwQixnRUFBeUI7QUFDbkQ7O0FBRUE7QUFDQSxvQkFBb0IsK0RBQXdCO0FBQzVDLDBCQUEwQixpRUFBMEI7QUFDcEQ7O0FBRUE7QUFDQSxvQkFBb0IsK0RBQXdCO0FBQzVDLDBCQUEwQiwrREFBd0I7QUFDbEQ7O0FBRUE7QUFDQSxvQkFBb0IsK0RBQXdCO0FBQzVDLDBCQUEwQix1RUFBZ0M7QUFDMUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLGlFQUFjO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtFQUFrRSxZQUFZO0FBQzlFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSw2RUFBc0M7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxpREFBaUQsaUVBQWM7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNEVBQXFDOztBQUUzQztBQUNBO0FBQ0EsaURBQWlELDBEQUFRO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0EsUUFBUSwwREFBbUI7QUFDM0I7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvV21EO0FBQ1U7QUFDM0I7O0FBRW1DOztBQUVLOztBQUVuRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsK0RBQWM7QUFDNUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIscURBQU87O0FBRWhDLE1BQU0sMERBQW1CO0FBQ3pCLE1BQU0saUVBQTBCO0FBQ2hDLE1BQU0sOERBQXVCOztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsK0NBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsNEJBQTRCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBdUI7QUFDL0I7O0FBRUE7QUFDQSxPQUFPO0FBQ1AsUUFBUTtBQUNSOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsNEJBQTRCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBdUI7QUFDL0I7O0FBRUE7QUFD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O0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0VBQWlDOztBQUVuQyxvQkFBb0IsNENBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0VBQWlDOztBQUVuQyxvQkFBb0IsNENBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdFQUFpQztBQUNuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0trQjs7QUFFWDtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBLHVCQUF1QixvREFBVTtBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixvREFBVTtBQUNsQyxrQkFBa0Isb0RBQWdCOztBQUVsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkMsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOLDRCQUE0QixhQUFhO0FBQ3pDLE1BQU07QUFDTiw0QkFBNEIsYUFBYTtBQUN6Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxvREFBTTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2FwcC8uL3NyYy9zdHlsZXMvY2xvY2suY3NzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vc3JjL3N0eWxlcy9jbG9jay5jc3M/M2IzYSIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9zcmMvc3R5bGVzL2luZGV4LmNzcz82MzQ5Iiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vc3JjL2phdmFzY3JpcHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vc3JjL2phdmFzY3JpcHQvbW9kdWxlcy9hcHBfbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vc3JjL2phdmFzY3JpcHQvbW9kdWxlcy9jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9zcmMvamF2YXNjcmlwdC9tb2R1bGVzL2Nsb2NrLmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL3NyYy9qYXZhc2NyaXB0L21vZHVsZXMvZG9tX21hdGVyaWFscy5qcyIsIndlYnBhY2s6Ly90b19kb19hcHAvLi9zcmMvamF2YXNjcmlwdC9tb2R1bGVzL2Zvcm1zLmpzIiwid2VicGFjazovL3RvX2RvX2FwcC8uL3NyYy9qYXZhc2NyaXB0L21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vc3JjL2phdmFzY3JpcHQvbW9kdWxlcy90YXNrcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9jbG9jay5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWlja3NhbmQ6d2dodEA1MDAmZGlzcGxheT1zd2FwXFxcIik7ICovXFxuXFxuLyogKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiAjMDkwOTA5O1xcbiAgYmFja2dyb3VuZDogIzA3MTQxYjtcXG59XFxuXFxuYm9keS5saWdodCB7XFxuICBiYWNrZ3JvdW5kOiAjZDFkYWUzO1xcbn0gKi9cXG5cXG4uY2xvY2sgKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNsb2NrIHtcXG4gIC8qIHdpZHRoOiAzNzVweDtcXG4gIGhlaWdodDogMzc1cHg7ICovXFxuICBoZWlnaHQ6IDlyZW07XFxuICB3aWR0aDogOXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2xkLXllbGxvdy1saWdodGVyKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXI6IDRweDtcXG4gIC8qIGJveC1zaGFkb3c6IDE1cHggMTVweCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgKi9cXG4gIGJveC1zaGFkb3c6IDBlbSAtMS4yZW0gMS4yZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KSxcXG4gICAgaW5zZXQgMGVtIC0xLjJlbSAxLjJlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpLFxcbiAgICAwZW0gMS4yZW0gMS4yZW0gcmdiYSgwLCAwLCAwLCAwLjMpLCBpbnNldCAwZW0gMS4yZW0gMS4yZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG5ib2R5LmxpZ2h0IC5jbG9jayB7XFxuICBib3gtc2hhZG93OiAwZW0gLTEuMmVtIDEuMmVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSxcXG4gICAgaW5zZXQgMWVtIDFlbSAtMWVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSxcXG4gICAgMGVtIC0xLjJlbSAtMS4yZW0gcmdiYSgwLCAwLCAwLCAwLjUpLCBpbnNldCAxZW0gLTFlbSAxZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4vKiBUaGUgc21hbGwgY2lyY2xlIGludCB0aGUgY2VudGVyICovXFxuLmNsb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgLyogYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpOyAqL1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gIC8qIFRoZSB6LWluZGV4IHByb3BlcnR5IHNwZWNpZmllcyB0aGUgc3RhY2sgb3JkZXIgb2YgYW4gZWxlbWVudC5cXG4gICAgLyogQW4gZWxlbWVudCB3aXRoIGdyZWF0ZXIgc3RhY2sgb3JkZXIgaXMgYWx3YXlzIGluIGZyb250IG9mIGFuIGVsZW1lbnQgd2l0aCBhIGxvd2VyIHN0YWNrIG9yZGVyLiAgKi9cXG4gIC8qIE5vdGU6IHotaW5kZXggb25seSB3b3JrcyBvbiBwb3NpdGlvbmVkIGVsZW1lbnRzIChwb3NpdGlvbjogYWJzb2x1dGUsIHBvc2l0aW9uOiByZWxhdGl2ZSwgcG9zaXRpb246IGZpeGVkLCBvciBwb3NpdGlvbjogc3RpY2t5KS4gKi9cXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgLyoga2VwdCBhcyBhIGhpZ2ggdmFsdWUsIHNpbmNlIHdhbnRlZCBhdCB0b3AgKi9cXG59XFxuXFxuYm9keS5saWdodCAuY2xvY2s6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6ICMxYTc0YmU7XFxufVxcblxcbi5jbG9jayAuaG91cixcXG4uY2xvY2sgLm1pbixcXG4uY2xvY2sgLnNlYyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi8qIGxlbmd0aCBvZiByZXNwZWN0aXZlIGFybXM7ICovXFxuLmNsb2NrIC5ob3VyLFxcbi5ociB7XFxuICB3aWR0aDogMTYwcHg7XFxuICBoZWlnaHQ6IDkwcHg7XFxufVxcblxcbi5jbG9jayAubWluLFxcbi5tbiB7XFxuICB3aWR0aDogMTkwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG4uY2xvY2sgLnNlYyxcXG4uc2Mge1xcbiAgd2lkdGg6IDIzMHB4O1xcbiAgaGVpZ2h0OiAxNDBweDtcXG59XFxuXFxuLmhyLFxcbi5tbixcXG4uc2Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmhyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA3cHg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgei1pbmRleDogMTA7XFxuICAvKiB6LWluZGV4IGxlYXN0ICovXFxuICBib3JkZXItcmFkaXVzOiAyLjhweDtcXG59XFxuXFxuLm1uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzLjVweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstZ3JleSk7XFxuICB6LWluZGV4OiAxMTtcXG4gIC8qIHotaW5kZXggbW9yZSB0aGFuIGhvdXIgaGFuZCAqL1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG5ib2R5LmxpZ2h0IC5tbjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogIzA5MTkyMTtcXG59XFxuXFxuLnNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBiYWNrZ3JvdW5kOiAjYjkxYzFjO1xcbiAgei1pbmRleDogMTI7XFxuICAvKiB6LWluZGV4IG1vcmUgdGhhbiBob3VyIG1pbnV0ZSBoYW5kICovXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi50b2dnbGVDbGFzcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDM1cHg7XFxuICByaWdodDogMTUwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIG1hcmdpbjogMnB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogI2QxZGFlMztcXG4gIGNvbG9yOiAjZDFkYWUzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2dnbGVDbGFzczpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIkxpZ2h0IE1vZGVcXFwiO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGxlZnQ6IDI1cHg7XFxufVxcblxcbmJvZHkubGlnaHQgLnRvZ2dsZUNsYXNzIHtcXG4gIGJhY2tncm91bmQ6ICMwOTE5MjE7XFxuICBjb2xvcjogIzA5MTkyMTtcXG4gIGNvbnRlbnQ6IFxcXCJEYXJrIE1vZGVcXFwiO1xcbn1cXG5cXG5ib2R5LmxpZ2h0IC50b2dnbGVDbGFzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkRhcmsgTW9kZVxcXCI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Nsb2NrLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw2RkFBNkY7O0FBRTdGOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRzs7QUFFSDtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7a0JBQ2dCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLG1EQUEyQztFQUMzQywyQ0FBMkM7RUFDM0Msc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCx5REFBeUQ7RUFDekQ7O2dGQUU4RTtFQUM5RSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTs7K0VBRTZFO0FBQy9FOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLGtCQUFrQjs7RUFFbEI7d0dBQ3NHO0VBQ3RHLG9JQUFvSTtFQUNwSSxjQUFjO0VBQ2QsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxrQkFBa0I7QUFDcEI7O0FBRUEsK0JBQStCO0FBQy9COztFQUVFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWlja3NhbmQ6d2dodEA1MDAmZGlzcGxheT1zd2FwXFxcIik7ICovXFxuXFxuLyogKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiAjMDkwOTA5O1xcbiAgYmFja2dyb3VuZDogIzA3MTQxYjtcXG59XFxuXFxuYm9keS5saWdodCB7XFxuICBiYWNrZ3JvdW5kOiAjZDFkYWUzO1xcbn0gKi9cXG5cXG4uY2xvY2sgKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNsb2NrIHtcXG4gIC8qIHdpZHRoOiAzNzVweDtcXG4gIGhlaWdodDogMzc1cHg7ICovXFxuICBoZWlnaHQ6IDlyZW07XFxuICB3aWR0aDogOXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9jbG9jay5wbmcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2xkLXllbGxvdy1saWdodGVyKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXI6IDRweDtcXG4gIC8qIGJveC1zaGFkb3c6IDE1cHggMTVweCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgKi9cXG4gIGJveC1zaGFkb3c6IDBlbSAtMS4yZW0gMS4yZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KSxcXG4gICAgaW5zZXQgMGVtIC0xLjJlbSAxLjJlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpLFxcbiAgICAwZW0gMS4yZW0gMS4yZW0gcmdiYSgwLCAwLCAwLCAwLjMpLCBpbnNldCAwZW0gMS4yZW0gMS4yZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG5ib2R5LmxpZ2h0IC5jbG9jayB7XFxuICBib3gtc2hhZG93OiAwZW0gLTEuMmVtIDEuMmVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSxcXG4gICAgaW5zZXQgMWVtIDFlbSAtMWVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSxcXG4gICAgMGVtIC0xLjJlbSAtMS4yZW0gcmdiYSgwLCAwLCAwLCAwLjUpLCBpbnNldCAxZW0gLTFlbSAxZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4vKiBUaGUgc21hbGwgY2lyY2xlIGludCB0aGUgY2VudGVyICovXFxuLmNsb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgLyogYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpOyAqL1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG4gIC8qIFRoZSB6LWluZGV4IHByb3BlcnR5IHNwZWNpZmllcyB0aGUgc3RhY2sgb3JkZXIgb2YgYW4gZWxlbWVudC5cXG4gICAgLyogQW4gZWxlbWVudCB3aXRoIGdyZWF0ZXIgc3RhY2sgb3JkZXIgaXMgYWx3YXlzIGluIGZyb250IG9mIGFuIGVsZW1lbnQgd2l0aCBhIGxvd2VyIHN0YWNrIG9yZGVyLiAgKi9cXG4gIC8qIE5vdGU6IHotaW5kZXggb25seSB3b3JrcyBvbiBwb3NpdGlvbmVkIGVsZW1lbnRzIChwb3NpdGlvbjogYWJzb2x1dGUsIHBvc2l0aW9uOiByZWxhdGl2ZSwgcG9zaXRpb246IGZpeGVkLCBvciBwb3NpdGlvbjogc3RpY2t5KS4gKi9cXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgLyoga2VwdCBhcyBhIGhpZ2ggdmFsdWUsIHNpbmNlIHdhbnRlZCBhdCB0b3AgKi9cXG59XFxuXFxuYm9keS5saWdodCAuY2xvY2s6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6ICMxYTc0YmU7XFxufVxcblxcbi5jbG9jayAuaG91cixcXG4uY2xvY2sgLm1pbixcXG4uY2xvY2sgLnNlYyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi8qIGxlbmd0aCBvZiByZXNwZWN0aXZlIGFybXM7ICovXFxuLmNsb2NrIC5ob3VyLFxcbi5ociB7XFxuICB3aWR0aDogMTYwcHg7XFxuICBoZWlnaHQ6IDkwcHg7XFxufVxcblxcbi5jbG9jayAubWluLFxcbi5tbiB7XFxuICB3aWR0aDogMTkwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG4uY2xvY2sgLnNlYyxcXG4uc2Mge1xcbiAgd2lkdGg6IDIzMHB4O1xcbiAgaGVpZ2h0OiAxNDBweDtcXG59XFxuXFxuLmhyLFxcbi5tbixcXG4uc2Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmhyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA3cHg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgei1pbmRleDogMTA7XFxuICAvKiB6LWluZGV4IGxlYXN0ICovXFxuICBib3JkZXItcmFkaXVzOiAyLjhweDtcXG59XFxuXFxuLm1uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzLjVweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstZ3JleSk7XFxuICB6LWluZGV4OiAxMTtcXG4gIC8qIHotaW5kZXggbW9yZSB0aGFuIGhvdXIgaGFuZCAqL1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG5ib2R5LmxpZ2h0IC5tbjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogIzA5MTkyMTtcXG59XFxuXFxuLnNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBiYWNrZ3JvdW5kOiAjYjkxYzFjO1xcbiAgei1pbmRleDogMTI7XFxuICAvKiB6LWluZGV4IG1vcmUgdGhhbiBob3VyIG1pbnV0ZSBoYW5kICovXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi50b2dnbGVDbGFzcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDM1cHg7XFxuICByaWdodDogMTUwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIG1hcmdpbjogMnB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogI2QxZGFlMztcXG4gIGNvbG9yOiAjZDFkYWUzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2dnbGVDbGFzczpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIkxpZ2h0IE1vZGVcXFwiO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGxlZnQ6IDI1cHg7XFxufVxcblxcbmJvZHkubGlnaHQgLnRvZ2dsZUNsYXNzIHtcXG4gIGJhY2tncm91bmQ6ICMwOTE5MjE7XFxuICBjb2xvcjogIzA5MTkyMTtcXG4gIGNvbnRlbnQ6IFxcXCJEYXJrIE1vZGVcXFwiO1xcbn1cXG5cXG5ib2R5LmxpZ2h0IC50b2dnbGVDbGFzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkRhcmsgTW9kZVxcXCI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvcGFwZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTFiO1xcbiAgLS1mb250X2NvbG9yX3doaXRlOiAjZThlNmUzO1xcbiAgY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICAtLW1haW5fY29udGFpbmVyX2dhcDogMXJlbTtcXG4gIC0tYWRkX2J1dHRvbl9ibHVlX2JhY2tncm91bmQ6ICMwMDlkZTc7XFxuICAtLWFkZF9idXR0b25fYmx1ZV9iYWNrZ3JvdW5kX2xpZ3RoZXI6ICM0MmMzZmY7XFxuICAtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUzYThhO1xcbiAgLS1ob3Zlci1jb2xvci1kZWZhdWx0OiAjZDZkM2QxO1xcbiAgLS1ib3JkZXJfY29sb3JfZ3JleTogIzg1ODU4NTtcXG4gIC0tYm9yZGVyX3JhZGl1czogMTBweDtcXG4gIC0tbWluLXdpZHRoLWR1ZURhdGU6IDUuNXJlbTtcXG4gIC0tZm9ybV9ib3JkZXI6IDJweCB2YXIoLS1ib3JkZXJfY29sb3JfZ3JleSkgc29saWQ7XFxuXFxuICAtLWRhcmstZ3JleTogIzMzMzMzMztcXG4gIC0tb2xkLXllbGxvdzogI2ZlZmZjZjtcXG4gIC0tb2xkLXllbGxvdy1saWdodGVyOiAjZmZmZmUwO1xcbiAgLS1vbGQteWVsbG93LWRhcmtlcjogI2Y4ZTk5OTtcXG5cXG4gIC0tZGVmYXVsdC10ZXh0LXNoYWRvdzogMCAwIDVweCAjZmZmLCAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLFxcbiAgICAwIDAgNDBweCAjMGZmLCAwIDAgODBweCAjMGZmLCAwIDAgOTBweCAjMGZmLCAwIDAgMTAwcHggIzBmZiwgMCAwIDE1MHB4ICMwZmY7XFxuXFxuICAtLXNpZGViYXItYm94LXNoYWRvdzogMCAycHggNXB4IGhzbGEoMCwgMCUsIDAlLCAwLjQpLCBpbnNldCAwIDFweCAwICNjY2MsXFxuICAgIGluc2V0IDFweCAwIDAgI2FhYSwgaW5zZXQgMCAtMXB4IDAgI2NjYywgaW5zZXQgLTFweCAwIDAgI2FhYSxcXG4gICAgaW5zZXQgMCAycHggMCAjYzZjNmM2LCBpbnNldCAycHggMCAwICNhNmE2YTYsIGluc2V0IDAgLTJweCAwICNjNmM2YzYsXFxuICAgIGluc2V0IC0ycHggMCAwICNhNmE2YTYsIGluc2V0IDAgM3B4IDAgI2MwYzBjMCwgaW5zZXQgM3B4IDAgMCAjYTBhMGEwLFxcbiAgICBpbnNldCAwIC0zcHggMCAjYzBjMGMwLCBpbnNldCAtM3B4IDAgMCAjYTBhMGEwLCBpbnNldCAwIDRweCAwICNiOWI5YjksXFxuICAgIGluc2V0IDRweCAwIDAgIzk5OSwgaW5zZXQgMCAtNHB4IDAgI2I5YjliOSwgaW5zZXQgLTRweCAwIDAgIzk5OSxcXG4gICAgaW5zZXQgMCA1cHggMCAjYjZiNmI2LCBpbnNldCA1cHggMCAwICM5Njk2OTYsIGluc2V0IDAgLTVweCAwICNiNmI2YjYsXFxuICAgIGluc2V0IC01cHggMCAwICM5Njk2OTYsIGluc2V0IDAgNnB4IDAgI2IwYjBiMCwgaW5zZXQgNnB4IDAgMCAjOTA5MDkwLFxcbiAgICBpbnNldCAwIC02cHggMCAjYjBiMGIwLCBpbnNldCAtNnB4IDAgMCAjOTA5MDkwLCBpbnNldCAwIDdweCAwICNhOWE5YTksXFxuICAgIGluc2V0IDdweCAwIDAgIzg5ODk4OSwgaW5zZXQgMCAtN3B4IDAgI2E5YTlhOSwgaW5zZXQgLTdweCAwIDAgIzg5ODk4OSxcXG4gICAgaW5zZXQgMCA4cHggMCAjYTZhNmE2LCBpbnNldCA4cHggMCAwICM4Njg2ODYsIGluc2V0IDAgLThweCAwICNhNmE2YTYsXFxuICAgIGluc2V0IC04cHggMCAwICM4Njg2ODYsIGluc2V0IDAgOXB4IDAgI2EwYTBhMCwgaW5zZXQgOXB4IDAgMCAjODA4MDgwLFxcbiAgICBpbnNldCAwIC05cHggMCAjYTBhMGEwLCBpbnNldCAtOXB4IDAgMCAjODA4MDgwLCBpbnNldCAwIDEwcHggMCAjODg4LFxcbiAgICBpbnNldCAxMHB4IDAgMCAjNjY2LCBpbnNldCAwIC0xMHB4IDAgIzg4OCwgaW5zZXQgLTEwcHggMCAwICM2NjYsXFxuICAgIGluc2V0IDAgMCAxMHB4IDEwcHggaHNsYSgwLCAwJSwgMCUsIDAuNSk7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udF9jb2xvcl93aGl0ZSk7XFxuXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGZvbnQ6IDFyZW0gc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAvKiBib3gtc2hhZG93OiB2YXIoLS1zaWRlYmFyLWJveC1zaGFkb3cpO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNiYmIgIzk5OTsgKi9cXG59XFxuXFxuLyogKioqKioqKioqKioqKiogKi9cXG4vKiBNYWluIENvbnRhaW5lciAqL1xcbi8qICoqKioqKioqKioqKioqICovXFxuXFxuLm1haW5fY29udGFpbmVyIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNXJlbSBhdXRvIDEuNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJzaWRlYmFyIGhlYWRlclxcXCJcXG4gICAgXFxcInNpZGViYXIgbWFpblxcXCJcXG4gICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcbiAgLyogZ2FwOiB2YXIoLS1tYWluX2NvbnRhaW5lcl9nYXApOyAqL1xcbiAgLyogYm9yZGVyOiA4cHggeWVsbG93IHNvbGlkOyAqL1xcbn1cXG4ubWFpbl9jb250YWluZXIgPiAuaGVhZGVyX21haW5fY29udGFpbmVyLFxcbi5tYWluX2NvbnRhaW5lciA+IC5zaWRlX2Jhcl9tYWluX2NvbnRhaW5lcixcXG4ubWFpbl9jb250YWluZXIgPiAuY29udGVudF9tYWluX2NvbnRhaW5lciB7XFxuICAvKiBwYWRkaW5nOiAxLDVyZW07ICovXFxufVxcbi5oZWFkZXJfbWFpbl9jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcbi5zaWRlX2Jhcl9tYWluX2NvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxufVxcbi5jb250ZW50X21haW5fY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG59XFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJfcmFkaXVzKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG4vKiAqKioqKioqKioqKioqKiAqL1xcbi8qICoqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqICovXFxuLyogSGVhZGVyICovXFxuLyogKioqKioqICovXFxuLmhlYWRlcl9tYWluX2NvbnRhaW5lciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbi5oZWFkZXJfbWFpbl9jb250YWluZXIgLmhlYWRlcl9sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5oZWFkZXJfbWFpbl9jb250YWluZXIgLmhlYWRlcl9pY29uIHtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIC8qIG1hcmdpbi1ib3R0b206IC0xcmVtOyAqL1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG5cXG4gIC8qIHBhZGRpbmctYm90dG9tOiAwLjVyZW07ICovXFxufVxcblxcbi5oZWFkZXJfbWFpbl9jb250YWluZXIgaDEge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xcbiAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xcbn1cXG5cXG4uaGVhZGVyX21haW5fY29udGFpbmVyIC5jbG9jayB7XFxuICBoZWlnaHQ6IDlyZW07XFxuICB3aWR0aDogOXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JleSk7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi8qICoqKioqKiAqL1xcbi8qICoqKioqKiAqL1xcblxcbi8qICoqKioqKiogKi9cXG4vKiBTaWRlYmFyICovXFxuLyogKioqKioqKiAqL1xcblxcbi5zaWRlX2Jhcl9tYWluX2NvbnRhaW5lciB7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbGQteWVsbG93LWxpZ2h0ZXIpO1xcbn1cXG5cXG4uc2lkZWJhcl9wcm9qZWN0X3JvdyAucHJvamVjdF90aXRsZV9hbmRfYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucHJvamVjdF90aXRsZV9hbmRfYnV0dG9ucyA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2plY3RfdGl0bGVfYW5kX2J1dHRvbnMgLnByb2plY3Qge1xcbiAgZmxleDogMTtcXG59XFxuLnByb2plY3RfdGl0bGVfYW5kX2J1dHRvbnMgaW5wdXQge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnNpZGViYXJfaWNvbixcXG4udGFza2Jhcl9pY29uIHtcXG4gIGhlaWdodDogMXJlbTtcXG59XFxuLmVkaXRfdGFza19pY29uIHtcXG4gIG1hcmdpbi1ib3R0b206IC0wLjJyZW07XFxuICBoZWlnaHQ6IDEuMnJlbTtcXG59XFxuLnRpdGxlX2ljb24ge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogLTAuM3JlbTtcXG59XFxuXFxuLyogY2FsZW5kYXIgKi9cXG5cXG4uY2FsZW5kYXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbnRhYmxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9sZC15ZWxsb3ctZGFya2VyKTtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICBtYXJnaW4tdG9wOiAwLjFyZW07XFxuXFxuICBib3gtc2hhZG93OiAxcHggMnB4IDRweCAjODg4ODg4O1xcbn1cXG5cXG50YWJsZSAqIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxudGFibGUsXFxudGgsXFxudGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG50ZCB7XFxuICAvKiB3aWR0aDogMi4ycmVtO1xcbiAgaGVpZ2h0OiAycmVtOyAqL1xcbn1cXG5cXG4uY2FsZW5kYXJfZGF5IHtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbnRyLmNhbGVuZGFyX2RheXMge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jYWxlbmRhciAudG9kYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5MWMxYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IGJsYWNrO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKiBIb21lIHNpZGViYXIgKi9cXG4uaG9tZV9tZW51X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIGJvcmRlcjogMnB4IGJsdWUgc29saWQ7ICovXFxufVxcblxcbi5ob21lX21lbnVfdGl0bGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xcbn1cXG5cXG4uaG9tZV9tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbi5ob21lX21lbnUgPiAqOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yLWRlZmF1bHQpO1xcbn1cXG5cXG4uZGVsZXRlX3Byb2plY3RfaWNvbjpob3ZlciB7XFxuICAvKiBmaWx0ZXJzIHRvIHJlZCovXFxuICBmaWx0ZXI6IGludmVydCgzNyUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNzQ3MSUpIGh1ZS1yb3RhdGUoMzU2ZGVnKVxcbiAgICBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoMTM1JSk7XFxuXFxuICAvKiBmaWx0ZXIgdG8gYmx1ZSAqL1xcbiAgLyogZmlsdGVyOiBpbnZlcnQoMC41KSBzZXBpYSgxKSBzYXR1cmF0ZSg1KSBodWUtcm90YXRlKDE3NWRlZyk7ICovXFxufVxcblxcbi8qIFByb2plY3RzIE1lbnUgU2lkZWJhciAqL1xcbi5wcm9qZWN0c19tZW51X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIGJvcmRlcjogMnB4IGJsdWUgc29saWQ7ICovXFxufVxcblxcbi5wcm9qZWN0c19tZW51X3RpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZ2FwOiAwLjRyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3RzX21lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4ucHJvamVjdHNfbWVudSA+ICo6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3ItZGVmYXVsdCk7XFxufVxcblxcbi5wcm9qZWN0c19tZW51IC5zaWRlYmFyX3Byb2plY3Rfcm93OmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLnByb2plY3RzX21lbnUgLnNpZGViYXJfcHJvamVjdF9yb3c6Zmlyc3QtY2hpbGQuc2lkZWJhcl9pY29uIHtcXG4gIGhlaWdodDogMC45cmVtO1xcbn1cXG5cXG5idXR0b24gLmFkZF90YXNrX2J1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuLyogKioqKioqKiAqL1xcbi8qICoqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKioqKioqKiogKi9cXG4vKiBQcm9qZWN0IERpc3BsYXkgKi9cXG4vKiAqKioqKioqKioqKioqKiogKi9cXG5cXG4uY29udGVudF9tYWluX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4ycmVtO1xcbiAgbWFyZ2luLXRvcDogMC42cmVtO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG59XFxuXFxuLmRpc3BsYXlfcHJvamVjdHMge1xcbiAgLyogYm9yZGVyOiAycHggZGFya2dvbGRlbnJvZCBzb2xpZDsgKi9cXG4gIHBhZGRpbmc6IDFyZW07XFxuICBnYXA6IDAuN3JlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGlzcGxheV9wcm9qZWN0X3RpdGxlIHtcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBibGFjayBzb2xpZDtcXG4gIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAqL1xcblxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIC8qIHBhZGRpbmctcmlnaHQ6IDVyZW07ICovXFxufVxcbi8qIC5kaXNwbGF5X3Byb2plY3Rfcm93IHtcXG4gIGJvcmRlcjogMXB4IGJyb3duIHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG59ICovXFxuXFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbGQteWVsbG93LWxpZ2h0ZXIpOyAqL1xcblxcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICB2YXIoLS1vbGQteWVsbG93LWxpZ2h0ZXIpIDM1JSxcXG4gICAgI2ZmZmJlYiAxMDAlXFxuICApO1xcbiAgYm94LXNoYWRvdzogMXB4IDJweCAxcHggLTFweCB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2UtaW4tb3V0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzazpiZWZvcmUge1xcbiAgei1pbmRleDogLTE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvdHRvbTogMTNweDtcXG4gIHJpZ2h0OiA3cHg7XFxuICB3aWR0aDogMjUlO1xcbiAgdG9wOiAwO1xcbiAgYm94LXNoYWRvdzogMCAxNXB4IDEwcHggdmFyKC0tZGFyay1ncmV5KTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDRkZWcpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICB2YXIoLS1vbGQteWVsbG93LWRhcmtlcikgMCUsXFxuICAgIHZhcigtLW9sZC15ZWxsb3ctZGFya2VyKSAxMDAlXFxuICApO1xcbn1cXG5cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzazpob3ZlcjpiZWZvcmUge1xcbiAgLyogd2FzIGZvciBzaGFkb3cgKi9cXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgei1pbmRleDogLTEwO1xcbn1cXG5cXG4uY2lyY2xlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSksXFxuICAgIGluc2V0IDAgMCAwIDI1cHggdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrLmNoZWNrZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzay5jaGVja2VkOjpiZWZvcmUge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2tfaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIC8qIHBhZGRpbmctYm90dG9tOiAwLjJyZW07ICovXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAvKiBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1taW4td2lkdGgtZHVlRGF0ZSkgKyAwLjhyZW0pOyAqL1xcbiAgLyogYm9yZGVyLWJvdHRvbTogdmFyKC0tZm9ybV9ib3JkZXIpOyAqL1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHZhcigtLWRhcmstZ3JleSkgc29saWQ7XFxufVxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrX2hlYWRlciAudGFza19kdWVfZGF0ZV9kYXkge1xcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgtZHVlRGF0ZSk7XFxufVxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrX2hlYWRlciAudGFza19kdWVfZGF0ZSB7XFxuICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aC1kdWVEYXRlKTtcXG59XFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2tfaGVhZGVyIC50YXNrX3RpdGxlIHtcXG4gIC8qIG1hcmdpbi1sZWZ0OiAwLjJyZW07ICovXFxufVxcblxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrIC50YXNrX3RpdGxlIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrIC50YXNrX2R1ZV9kYXRlX2RheSB7XFxuICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aC1kdWVEYXRlKTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMC40cmVtO1xcblxcbiAgLyogY29sb3I6IHJlZDsgKi9cXG59XFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sgLnRhc2tfZHVlX2RhdGUge1xcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgtZHVlRGF0ZSk7XFxuICAvKiBmb250LXNpemU6IDAuOXJlbTsgKi9cXG59XFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sgLmNoZWNrX3ByaW9yaXR5X2J1dHRvbiB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLyogKioqKioqKioqKioqKiAqL1xcbi8qICoqKioqKioqKioqKiogKi9cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayAuZHVlX2RhdGVfZXhwaXJ5X2xldmVsXzAge1xcbiAgLyogZXhwaXJlZCB0YXNrcyAqL1xcbiAgY29sb3I6ICM0NTBhMGE7XFxuICB0ZXh0LXNoYWRvdzogIzQ1MGEwYSAwcHggMHB4IDVweDtcXG59XFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sgLmR1ZV9kYXRlX2V4cGlyeV9sZXZlbF8xIHtcXG4gIC8qIHRvZGF5J3MgdGFza3MgKi9cXG4gIGNvbG9yOiAjYjkxYzFjO1xcbiAgdGV4dC1zaGFkb3c6ICNiOTFjMWMgMHB4IDBweCA1cHg7XFxufVxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrIC5kdWVfZGF0ZV9leHBpcnlfbGV2ZWxfMiB7XFxuICAvKiB0aGlzIHdlZWsncyB0YXNrcyAqL1xcbiAgY29sb3I6ICNjYThhMDQ7XFxuICB0ZXh0LXNoYWRvdzogI2NhOGEwNCAwcHggMHB4IDVweDtcXG59XFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sgLmR1ZV9kYXRlX2V4cGlyeV9sZXZlbF8zIHtcXG4gIC8qIHRhc2tzIG1vcmUgdGhhbiBhIHdlZWsgdGFza3MgKi9cXG4gIGNvbG9yOiAjNjVhMzBkO1xcbiAgdGV4dC1zaGFkb3c6ICM2NWEzMGQgMHB4IDBweCA1cHg7XFxufVxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrIC5kdWVfZGF0ZV9leHBpcnlfbGV2ZWxfNCB7XFxuICAvKiB0YXNrcyBtb3JlIHRoYW4gYSB3ZWVrIHRhc2tzICovXFxuICBjb2xvcjogIzc4NzE2YztcXG4gIHRleHQtc2hhZG93OiAjNzg3MTZjIDBweCAwcHggNXB4O1xcbn1cXG4vKiAqKioqKioqKioqKioqICovXFxuLyogKioqKioqKioqKioqKiAqL1xcblxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrIC5yZW1vdmVfdGFza19idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcXG59XFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sgLnJlbW92ZV90YXNrX2J1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayAuY2hlY2tfcHJpb3JpdHlfYnV0dG9uLmNoZWNrZWQge1xcbiAgY29sb3I6ICNlYWIzMDg7XFxuICAvKiB0ZXh0LXNoYWRvdzogI2ExNjIwNyAwcHggMHB4IDVweDsgKi9cXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICNmZGU2OGEsIDAgMCAxMHB4ICNmYmJmMjQ7XFxufVxcbi8qICoqKioqKioqKioqKioqKiAqL1xcbi8qICoqKioqKioqKioqKioqKiAqL1xcblxcbi8qICoqKiAqL1xcblxcbi8qICoqKioqICovXFxuLyogRm9ybXMgKi9cXG4vKiAqKioqKiAqL1xcblxcbi8qIC5mb3Jtc19tYWluX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn0gKi9cXG5cXG4uZm9ybSB7XFxuICBib3JkZXI6IHZhcigtLWZvcm1fYm9yZGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyX3JhZGl1cyk7XFxuICB6LWluZGV4OiAxMDtcXG5cXG4gIHdpZHRoOiA2MDBweDtcXG4gIG1heC13aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG1heC1oZWlnaHQ6IDgwJTtcXG4gIHBhZGRpbmc6IDQwcHggMzBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxLjRyZW07XFxufVxcblxcbi5mb3JtLmZvcm1fcHJvamVjdCxcXG4uZm9ybS5jb25maXJtX2RlbGV0ZV9wcm9qZWN0IHtcXG4gIGhlaWdodDogMjAwcHg7XFxufVxcblxcbi5mb3JtIGhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tZm9ybV9ib3JkZXIpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4uZm9ybSBoZWFkZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4uZm9ybSAuZm9ybV9yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvcm0udGFza19pbmZvIC5mb3JtX3JvdyB7XFxuICBib3JkZXItdG9wOiAycHggdmFyKC0tYm9yZGVyX2NvbG9yX2dyZXkpIGRvdHRlZDtcXG4gIGJvcmRlci1ib3R0b206IDJweCB2YXIoLS1ib3JkZXJfY29sb3JfZ3JleSkgZG90dGVkO1xcbiAgcGFkZGluZzogMC4xcmVtO1xcbn1cXG4uZm9ybSAuZm9ybV9yb3cgPiBkaXYge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5mb3JtIGJ1dHRvbi5mb3JtX3N1Ym1pdCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0cHggMTJweDtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJfcmFkaXVzKTtcXG4gIGJvcmRlcjogdmFyKC0tZm9ybV9ib3JkZXIpO1xcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udF9jb2xvcl93aGl0ZSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uZm9ybSBidXR0b24uZm9ybV9zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3ItZGVmYXVsdCk7XFxuICB0cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qIGZvciB0aGUgSW5mb3JtYXRpb24gUG9wLXVwICovXFxuLmZvcm0gLmZvcm1fdGFza19pbmZvX3RpdGxlLFxcbi5mb3JtIC5mb3JtX3Rhc2tfaW5mb19kZXNjcmlwdGlvbixcXG4uZm9ybSAuZm9ybV90YXNrX2luZm9fZHVlZGF0ZSxcXG4uZm9ybSAuZm9ybV90YXNrX2luZm9faW1wb3J0YW5jZSxcXG4uZm9ybSAuZm9ybV90YXNrX2luZm9fcHJvamVjdCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcblxcbi8qIEZvciBhZGQgUHJvamVjdCBhbmQgVGFzayBGb3JtIFBvcC11cHMgKi9cXG4uZm9ybSAuZm9ybV9wcm9qZWN0X3RpdGxlLFxcbi5mb3JtIC5mb3JtX3Rhc2tfdGl0bGUsXFxuLmZvcm0gLmZvcm1fdGFza19kZXNjcmlwdGlvbixcXG4uZm9ybSAuZm9ybV90YXNrX2RhdGUge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEyMHB4O1xcbn1cXG4uZm9ybSAuZm9ybV9wcm9qZWN0X3RpdGxlIHtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4uZm9ybSAuZm9ybV9lZGl0X3Byb2plY3RfdGl0bGUsXFxuLmZvcm0gLmZvcm1fZWRpdF90YXNrX3RpdGxlLFxcbi5mb3JtIC5mb3JtX2VkaXRfdGFza19kZXNjcmlwdGlvbixcXG4uZm9ybSAuZm9ybV9lZGl0X3Rhc2tfZGF0ZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcbi5mb3JtIC5mb3JtX2VkaXRfcHJvamVjdF90aXRsZSB7XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuLmZvcm0gaW5wdXQsXFxuLmZvcm0gdGV4dGFyZWEge1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyX3JhZGl1cyk7XFxuICBib3JkZXI6IDJweCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSBzb2xpZDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi8qICoqKioqICovXFxuLyogKioqKiogKi9cXG5cXG4vKiAqKiogKi9cXG5cXG4vKiBzZXR0aW5nIHVwIHRoZSBwb3AtdXAgb3ZlcmxheSovXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG4ub3ZlcmxheV9mb3JfZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5vdmVybGF5X2Zvcl9mb3JtLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLmZvcm0uYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbn1cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi8qICoqKioqKiAqL1xcbi8qIGZvb3RlciAqL1xcbi8qICoqKioqKiAqL1xcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250X2NvbG9yX3doaXRlKTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcblxcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIHotaW5kZXg6IDI7ICovXFxuICAvKiB0ZXh0LXNoYWRvdzogbm9uZTsgKi9cXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbmZvb3RlciBpbWcge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBzY2FsZTogMS4yO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuZm9vdGVyIGltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi8qICoqKioqKiAqL1xcbi8qICoqKioqKiAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNc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RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsV0FBVztBQUNYLFdBQVdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMTgxYTFiO1xcbiAgLS1mb250X2NvbG9yX3doaXRlOiAjZThlNmUzO1xcbiAgY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICAtLW1haW5fY29udGFpbmVyX2dhcDogMXJlbTtcXG4gIC0tYWRkX2J1dHRvbl9ibHVlX2JhY2tncm91bmQ6ICMwMDlkZTc7XFxuICAtLWFkZF9idXR0b25fYmx1ZV9iYWNrZ3JvdW5kX2xpZ3RoZXI6ICM0MmMzZmY7XFxuICAtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUzYThhO1xcbiAgLS1ob3Zlci1jb2xvci1kZWZhdWx0OiAjZDZkM2QxO1xcbiAgLS1ib3JkZXJfY29sb3JfZ3JleTogIzg1ODU4NTtcXG4gIC0tYm9yZGVyX3JhZGl1czogMTBweDtcXG4gIC0tbWluLXdpZHRoLWR1ZURhdGU6IDUuNXJlbTtcXG4gIC0tZm9ybV9ib3JkZXI6IDJweCB2YXIoLS1ib3JkZXJfY29sb3JfZ3JleSkgc29saWQ7XFxuXFxuICAtLWRhcmstZ3JleTogIzMzMzMzMztcXG4gIC0tb2xkLXllbGxvdzogI2ZlZmZjZjtcXG4gIC0tb2xkLXllbGxvdy1saWdodGVyOiAjZmZmZmUwO1xcbiAgLS1vbGQteWVsbG93LWRhcmtlcjogI2Y4ZTk5OTtcXG5cXG4gIC0tZGVmYXVsdC10ZXh0LXNoYWRvdzogMCAwIDVweCAjZmZmLCAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLFxcbiAgICAwIDAgNDBweCAjMGZmLCAwIDAgODBweCAjMGZmLCAwIDAgOTBweCAjMGZmLCAwIDAgMTAwcHggIzBmZiwgMCAwIDE1MHB4ICMwZmY7XFxuXFxuICAtLXNpZGViYXItYm94LXNoYWRvdzogMCAycHggNXB4IGhzbGEoMCwgMCUsIDAlLCAwLjQpLCBpbnNldCAwIDFweCAwICNjY2MsXFxuICAgIGluc2V0IDFweCAwIDAgI2FhYSwgaW5zZXQgMCAtMXB4IDAgI2NjYywgaW5zZXQgLTFweCAwIDAgI2FhYSxcXG4gICAgaW5zZXQgMCAycHggMCAjYzZjNmM2LCBpbnNldCAycHggMCAwICNhNmE2YTYsIGluc2V0IDAgLTJweCAwICNjNmM2YzYsXFxuICAgIGluc2V0IC0ycHggMCAwICNhNmE2YTYsIGluc2V0IDAgM3B4IDAgI2MwYzBjMCwgaW5zZXQgM3B4IDAgMCAjYTBhMGEwLFxcbiAgICBpbnNldCAwIC0zcHggMCAjYzBjMGMwLCBpbnNldCAtM3B4IDAgMCAjYTBhMGEwLCBpbnNldCAwIDRweCAwICNiOWI5YjksXFxuICAgIGluc2V0IDRweCAwIDAgIzk5OSwgaW5zZXQgMCAtNHB4IDAgI2I5YjliOSwgaW5zZXQgLTRweCAwIDAgIzk5OSxcXG4gICAgaW5zZXQgMCA1cHggMCAjYjZiNmI2LCBpbnNldCA1cHggMCAwICM5Njk2OTYsIGluc2V0IDAgLTVweCAwICNiNmI2YjYsXFxuICAgIGluc2V0IC01cHggMCAwICM5Njk2OTYsIGluc2V0IDAgNnB4IDAgI2IwYjBiMCwgaW5zZXQgNnB4IDAgMCAjOTA5MDkwLFxcbiAgICBpbnNldCAwIC02cHggMCAjYjBiMGIwLCBpbnNldCAtNnB4IDAgMCAjOTA5MDkwLCBpbnNldCAwIDdweCAwICNhOWE5YTksXFxuICAgIGluc2V0IDdweCAwIDAgIzg5ODk4OSwgaW5zZXQgMCAtN3B4IDAgI2E5YTlhOSwgaW5zZXQgLTdweCAwIDAgIzg5ODk4OSxcXG4gICAgaW5zZXQgMCA4cHggMCAjYTZhNmE2LCBpbnNldCA4cHggMCAwICM4Njg2ODYsIGluc2V0IDAgLThweCAwICNhNmE2YTYsXFxuICAgIGluc2V0IC04cHggMCAwICM4Njg2ODYsIGluc2V0IDAgOXB4IDAgI2EwYTBhMCwgaW5zZXQgOXB4IDAgMCAjODA4MDgwLFxcbiAgICBpbnNldCAwIC05cHggMCAjYTBhMGEwLCBpbnNldCAtOXB4IDAgMCAjODA4MDgwLCBpbnNldCAwIDEwcHggMCAjODg4LFxcbiAgICBpbnNldCAxMHB4IDAgMCAjNjY2LCBpbnNldCAwIC0xMHB4IDAgIzg4OCwgaW5zZXQgLTEwcHggMCAwICM2NjYsXFxuICAgIGluc2V0IDAgMCAxMHB4IDEwcHggaHNsYSgwLCAwJSwgMCUsIDAuNSk7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udF9jb2xvcl93aGl0ZSk7XFxuXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9wYXBlci5wbmcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGZvbnQ6IDFyZW0gc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAvKiBib3gtc2hhZG93OiB2YXIoLS1zaWRlYmFyLWJveC1zaGFkb3cpO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNiYmIgIzk5OTsgKi9cXG59XFxuXFxuLyogKioqKioqKioqKioqKiogKi9cXG4vKiBNYWluIENvbnRhaW5lciAqL1xcbi8qICoqKioqKioqKioqKioqICovXFxuXFxuLm1haW5fY29udGFpbmVyIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNXJlbSBhdXRvIDEuNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJzaWRlYmFyIGhlYWRlclxcXCJcXG4gICAgXFxcInNpZGViYXIgbWFpblxcXCJcXG4gICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcbiAgLyogZ2FwOiB2YXIoLS1tYWluX2NvbnRhaW5lcl9nYXApOyAqL1xcbiAgLyogYm9yZGVyOiA4cHggeWVsbG93IHNvbGlkOyAqL1xcbn1cXG4ubWFpbl9jb250YWluZXIgPiAuaGVhZGVyX21haW5fY29udGFpbmVyLFxcbi5tYWluX2NvbnRhaW5lciA+IC5zaWRlX2Jhcl9tYWluX2NvbnRhaW5lcixcXG4ubWFpbl9jb250YWluZXIgPiAuY29udGVudF9tYWluX2NvbnRhaW5lciB7XFxuICAvKiBwYWRkaW5nOiAxLDVyZW07ICovXFxufVxcbi5oZWFkZXJfbWFpbl9jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcbi5zaWRlX2Jhcl9tYWluX2NvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxufVxcbi5jb250ZW50X21haW5fY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG59XFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJfcmFkaXVzKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG4vKiAqKioqKioqKioqKioqKiAqL1xcbi8qICoqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqICovXFxuLyogSGVhZGVyICovXFxuLyogKioqKioqICovXFxuLmhlYWRlcl9tYWluX2NvbnRhaW5lciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbi5oZWFkZXJfbWFpbl9jb250YWluZXIgLmhlYWRlcl9sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5oZWFkZXJfbWFpbl9jb250YWluZXIgLmhlYWRlcl9pY29uIHtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIC8qIG1hcmdpbi1ib3R0b206IC0xcmVtOyAqL1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG5cXG4gIC8qIHBhZGRpbmctYm90dG9tOiAwLjVyZW07ICovXFxufVxcblxcbi5oZWFkZXJfbWFpbl9jb250YWluZXIgaDEge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xcbiAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xcbn1cXG5cXG4uaGVhZGVyX21haW5fY29udGFpbmVyIC5jbG9jayB7XFxuICBoZWlnaHQ6IDlyZW07XFxuICB3aWR0aDogOXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JleSk7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi8qICoqKioqKiAqL1xcbi8qICoqKioqKiAqL1xcblxcbi8qICoqKioqKiogKi9cXG4vKiBTaWRlYmFyICovXFxuLyogKioqKioqKiAqL1xcblxcbi5zaWRlX2Jhcl9tYWluX2NvbnRhaW5lciB7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbGQteWVsbG93LWxpZ2h0ZXIpO1xcbn1cXG5cXG4uc2lkZWJhcl9wcm9qZWN0X3JvdyAucHJvamVjdF90aXRsZV9hbmRfYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucHJvamVjdF90aXRsZV9hbmRfYnV0dG9ucyA+ICoge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2plY3RfdGl0bGVfYW5kX2J1dHRvbnMgLnByb2plY3Qge1xcbiAgZmxleDogMTtcXG59XFxuLnByb2plY3RfdGl0bGVfYW5kX2J1dHRvbnMgaW5wdXQge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnNpZGViYXJfaWNvbixcXG4udGFza2Jhcl9pY29uIHtcXG4gIGhlaWdodDogMXJlbTtcXG59XFxuLmVkaXRfdGFza19pY29uIHtcXG4gIG1hcmdpbi1ib3R0b206IC0wLjJyZW07XFxuICBoZWlnaHQ6IDEuMnJlbTtcXG59XFxuLnRpdGxlX2ljb24ge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogLTAuM3JlbTtcXG59XFxuXFxuLyogY2FsZW5kYXIgKi9cXG5cXG4uY2FsZW5kYXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbnRhYmxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9sZC15ZWxsb3ctZGFya2VyKTtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICBtYXJnaW4tdG9wOiAwLjFyZW07XFxuXFxuICBib3gtc2hhZG93OiAxcHggMnB4IDRweCAjODg4ODg4O1xcbn1cXG5cXG50YWJsZSAqIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxudGFibGUsXFxudGgsXFxudGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG50ZCB7XFxuICAvKiB3aWR0aDogMi4ycmVtO1xcbiAgaGVpZ2h0OiAycmVtOyAqL1xcbn1cXG5cXG4uY2FsZW5kYXJfZGF5IHtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbnRyLmNhbGVuZGFyX2RheXMge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jYWxlbmRhciAudG9kYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5MWMxYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IGJsYWNrO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKiBIb21lIHNpZGViYXIgKi9cXG4uaG9tZV9tZW51X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIGJvcmRlcjogMnB4IGJsdWUgc29saWQ7ICovXFxufVxcblxcbi5ob21lX21lbnVfdGl0bGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xcbn1cXG5cXG4uaG9tZV9tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbi5ob21lX21lbnUgPiAqOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yLWRlZmF1bHQpO1xcbn1cXG5cXG4uZGVsZXRlX3Byb2plY3RfaWNvbjpob3ZlciB7XFxuICAvKiBmaWx0ZXJzIHRvIHJlZCovXFxuICBmaWx0ZXI6IGludmVydCgzNyUpIHNlcGlhKDkzJSkgc2F0dXJhdGUoNzQ3MSUpIGh1ZS1yb3RhdGUoMzU2ZGVnKVxcbiAgICBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoMTM1JSk7XFxuXFxuICAvKiBmaWx0ZXIgdG8gYmx1ZSAqL1xcbiAgLyogZmlsdGVyOiBpbnZlcnQoMC41KSBzZXBpYSgxKSBzYXR1cmF0ZSg1KSBodWUtcm90YXRlKDE3NWRlZyk7ICovXFxufVxcblxcbi8qIFByb2plY3RzIE1lbnUgU2lkZWJhciAqL1xcbi5wcm9qZWN0c19tZW51X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIGJvcmRlcjogMnB4IGJsdWUgc29saWQ7ICovXFxufVxcblxcbi5wcm9qZWN0c19tZW51X3RpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZ2FwOiAwLjRyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3RzX21lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG4ucHJvamVjdHNfbWVudSA+ICo6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3ItZGVmYXVsdCk7XFxufVxcblxcbi5wcm9qZWN0c19tZW51IC5zaWRlYmFyX3Byb2plY3Rfcm93OmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLnByb2plY3RzX21lbnUgLnNpZGViYXJfcHJvamVjdF9yb3c6Zmlyc3QtY2hpbGQuc2lkZWJhcl9pY29uIHtcXG4gIGhlaWdodDogMC45cmVtO1xcbn1cXG5cXG5idXR0b24gLmFkZF90YXNrX2J1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuLyogKioqKioqKiAqL1xcbi8qICoqKioqKiogKi9cXG5cXG4vKiAqKioqKioqKioqKioqKiogKi9cXG4vKiBQcm9qZWN0IERpc3BsYXkgKi9cXG4vKiAqKioqKioqKioqKioqKiogKi9cXG5cXG4uY29udGVudF9tYWluX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4ycmVtO1xcbiAgbWFyZ2luLXRvcDogMC42cmVtO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG59XFxuXFxuLmRpc3BsYXlfcHJvamVjdHMge1xcbiAgLyogYm9yZGVyOiAycHggZGFya2dvbGRlbnJvZCBzb2xpZDsgKi9cXG4gIHBhZGRpbmc6IDFyZW07XFxuICBnYXA6IDAuN3JlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGlzcGxheV9wcm9qZWN0X3RpdGxlIHtcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBibGFjayBzb2xpZDtcXG4gIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAqL1xcblxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIC8qIHBhZGRpbmctcmlnaHQ6IDVyZW07ICovXFxufVxcbi8qIC5kaXNwbGF5X3Byb2plY3Rfcm93IHtcXG4gIGJvcmRlcjogMXB4IGJyb3duIHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG59ICovXFxuXFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbGQteWVsbG93LWxpZ2h0ZXIpOyAqL1xcblxcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICB2YXIoLS1vbGQteWVsbG93LWxpZ2h0ZXIpIDM1JSxcXG4gICAgI2ZmZmJlYiAxMDAlXFxuICApO1xcbiAgYm94LXNoYWRvdzogMXB4IDJweCAxcHggLTFweCB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2UtaW4tb3V0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzazpiZWZvcmUge1xcbiAgei1pbmRleDogLTE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvdHRvbTogMTNweDtcXG4gIHJpZ2h0OiA3cHg7XFxuICB3aWR0aDogMjUlO1xcbiAgdG9wOiAwO1xcbiAgYm94LXNoYWRvdzogMCAxNXB4IDEwcHggdmFyKC0tZGFyay1ncmV5KTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDRkZWcpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICB2YXIoLS1vbGQteWVsbG93LWRhcmtlcikgMCUsXFxuICAgIHZhcigtLW9sZC15ZWxsb3ctZGFya2VyKSAxMDAlXFxuICApO1xcbn1cXG5cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzazpob3ZlcjpiZWZvcmUge1xcbiAgLyogd2FzIGZvciBzaGFkb3cgKi9cXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgei1pbmRleDogLTEwO1xcbn1cXG5cXG4uY2lyY2xlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSksXFxuICAgIGluc2V0IDAgMCAwIDI1cHggdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pbWFnZXMvcGFwZXIucG5nXFxcIik7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuXFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2suY2hlY2tlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrLmNoZWNrZWQ6OmJlZm9yZSB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFza19oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgLyogcGFkZGluZy1ib3R0b206IDAuMnJlbTsgKi9cXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIC8qIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLW1pbi13aWR0aC1kdWVEYXRlKSArIDAuOHJlbSk7ICovXFxuICAvKiBib3JkZXItYm90dG9tOiB2YXIoLS1mb3JtX2JvcmRlcik7ICovXFxuICBib3JkZXItYm90dG9tOiAycHggdmFyKC0tZGFyay1ncmV5KSBzb2xpZDtcXG59XFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2tfaGVhZGVyIC50YXNrX2R1ZV9kYXRlX2RheSB7XFxuICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aC1kdWVEYXRlKTtcXG59XFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2tfaGVhZGVyIC50YXNrX2R1ZV9kYXRlIHtcXG4gIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoLWR1ZURhdGUpO1xcbn1cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFza19oZWFkZXIgLnRhc2tfdGl0bGUge1xcbiAgLyogbWFyZ2luLWxlZnQ6IDAuMnJlbTsgKi9cXG59XFxuXFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sgLnRhc2tfdGl0bGUge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sgLnRhc2tfZHVlX2RhdGVfZGF5IHtcXG4gIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoLWR1ZURhdGUpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBtYXJnaW4tcmlnaHQ6IC0wLjRyZW07XFxuXFxuICAvKiBjb2xvcjogcmVkOyAqL1xcbn1cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayAudGFza19kdWVfZGF0ZSB7XFxuICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aC1kdWVEYXRlKTtcXG4gIC8qIGZvbnQtc2l6ZTogMC45cmVtOyAqL1xcbn1cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayAuY2hlY2tfcHJpb3JpdHlfYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4vKiAqKioqKioqKioqKioqICovXFxuLyogKioqKioqKioqKioqKiAqL1xcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrIC5kdWVfZGF0ZV9leHBpcnlfbGV2ZWxfMCB7XFxuICAvKiBleHBpcmVkIHRhc2tzICovXFxuICBjb2xvcjogIzQ1MGEwYTtcXG4gIHRleHQtc2hhZG93OiAjNDUwYTBhIDBweCAwcHggNXB4O1xcbn1cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayAuZHVlX2RhdGVfZXhwaXJ5X2xldmVsXzEge1xcbiAgLyogdG9kYXkncyB0YXNrcyAqL1xcbiAgY29sb3I6ICNiOTFjMWM7XFxuICB0ZXh0LXNoYWRvdzogI2I5MWMxYyAwcHggMHB4IDVweDtcXG59XFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sgLmR1ZV9kYXRlX2V4cGlyeV9sZXZlbF8yIHtcXG4gIC8qIHRoaXMgd2VlaydzIHRhc2tzICovXFxuICBjb2xvcjogI2NhOGEwNDtcXG4gIHRleHQtc2hhZG93OiAjY2E4YTA0IDBweCAwcHggNXB4O1xcbn1cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayAuZHVlX2RhdGVfZXhwaXJ5X2xldmVsXzMge1xcbiAgLyogdGFza3MgbW9yZSB0aGFuIGEgd2VlayB0YXNrcyAqL1xcbiAgY29sb3I6ICM2NWEzMGQ7XFxuICB0ZXh0LXNoYWRvdzogIzY1YTMwZCAwcHggMHB4IDVweDtcXG59XFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sgLmR1ZV9kYXRlX2V4cGlyeV9sZXZlbF80IHtcXG4gIC8qIHRhc2tzIG1vcmUgdGhhbiBhIHdlZWsgdGFza3MgKi9cXG4gIGNvbG9yOiAjNzg3MTZjO1xcbiAgdGV4dC1zaGFkb3c6ICM3ODcxNmMgMHB4IDBweCA1cHg7XFxufVxcbi8qICoqKioqKioqKioqKiogKi9cXG4vKiAqKioqKioqKioqKioqICovXFxuXFxuLmNvbnRhaW5lcl9mb3Jfc2luZ2xlX3Rhc2sgLnJlbW92ZV90YXNrX2J1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogMC42cmVtO1xcbn1cXG4uY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFzayAucmVtb3ZlX3Rhc2tfYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5jb250YWluZXJfZm9yX3NpbmdsZV90YXNrIC5jaGVja19wcmlvcml0eV9idXR0b24uY2hlY2tlZCB7XFxuICBjb2xvcjogI2VhYjMwODtcXG4gIC8qIHRleHQtc2hhZG93OiAjYTE2MjA3IDBweCAwcHggNXB4OyAqL1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZkZTY4YSwgMCAwIDEwcHggI2ZiYmYyNDtcXG59XFxuLyogKioqKioqKioqKioqKioqICovXFxuLyogKioqKioqKioqKioqKioqICovXFxuXFxuLyogKioqICovXFxuXFxuLyogKioqKiogKi9cXG4vKiBGb3JtcyAqL1xcbi8qICoqKioqICovXFxuXFxuLyogLmZvcm1zX21haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxufSAqL1xcblxcbi5mb3JtIHtcXG4gIGJvcmRlcjogdmFyKC0tZm9ybV9ib3JkZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udF9jb2xvcl93aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBmb250LXNpemU6IDFyZW07XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJfcmFkaXVzKTtcXG4gIHotaW5kZXg6IDEwO1xcblxcbiAgd2lkdGg6IDYwMHB4O1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgbWF4LWhlaWdodDogODAlO1xcbiAgcGFkZGluZzogNDBweCAzMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNHJlbTtcXG59XFxuXFxuLmZvcm0uZm9ybV9wcm9qZWN0LFxcbi5mb3JtLmNvbmZpcm1fZGVsZXRlX3Byb2plY3Qge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLmZvcm0gaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItYm90dG9tOiB2YXIoLS1mb3JtX2JvcmRlcik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxufVxcblxcbi5mb3JtIGhlYWRlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5mb3JtIC5mb3JtX3JvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9ybS50YXNrX2luZm8gLmZvcm1fcm93IHtcXG4gIGJvcmRlci10b3A6IDJweCB2YXIoLS1ib3JkZXJfY29sb3JfZ3JleSkgZG90dGVkO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHZhcigtLWJvcmRlcl9jb2xvcl9ncmV5KSBkb3R0ZWQ7XFxuICBwYWRkaW5nOiAwLjFyZW07XFxufVxcbi5mb3JtIC5mb3JtX3JvdyA+IGRpdiB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmZvcm0gYnV0dG9uLmZvcm1fc3VibWl0IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlcl9yYWRpdXMpO1xcbiAgYm9yZGVyOiB2YXIoLS1mb3JtX2JvcmRlcik7XFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250X2NvbG9yX3doaXRlKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5mb3JtIGJ1dHRvbi5mb3JtX3N1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvci1kZWZhdWx0KTtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyogZm9yIHRoZSBJbmZvcm1hdGlvbiBQb3AtdXAgKi9cXG4uZm9ybSAuZm9ybV90YXNrX2luZm9fdGl0bGUsXFxuLmZvcm0gLmZvcm1fdGFza19pbmZvX2Rlc2NyaXB0aW9uLFxcbi5mb3JtIC5mb3JtX3Rhc2tfaW5mb19kdWVkYXRlLFxcbi5mb3JtIC5mb3JtX3Rhc2tfaW5mb19pbXBvcnRhbmNlLFxcbi5mb3JtIC5mb3JtX3Rhc2tfaW5mb19wcm9qZWN0IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuLyogRm9yIGFkZCBQcm9qZWN0IGFuZCBUYXNrIEZvcm0gUG9wLXVwcyAqL1xcbi5mb3JtIC5mb3JtX3Byb2plY3RfdGl0bGUsXFxuLmZvcm0gLmZvcm1fdGFza190aXRsZSxcXG4uZm9ybSAuZm9ybV90YXNrX2Rlc2NyaXB0aW9uLFxcbi5mb3JtIC5mb3JtX3Rhc2tfZGF0ZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcbi5mb3JtIC5mb3JtX3Byb2plY3RfdGl0bGUge1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi5mb3JtIC5mb3JtX2VkaXRfcHJvamVjdF90aXRsZSxcXG4uZm9ybSAuZm9ybV9lZGl0X3Rhc2tfdGl0bGUsXFxuLmZvcm0gLmZvcm1fZWRpdF90YXNrX2Rlc2NyaXB0aW9uLFxcbi5mb3JtIC5mb3JtX2VkaXRfdGFza19kYXRlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuLmZvcm0gLmZvcm1fZWRpdF9wcm9qZWN0X3RpdGxlIHtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4uZm9ybSBpbnB1dCxcXG4uZm9ybSB0ZXh0YXJlYSB7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJfcmFkaXVzKTtcXG4gIGJvcmRlcjogMnB4IHZhcigtLWJhY2tncm91bmQtY29sb3IpIHNvbGlkO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLyogKioqKiogKi9cXG4vKiAqKioqKiAqL1xcblxcbi8qICoqKiAqL1xcblxcbi8qIHNldHRpbmcgdXAgdGhlIHBvcC11cCBvdmVybGF5Ki9cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi5vdmVybGF5X2Zvcl9mb3JtIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLm92ZXJsYXlfZm9yX2Zvcm0uYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4uZm9ybS5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxufVxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLyogKioqKioqICovXFxuLyogZm9vdGVyICovXFxuLyogKioqKioqICovXFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuXFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogei1pbmRleDogMjsgKi9cXG4gIC8qIHRleHQtc2hhZG93OiBub25lOyAqL1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHNjYWxlOiAxLjI7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5mb290ZXIgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLyogKioqKioqICovXFxuLyogKioqKioqICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIEcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gWShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIFIoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gdShkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiBRKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIHEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIEwoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIHcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIEkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIEQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gRShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gZShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIGMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIGkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIGIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiBCKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIEsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gayhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gWChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24geChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiBPKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24geihkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIHQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gVChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsInZhciBkYXRlTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRGF5cyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHRpbWVzdGFtcExlZnQgPSBzdGFydE9mRGF5TGVmdC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgdmFyIHRpbWVzdGFtcFJpZ2h0ID0gc3RhcnRPZkRheVJpZ2h0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIGRheSBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBNSUxMSVNFQ09ORFNfSU5fREFZKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gTGlrZSBgY29tcGFyZUFzY2AgYnV0IHVzZXMgbG9jYWwgdGltZSBub3QgVVRDLCB3aGljaCBpcyBuZWVkZWRcbi8vIGZvciBhY2N1cmF0ZSBlcXVhbGl0eSBjb21wYXJpc29ucyBvZiBVVEMgdGltZXN0YW1wcyB0aGF0IGVuZCB1cFxuLy8gaGF2aW5nIHRoZSBzYW1lIHJlcHJlc2VudGF0aW9uIGluIGxvY2FsIHRpbWUsIGUuZy4gb25lIGhvdXIgYmVmb3JlXG4vLyBEU1QgZW5kcyB2cy4gdGhlIGluc3RhbnQgdGhhdCBEU1QgZW5kcy5cblxuZnVuY3Rpb24gY29tcGFyZUxvY2FsQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCkgfHwgZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIGRhdGVSaWdodC5nZXRNb250aCgpIHx8IGRhdGVMZWZ0LmdldERhdGUoKSAtIGRhdGVSaWdodC5nZXREYXRlKCkgfHwgZGF0ZUxlZnQuZ2V0SG91cnMoKSAtIGRhdGVSaWdodC5nZXRIb3VycygpIHx8IGRhdGVMZWZ0LmdldE1pbnV0ZXMoKSAtIGRhdGVSaWdodC5nZXRNaW51dGVzKCkgfHwgZGF0ZUxlZnQuZ2V0U2Vjb25kcygpIC0gZGF0ZVJpZ2h0LmdldFNlY29uZHMoKSB8fCBkYXRlTGVmdC5nZXRNaWxsaXNlY29uZHMoKSAtIGRhdGVSaWdodC5nZXRNaWxsaXNlY29uZHMoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn1cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBmdWxsIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBmdWxsIGRheSBwZXJpb2RzIGJldHdlZW4gdHdvIGRhdGVzLiBGcmFjdGlvbmFsIGRheXMgYXJlXG4gKiB0cnVuY2F0ZWQgdG93YXJkcyB6ZXJvLlxuICpcbiAqIE9uZSBcImZ1bGwgZGF5XCIgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gYSBsb2NhbCB0aW1lIGluIG9uZSBkYXkgdG8gdGhlIHNhbWVcbiAqIGxvY2FsIHRpbWUgb24gdGhlIG5leHQgb3IgcHJldmlvdXMgZGF5LiBBIGZ1bGwgZGF5IGNhbiBzb21ldGltZXMgYmUgbGVzcyB0aGFuXG4gKiBvciBtb3JlIHRoYW4gMjQgaG91cnMgaWYgYSBkYXlsaWdodCBzYXZpbmdzIGNoYW5nZSBoYXBwZW5zIGJldHdlZW4gdHdvIGRhdGVzLlxuICpcbiAqIFRvIGlnbm9yZSBEU1QgYW5kIG9ubHkgbWVhc3VyZSBleGFjdCAyNC1ob3VyIHBlcmlvZHMsIHVzZSB0aGlzIGluc3RlYWQ6XG4gKiBgTWF0aC5mbG9vcihkaWZmZXJlbmNlSW5Ib3VycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KS8yNCl8MGAuXG4gKlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgZnVsbCBkYXlzIGFjY29yZGluZyB0byB0aGUgbG9jYWwgdGltZXpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5EYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NVxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5EYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAwXG4gKiAvLyBIb3cgbWFueSBmdWxsIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDEgTWFyY2ggMjAyMCAwOjAwIGFuZCAxIEp1bmUgMjAyMCAwOjAwID9cbiAqIC8vIE5vdGU6IGJlY2F1c2UgbG9jYWwgdGltZSBpcyB1c2VkLCB0aGVcbiAqIC8vIHJlc3VsdCB3aWxsIGFsd2F5cyBiZSA5MiBkYXlzLCBldmVuIGluXG4gKiAvLyB0aW1lIHpvbmVzIHdoZXJlIERTVCBzdGFydHMgYW5kIHRoZVxuICogLy8gcGVyaW9kIGhhcyBvbmx5IDkyKjI0LTEgaG91cnMuXG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5EYXlzKFxuICogICBuZXcgRGF0ZSgyMDIwLCA1LCAxKSxcbiAqICAgbmV3IERhdGUoMjAyMCwgMiwgMSlcbiAqIClcbi8vPT4gOTJcbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkRheXMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBzaWduID0gY29tcGFyZUxvY2FsQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICB2YXIgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSk7XG4gIGRhdGVMZWZ0LnNldERhdGUoZGF0ZUxlZnQuZ2V0RGF0ZSgpIC0gc2lnbiAqIGRpZmZlcmVuY2UpOyAvLyBNYXRoLmFicyhkaWZmIGluIGZ1bGwgZGF5cyAtIGRpZmYgaW4gY2FsZW5kYXIgZGF5cykgPT09IDEgaWYgbGFzdCBjYWxlbmRhciBkYXkgaXMgbm90IGZ1bGxcbiAgLy8gSWYgc28sIHJlc3VsdCBtdXN0IGJlIGRlY3JlYXNlZCBieSAxIGluIGFic29sdXRlIHZhbHVlXG5cbiAgdmFyIGlzTGFzdERheU5vdEZ1bGwgPSBOdW1iZXIoY29tcGFyZUxvY2FsQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpID09PSAtc2lnbik7XG4gIHZhciByZXN1bHQgPSBzaWduICogKGRpZmZlcmVuY2UgLSBpc0xhc3REYXlOb3RGdWxsKTsgLy8gUHJldmVudCBuZWdhdGl2ZSB6ZXJvXG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCA/IDAgOiByZXN1bHQ7XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xuXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZjIgPSAoX3JlZjMgPSAoX3JlZjQgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUyLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMiRvcHRpLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjQgIT09IHZvaWQgMCA/IF9yZWY0IDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmNSA9IChfcmVmNiA9IChfcmVmNyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTMub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUzJG9wdGkud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNyAhPT0gdm9pZCAwID8gX3JlZjcgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY2ICE9PSB2b2lkIDAgPyBfcmVmNiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsNC53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY1ICE9PSB2b2lkIDAgPyBfcmVmNSA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHZhciBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG5cbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nsb2NrLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2xvY2suY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvY2xvY2suY3NzXCI7XG5cbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tzLmpzXCI7XG5pbXBvcnQge1xuICBQcm9qZWN0LFxuICBQcm9qZWN0c05vdFRvUmVtb3ZlLFxuICBjcmVhdGVUZXN0UHJvamVjdHMsXG59IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdHMuanNcIjtcbmltcG9ydCB7IERvbUNyZWF0b3IgfSBmcm9tIFwiLi9tb2R1bGVzL2RvbV9tYXRlcmlhbHNcIjtcbmltcG9ydCB7IEFwcEJvYXJkIH0gZnJvbSBcIi4vbW9kdWxlcy9hcHBfbG9naWMuanNcIjtcbmltcG9ydCB7IEZvcm1zQ3JlYXRvciB9IGZyb20gXCIuL21vZHVsZXMvZm9ybXMuanNcIjtcbmltcG9ydCB7IENsb2NrIH0gZnJvbSBcIi4vbW9kdWxlcy9jbG9jay5qc1wiO1xuXG5leHBvcnQgY29uc3QgYXBwQm9hcmQgPSBBcHBCb2FyZCgpO1xuZXhwb3J0IGNvbnN0IGRvbUNyZWF0b3IgPSBEb21DcmVhdG9yKCk7XG5leHBvcnQgY29uc3QgZm9ybUNyZWF0b3IgPSBGb3Jtc0NyZWF0b3IoKTtcblxuZm9ybUNyZWF0b3IuYWRkUHJvamVjdEZvcm1FdmVudExpc3RlbmVycygpO1xuQ2xvY2soKTtcblxuY3JlYXRlVGVzdFByb2plY3RzKCk7IC8vIHNldCBvZiByZWFkeSBwcm9qZWN0cyBhbmQgdGFza3MgdG8gc2hvd2Nhc2VcblxuLy8ga2VlcCB0aGVzZSBhdCB0aGUgZW5kIHRvIGdlbmVyYXRlIHRoZSBwYWdlXG5kb21DcmVhdG9yLmRpc3BsYXlQcm9qZWN0cygpO1xuZG9tQ3JlYXRvci5kaXNwbGF5VGFza3MoYXBwQm9hcmQucHJvamVjdHNMaXN0WzBdKTsgLy8gZGlzcGxheSB0b2RheSdzIHRhc2tzXG4iLCJpbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0c05vdFRvUmVtb3ZlIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrcy5qc1wiO1xuaW1wb3J0IHsgZG9tQ3JlYXRvciB9IGZyb20gXCIuL3Rhc2tzLmpzXCI7XG5cbmltcG9ydCB7IGZvcm1hdCwgZGlmZmVyZW5jZUluRGF5cywgc3RhcnRPZkRheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgYXBwQm9hcmQgfSBmcm9tIFwiLi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tMaXN0U29ydGluZyh0YXNrTGlzdCkge1xuICB0YXNrTGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgLy9hIHRvIHgsIGIgdG8geVxuICAgIGxldCB4O1xuICAgIGxldCB5O1xuICAgIGlmIChhLmR1ZURhdGUgIT0gXCJcIikge1xuICAgICAgeCA9IG5ldyBEYXRlKGEuZHVlRGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHggPSBuZXcgRGF0ZShcIjIyMjItMTEtMTBcIik7XG4gICAgfVxuXG4gICAgaWYgKGIuZHVlRGF0ZSAhPSBcIlwiKSB7XG4gICAgICB5ID0gbmV3IERhdGUoYi5kdWVEYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgeSA9IG5ldyBEYXRlKFwiMjIyMi0xMS0xMFwiKTtcbiAgICB9XG5cbiAgICBsZXQgZGlmZmVyZW5jZVRvUmV0dXJuID0gZGlmZmVyZW5jZUluRGF5cyh4LCB5KTtcblxuICAgIGlmIChkaWZmZXJlbmNlVG9SZXR1cm4gPT09IDApIHtcbiAgICAgIGRpZmZlcmVuY2VUb1JldHVybiA9IGIudW5pcXVlSUQgLSBhLnVuaXF1ZUlEO1xuICAgIH1cblxuICAgIHJldHVybiBkaWZmZXJlbmNlVG9SZXR1cm47XG4gIH0pO1xuXG4gIHJldHVybiB0YXNrTGlzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFwcEJvYXJkKCkge1xuICAvLyBhZGRpbmcgbG9jYWwgc3RvcmFnZVxuICBjb25zdCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0tFWSA9IFwidG9kb2FwcC5wcm9qZWN0c1wiO1xuICBsZXQgcHJvamVjdHNMaXN0ID1cbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVFNfS0VZKSkgfHwgW107XG5cbiAgLy8gYXNzaWduaW5nIE9iamVjdCBtZXRob2RzIGJhY2ssIGFzIHRoZXkgd2VyZSBzYXZlZCBhcyBzdHJpbmdzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdHNMaXN0W2ldID0gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBwcm9qZWN0c0xpc3RbaV0pO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0c0xpc3RbaV0udGFza3NMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICBwcm9qZWN0c0xpc3RbaV0udGFza3NMaXN0W2pdID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgbmV3IFRhc2soKSxcbiAgICAgICAgcHJvamVjdHNMaXN0W2ldLnRhc2tzTGlzdFtqXVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyBsZXQgcHJvamVjdHNMaXN0ID0gW107XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgLy8gYWRkcyB0aGUgdGFzayB0byBlbmQgb2YgdGFza3NMaXN0XG4gICAgdGhpcy5wcm9qZWN0c0xpc3QucHVzaChwcm9qZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QoaW5kZXgpIHtcbiAgICB0aGlzLnByb2plY3RzTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gZWRpdFByb2plY3QoaW5kZXhfdG9fcmVtb3ZlLCBuZXdfcHJvamVjdCkge1xuICAvLyAgIHRoaXMucHJvamVjdHNMaXN0LnNwbGljZShpbmRleF90b19yZW1vdmUsIDEsIG5ld19wcm9qZWN0KTtcbiAgLy8gfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFza1VuaXF1ZUlkKSB7XG4gICAgcHJvamVjdHNMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50YXNrc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRhc2tVbmlxdWVJZCA9PSBwcm9qZWN0LnRhc2tzTGlzdFtpXS51bmlxdWVJRCkge1xuICAgICAgICAgIHByb2plY3QudGFza3NMaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19LRVksXG4gICAgICBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRhc2tzRnJvbUFsbFByb2plY3RzKCkge1xuICAgIGxldCBhbGxUYXNrcyA9IFtdO1xuXG4gICAgLy9wcm9qZWN0c0xpc3RbMF0gZm9yIHRoZSBNYWluIFByb2plY3RcbiAgICAvLyBwcm9qZWN0c0xpc3RbNV0udGFza3NMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAvLyAgIGFsbFRhc2tzLnB1c2godGFzayk7XG4gICAgLy8gfSk7XG5cbiAgICBmb3IgKGxldCBpID0gUHJvamVjdHNOb3RUb1JlbW92ZS5sZW5ndGggLSAxOyBpIDwgcHJvamVjdHNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9qZWN0c0xpc3RbaV0udGFza3NMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgYWxsVGFza3MucHVzaCh0YXNrKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRhc2tMaXN0U29ydGluZyhhbGxUYXNrcyk7XG5cbiAgICByZXR1cm4gYWxsVGFza3M7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUYXNrc0ZvclRvZGF5VG9tb3Jyb3coKSB7XG4gICAgLy9zd2l0Y2hlZCB0byB0b2RheSBhbmQgdG9tb3Jyb3dcbiAgICBsZXQgYWxsVGFza3MgPSBbXTtcblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG9kYXlTdGFydCA9IHN0YXJ0T2ZEYXkobm93KTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrVGFza2xpc3QocHJvamVjdCkge1xuICAgICAgcHJvamVjdC50YXNrc0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBpZiAodGFzay5kdWVEYXRlID09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBzdGFydE9mRGF5KG5ldyBEYXRlKHRhc2suZHVlRGF0ZSkpO1xuICAgICAgICBjb25zdCBkYXlzQmV0d2VlbiA9IGRpZmZlcmVuY2VJbkRheXModGFza0R1ZURhdGUsIHRvZGF5U3RhcnQpO1xuXG4gICAgICAgIGlmIChkYXlzQmV0d2VlbiA9PT0gMCB8fCBkYXlzQmV0d2VlbiA9PT0gMSkge1xuICAgICAgICAgIGFsbFRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNoZWNrVGFza2xpc3QocHJvamVjdHNMaXN0WzVdKTtcbiAgICBmb3IgKGxldCBpID0gUHJvamVjdHNOb3RUb1JlbW92ZS5sZW5ndGggLSAxOyBpIDwgcHJvamVjdHNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGVja1Rhc2tsaXN0KHByb2plY3RzTGlzdFtpXSk7XG4gICAgfVxuXG4gICAgdGFza0xpc3RTb3J0aW5nKGFsbFRhc2tzKTtcblxuICAgIHJldHVybiBhbGxUYXNrcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRhc2tzRm9yV2VlaygpIHtcbiAgICBsZXQgYWxsVGFza3MgPSBbXTtcblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG9kYXlTdGFydCA9IHN0YXJ0T2ZEYXkobm93KTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrVGFza2xpc3QocHJvamVjdCkge1xuICAgICAgcHJvamVjdC50YXNrc0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBpZiAodGFzay5kdWVEYXRlID09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBzdGFydE9mRGF5KG5ldyBEYXRlKHRhc2suZHVlRGF0ZSkpO1xuICAgICAgICBjb25zdCBkYXlzQmV0d2VlbiA9IGRpZmZlcmVuY2VJbkRheXModGFza0R1ZURhdGUsIHRvZGF5U3RhcnQpO1xuXG4gICAgICAgIGlmIChkYXlzQmV0d2VlbiA8IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRheXNCZXR3ZWVuIDw9IDcpIHtcbiAgICAgICAgICBhbGxUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjaGVja1Rhc2tsaXN0KHByb2plY3RzTGlzdFs1XSk7XG4gICAgZm9yIChsZXQgaSA9IFByb2plY3RzTm90VG9SZW1vdmUubGVuZ3RoIC0gMTsgaSA8IHByb2plY3RzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgY2hlY2tUYXNrbGlzdChwcm9qZWN0c0xpc3RbaV0pO1xuICAgIH1cblxuICAgIHRhc2tMaXN0U29ydGluZyhhbGxUYXNrcyk7XG5cbiAgICByZXR1cm4gYWxsVGFza3M7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUYXNrc0Zvck1vbnRoKCkge1xuICAgIGxldCBhbGxUYXNrcyA9IFtdO1xuXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB0b2RheVN0YXJ0ID0gc3RhcnRPZkRheShub3cpO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tUYXNrbGlzdChwcm9qZWN0KSB7XG4gICAgICBwcm9qZWN0LnRhc2tzTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmICh0YXNrLmR1ZURhdGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHN0YXJ0T2ZEYXkobmV3IERhdGUodGFzay5kdWVEYXRlKSk7XG4gICAgICAgIGNvbnN0IGRheXNCZXR3ZWVuID0gZGlmZmVyZW5jZUluRGF5cyh0YXNrRHVlRGF0ZSwgdG9kYXlTdGFydCk7XG5cbiAgICAgICAgaWYgKGRheXNCZXR3ZWVuIDwgMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF5c0JldHdlZW4gPD0gMzEpIHtcbiAgICAgICAgICBhbGxUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjaGVja1Rhc2tsaXN0KHByb2plY3RzTGlzdFs1XSk7XG4gICAgZm9yIChsZXQgaSA9IFByb2plY3RzTm90VG9SZW1vdmUubGVuZ3RoIC0gMTsgaSA8IHByb2plY3RzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgY2hlY2tUYXNrbGlzdChwcm9qZWN0c0xpc3RbaV0pO1xuICAgIH1cblxuICAgIHRhc2tMaXN0U29ydGluZyhhbGxUYXNrcyk7XG5cbiAgICByZXR1cm4gYWxsVGFza3M7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbXBvcnRhbnRUYXNrcygpIHtcbiAgICBsZXQgYWxsVGFza3MgPSBbXTtcblxuICAgIC8vcHJvamVjdHNMaXN0WzBdIGZvciB0aGUgTWFpbiBQcm9qZWN0XG4gICAgLy8gcHJvamVjdHNMaXN0WzVdLnRhc2tzTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgLy8gICBpZiAodGFzay5pc0ltcG9ydGFudCA9PT0gdHJ1ZSkge1xuICAgIC8vICAgICBhbGxUYXNrcy5wdXNoKHRhc2spO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IFByb2plY3RzTm90VG9SZW1vdmUubGVuZ3RoIC0gMTsgaSA8IHByb2plY3RzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvamVjdHNMaXN0W2ldLnRhc2tzTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmICh0YXNrLmlzSW1wb3J0YW50ID09PSB0cnVlKSB7XG4gICAgICAgICAgYWxsVGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGFza0xpc3RTb3J0aW5nKGFsbFRhc2tzKTtcblxuICAgIHJldHVybiBhbGxUYXNrcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEV4cGlyZWRUYXNrcygpIHtcbiAgICBsZXQgYWxsVGFza3MgPSBbXTtcblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG9kYXlTdGFydCA9IHN0YXJ0T2ZEYXkobm93KTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrVGFza2xpc3QocHJvamVjdCkge1xuICAgICAgcHJvamVjdC50YXNrc0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBpZiAodGFzay5kdWVEYXRlID09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBzdGFydE9mRGF5KG5ldyBEYXRlKHRhc2suZHVlRGF0ZSkpO1xuICAgICAgICBjb25zdCBkYXlzQmV0d2VlbiA9IGRpZmZlcmVuY2VJbkRheXModGFza0R1ZURhdGUsIHRvZGF5U3RhcnQpO1xuXG4gICAgICAgIGlmIChkYXlzQmV0d2VlbiA8IDApIHtcbiAgICAgICAgICBhbGxUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjaGVja1Rhc2tsaXN0KHByb2plY3RzTGlzdFs1XSk7XG4gICAgZm9yIChsZXQgaSA9IFByb2plY3RzTm90VG9SZW1vdmUubGVuZ3RoIC0gMTsgaSA8IHByb2plY3RzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgY2hlY2tUYXNrbGlzdChwcm9qZWN0c0xpc3RbaV0pO1xuICAgIH1cblxuICAgIHRhc2tMaXN0U29ydGluZyhhbGxUYXNrcyk7XG5cbiAgICByZXR1cm4gYWxsVGFza3M7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb2plY3RzTGlzdCxcbiAgICByZW1vdmVUYXNrLFxuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSxcbiAgICBnZXRUYXNrc0Zyb21BbGxQcm9qZWN0cyxcbiAgICBnZXRUYXNrc0ZvclRvZGF5VG9tb3Jyb3csXG4gICAgZ2V0VGFza3NGb3JXZWVrLFxuICAgIGdldFRhc2tzRm9yTW9udGgsXG4gICAgZ2V0SW1wb3J0YW50VGFza3MsXG4gICAgZ2V0RXhwaXJlZFRhc2tzLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYWxlbmRhcigpIHtcbiAgLy8gR2V0IHRoZSBjdXJyZW50IGRhdGVcbiAgdmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAvLyBHZXQgdGhlIHllYXIgYW5kIG1vbnRoIG9mIHRoZSBjdXJyZW50IGRhdGVcbiAgdmFyIGN1cnJlbnRZZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIGN1cnJlbnRNb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG4gIHZhciBjdXJyZW50RGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuXG4gIC8vIEdldCB0aGUgbnVtYmVyIG9mIGRheXMgaW4gdGhlIHByZXZpb3VzIG1vbnRoXG4gIHZhciBkYXlzSW5QcmV2TW9udGggPSBuZXcgRGF0ZShjdXJyZW50WWVhciwgY3VycmVudE1vbnRoLCAwKS5nZXREYXRlKCk7XG5cbiAgLy8gR2V0IHRoZSBmaXJzdCBkYXkgb2YgdGhlIGN1cnJlbnQgbW9udGhcbiAgdmFyIGZpcnN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgsIDEpLmdldERheSgpO1xuXG4gIC8vIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGRheXMgdG8gZGlzcGxheSBmcm9tIHRoZSBwcmV2aW91cyBtb250aFxuICB2YXIgZGF5c1RvRGlzcGxheUZyb21QcmV2TW9udGggPVxuICAgIGZpcnN0RGF5T2ZNb250aCA+IDAgPyBmaXJzdERheU9mTW9udGggLSAxIDogNjtcblxuICAvLyBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBkYXlzIHRvIGRpc3BsYXkgZnJvbSB0aGUgbmV4dCBtb250aFxuICB2YXIgZGF5c1RvRGlzcGxheUZyb21OZXh0TW9udGggPVxuICAgIDcgLVxuICAgICgoZGF5c1RvRGlzcGxheUZyb21QcmV2TW9udGggK1xuICAgICAgbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCArIDEsIDApLmdldERhdGUoKSkgJVxuICAgICAgNyk7XG5cbiAgLy8gQ3JlYXRlIGFuIGFycmF5IHRvIHN0b3JlIHRoZSBjYWxlbmRhciBkYXlzXG4gIHZhciBjYWxlbmRhckRheXMgPSBbXTtcblxuICAvLyBBZGQgdGhlIHByZXZpb3VzIG1vbnRoJ3MgZGF5cyB0byB0aGUgY2FsZW5kYXIgZGF5cyBhcnJheVxuICBmb3IgKFxuICAgIHZhciBpID0gZGF5c0luUHJldk1vbnRoIC0gZGF5c1RvRGlzcGxheUZyb21QcmV2TW9udGggKyAxO1xuICAgIGkgPD0gZGF5c0luUHJldk1vbnRoO1xuICAgIGkrK1xuICApIHtcbiAgICBjYWxlbmRhckRheXMucHVzaCh7IGRheTogaSwgaXNDdXJyZW50TW9udGg6IGZhbHNlIH0pO1xuICB9XG5cbiAgLy8gQWRkIHRoZSBjdXJyZW50IG1vbnRoJ3MgZGF5cyB0byB0aGUgY2FsZW5kYXIgZGF5cyBhcnJheVxuICBmb3IgKFxuICAgIHZhciBpID0gMTtcbiAgICBpIDw9IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGggKyAxLCAwKS5nZXREYXRlKCk7XG4gICAgaSsrXG4gICkge1xuICAgIGNhbGVuZGFyRGF5cy5wdXNoKHsgZGF5OiBpLCBpc0N1cnJlbnRNb250aDogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8vIEFkZCB0aGUgbmV4dCBtb250aCdzIGRheXMgdG8gdGhlIGNhbGVuZGFyIGRheXMgYXJyYXlcbiAgZm9yICh2YXIgaSA9IDE7IGkgPD0gZGF5c1RvRGlzcGxheUZyb21OZXh0TW9udGg7IGkrKykge1xuICAgIGNhbGVuZGFyRGF5cy5wdXNoKHsgZGF5OiBpLCBpc0N1cnJlbnRNb250aDogZmFsc2UgfSk7XG4gIH1cblxuICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIGNhbGVuZGFyIGRpdiBlbGVtZW50XG4gIHZhciBjYWxlbmRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsZW5kYXJcIik7XG5cbiAgLy8gQ3JlYXRlIGEgdGFibGUgZWxlbWVudCB0byBkaXNwbGF5IHRoZSBjYWxlbmRhclxuICB2YXIgY2FsZW5kYXJUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcblxuICAvLyBDcmVhdGUgYSByb3cgZm9yIHRoZSBkYXkgbmFtZXNcbiAgdmFyIGRheU5hbWVzUm93ID0gY2FsZW5kYXJUYWJsZS5pbnNlcnRSb3coKTtcbiAgZGF5TmFtZXNSb3cuY2xhc3NMaXN0LmFkZChcImNhbGVuZGFyX2RheXNcIik7XG4gIHZhciBkYXlOYW1lcyA9IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRheU5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNlbGwgPSBkYXlOYW1lc1Jvdy5pbnNlcnRDZWxsKCk7XG4gICAgY2VsbC50ZXh0Q29udGVudCA9IGRheU5hbWVzW2ldO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNhbGVuZGFyX2RheVwiKTtcbiAgfVxuXG4gIC8vIENyZWF0ZSByb3dzIGZvciB0aGUgY2FsZW5kYXIgZGF5c1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGVuZGFyRGF5cy5sZW5ndGg7IGkgKz0gNykge1xuICAgIHZhciByb3cgPSBjYWxlbmRhclRhYmxlLmluc2VydFJvdygpO1xuXG4gICAgZm9yICh2YXIgaiA9IGk7IGogPCBpICsgNzsgaisrKSB7XG4gICAgICB2YXIgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICBjZWxsLnRleHRDb250ZW50ID0gY2FsZW5kYXJEYXlzW2pdLmRheTtcbiAgICAgIGlmIChcbiAgICAgICAgY2FsZW5kYXJEYXlzW2pdLmlzQ3VycmVudE1vbnRoICYmXG4gICAgICAgIGNhbGVuZGFyRGF5c1tqXS5kYXkgPT09IGN1cnJlbnREYXlcbiAgICAgICkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJ0b2RheVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBBZGQgdGhlIGNhbGVuZGFyIHRhYmxlIHRvIHRoZSBjYWxlbmRhciBkaXYgZWxlbWVudFxuICBjYWxlbmRhci5pbm5lckhUTUwgPSBgJiM4ODgwOyR7Zm9ybWF0KGN1cnJlbnREYXRlLCBcIk1NTU0gZGQsIHl5eXlcIil9JiM4ODgxO2A7XG4gIGNhbGVuZGFyLmFwcGVuZENoaWxkKGNhbGVuZGFyVGFibGUpO1xufVxuIiwiLy8gRm9yIHRvZ2dsZSBidXR0b247XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImxpZ2h0XCIpO1xuICBib2R5LnN0eWxlLnRyYW5zaXRpb24gPSBgMC4zcyBsaW5lYXJgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2xvY2soKSB7XG4gIC8vIGZvciB0aW1lO1xuICBjb25zdCBkZWcgPSA2O1xuICAvLyAzNjAgLyAoMTIgKiA1KTtcblxuICBjb25zdCBociA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHJcIik7XG4gIGNvbnN0IG1uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtblwiKTtcbiAgY29uc3Qgc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NjXCIpO1xuXG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBsZXQgZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgaGggPSBkYXkuZ2V0SG91cnMoKSAqIDMwO1xuICAgIGxldCBtbSA9IGRheS5nZXRNaW51dGVzKCkgKiBkZWc7XG4gICAgbGV0IHNzID0gZGF5LmdldFNlY29uZHMoKSAqIGRlZztcbiAgICBsZXQgbXNlYyA9IGRheS5nZXRNaWxsaXNlY29uZHMoKTtcblxuICAgIC8vIFZFUlkgSU1QT1JUQU5UIFNURVA6XG5cbiAgICBoci5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWigke2hoICsgbW0gLyAxMn1kZWcpYDtcbiAgICBtbi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWigke21tfWRlZylgO1xuICAgIHNjLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVaKCR7c3N9ZGVnKWA7XG5cbiAgICAvLyBnaXZlcyB0aGUgc21vb3RoIHRyYW5zaXRpb25pbmcgZWZmZWN0LCBidXQgdGhlcmUncyBhIGJ1ZyBoZXJlIVxuICAgIC8vIHNjLnN0eWxlLnRyYW5zaXRpb24gPSBgMXNgO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGFwcEJvYXJkLCBmb3JtQ3JlYXRvciB9IGZyb20gXCIuLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdHNOb3RUb1JlbW92ZSB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza3MuanNcIjtcbmltcG9ydCB7IGNyZWF0ZUNhbGVuZGFyIH0gZnJvbSBcIi4vY2FsZW5kYXIuanNcIjtcbmltcG9ydCB7IHRhc2tMaXN0U29ydGluZyB9IGZyb20gXCIuL2FwcF9sb2dpYy5qc1wiO1xuXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9kZWxldGVfZm9sZGVyX2ljb24uc3ZnXCI7XG5pbXBvcnQgZGVsZXRlSWNvblJlZCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9kZWxldGVfZm9sZGVyX2ljb25fcmVkLnN2Z1wiO1xuXG5pbXBvcnQgZXhwYW5kTGluZXNJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2V4cGFuZF9saW5lc19pY29uLnBuZ1wiO1xuaW1wb3J0IGV4cGFuZExpbmVzUmVkSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9leHBhbmRfbGluZXNfaWNvbl9yZWQucG5nXCI7XG5pbXBvcnQgZXhwYW5kTGluZXNZZWxsb3dJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2V4cGFuZF9saW5lc19pY29uX3llbGxvdy5wbmdcIjtcbmltcG9ydCBleHBhbmRMaW5lc0dyZWVuSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9leHBhbmRfbGluZXNfaWNvbl9ncmVlbi5wbmdcIjtcblxuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYWRkX2ljb24ucG5nXCI7XG5cbmltcG9ydCBpbmZvSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pbmZvX2ljb24ucG5nXCI7XG5pbXBvcnQgZmluaXNoRmxhZ0ljb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZmluaXNoX2ZsYWdfaWNvbi5wbmdcIjtcbmltcG9ydCBlZGl0UGVuY2lsSWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9lZGl0X3BlbmNpbF9pY29uLnBuZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gRG9tQ3JlYXRvcigpIHtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9jb250YWluZXJcIik7XG5cbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheV9mb3JfZm9ybVwiKTtcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0uZm9ybV90YXNrXCIpO1xuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS5mb3JtX3Byb2plY3RcIik7XG5cbiAgY29uc3Qgc3VibWl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCJmb3JtLmZvcm1fcHJvamVjdCBidXR0b24uZm9ybV9zdWJtaXRcIlxuICApO1xuICBjb25zdCBzdWJtaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcImZvcm0uZm9ybV90YXNrIGJ1dHRvbi5mb3JtX3N1Ym1pdFwiXG4gICk7XG5cbiAgZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuICAgIGFwcEJvYXJkLnNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG5cbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgZGlzcGxheUZvclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5X3Byb2plY3RzXCIpO1xuICAgIGxldCBkaXNwbGF5U2lkZUJhcmZvclByb2plY3RzO1xuXG4gICAgLy8gY2xlYXJpbmcgdGhlIG1lbnVzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX21lbnVcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzX21lbnVcIikuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNyZWF0ZUNhbGVuZGFyKCk7XG5cbiAgICBhcHBCb2FyZC5wcm9qZWN0c0xpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgdGFza0xpc3RTb3J0aW5nKHByb2plY3QudGFza3NMaXN0KTtcbiAgICAgIGlmIChpIDwgUHJvamVjdHNOb3RUb1JlbW92ZS5sZW5ndGggLSAxKSB7XG4gICAgICAgIGRpc3BsYXlTaWRlQmFyZm9yUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfbWVudVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlTaWRlQmFyZm9yUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzX21lbnVcIik7XG4gICAgICB9XG5cbiAgICAgIC8vY3JlYXRpbmcgZGlzcGxheSBmb3IgdGhlIHNpZGViYXJcbiAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgICAgIGNvbnN0IG5ld1NpZGVCYXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3U2lkZUJhclJvdy5jbGFzc0xpc3QuYWRkKFwic2lkZWJhcl9wcm9qZWN0X3Jvd1wiKTtcbiAgICAgIG5ld1NpZGVCYXJSb3cuc2V0QXR0cmlidXRlKFwiZGF0YS1zaWRlYmFyLXByb2plY3QtaW5kZXhcIiwgYCR7aX1gKTtcbiAgICAgIGRpc3BsYXlTaWRlQmFyZm9yUHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3U2lkZUJhclJvdyk7XG5cbiAgICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZUFuZEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3UHJvamVjdFRpdGxlQW5kQnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF90aXRsZV9hbmRfYnV0dG9uc1wiKTtcbiAgICAgIG5ld1Byb2plY3RUaXRsZUFuZEJ1dHRvbnMuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWluZGV4XCIsIGAke2l9YCk7XG4gICAgICBuZXdTaWRlQmFyUm93LmFwcGVuZENoaWxkKG5ld1Byb2plY3RUaXRsZUFuZEJ1dHRvbnMpO1xuXG4gICAgICBjb25zdCBuZXdEaXNwbGF5VGFza3NCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgbmV3RGlzcGxheVRhc2tzQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiLCBgJHtpfWApO1xuICAgICAgbmV3UHJvamVjdFRpdGxlQW5kQnV0dG9ucy5hcHBlbmRDaGlsZChuZXdEaXNwbGF5VGFza3NCdXR0b24pO1xuXG4gICAgICBuZXdEaXNwbGF5VGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBkaXNwbGF5VGFza3MocHJvamVjdCwgZGlzcGxheUZvclByb2plY3RzKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBuZXdEaXNwbGF5VGFza3NCdXR0b25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBuZXdEaXNwbGF5VGFza3NCdXR0b25JbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJleHBhbmQgaWNvblwiKTtcbiAgICAgIG5ld0Rpc3BsYXlUYXNrc0J1dHRvbkltYWdlLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyX2ljb25cIik7XG4gICAgICBuZXdEaXNwbGF5VGFza3NCdXR0b24uYXBwZW5kQ2hpbGQobmV3RGlzcGxheVRhc2tzQnV0dG9uSW1hZ2UpO1xuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgbmV3RGlzcGxheVRhc2tzQnV0dG9uSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGV4cGFuZExpbmVzUmVkSWNvbik7XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgbmV3RGlzcGxheVRhc2tzQnV0dG9uSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGV4cGFuZExpbmVzWWVsbG93SWNvbik7XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IDIpIHtcbiAgICAgICAgbmV3RGlzcGxheVRhc2tzQnV0dG9uSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGV4cGFuZExpbmVzR3JlZW5JY29uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0Rpc3BsYXlUYXNrc0J1dHRvbkltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBleHBhbmRMaW5lc0ljb24pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICBuZXdQcm9qZWN0LmlubmVySFRNTCA9IHByb2plY3QucHJvamVjdE5hbWU7XG4gICAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiLCBgJHtpfWApO1xuICAgICAgbmV3UHJvamVjdFRpdGxlQW5kQnV0dG9ucy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcblxuICAgICAgaWYgKGkgPj0gUHJvamVjdHNOb3RUb1JlbW92ZS5sZW5ndGggLSAxKSB7XG4gICAgICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBmdW5jdGlvbiByZXBsYWNlV2l0aElucHV0KGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gZWxlbWVudC5pbm5lckhUTUw7XG4gICAgICAgICAgICBpbnB1dC5tYXhsZW5ndGggPSBcIjQwXCI7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGlucHV0LCBlbGVtZW50KTtcbiAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3QoKSB7XG4gICAgICAgICAgICAgIHByb2plY3Quc2V0UHJvamVjdE5hbWUoaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICB2YXIgdXBkYXRlZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICB1cGRhdGVkRWxlbWVudC5jbGFzc05hbWUgPSBcInByb2plY3RcIjtcbiAgICAgICAgICAgICAgdXBkYXRlZEVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgIFwiZGF0YS1wcm9qZWN0LWluZGV4XCIsXG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIilcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgdXBkYXRlZEVsZW1lbnQuaW5uZXJIVE1MID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgIHVwZGF0ZWRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZVdpdGhJbnB1dCh1cGRhdGVkRWxlbWVudCk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHByb2plY3QudGFza3NMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrLnByb2plY3ROYW1lID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGlucHV0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHVwZGF0ZWRFbGVtZW50LCBpbnB1dCk7XG5cbiAgICAgICAgICAgICAgYXBwQm9hcmQuc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLCB1cGRhdGVQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICB1cGRhdGVQcm9qZWN0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdXBkYXRlUHJvamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlcGxhY2VXaXRoSW5wdXQobmV3UHJvamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyByZW1vdmUgYnV0dG9uXG4gICAgICAvLyBpZiBjb25kaXRpb24gcHJldmVudHMgcmVtb3ZpbmcgdGhlIG1haW4gY2F0ZWdvcmllc1xuICAgICAgaWYgKGkgPj0gUHJvamVjdHNOb3RUb1JlbW92ZS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgbmV3UmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgbmV3UmVtb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiLCBgJHtpfWApO1xuICAgICAgICBuZXdQcm9qZWN0VGl0bGVBbmRCdXR0b25zLmFwcGVuZENoaWxkKG5ld1JlbW92ZUJ1dHRvbik7XG5cbiAgICAgICAgbmV3UmVtb3ZlQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9ybUNyZWF0b3IuY29uZmlybURlbGV0ZVByb2plY3RFdmVudExpc3RlbmVycyhcbiAgICAgICAgICAgIG5ld1JlbW92ZUJ1dHRvbixcbiAgICAgICAgICAgIHByb2plY3RcbiAgICAgICAgICApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG5ld1JlbW92ZUJ1dHRvbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbmV3UmVtb3ZlQnV0dG9uSW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiZGVsZXRlIGljb25cIik7XG4gICAgICAgIG5ld1JlbW92ZUJ1dHRvbkltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBkZWxldGVJY29uKTtcbiAgICAgICAgbmV3UmVtb3ZlQnV0dG9uSW1hZ2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWluZGV4XCIsIGAke2l9YCk7XG4gICAgICAgIG5ld1JlbW92ZUJ1dHRvbkltYWdlLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyX2ljb25cIik7XG4gICAgICAgIG5ld1JlbW92ZUJ1dHRvbkltYWdlLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVfcHJvamVjdF9pY29uXCIpO1xuICAgICAgICBuZXdSZW1vdmVCdXR0b24uYXBwZW5kQ2hpbGQobmV3UmVtb3ZlQnV0dG9uSW1hZ2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA+PSBQcm9qZWN0c05vdFRvUmVtb3ZlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY29uc3QgbmV3QWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIG5ld0FkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZF90YXNrX2J1dHRvblwiKTtcbiAgICAgICAgbmV3QWRkVGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaW5kZXhcIiwgYCR7aX1gKTtcbiAgICAgICAgbmV3UHJvamVjdFRpdGxlQW5kQnV0dG9ucy5hcHBlbmRDaGlsZChuZXdBZGRUYXNrQnV0dG9uKTtcblxuICAgICAgICBjb25zdCBuZXdBZGRUYXNrQnV0dG9uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBuZXdBZGRUYXNrQnV0dG9uSW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiYWRkIGljb25cIik7XG4gICAgICAgIG5ld0FkZFRhc2tCdXR0b25JbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYWRkSWNvbik7XG4gICAgICAgIG5ld0FkZFRhc2tCdXR0b25JbWFnZS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhcl9pY29uXCIpO1xuICAgICAgICBuZXdBZGRUYXNrQnV0dG9uLmFwcGVuZENoaWxkKG5ld0FkZFRhc2tCdXR0b25JbWFnZSk7XG5cbiAgICAgICAgbmV3QWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgZm9ybUNyZWF0b3IuYWRkVGFza0Zvcm1FdmVudExpc3RlbmVycyhwcm9qZWN0LCBuZXdBZGRUYXNrQnV0dG9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyoqKioqKioqKioqKioqXG5cbiAgICAgIGkrKztcbiAgICB9KTtcbiAgfVxuXG4gIC8vIERpc3BsYXlzIHRoZSB0YXNrcyBpbiBhIFByb2plY3RcbiAgZnVuY3Rpb24gZGlzcGxheVRhc2tzKHByb2plY3QpIHtcbiAgICB0YXNrTGlzdFNvcnRpbmcocHJvamVjdC50YXNrc0xpc3QpO1xuXG4gICAgYXBwQm9hcmQuc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcblxuICAgIGNvbnN0IG5ld0NvbnRhaW5lckZvclByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5kaXNwbGF5X3Byb2plY3RfdGl0bGVcIlxuICAgICk7XG4gICAgY29uc3QgbmV3Q29udGFpbmVyRm9yVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXlfcHJvamVjdHNcIik7XG4gICAgbmV3Q29udGFpbmVyRm9yUHJvamVjdFRpdGxlLmlubmVySFRNTCA9IHByb2plY3QucHJvamVjdE5hbWU7XG4gICAgbmV3Q29udGFpbmVyRm9yVGFza3MuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIC8vIHNldHRpbmdzIGZvciBtYWluIGNhdGVnb3JpZXMuLlxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgLy9Ub2RheVxuICAgIGlmIChwcm9qZWN0ID09PSBhcHBCb2FyZC5wcm9qZWN0c0xpc3RbMF0pIHtcbiAgICAgIHByb2plY3QudGFza3NMaXN0ID0gYXBwQm9hcmQuZ2V0VGFza3NGb3JUb2RheVRvbW9ycm93KCk7XG4gICAgfVxuXG4gICAgLy9UaGlzIHdlZWtcbiAgICBpZiAocHJvamVjdCA9PT0gYXBwQm9hcmQucHJvamVjdHNMaXN0WzFdKSB7XG4gICAgICBwcm9qZWN0LnRhc2tzTGlzdCA9IGFwcEJvYXJkLmdldFRhc2tzRm9yV2VlaygpO1xuICAgIH1cblxuICAgIC8vVGhpcyBNb250aFxuICAgIGlmIChwcm9qZWN0ID09PSBhcHBCb2FyZC5wcm9qZWN0c0xpc3RbMl0pIHtcbiAgICAgIHByb2plY3QudGFza3NMaXN0ID0gYXBwQm9hcmQuZ2V0VGFza3NGb3JNb250aCgpO1xuICAgIH1cblxuICAgIC8vSW1wb3J0YW50XG4gICAgaWYgKHByb2plY3QgPT09IGFwcEJvYXJkLnByb2plY3RzTGlzdFszXSkge1xuICAgICAgcHJvamVjdC50YXNrc0xpc3QgPSBhcHBCb2FyZC5nZXRJbXBvcnRhbnRUYXNrcygpO1xuICAgIH1cblxuICAgIC8vRXhwaXJlZFxuICAgIGlmIChwcm9qZWN0ID09PSBhcHBCb2FyZC5wcm9qZWN0c0xpc3RbNF0pIHtcbiAgICAgIHByb2plY3QudGFza3NMaXN0ID0gYXBwQm9hcmQuZ2V0RXhwaXJlZFRhc2tzKCk7XG4gICAgfVxuXG4gICAgLy8gQWxsIFRhc2tzXG4gICAgaWYgKHByb2plY3QgPT09IGFwcEJvYXJkLnByb2plY3RzTGlzdFs1XSkge1xuICAgICAgcHJvamVjdC50YXNrc0xpc3QgPSBhcHBCb2FyZC5nZXRUYXNrc0Zyb21BbGxQcm9qZWN0cygpO1xuICAgIH1cblxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgLy9hZGRpbmcgdGhlIGhlYWRlciB0aXRsZXMgZm9yIHRhc2tzXG4gICAgKGZ1bmN0aW9uIGFkZEhlYWRlckZvclRhc2tzKCkge1xuICAgICAgY29uc3QgbmV3Q29udGFpbmVyRm9yU2luZ2xlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdDb250YWluZXJGb3JTaW5nbGVUYXNrLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIFwiY29udGFpbmVyX2Zvcl9zaW5nbGVfdGFza19oZWFkZXJcIlxuICAgICAgKTtcbiAgICAgIG5ld0NvbnRhaW5lckZvclRhc2tzLmFwcGVuZENoaWxkKG5ld0NvbnRhaW5lckZvclNpbmdsZVRhc2spO1xuXG4gICAgICBjb25zdCBuZXdUYXNrRGF5c0xlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3VGFza0RheXNMZWZ0RGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2R1ZV9kYXRlX2RheVwiKTtcbiAgICAgIG5ld1Rhc2tEYXlzTGVmdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgbmV3Q29udGFpbmVyRm9yU2luZ2xlVGFzay5hcHBlbmRDaGlsZChuZXdUYXNrRGF5c0xlZnREaXYpO1xuXG4gICAgICBjb25zdCBuZXdUYXNrRGF5c0xlZnRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgbmV3VGFza0RheXNMZWZ0SW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImV4cGFuZCBpY29uXCIpO1xuICAgICAgbmV3VGFza0RheXNMZWZ0SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBmaW5pc2hGbGFnSWNvbik7XG4gICAgICBuZXdUYXNrRGF5c0xlZnRJbWcuY2xhc3NMaXN0LmFkZChcInRpdGxlX2ljb25cIik7XG4gICAgICBuZXdUYXNrRGF5c0xlZnREaXYuYXBwZW5kQ2hpbGQobmV3VGFza0RheXNMZWZ0SW1nKTtcblxuICAgICAgY29uc3QgbmV3VGFza0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3VGFza0RhdGVEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tfZHVlX2RhdGVcIik7XG4gICAgICBuZXdUYXNrRGF0ZURpdi5pbm5lckhUTUwgPSBcIkR1ZSBEYXRlXCI7XG4gICAgICBuZXdDb250YWluZXJGb3JTaW5nbGVUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tEYXRlRGl2KTtcblxuICAgICAgY29uc3QgbmV3VGFza1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld1Rhc2tUaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGFza190aXRsZVwiKTtcbiAgICAgIG5ld1Rhc2tUaXRsZURpdi5pbm5lckhUTUwgPSBcIlRhc2sgVGl0bGVcIjtcbiAgICAgIG5ld0NvbnRhaW5lckZvclNpbmdsZVRhc2suYXBwZW5kQ2hpbGQobmV3VGFza1RpdGxlRGl2KTtcbiAgICB9KSgpO1xuXG4gICAgcHJvamVjdC50YXNrc0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgbmV3Q29udGFpbmVyRm9yU2luZ2xlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdDb250YWluZXJGb3JTaW5nbGVUYXNrLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJfZm9yX3NpbmdsZV90YXNrXCIpO1xuICAgICAgbmV3Q29udGFpbmVyRm9yVGFza3MuYXBwZW5kQ2hpbGQobmV3Q29udGFpbmVyRm9yU2luZ2xlVGFzayk7XG5cbiAgICAgIGNvbnN0IG5ld0NpcmNsZUZvclRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3Q2lyY2xlRm9yVGFzay5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlXCIpO1xuICAgICAgbmV3Q29udGFpbmVyRm9yU2luZ2xlVGFzay5hcHBlbmRDaGlsZChuZXdDaXJjbGVGb3JUYXNrKTtcblxuICAgICAgY29uc3QgbmV3VGFza0RheXNMZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld1Rhc2tEYXlzTGVmdERpdi5jbGFzc0xpc3QuYWRkKHRhc2sudW5pcXVlSUQpO1xuICAgICAgbmV3VGFza0RheXNMZWZ0RGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2R1ZV9kYXRlX2RheVwiKTtcbiAgICAgIG5ld1Rhc2tEYXlzTGVmdERpdi5jbGFzc0xpc3QuYWRkKHRhc2suZ2V0Q2xhc3NGb3JEdWVkYXRlKCkpO1xuICAgICAgbmV3VGFza0RheXNMZWZ0RGl2LmlubmVySFRNTCA9IHRhc2suZ2V0RGF5c0xlZnRTdGF0dXMoKTtcbiAgICAgIG5ld0NvbnRhaW5lckZvclNpbmdsZVRhc2suYXBwZW5kQ2hpbGQobmV3VGFza0RheXNMZWZ0RGl2KTtcblxuICAgICAgY29uc3QgbmV3VGFza0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3VGFza0RhdGVEaXYuY2xhc3NMaXN0LmFkZCh0YXNrLnVuaXF1ZUlEKTtcbiAgICAgIG5ld1Rhc2tEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2R1ZV9kYXRlXCIpO1xuICAgICAgLy8gbmV3VGFza0RhdGVEaXYuY2xhc3NMaXN0LmFkZCh0YXNrLmdldENsYXNzRm9yRHVlZGF0ZSgpKTtcbiAgICAgIG5ld1Rhc2tEYXRlRGl2LmlubmVySFRNTCA9IHRhc2suZm9ybWF0RGF0ZVN0cmluZygpO1xuICAgICAgbmV3Q29udGFpbmVyRm9yU2luZ2xlVGFzay5hcHBlbmRDaGlsZChuZXdUYXNrRGF0ZURpdik7XG5cbiAgICAgIGNvbnN0IG5ld1Rhc2tUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdUYXNrVGl0bGVEaXYuY2xhc3NMaXN0LmFkZCh0YXNrLnVuaXF1ZUlEKTtcbiAgICAgIG5ld1Rhc2tUaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGFza190aXRsZVwiKTtcbiAgICAgIG5ld1Rhc2tUaXRsZURpdi5pbm5lckhUTUwgPSB0YXNrLnRpdGxlO1xuICAgICAgbmV3Q29udGFpbmVyRm9yU2luZ2xlVGFzay5hcHBlbmRDaGlsZChuZXdUYXNrVGl0bGVEaXYpO1xuXG4gICAgICBjb25zdCBuZXdUYXNrQnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZXdUYXNrQnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRhc2sudW5pcXVlSUQpO1xuICAgICAgbmV3VGFza0J1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tfYnV0dG9uc19jb250YWluZXJcIik7XG4gICAgICBuZXdDb250YWluZXJGb3JTaW5nbGVUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b25zQ29udGFpbmVyKTtcblxuICAgICAgY29uc3QgbmV3Q2hlY2tUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIG5ld0NoZWNrVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2hlY2tfdGFza19idXR0b25cIik7XG4gICAgICBuZXdDaGVja1Rhc2tCdXR0b24uaW5uZXJIVE1MID0gdGFzay5pc1Rhc2tDaGVja2VkID8gXCImIzk3NDU7XCIgOiBcIiYjOTc0NDtcIjtcbiAgICAgIG5ld1Rhc2tCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NoZWNrVGFza0J1dHRvbik7XG4gICAgICBpZiAodGFzay5pc1Rhc2tDaGVja2VkKSB7XG4gICAgICAgIG5ld0NvbnRhaW5lckZvclNpbmdsZVRhc2suY2xhc3NMaXN0LmFkZChcImNoZWNrZWRcIik7XG4gICAgICB9XG5cbiAgICAgIG5ld0NoZWNrVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0YXNrLmlzVGFza0NoZWNrZWQgPSAhdGFzay5pc1Rhc2tDaGVja2VkO1xuICAgICAgICBkaXNwbGF5VGFza3MocHJvamVjdCk7IC8vIHNlbGVjdHMgdGhlIGNsb3Nlc3QgcGFyZW50XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgbmV3SW1wb3J0YW50VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBuZXdJbXBvcnRhbnRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjaGVja19wcmlvcml0eV9idXR0b25cIik7XG4gICAgICBuZXdJbXBvcnRhbnRUYXNrQnV0dG9uLmlubmVySFRNTCA9IFwiJiM5NzM0O1wiO1xuICAgICAgbmV3VGFza0J1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SW1wb3J0YW50VGFza0J1dHRvbik7XG4gICAgICBpZiAodGFzay5pc0ltcG9ydGFudCkge1xuICAgICAgICBuZXdJbXBvcnRhbnRUYXNrQnV0dG9uLmlubmVySFRNTCA9IFwiJiM5NzMzO1wiO1xuICAgICAgICBuZXdJbXBvcnRhbnRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgfVxuXG4gICAgICBuZXdJbXBvcnRhbnRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRhc2suaXNJbXBvcnRhbnQgPSAhdGFzay5pc0ltcG9ydGFudDtcbiAgICAgICAgZGlzcGxheVRhc2tzKHByb2plY3QpOyAvLyBzZWxlY3RzIHRoZSBjbG9zZXN0IHBhcmVudFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG5ld0VkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIG5ld0VkaXRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpbmZvX3Rhc2tfYnV0dG9uXCIpO1xuICAgICAgbmV3VGFza0J1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWRpdFRhc2tCdXR0b24pO1xuXG4gICAgICBuZXdFZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGZvcm1DcmVhdG9yLmVkaXRUYXNrRm9ybUV2ZW50TGlzdGVuZXJzKFxuICAgICAgICAgIHByb2plY3QsXG4gICAgICAgICAgdGFzayxcbiAgICAgICAgICBuZXdFZGl0VGFza0J1dHRvblxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG5ld0VkaXRUYXNrQnV0dG9uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgbmV3RWRpdFRhc2tCdXR0b25JbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJlZGl0IHRhc2sgaWNvblwiKTtcbiAgICAgIG5ld0VkaXRUYXNrQnV0dG9uSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGVkaXRQZW5jaWxJY29uKTtcbiAgICAgIG5ld0VkaXRUYXNrQnV0dG9uSW1hZ2UuY2xhc3NMaXN0LmFkZChcInNpZGViYXJfaWNvblwiKTtcbiAgICAgIG5ld0VkaXRUYXNrQnV0dG9uSW1hZ2UuY2xhc3NMaXN0LmFkZChcImVkaXRfdGFza19pY29uXCIpO1xuICAgICAgbmV3RWRpdFRhc2tCdXR0b24uYXBwZW5kQ2hpbGQobmV3RWRpdFRhc2tCdXR0b25JbWFnZSk7XG5cbiAgICAgIGNvbnN0IG5ld0luZm9UYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIG5ld0luZm9UYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpbmZvX3Rhc2tfYnV0dG9uXCIpO1xuICAgICAgbmV3VGFza0J1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SW5mb1Rhc2tCdXR0b24pO1xuICAgICAgZm9ybUNyZWF0b3IuYWRkVGFza0luZm9FdmVudExpc3RlbmVycyhuZXdJbmZvVGFza0J1dHRvbiwgdGFzayk7XG5cbiAgICAgIGNvbnN0IG5ld0luZm9UYXNrQnV0dG9uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgbmV3SW5mb1Rhc2tCdXR0b25JbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJpbmZvIGljb25cIik7XG4gICAgICBuZXdJbmZvVGFza0J1dHRvbkltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbmZvSWNvbik7XG4gICAgICBuZXdJbmZvVGFza0J1dHRvbkltYWdlLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyX2ljb25cIik7XG4gICAgICBuZXdJbmZvVGFza0J1dHRvbi5hcHBlbmRDaGlsZChuZXdJbmZvVGFza0J1dHRvbkltYWdlKTtcblxuICAgICAgY29uc3QgbmV3UmVtb3ZlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBuZXdSZW1vdmVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVfdGFza19idXR0b25cIik7XG4gICAgICBuZXdSZW1vdmVUYXNrQnV0dG9uLmlubmVySFRNTCA9IFwiJiN4MjcxNjtcIjtcbiAgICAgIG5ld1Rhc2tCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1JlbW92ZVRhc2tCdXR0b24pO1xuICAgICAgbmV3UmVtb3ZlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBhcHBCb2FyZC5yZW1vdmVUYXNrKHRhc2sudW5pcXVlSUQpO1xuICAgICAgICBkaXNwbGF5VGFza3MocHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7IGRpc3BsYXlQcm9qZWN0cywgZGlzcGxheVRhc2tzIH07XG59XG4iLCJpbXBvcnQgeyBhcHBCb2FyZCwgZG9tQ3JlYXRvciB9IGZyb20gXCIuLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdHNOb3RUb1JlbW92ZSB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza3MuanNcIjtcblxuaW1wb3J0IGFwcFByb2plY3RJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2FkZF9mb2xkZXJfaWNvbi5wbmdcIjtcblxuaW1wb3J0IHsgZm9ybWF0LCBkaWZmZXJlbmNlSW5EYXlzLCBzdGFydE9mRGF5LCBlbmRPZkRheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gRm9ybXNDcmVhdG9yKCkge1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX2NvbnRhaW5lclwiKTtcblxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5X2Zvcl9mb3JtXCIpO1xuICBjb25zdCBmb3Jtc01haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1zX21haW5fY29udGFpbmVyXCIpO1xuICBjb25zdCBpbmZvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS50YXNrX2luZm9cIik7XG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLmZvcm1fdGFza1wiKTtcbiAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLmZvcm1fZWRpdF90YXNrXCIpO1xuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS5mb3JtX3Byb2plY3RcIik7XG4gIGNvbnN0IGNvbmZpcm1EZWxldGVQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuZm9ybS5jb25maXJtX2RlbGV0ZV9wcm9qZWN0XCJcbiAgKTtcblxuICBjb25zdCBzdWJtaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcImZvcm0uZm9ybV9wcm9qZWN0IGJ1dHRvbi5mb3JtX3N1Ym1pdFwiXG4gICk7XG4gIGNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiZm9ybS5mb3JtX3Rhc2sgYnV0dG9uLmZvcm1fc3VibWl0XCJcbiAgKTtcbiAgY29uc3Qgc3VibWl0RWRpdFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiZm9ybS5mb3JtX2VkaXRfdGFzayBidXR0b24uZm9ybV9zdWJtaXRcIlxuICApO1xuXG4gIGNvbnN0IHN1Ym1pdENvbmZpcm1EZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcImZvcm0uY29uZmlybV9kZWxldGVfcHJvamVjdCBidXR0b24uZm9ybV9zdWJtaXRcIlxuICApO1xuXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICBmdW5jdGlvbiBhZGRQcm9qZWN0Rm9ybUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZF9wcm9qZWN0X2J1dHRvblwiKTtcbiAgICBjb25zdCBjbG9zZVByb2plY3RGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiZm9ybS5mb3JtX3Byb2plY3QgLmNsb3NlX2Zvcm1fYnV0dG9uXCJcbiAgICApO1xuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYWRkUHJvamVjdEJ1dHRvbkltYWdlLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImFkZCBwcm9qZWN0XCIpO1xuICAgIGFkZFByb2plY3RCdXR0b25JbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYXBwUHJvamVjdEljb24pO1xuICAgIGFkZFByb2plY3RCdXR0b25JbWFnZS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhcl9pY29uXCIpO1xuICAgIGFkZFByb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbkltYWdlKTtcblxuICAgIGZ1bmN0aW9uIG9wZW5Qcm9qZWN0Rm9ybSgpIHtcbiAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBwcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZm9ybV9wcm9qZWN0X3RpdGxlXCIpLmZvY3VzKCk7XG4gICAgICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LndoaWNoID09PSAxMykge1xuICAgICAgICAgIHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uZm9ybV9zdWJtaXRcIikuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsb3NlUHJvamVjdEZvcm0oKSB7XG4gICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG9wZW5Qcm9qZWN0Rm9ybSgpO1xuICAgIH0pO1xuICAgIGNsb3NlUHJvamVjdEZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNsb3NlUHJvamVjdEZvcm0oKTtcbiAgICB9KTtcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzdWJtaXRQcm9qZWN0KGV2ZW50KSB7XG4gICAgICBmdW5jdGlvbiBjbGVhclByb2plY3RGb3JtRmllbGRzKCkge1xuICAgICAgICB0aXRsZUZyb21Qcm9qZWN0Rm9ybS52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHRpdGxlRnJvbVByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIjZm9ybV9wcm9qZWN0X3RpdGxlXCJcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KHRpdGxlRnJvbVByb2plY3RGb3JtLnZhbHVlKTtcblxuICAgICAgYXBwQm9hcmQuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgIGRvbUNyZWF0b3IuZGlzcGxheVByb2plY3RzKCk7XG4gICAgICBkb21DcmVhdG9yLmRpc3BsYXlUYXNrcyhuZXdQcm9qZWN0KTtcblxuICAgICAgY2xlYXJQcm9qZWN0Rm9ybUZpZWxkcygpO1xuICAgIH1cblxuICAgIHN1Ym1pdFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBwcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZm9ybV9wcm9qZWN0X3RpdGxlXCIpLnZhbHVlID09IGZhbHNlXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3VibWl0UHJvamVjdChldmVudCk7XG4gICAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgZnVuY3Rpb24gYWRkVGFza0Zvcm1FdmVudExpc3RlbmVycyhwcm9qZWN0LCBhZGRUYXNrQnV0dG9uKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICBjb25zdCBjbG9zZVRhc2tGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiZm9ybS5mb3JtX3Rhc2sgLmNsb3NlX2Zvcm1fYnV0dG9uXCJcbiAgICApO1xuICAgIGZ1bmN0aW9uIG9wZW5UYXNrRm9ybSgpIHtcbiAgICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB0YXNrRm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZm9ybV90YXNrX3RpdGxlXCIpLmZvY3VzKCk7XG4gICAgICB0YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LndoaWNoID09PSAxMykge1xuICAgICAgICAgIHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uZm9ybV9zdWJtaXRcIikuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XG4gICAgICB0YXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBvcGVuVGFza0Zvcm0oKTtcbiAgICB9KTtcbiAgICBjbG9zZVRhc2tGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjbG9zZVRhc2tGb3JtKCk7XG4gICAgfSk7XG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xvc2VUYXNrRm9ybSgpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gc3VibWl0VGFzayhldmVudCkge1xuICAgICAgZnVuY3Rpb24gY2xlYXJUYXNrRm9ybUZpZWxkcygpIHtcbiAgICAgICAgdGl0bGVGcm9tVGFza0Zvcm0udmFsdWUgPSBcIlwiO1xuICAgICAgICBkZXNjcmlwdGlvbkZyb21UYXNrRm9ybS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRhdGVGcm9tVGFza0Zvcm0udmFsdWUgPSBcIlwiO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHRpdGxlRnJvbVRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtX3Rhc2tfdGl0bGVcIik7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbkZyb21UYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiI2Zvcm1fdGFza19kZXNjcmlwdGlvblwiXG4gICAgICApO1xuICAgICAgY29uc3QgZGF0ZUZyb21UYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybV90YXNrX2RhdGVcIik7XG5cbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKFxuICAgICAgICB0aXRsZUZyb21UYXNrRm9ybS52YWx1ZSxcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0LnByb2plY3ROYW1lXG4gICAgICApO1xuICAgICAgaWYgKGRlc2NyaXB0aW9uRnJvbVRhc2tGb3JtLnZhbHVlICE9IGZhbHNlKSB7XG4gICAgICAgIG5ld1Rhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbkZyb21UYXNrRm9ybS52YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRlRnJvbVRhc2tGb3JtLnZhbHVlICE9IGZhbHNlKSB7XG4gICAgICAgIG5ld1Rhc2suZHVlRGF0ZSA9IGRhdGVGcm9tVGFza0Zvcm0udmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdGVkUHJvamVjdC5hZGRUYXNrKG5ld1Rhc2spO1xuXG4gICAgICBjbGVhclRhc2tGb3JtRmllbGRzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAvLyBJTVBPUlRBTlQ6IGRvIG5vdCBkZWxldGUgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH0gZnJvbSB0aGUgZXZlbnRMaXN0ZW5lciFcbiAgICBzdWJtaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRhc2tGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNmb3JtX3Rhc2tfdGl0bGVcIikudmFsdWUgPT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VibWl0VGFzayhldmVudCk7XG4gICAgICAgIGRvbUNyZWF0b3IuZGlzcGxheVRhc2tzKHByb2plY3QpO1xuICAgICAgICBjbG9zZVRhc2tGb3JtKCk7XG5cbiAgICAgICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgfSxcbiAgICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XG4gICAgKTtcblxuICAgIG9wZW5UYXNrRm9ybSgpO1xuICB9XG5cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIGZ1bmN0aW9uIGVkaXRUYXNrRm9ybUV2ZW50TGlzdGVuZXJzKHByb2plY3QsIHRhc2ssIGVkaXRUYXNrQnV0dG9uKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSB0YXNrO1xuICAgIGNvbnN0IGNsb3NlVGFza0Zvcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCJmb3JtLmZvcm1fZWRpdF90YXNrIC5jbG9zZV9mb3JtX2J1dHRvblwiXG4gICAgKTtcbiAgICBmdW5jdGlvbiBvcGVuVGFza0Zvcm0oKSB7XG4gICAgICBlZGl0VGFza0Zvcm0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIGVkaXRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZm9ybV9lZGl0X3Rhc2tfdGl0bGVcIikuZm9jdXMoKTtcbiAgICAgIGVkaXRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LndoaWNoID09PSAxMykge1xuICAgICAgICAgIGVkaXRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmZvcm1fZWRpdF9zdWJtaXRcIikuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRpdGxlRnJvbUVkaXRUYXNrRm9ybS52YWx1ZSA9IHNlbGVjdGVkVGFzay50aXRsZTtcbiAgICAgIGRlc2NyaXB0aW9uRnJvbUVkaXRUYXNrRm9ybS52YWx1ZSA9IHNlbGVjdGVkVGFzay5kZXNjcmlwdGlvbjtcbiAgICAgIGlmIChzZWxlY3RlZFRhc2suZHVlRGF0ZSAhPT0gXCJcIikge1xuICAgICAgICBkYXRlRnJvbUVkaXRUYXNrRm9ybS52YWx1ZSA9IHNlbGVjdGVkVGFzay5kdWVEYXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9zZVRhc2tGb3JtKCkge1xuICAgICAgZWRpdFRhc2tGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIGVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBvcGVuVGFza0Zvcm0oKTtcbiAgICB9KTtcbiAgICBjbG9zZVRhc2tGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjbG9zZVRhc2tGb3JtKCk7XG4gICAgfSk7XG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xvc2VUYXNrRm9ybSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGl0bGVGcm9tRWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiI2Zvcm1fZWRpdF90YXNrX3RpdGxlXCJcbiAgICApO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uRnJvbUVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiNmb3JtX2VkaXRfdGFza19kZXNjcmlwdGlvblwiXG4gICAgKTtcblxuICAgIGNvbnN0IGRhdGVGcm9tRWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtX2VkaXRfdGFza19kYXRlXCIpO1xuXG4gICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRUYXNrKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aXRsZUZyb21FZGl0VGFza0Zvcm0udmFsdWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRlc2NyaXB0aW9uRnJvbUVkaXRUYXNrRm9ybS52YWx1ZSk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0ZUZyb21FZGl0VGFza0Zvcm0udmFsdWUpO1xuXG4gICAgY29uc3Qgc3VibWl0RWRpdFRhc2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGZ1bmN0aW9uIGNsZWFyVGFza0Zvcm1GaWVsZHMoKSB7XG4gICAgICAgIHRpdGxlRnJvbUVkaXRUYXNrRm9ybS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uRnJvbUVkaXRUYXNrRm9ybS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRhdGVGcm9tRWRpdFRhc2tGb3JtLnZhbHVlID0gXCJcIjtcbiAgICAgIH1cbiAgICAgIHRhc2sudGl0bGUgPSB0aXRsZUZyb21FZGl0VGFza0Zvcm0udmFsdWU7XG4gICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25Gcm9tRWRpdFRhc2tGb3JtLnZhbHVlO1xuICAgICAgdGFzay5kdWVEYXRlID0gZGF0ZUZyb21FZGl0VGFza0Zvcm0udmFsdWU7XG5cbiAgICAgIGlmIChkZXNjcmlwdGlvbkZyb21FZGl0VGFza0Zvcm0udmFsdWUgIT0gZmFsc2UpIHtcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uRnJvbUVkaXRUYXNrRm9ybS52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0ZUZyb21FZGl0VGFza0Zvcm0udmFsdWUgIT0gZmFsc2UpIHtcbiAgICAgICAgdGFzay5kdWVEYXRlID0gZGF0ZUZyb21FZGl0VGFza0Zvcm0udmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrLmR1ZURhdGUgPSBcIlwiO1xuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2xlYXJUYXNrRm9ybUZpZWxkcygpO1xuICAgIH07XG5cbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIC8vIElNUE9SVEFOVDogZG8gbm90IGRlbGV0ZSB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfSBmcm9tIHRoZSBldmVudExpc3RlbmVyIVxuICAgIHN1Ym1pdEVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGVkaXRUYXNrRm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZm9ybV9lZGl0X3Rhc2tfdGl0bGVcIikudmFsdWUgPT1cbiAgICAgICAgICBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VibWl0RWRpdFRhc2soZXZlbnQpO1xuICAgICAgICBkb21DcmVhdG9yLmRpc3BsYXlUYXNrcyhwcm9qZWN0KTtcbiAgICAgICAgY2xvc2VUYXNrRm9ybSgpO1xuXG4gICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgIH0sXG4gICAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxuICAgICk7XG5cbiAgICBvcGVuVGFza0Zvcm0oKTtcbiAgfVxuXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICBmdW5jdGlvbiBhZGRUYXNrSW5mb0V2ZW50TGlzdGVuZXJzKG9wZW5JbmZvQnV0dG9uLCB0YXNrKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gdGFzaztcbiAgICBjb25zdCBpbmZvVGl0bGVGaWVsZCA9IGluZm9Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCIuZmlsbF90YXNrX2luZm9fdGl0bGVcIik7XG4gICAgY29uc3QgaW5mb0Rlc2NyaXB0aW9uRmllbGQgPSBpbmZvRm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuZmlsbF90YXNrX2luZm9fZGVzY3JpcHRpb25cIlxuICAgICk7XG4gICAgY29uc3QgaW5mb0R1ZURhdGVGaWVsZCA9IGluZm9Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCIuZmlsbF90YXNrX2luZm9fZHVlZGF0ZVwiKTtcbiAgICBjb25zdCBpbmZvSW1wb3J0YW5jZUZpZWxkID0gaW5mb0Zvcm0ucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmZpbGxfdGFza19pbmZvX2ltcG9ydGFuY2VcIlxuICAgICk7XG4gICAgY29uc3QgaW5mb1Byb2plY3RGaWVsZCA9IGluZm9Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCIuZmlsbF90YXNrX2luZm9fcHJvamVjdFwiKTtcblxuICAgIGNvbnN0IGNsb3NlSW5mb0Zvcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCJmb3JtLnRhc2tfaW5mbyAuY2xvc2VfZm9ybV9idXR0b25cIlxuICAgICk7XG5cbiAgICBmdW5jdGlvbiBzZXRUYXNrSW5mb0ZpZWxkcygpIHtcbiAgICAgIGluZm9UaXRsZUZpZWxkLmlubmVySFRNTCA9IHNlbGVjdGVkVGFzay50aXRsZTtcbiAgICAgIGluZm9EZXNjcmlwdGlvbkZpZWxkLmlubmVySFRNTCA9IHNlbGVjdGVkVGFzay5kZXNjcmlwdGlvbjtcblxuICAgICAgaWYgKHNlbGVjdGVkVGFzay5kdWVEYXRlID09IGZhbHNlKSB7XG4gICAgICAgIGluZm9EdWVEYXRlRmllbGQuaW5uZXJIVE1MID0gXCJub3Qgc3RhdGVkXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvRHVlRGF0ZUZpZWxkLmlubmVySFRNTCA9IGZvcm1hdChcbiAgICAgICAgICBuZXcgRGF0ZShzZWxlY3RlZFRhc2suZHVlRGF0ZSksXG4gICAgICAgICAgXCJNTU1NIGRkLCB5eXl5XCJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaW5mb0ltcG9ydGFuY2VGaWVsZC5pbm5lckhUTUwgPSBzZWxlY3RlZFRhc2suaXNJbXBvcnRhbnRcbiAgICAgICAgPyBcIkhpZ2hcIlxuICAgICAgICA6IFwiTm9ybWFsXCI7XG4gICAgICBpbmZvUHJvamVjdEZpZWxkLmlubmVySFRNTCA9IHNlbGVjdGVkVGFzay5wcm9qZWN0TmFtZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuSW5mb0Zvcm0oKSB7XG4gICAgICBpbmZvRm9ybS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9zZUluZm9Gb3JtKCkge1xuICAgICAgaW5mb0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gICAgb3BlbkluZm9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG9wZW5JbmZvRm9ybSgpO1xuICAgICAgc2V0VGFza0luZm9GaWVsZHMoKTtcbiAgICB9KTtcbiAgICBjbG9zZUluZm9Gb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjbG9zZUluZm9Gb3JtKCk7XG4gICAgfSk7XG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xvc2VJbmZvRm9ybSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIGZ1bmN0aW9uIGNvbmZpcm1EZWxldGVQcm9qZWN0RXZlbnRMaXN0ZW5lcnMoXG4gICAgb3BlbkNvbmZpcm1EZWxldGVQcm9qZWN0QnV0dG9uLFxuICAgIHByb2plY3RcbiAgKSB7XG4gICAgY29uc3QgY2xvc2VDb25maXJtRGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcImZvcm0uY29uZmlybV9kZWxldGVfcHJvamVjdCAuY2xvc2VfZm9ybV9idXR0b25cIlxuICAgICk7XG5cbiAgICBmdW5jdGlvbiBvcGVuQ29uZmlybURlbGV0ZVByb2plY3RGb3JtKCkge1xuICAgICAgY29uZmlybURlbGV0ZVByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsb3NlQ29uZmlybURlbGV0ZVByb2plY3RGb3JtKCkge1xuICAgICAgY29uZmlybURlbGV0ZVByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIG9wZW5Db25maXJtRGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgb3BlbkNvbmZpcm1EZWxldGVQcm9qZWN0Rm9ybSgpO1xuICAgIH0pO1xuICAgIGNsb3NlQ29uZmlybURlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNsb3NlQ29uZmlybURlbGV0ZVByb2plY3RGb3JtKCk7XG4gICAgfSk7XG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xvc2VDb25maXJtRGVsZXRlUHJvamVjdEZvcm0oKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHN1Ym1pdERlbGV0ZVByb2plY3RSZXF1ZXN0KCkge1xuICAgICAgbGV0IHByb2plY3RJbmRleCA9IG9wZW5Db25maXJtRGVsZXRlUHJvamVjdEJ1dHRvbi5kYXRhc2V0LnByb2plY3RJbmRleDtcbiAgICAgIGFwcEJvYXJkLnJlbW92ZVByb2plY3QocHJvamVjdEluZGV4KTtcbiAgICB9XG5cbiAgICBzdWJtaXRDb25maXJtRGVsZXRlUHJvamVjdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBzdWJtaXREZWxldGVQcm9qZWN0UmVxdWVzdCgpO1xuXG4gICAgICBkb21DcmVhdG9yLmRpc3BsYXlQcm9qZWN0cygpO1xuICAgICAgY2xvc2VDb25maXJtRGVsZXRlUHJvamVjdEZvcm0oKTtcbiAgICB9O1xuXG4gICAgb3BlbkNvbmZpcm1EZWxldGVQcm9qZWN0Rm9ybSgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRQcm9qZWN0Rm9ybUV2ZW50TGlzdGVuZXJzLFxuICAgIGFkZFRhc2tGb3JtRXZlbnRMaXN0ZW5lcnMsXG4gICAgZWRpdFRhc2tGb3JtRXZlbnRMaXN0ZW5lcnMsXG4gICAgYWRkVGFza0luZm9FdmVudExpc3RlbmVycyxcbiAgICBjb25maXJtRGVsZXRlUHJvamVjdEV2ZW50TGlzdGVuZXJzLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyBhcHBCb2FyZCB9IGZyb20gXCIuLi9pbmRleC5qc1wiO1xuXG5pbXBvcnQge1xuICBmb3JtYXQsXG4gIGRpZmZlcmVuY2VJbkRheXMsXG4gIHN0YXJ0T2ZEYXksXG4gIGVuZE9mRGF5LFxuICBzdGFydE9mV2VlayxcbiAgYWRkRGF5cyxcbn0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0c05vdFRvUmVtb3ZlID0gW1xuICBcIlRvZGF5L1RvbW9ycm93XCIsXG4gIFwiTmV4dCA3IERheXNcIixcbiAgXCJOZXh0IDMwIERheXNcIixcbiAgXCJJbXBvcnRhbnRcIixcbiAgXCJFeHBpcmVkXCIsXG4gIFwiQWxsIFRhc2tzXCIsXG4gIFwiR2VuZXJhbCBUYXNrc1wiLFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3QocHJvamVjdF9uYW1lKSB7XG4gIGxldCBwcm9qZWN0TmFtZSA9IHByb2plY3RfbmFtZTtcbiAgbGV0IGlzUHJvamVjdENoZWNrZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBzZXRQcm9qZWN0TmFtZShuZXdfcHJvamVjdE5hbWUpIHtcbiAgICB0aGlzLnByb2plY3ROYW1lID0gbmV3X3Byb2plY3ROYW1lO1xuICB9XG5cbiAgbGV0IHRhc2tzTGlzdCA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xuICAgIHRoaXMudGFza3NMaXN0LnB1c2godGFzayk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlVGFzayhpbmRleF90b19yZW1vdmUsIG5ld190YXNrKSB7XG4gICAgdGhpcy50YXNrc0xpc3Quc3BsaWNlKGluZGV4X3RvX3JlbW92ZSwgMSwgbmV3X3Rhc2spO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0TmFtZSxcbiAgICB0YXNrc0xpc3QsXG4gICAgaXNQcm9qZWN0Q2hlY2tlZCxcbiAgICBhZGRUYXNrLFxuICAgIHJlcGxhY2VUYXNrLFxuICAgIHNldFByb2plY3ROYW1lLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGVzdFByb2plY3RzKCkge1xuICBpZiAoYXBwQm9hcmQucHJvamVjdHNMaXN0Lmxlbmd0aCAhPT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZ1dHVyZUV2ZW50RGF0ZShkYXlzX2xhdGVyKSB7XG4gICAgY29uc3Qgc3RhcnRPZkN1cnJlbnRXZWVrID0gc3RhcnRPZldlZWsobmV3IERhdGUoKSwgeyB3ZWVrU3RhcnRzT246IDEgfSk7IC8vIEFzc3VtaW5nIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrXG5cbiAgICBjb25zdCBmdXR1cmVEYXRlID0gZm9ybWF0KFxuICAgICAgYWRkRGF5cyhzdGFydE9mQ3VycmVudFdlZWssIGRheXNfbGF0ZXIpLFxuICAgICAgXCJ5eXl5LU1NLWRkXCJcbiAgICApO1xuXG4gICAgcmV0dXJuIGZ1dHVyZURhdGU7XG4gIH1cblxuICBmdW5jdGlvbiBpc0RhdGVQYXN0KGRhdGUpIHtcbiAgICAvL2RhdGUgaW4gXCJ5eXl5LU1NLWRkXCIgZm9ybWF0IGFzIGlucHV0XG5cbiAgICBsZXQgZGF5c0JldHdlZW4gPSBkaWZmZXJlbmNlSW5EYXlzKG5ldyBEYXRlKGRhdGUpLCBuZXcgRGF0ZSgpKTtcbiAgICByZXR1cm4gZGF5c0JldHdlZW4gPCAwID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLy9hZGRpbmcgZGVmYXVsdCBwcm9qZWN0c1xuICBQcm9qZWN0c05vdFRvUmVtb3ZlLmZvckVhY2goKHRpdGxlKSA9PiB7XG4gICAgYXBwQm9hcmQuYWRkUHJvamVjdChQcm9qZWN0KHRpdGxlKSk7XG4gIH0pO1xuXG4gIC8vYWRkaW5nIHRlc3QgcHJvamVjdHNcbiAgYXBwQm9hcmQuYWRkUHJvamVjdChQcm9qZWN0KFwiV29ya1wiKSk7XG4gIGFwcEJvYXJkLmFkZFByb2plY3QoUHJvamVjdChcIkd5bVwiKSk7XG4gIGFwcEJvYXJkLmFkZFByb2plY3QoUHJvamVjdChcIkJpcnRoZGF5c1wiKSk7XG4gIGFwcEJvYXJkLmFkZFByb2plY3QoUHJvamVjdChcIkNvZGluZyBQcm9qZWN0c1wiKSk7XG5cbiAgbGV0IHRlc3RUYXNrXzEgPSBUYXNrKFwiY2FsbCB5b3VyIHBhcmVudHNcIiwgUHJvamVjdHNOb3RUb1JlbW92ZVs2XSk7XG4gIHRlc3RUYXNrXzEuZGVzY3JpcHRpb24gPSBcIndpZSBnZWh0J3M/XCI7XG4gIHRlc3RUYXNrXzEuZHVlRGF0ZSA9IGZvcm1hdChuZXcgRGF0ZSgpLCBcInl5eXktTU0tZGRcIik7XG4gIHRlc3RUYXNrXzEudW5pcXVlSUQgPSAxMDtcbiAgYXBwQm9hcmQucHJvamVjdHNMaXN0WzZdLmFkZFRhc2sodGVzdFRhc2tfMSk7XG5cbiAgbGV0IHRlc3RUYXNrXzIgPSBUYXNrKFwiY2FyIG1haW50ZW5hbmNlXCIsIFByb2plY3RzTm90VG9SZW1vdmVbNl0pO1xuICB0ZXN0VGFza18yLmRlc2NyaXB0aW9uID0gXCJ3ZWlyZCBub2lzZSBmcm9tIHRoZSBnZWFyLi5cIjtcbiAgdGVzdFRhc2tfMi5kdWVEYXRlID0gZ2V0RnV0dXJlRXZlbnREYXRlKDE5KTtcbiAgdGVzdFRhc2tfMi5pc0ltcG9ydGFudCA9IHRydWU7XG4gIHRlc3RUYXNrXzIudW5pcXVlSUQgPSAyMDtcbiAgYXBwQm9hcmQucHJvamVjdHNMaXN0WzZdLmFkZFRhc2sodGVzdFRhc2tfMik7XG5cbiAgbGV0IHRlc3RUYXNrXzMgPSBUYXNrKFwiT3JnYW5pc2UgZW1lcmdlbmN5IHByb2NlZHVyZXNcIiwgXCJXb3JrXCIpO1xuICB0ZXN0VGFza18zLmRlc2NyaXB0aW9uID0gXCJBaXJwbGFuZSBlbWVyZ2VuY3kgcHJvY2VkdXJlc1wiO1xuICB0ZXN0VGFza18zLmR1ZURhdGUgPSBnZXRGdXR1cmVFdmVudERhdGUoMyk7XG4gIHRlc3RUYXNrXzMuaXNUYXNrQ2hlY2tlZCA9IGlzRGF0ZVBhc3QodGVzdFRhc2tfMy5kdWVEYXRlKSA/IHRydWUgOiBmYWxzZTtcbiAgdGVzdFRhc2tfMy51bmlxdWVJRCA9IDMwO1xuICBhcHBCb2FyZC5wcm9qZWN0c0xpc3RbN10uYWRkVGFzayh0ZXN0VGFza18zKTtcblxuICBsZXQgdGVzdFRhc2tfNCA9IFRhc2soXCJNZWV0aW5nIHdpdGggdGhlIENUT1wiLCBcIldvcmtcIik7XG4gIHRlc3RUYXNrXzQuZGVzY3JpcHRpb24gPSBcIk1lZGljYWwgZGV2aWNlIGNvc3RzIGFyZSBpbmNyZWFzaW5nXCI7XG4gIHRlc3RUYXNrXzQuZHVlRGF0ZSA9IGdldEZ1dHVyZUV2ZW50RGF0ZSg0KTtcbiAgdGVzdFRhc2tfNC5pc1Rhc2tDaGVja2VkID0gaXNEYXRlUGFzdCh0ZXN0VGFza180LmR1ZURhdGUpID8gdHJ1ZSA6IGZhbHNlO1xuICB0ZXN0VGFza180LmlzSW1wb3J0YW50ID0gdHJ1ZTtcbiAgdGVzdFRhc2tfNC51bmlxdWVJRCA9IDQwO1xuICBhcHBCb2FyZC5wcm9qZWN0c0xpc3RbN10uYWRkVGFzayh0ZXN0VGFza180KTtcblxuICBsZXQgdGVzdFRhc2tfNSA9IFRhc2soXCJUZWFtIE1lZXRpbmdcIiwgXCJXb3JrXCIpO1xuICB0ZXN0VGFza181LmRlc2NyaXB0aW9uID0gXCJ3ZWVrbHkgdGVhbSBtZWV0aW5nXCI7XG4gIHRlc3RUYXNrXzUuZHVlRGF0ZSA9IGdldEZ1dHVyZUV2ZW50RGF0ZSg0KTtcbiAgdGVzdFRhc2tfNS5pc1Rhc2tDaGVja2VkID0gaXNEYXRlUGFzdCh0ZXN0VGFza181LmR1ZURhdGUpID8gdHJ1ZSA6IGZhbHNlO1xuICB0ZXN0VGFza181LnVuaXF1ZUlEID0gNTA7XG4gIGFwcEJvYXJkLnByb2plY3RzTGlzdFs3XS5hZGRUYXNrKHRlc3RUYXNrXzUpO1xuXG4gIGxldCB0ZXN0VGFza182ID0gVGFzayhcIkNoZXN0IERheVwiLCBcIkd5bVwiKTtcbiAgdGVzdFRhc2tfNi5kZXNjcmlwdGlvbiA9IFwiSW50ZXJuYXRpb25hbCBDaGVzdCBkYXlcIjtcbiAgdGVzdFRhc2tfNi5kdWVEYXRlID0gZ2V0RnV0dXJlRXZlbnREYXRlKDApO1xuICB0ZXN0VGFza182LmlzVGFza0NoZWNrZWQgPSBpc0RhdGVQYXN0KHRlc3RUYXNrXzYuZHVlRGF0ZSkgPyB0cnVlIDogZmFsc2U7XG4gIHRlc3RUYXNrXzYudW5pcXVlSUQgPSA2MDtcbiAgYXBwQm9hcmQucHJvamVjdHNMaXN0WzhdLmFkZFRhc2sodGVzdFRhc2tfNik7XG5cbiAgbGV0IHRlc3RUYXNrXzcgPSBUYXNrKFwiQXJtIERheVwiLCBcIkd5bVwiKTtcbiAgdGVzdFRhc2tfNy5kZXNjcmlwdGlvbiA9IFwid29ya2luZyBvbiB0aG9zZSBndW5zXCI7XG4gIHRlc3RUYXNrXzcuZHVlRGF0ZSA9IGdldEZ1dHVyZUV2ZW50RGF0ZSgyKTtcbiAgdGVzdFRhc2tfNy5pc1Rhc2tDaGVja2VkID0gaXNEYXRlUGFzdCh0ZXN0VGFza183LmR1ZURhdGUpID8gdHJ1ZSA6IGZhbHNlO1xuICB0ZXN0VGFza183LmlzSW1wb3J0YW50ID0gdHJ1ZTtcbiAgdGVzdFRhc2tfNy51bmlxdWVJRCA9IDcwO1xuICBhcHBCb2FyZC5wcm9qZWN0c0xpc3RbOF0uYWRkVGFzayh0ZXN0VGFza183KTtcblxuICBsZXQgdGVzdFRhc2tfOCA9IFRhc2soXCJDaGVzdCBhbmQgQXJtIERheVwiLCBcIkd5bVwiKTtcbiAgdGVzdFRhc2tfOC5kZXNjcmlwdGlvbiA9IFwiYnJvb29cIjtcbiAgdGVzdFRhc2tfOC5kdWVEYXRlID0gZ2V0RnV0dXJlRXZlbnREYXRlKDQpO1xuICB0ZXN0VGFza184LmlzVGFza0NoZWNrZWQgPSBpc0RhdGVQYXN0KHRlc3RUYXNrXzguZHVlRGF0ZSkgPyB0cnVlIDogZmFsc2U7XG4gIHRlc3RUYXNrXzgudW5pcXVlSUQgPSA4MDtcbiAgYXBwQm9hcmQucHJvamVjdHNMaXN0WzhdLmFkZFRhc2sodGVzdFRhc2tfOCk7XG5cbiAgbGV0IHRlc3RUYXNrXzkgPSBUYXNrKFwiQnJvdGhlciBiaXJ0aGRheVwiLCBcIkJpcnRoZGF5c1wiKTtcbiAgdGVzdFRhc2tfOS5kZXNjcmlwdGlvbiA9IFwiYnJvb29cIjtcbiAgdGVzdFRhc2tfOS5kdWVEYXRlID0gXCIyMDI0LTAxLTI2XCI7XG4gIHRlc3RUYXNrXzkudW5pcXVlSUQgPSA5MDtcbiAgYXBwQm9hcmQucHJvamVjdHNMaXN0WzldLmFkZFRhc2sodGVzdFRhc2tfOSk7XG5cbiAgbGV0IHRlc3RUYXNrXzEwID0gVGFzayhcIk1vbSBiaXJ0aGRheVwiLCBcIkJpcnRoZGF5c1wiKTtcbiAgdGVzdFRhc2tfMTAuZGVzY3JpcHRpb24gPSBcInllZWV5XCI7XG4gIHRlc3RUYXNrXzEwLmR1ZURhdGUgPSBcIjIwMjQtMDMtMThcIjtcbiAgdGVzdFRhc2tfMTAudW5pcXVlSUQgPSAxMDA7XG4gIGFwcEJvYXJkLnByb2plY3RzTGlzdFs5XS5hZGRUYXNrKHRlc3RUYXNrXzEwKTtcblxuICBsZXQgdGVzdFRhc2tfMTEgPSBUYXNrKFwiRGFkIGJpcnRoZGF5XCIsIFwiQmlydGhkYXlzXCIpO1xuICB0ZXN0VGFza18xMS5kZXNjcmlwdGlvbiA9IFwieXVhYWF5XCI7XG4gIHRlc3RUYXNrXzExLmR1ZURhdGUgPSBcIjIwMjQtMDItMTNcIjtcbiAgdGVzdFRhc2tfMTEudW5pcXVlSUQgPSAxMTA7XG4gIGFwcEJvYXJkLnByb2plY3RzTGlzdFs5XS5hZGRUYXNrKHRlc3RUYXNrXzExKTtcblxuICBsZXQgdGVzdFRhc2tfMTIgPSBUYXNrKFwiV2VhdGhlciBBcHBcIiwgXCJDb2RpbmcgUHJvamVjdHNcIik7XG4gIHRlc3RUYXNrXzEyLmRlc2NyaXB0aW9uID0gXCJ3b3JraW5nIHdpdGggQVBJc1wiO1xuICB0ZXN0VGFza18xMi5kdWVEYXRlID0gZ2V0RnV0dXJlRXZlbnREYXRlKDI3KTtcbiAgdGVzdFRhc2tfMTIudW5pcXVlSUQgPSAxMjA7XG4gIGFwcEJvYXJkLnByb2plY3RzTGlzdFsxMF0uYWRkVGFzayh0ZXN0VGFza18xMik7XG5cbiAgbGV0IHRlc3RUYXNrXzEzID0gVGFzayhcIlRvIERvIEFwcFwiLCBcIkNvZGluZyBQcm9qZWN0c1wiKTtcbiAgdGVzdFRhc2tfMTMuZGVzY3JpcHRpb24gPSBcImh0dHBzOi8vYmVya2dpcmdpbi5naXRodWIuaW8vVG9fRG9fQXBwL1wiO1xuICB0ZXN0VGFza18xMy5kdWVEYXRlID0gXCIyMDIzLTAzLTI2XCI7XG4gIHRlc3RUYXNrXzEzLmlzSW1wb3J0YW50ID0gdHJ1ZTtcbiAgdGVzdFRhc2tfMTMuaXNUYXNrQ2hlY2tlZCA9IHRydWU7XG4gIHRlc3RUYXNrXzEzLnVuaXF1ZUlEID0gMTMwO1xuICBhcHBCb2FyZC5wcm9qZWN0c0xpc3RbMTBdLmFkZFRhc2sodGVzdFRhc2tfMTMpO1xuXG4gIGxldCB0ZXN0VGFza18xNCA9IFRhc2soXCJDb25uZWN0IEZvdXIgR2FtZVwiLCBcIkNvZGluZyBQcm9qZWN0c1wiKTtcbiAgdGVzdFRhc2tfMTQuZGVzY3JpcHRpb24gPSBcImh0dHBzOi8vYmVya2dpcmdpbi5naXRodWIuaW8vQ29ubmVjdC1Gb3VyL1wiO1xuICB0ZXN0VGFza18xNC5kdWVEYXRlID0gXCIyMDIzLTAzLTEyXCI7XG4gIHRlc3RUYXNrXzE0LmlzVGFza0NoZWNrZWQgPSB0cnVlO1xuICB0ZXN0VGFza18xNC51bmlxdWVJRCA9IDE0MDtcbiAgYXBwQm9hcmQucHJvamVjdHNMaXN0WzEwXS5hZGRUYXNrKHRlc3RUYXNrXzE0KTtcbn1cbiIsImltcG9ydCB7XG4gIGNvbXBhcmVBc2MsXG4gIGZvcm1hdCxcbiAgZGlmZmVyZW5jZUluRGF5cyxcbiAgc3RhcnRPZkRheSxcbiAgZW5kT2ZEYXksXG59IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gVGFzayhhcmdfdGl0bGUsIGFyZ19wcm9qZWN0X25hbWUpIHtcbiAgbGV0IHRpdGxlID0gYXJnX3RpdGxlO1xuICBsZXQgcHJvamVjdE5hbWUgPSBhcmdfcHJvamVjdF9uYW1lO1xuXG4gIGxldCB1bmlxdWVJRCA9IERhdGUubm93KCk7XG4gIGxldCBkZXNjcmlwdGlvbiA9IFwiXCI7XG4gIGxldCBkdWVEYXRlID0gXCJcIjtcbiAgbGV0IGlzSW1wb3J0YW50ID0gZmFsc2U7IC8vYnkgZGVmYXVsdCB0YXNrcyBoYXZlIG5vcm1hbCBwcmlvcml0eVxuICBsZXQgaXNUYXNrQ2hlY2tlZCA9IGZhbHNlOyAvL2J5IGRlZmF1bHQgdGFza3MgYXJlIG5vdCBkb25lXG5cbiAgZnVuY3Rpb24gZ2V0RGF5c0xlZnQodGFzaykge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG9kYXlTdGFydCA9IHN0YXJ0T2ZEYXkobm93KTtcbiAgICBjb25zdCBkdWVEYXRlU3RyID0gdGFzay5kdWVEYXRlO1xuICAgIGxldCBkYXlzQmV0d2VlbjtcblxuICAgIGlmIChkdWVEYXRlU3RyID09IFwiXCIpIHtcbiAgICAgIGRheXNCZXR3ZWVuID0gZmFsc2U7XG4gICAgICByZXR1cm4gZGF5c0JldHdlZW47XG4gICAgfVxuXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBzdGFydE9mRGF5KG5ldyBEYXRlKGR1ZURhdGVTdHIpKTtcbiAgICBkYXlzQmV0d2VlbiA9IGRpZmZlcmVuY2VJbkRheXModGFza0R1ZURhdGUsIHRvZGF5U3RhcnQpO1xuXG4gICAgcmV0dXJuIGRheXNCZXR3ZWVuO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGF5c0xlZnRTdGF0dXMoKSB7XG4gICAgLy9yZXR1cm5zIGEgc3RyaW5nIG1lc3NhZ2VcbiAgICBsZXQgc3RhdHVzTWVzc2FnZSA9IFwiXCI7XG4gICAgY29uc3QgZGF5c0JldHdlZW4gPSBnZXREYXlzTGVmdCh0aGlzKTtcblxuICAgIGlmIChkYXlzQmV0d2VlbiA8IDApIHtcbiAgICAgIHN0YXR1c01lc3NhZ2UgPSBgJHstZGF5c0JldHdlZW59IGRheXMgYWdvYDtcbiAgICB9IGVsc2UgaWYgKGRheXNCZXR3ZWVuID09PSAwKSB7XG4gICAgICBzdGF0dXNNZXNzYWdlID0gXCJ0b2RheVwiO1xuICAgIH0gZWxzZSBpZiAoZGF5c0JldHdlZW4gPT09IDEpIHtcbiAgICAgIHN0YXR1c01lc3NhZ2UgPSBgaW4gJHtkYXlzQmV0d2Vlbn0gZGF5YDtcbiAgICB9IGVsc2UgaWYgKGRheXNCZXR3ZWVuID4gMSkge1xuICAgICAgc3RhdHVzTWVzc2FnZSA9IGBpbiAke2RheXNCZXR3ZWVufSBkYXlzYDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdHVzTWVzc2FnZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENsYXNzRm9yRHVlZGF0ZSgpIHtcbiAgICBsZXQgc3RhdHVzQ2xhc3MgPSBcIlwiO1xuICAgIGNvbnN0IGRheXNCZXR3ZWVuID0gZ2V0RGF5c0xlZnQodGhpcyk7XG5cbiAgICBpZiAoZGF5c0JldHdlZW4gPCAwKSB7XG4gICAgICBzdGF0dXNDbGFzcyA9IFwiZHVlX2RhdGVfZXhwaXJ5X2xldmVsXzBcIjtcbiAgICB9IGVsc2UgaWYgKGRheXNCZXR3ZWVuID09PSAwIHx8IGRheXNCZXR3ZWVuID09PSAxKSB7XG4gICAgICBzdGF0dXNDbGFzcyA9IFwiZHVlX2RhdGVfZXhwaXJ5X2xldmVsXzFcIjtcbiAgICB9IGVsc2UgaWYgKGRheXNCZXR3ZWVuID49IDIgJiYgZGF5c0JldHdlZW4gPD0gNykge1xuICAgICAgc3RhdHVzQ2xhc3MgPSBcImR1ZV9kYXRlX2V4cGlyeV9sZXZlbF8yXCI7XG4gICAgfSBlbHNlIGlmIChkYXlzQmV0d2VlbiA+IDcgJiYgZGF5c0JldHdlZW4gPD0gMzEpIHtcbiAgICAgIHN0YXR1c0NsYXNzID0gXCJkdWVfZGF0ZV9leHBpcnlfbGV2ZWxfM1wiO1xuICAgIH0gZWxzZSBpZiAoZGF5c0JldHdlZW4gPiAzMSB8fCBkYXlzQmV0d2VlbiA9PSBmYWxzZSkge1xuICAgICAgc3RhdHVzQ2xhc3MgPSBcImR1ZV9kYXRlX2V4cGlyeV9sZXZlbF80XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXR1c0NsYXNzO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0RGF0ZVN0cmluZygpIHtcbiAgICAvL2Zvcm1hdCBpdCBmb3IgZGlzcGxheVRhc2tzIGZ1bmN0aW9uXG4gICAgbGV0IGRhdGVTdHIgPSB0aGlzLmR1ZURhdGU7XG4gICAgbGV0IGRhdGVPcmlnaW5hbEZvcm1hdCA9IG5ldyBEYXRlKGRhdGVTdHIpO1xuXG4gICAgaWYgKGRhdGVTdHIgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0KGRhdGVPcmlnaW5hbEZvcm1hdCwgXCJkZC5NTS55eXl5XCIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBwcm9qZWN0TmFtZSxcbiAgICB1bmlxdWVJRCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIGlzSW1wb3J0YW50LFxuICAgIGlzVGFza0NoZWNrZWQsXG4gICAgZ2V0RGF5c0xlZnRTdGF0dXMsXG4gICAgZ2V0Q2xhc3NGb3JEdWVkYXRlLFxuICAgIGZvcm1hdERhdGVTdHJpbmcsXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=