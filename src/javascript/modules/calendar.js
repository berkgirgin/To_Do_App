import { format } from "date-fns";

export function createCalendar() {
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
  calendar.innerHTML = `&#8880;${format(currentDate, "MMMM dd, yyyy")}&#8881;`;
  calendar.appendChild(calendarTable);
}
