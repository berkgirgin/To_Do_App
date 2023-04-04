"use strict";
(self["webpackChunkto_do_app"] = self["webpackChunkto_do_app"] || []).push([["calendar"],{

/***/ "./src/javascript/modules/calendar.js":
/*!********************************************!*\
  !*** ./src/javascript/modules/calendar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCalendar": () => (/* binding */ createCalendar)
/* harmony export */ });
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
  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
  calendar.appendChild(calendarTable);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/javascript/modules/calendar.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0JBQStCO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4QkFBOEI7QUFDdEQ7O0FBRUE7QUFDQSxrQkFBa0IsaUNBQWlDO0FBQ25ELHdCQUF3QiwrQkFBK0I7QUFDdkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IseUJBQXlCO0FBQzNDOztBQUVBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2FwcC8uL3NyYy9qYXZhc2NyaXB0L21vZHVsZXMvY2FsZW5kYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhbGVuZGFyKCkge1xuICAvLyBHZXQgdGhlIGN1cnJlbnQgZGF0ZVxuICB2YXIgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gIC8vIEdldCB0aGUgeWVhciBhbmQgbW9udGggb2YgdGhlIGN1cnJlbnQgZGF0ZVxuICB2YXIgY3VycmVudFllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICB2YXIgY3VycmVudE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgdmFyIGN1cnJlbnREYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG5cbiAgLy8gR2V0IHRoZSBudW1iZXIgb2YgZGF5cyBpbiB0aGUgcHJldmlvdXMgbW9udGhcbiAgdmFyIGRheXNJblByZXZNb250aCA9IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgsIDApLmdldERhdGUoKTtcblxuICAvLyBHZXQgdGhlIGZpcnN0IGRheSBvZiB0aGUgY3VycmVudCBtb250aFxuICB2YXIgZmlyc3REYXlPZk1vbnRoID0gbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCwgMSkuZ2V0RGF5KCk7XG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgZGF5cyB0byBkaXNwbGF5IGZyb20gdGhlIHByZXZpb3VzIG1vbnRoXG4gIHZhciBkYXlzVG9EaXNwbGF5RnJvbVByZXZNb250aCA9XG4gICAgZmlyc3REYXlPZk1vbnRoID4gMCA/IGZpcnN0RGF5T2ZNb250aCAtIDEgOiA2O1xuXG4gIC8vIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGRheXMgdG8gZGlzcGxheSBmcm9tIHRoZSBuZXh0IG1vbnRoXG4gIHZhciBkYXlzVG9EaXNwbGF5RnJvbU5leHRNb250aCA9XG4gICAgNyAtXG4gICAgKChkYXlzVG9EaXNwbGF5RnJvbVByZXZNb250aCArXG4gICAgICBuZXcgRGF0ZShjdXJyZW50WWVhciwgY3VycmVudE1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpKSAlXG4gICAgICA3KTtcblxuICAvLyBDcmVhdGUgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIGNhbGVuZGFyIGRheXNcbiAgdmFyIGNhbGVuZGFyRGF5cyA9IFtdO1xuXG4gIC8vIEFkZCB0aGUgcHJldmlvdXMgbW9udGgncyBkYXlzIHRvIHRoZSBjYWxlbmRhciBkYXlzIGFycmF5XG4gIGZvciAoXG4gICAgdmFyIGkgPSBkYXlzSW5QcmV2TW9udGggLSBkYXlzVG9EaXNwbGF5RnJvbVByZXZNb250aCArIDE7XG4gICAgaSA8PSBkYXlzSW5QcmV2TW9udGg7XG4gICAgaSsrXG4gICkge1xuICAgIGNhbGVuZGFyRGF5cy5wdXNoKHsgZGF5OiBpLCBpc0N1cnJlbnRNb250aDogZmFsc2UgfSk7XG4gIH1cblxuICAvLyBBZGQgdGhlIGN1cnJlbnQgbW9udGgncyBkYXlzIHRvIHRoZSBjYWxlbmRhciBkYXlzIGFycmF5XG4gIGZvciAoXG4gICAgdmFyIGkgPSAxO1xuICAgIGkgPD0gbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCArIDEsIDApLmdldERhdGUoKTtcbiAgICBpKytcbiAgKSB7XG4gICAgY2FsZW5kYXJEYXlzLnB1c2goeyBkYXk6IGksIGlzQ3VycmVudE1vbnRoOiB0cnVlIH0pO1xuICB9XG5cbiAgLy8gQWRkIHRoZSBuZXh0IG1vbnRoJ3MgZGF5cyB0byB0aGUgY2FsZW5kYXIgZGF5cyBhcnJheVxuICBmb3IgKHZhciBpID0gMTsgaSA8PSBkYXlzVG9EaXNwbGF5RnJvbU5leHRNb250aDsgaSsrKSB7XG4gICAgY2FsZW5kYXJEYXlzLnB1c2goeyBkYXk6IGksIGlzQ3VycmVudE1vbnRoOiBmYWxzZSB9KTtcbiAgfVxuXG4gIC8vIEdldCBhIHJlZmVyZW5jZSB0byB0aGUgY2FsZW5kYXIgZGl2IGVsZW1lbnRcbiAgdmFyIGNhbGVuZGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxlbmRhclwiKTtcblxuICAvLyBDcmVhdGUgYSB0YWJsZSBlbGVtZW50IHRvIGRpc3BsYXkgdGhlIGNhbGVuZGFyXG4gIHZhciBjYWxlbmRhclRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuXG4gIC8vIENyZWF0ZSBhIHJvdyBmb3IgdGhlIGRheSBuYW1lc1xuICB2YXIgZGF5TmFtZXNSb3cgPSBjYWxlbmRhclRhYmxlLmluc2VydFJvdygpO1xuICBkYXlOYW1lc1Jvdy5jbGFzc0xpc3QuYWRkKFwiY2FsZW5kYXJfZGF5c1wiKTtcbiAgdmFyIGRheU5hbWVzID0gW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZGF5TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY2VsbCA9IGRheU5hbWVzUm93Lmluc2VydENlbGwoKTtcbiAgICBjZWxsLnRleHRDb250ZW50ID0gZGF5TmFtZXNbaV07XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2FsZW5kYXJfZGF5XCIpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIHJvd3MgZm9yIHRoZSBjYWxlbmRhciBkYXlzXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsZW5kYXJEYXlzLmxlbmd0aDsgaSArPSA3KSB7XG4gICAgdmFyIHJvdyA9IGNhbGVuZGFyVGFibGUuaW5zZXJ0Um93KCk7XG5cbiAgICBmb3IgKHZhciBqID0gaTsgaiA8IGkgKyA3OyBqKyspIHtcbiAgICAgIHZhciBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBjYWxlbmRhckRheXNbal0uZGF5O1xuICAgICAgaWYgKFxuICAgICAgICBjYWxlbmRhckRheXNbal0uaXNDdXJyZW50TW9udGggJiZcbiAgICAgICAgY2FsZW5kYXJEYXlzW2pdLmRheSA9PT0gY3VycmVudERheVxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInRvZGF5XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB0aGUgY2FsZW5kYXIgdGFibGUgdG8gdGhlIGNhbGVuZGFyIGRpdiBlbGVtZW50XG4gIGNhbGVuZGFyLmFwcGVuZENoaWxkKGNhbGVuZGFyVGFibGUpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9