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
  calendar.innerHTML = "";
  calendar.appendChild(calendarTable);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/javascript/modules/calendar.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0JBQStCO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4QkFBOEI7QUFDdEQ7O0FBRUE7QUFDQSxrQkFBa0IsaUNBQWlDO0FBQ25ELHdCQUF3QiwrQkFBK0I7QUFDdkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IseUJBQXlCO0FBQzNDOztBQUVBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9fZG9fYXBwLy4vc3JjL2phdmFzY3JpcHQvbW9kdWxlcy9jYWxlbmRhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FsZW5kYXIoKSB7XG4gIC8vIEdldCB0aGUgY3VycmVudCBkYXRlXG4gIHZhciBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgLy8gR2V0IHRoZSB5ZWFyIGFuZCBtb250aCBvZiB0aGUgY3VycmVudCBkYXRlXG4gIHZhciBjdXJyZW50WWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gIHZhciBjdXJyZW50TW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICB2YXIgY3VycmVudERheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKTtcblxuICAvLyBHZXQgdGhlIG51bWJlciBvZiBkYXlzIGluIHRoZSBwcmV2aW91cyBtb250aFxuICB2YXIgZGF5c0luUHJldk1vbnRoID0gbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCwgMCkuZ2V0RGF0ZSgpO1xuXG4gIC8vIEdldCB0aGUgZmlyc3QgZGF5IG9mIHRoZSBjdXJyZW50IG1vbnRoXG4gIHZhciBmaXJzdERheU9mTW9udGggPSBuZXcgRGF0ZShjdXJyZW50WWVhciwgY3VycmVudE1vbnRoLCAxKS5nZXREYXkoKTtcblxuICAvLyBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBkYXlzIHRvIGRpc3BsYXkgZnJvbSB0aGUgcHJldmlvdXMgbW9udGhcbiAgdmFyIGRheXNUb0Rpc3BsYXlGcm9tUHJldk1vbnRoID1cbiAgICBmaXJzdERheU9mTW9udGggPiAwID8gZmlyc3REYXlPZk1vbnRoIC0gMSA6IDY7XG5cbiAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgZGF5cyB0byBkaXNwbGF5IGZyb20gdGhlIG5leHQgbW9udGhcbiAgdmFyIGRheXNUb0Rpc3BsYXlGcm9tTmV4dE1vbnRoID1cbiAgICA3IC1cbiAgICAoKGRheXNUb0Rpc3BsYXlGcm9tUHJldk1vbnRoICtcbiAgICAgIG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGggKyAxLCAwKS5nZXREYXRlKCkpICVcbiAgICAgIDcpO1xuXG4gIC8vIENyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgY2FsZW5kYXIgZGF5c1xuICB2YXIgY2FsZW5kYXJEYXlzID0gW107XG5cbiAgLy8gQWRkIHRoZSBwcmV2aW91cyBtb250aCdzIGRheXMgdG8gdGhlIGNhbGVuZGFyIGRheXMgYXJyYXlcbiAgZm9yIChcbiAgICB2YXIgaSA9IGRheXNJblByZXZNb250aCAtIGRheXNUb0Rpc3BsYXlGcm9tUHJldk1vbnRoICsgMTtcbiAgICBpIDw9IGRheXNJblByZXZNb250aDtcbiAgICBpKytcbiAgKSB7XG4gICAgY2FsZW5kYXJEYXlzLnB1c2goeyBkYXk6IGksIGlzQ3VycmVudE1vbnRoOiBmYWxzZSB9KTtcbiAgfVxuXG4gIC8vIEFkZCB0aGUgY3VycmVudCBtb250aCdzIGRheXMgdG8gdGhlIGNhbGVuZGFyIGRheXMgYXJyYXlcbiAgZm9yIChcbiAgICB2YXIgaSA9IDE7XG4gICAgaSA8PSBuZXcgRGF0ZShjdXJyZW50WWVhciwgY3VycmVudE1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpO1xuICAgIGkrK1xuICApIHtcbiAgICBjYWxlbmRhckRheXMucHVzaCh7IGRheTogaSwgaXNDdXJyZW50TW9udGg6IHRydWUgfSk7XG4gIH1cblxuICAvLyBBZGQgdGhlIG5leHQgbW9udGgncyBkYXlzIHRvIHRoZSBjYWxlbmRhciBkYXlzIGFycmF5XG4gIGZvciAodmFyIGkgPSAxOyBpIDw9IGRheXNUb0Rpc3BsYXlGcm9tTmV4dE1vbnRoOyBpKyspIHtcbiAgICBjYWxlbmRhckRheXMucHVzaCh7IGRheTogaSwgaXNDdXJyZW50TW9udGg6IGZhbHNlIH0pO1xuICB9XG5cbiAgLy8gR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBjYWxlbmRhciBkaXYgZWxlbWVudFxuICB2YXIgY2FsZW5kYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGVuZGFyXCIpO1xuXG4gIC8vIENyZWF0ZSBhIHRhYmxlIGVsZW1lbnQgdG8gZGlzcGxheSB0aGUgY2FsZW5kYXJcbiAgdmFyIGNhbGVuZGFyVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG5cbiAgLy8gQ3JlYXRlIGEgcm93IGZvciB0aGUgZGF5IG5hbWVzXG4gIHZhciBkYXlOYW1lc1JvdyA9IGNhbGVuZGFyVGFibGUuaW5zZXJ0Um93KCk7XG4gIGRheU5hbWVzUm93LmNsYXNzTGlzdC5hZGQoXCJjYWxlbmRhcl9kYXlzXCIpO1xuICB2YXIgZGF5TmFtZXMgPSBbXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIiwgXCJTdW5cIl07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXlOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjZWxsID0gZGF5TmFtZXNSb3cuaW5zZXJ0Q2VsbCgpO1xuICAgIGNlbGwudGV4dENvbnRlbnQgPSBkYXlOYW1lc1tpXTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjYWxlbmRhcl9kYXlcIik7XG4gIH1cblxuICAvLyBDcmVhdGUgcm93cyBmb3IgdGhlIGNhbGVuZGFyIGRheXNcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxlbmRhckRheXMubGVuZ3RoOyBpICs9IDcpIHtcbiAgICB2YXIgcm93ID0gY2FsZW5kYXJUYWJsZS5pbnNlcnRSb3coKTtcblxuICAgIGZvciAodmFyIGogPSBpOyBqIDwgaSArIDc7IGorKykge1xuICAgICAgdmFyIGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGNhbGVuZGFyRGF5c1tqXS5kYXk7XG4gICAgICBpZiAoXG4gICAgICAgIGNhbGVuZGFyRGF5c1tqXS5pc0N1cnJlbnRNb250aCAmJlxuICAgICAgICBjYWxlbmRhckRheXNbal0uZGF5ID09PSBjdXJyZW50RGF5XG4gICAgICApIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIHRoZSBjYWxlbmRhciB0YWJsZSB0byB0aGUgY2FsZW5kYXIgZGl2IGVsZW1lbnRcbiAgY2FsZW5kYXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY2FsZW5kYXIuYXBwZW5kQ2hpbGQoY2FsZW5kYXJUYWJsZSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=