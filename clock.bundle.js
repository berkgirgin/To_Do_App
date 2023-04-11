"use strict";
(self["webpackChunkto_do_app"] = self["webpackChunkto_do_app"] || []).push([["clock"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/javascript/modules/clock.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2suYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0NBQW9DLGFBQWE7QUFDakQsb0NBQW9DLEdBQUc7QUFDdkMsb0NBQW9DLEdBQUc7O0FBRXZDO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b19kb19hcHAvLi9zcmMvamF2YXNjcmlwdC9tb2R1bGVzL2Nsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZvciB0b2dnbGUgYnV0dG9uO1xuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcygpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJsaWdodFwiKTtcbiAgYm9keS5zdHlsZS50cmFuc2l0aW9uID0gYDAuM3MgbGluZWFyYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENsb2NrKCkge1xuICAvLyBmb3IgdGltZTtcbiAgY29uc3QgZGVnID0gNjtcbiAgLy8gMzYwIC8gKDEyICogNSk7XG5cbiAgY29uc3QgaHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hyXCIpO1xuICBjb25zdCBtbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW5cIik7XG4gIGNvbnN0IHNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzY1wiKTtcblxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgbGV0IGRheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGhoID0gZGF5LmdldEhvdXJzKCkgKiAzMDtcbiAgICBsZXQgbW0gPSBkYXkuZ2V0TWludXRlcygpICogZGVnO1xuICAgIGxldCBzcyA9IGRheS5nZXRTZWNvbmRzKCkgKiBkZWc7XG4gICAgbGV0IG1zZWMgPSBkYXkuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cbiAgICAvLyBWRVJZIElNUE9SVEFOVCBTVEVQOlxuXG4gICAgaHIuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVooJHtoaCArIG1tIC8gMTJ9ZGVnKWA7XG4gICAgbW4uc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVooJHttbX1kZWcpYDtcbiAgICBzYy5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWigke3NzfWRlZylgO1xuXG4gICAgLy8gZ2l2ZXMgdGhlIHNtb290aCB0cmFuc2l0aW9uaW5nIGVmZmVjdCwgYnV0IHRoZXJlJ3MgYSBidWcgaGVyZSFcbiAgICAvLyBzYy5zdHlsZS50cmFuc2l0aW9uID0gYDFzYDtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=