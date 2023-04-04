import {
  compareAsc,
  format,
  differenceInDays,
  startOfDay,
  endOfDay,
} from "date-fns";

export function Task(arg_title, arg_project_name) {
  let title = arg_title;
  let projectName = arg_project_name;

  let uniqueID = Date.now();
  let description = "";
  let dueDate = "";
  let isImportant = false; //by default tasks have normal priority
  let isTaskChecked = false; //by default tasks are not done

  function getDaysLeft(task) {
    const now = new Date();
    const todayStart = startOfDay(now);
    const dueDateStr = task.dueDate;
    let daysBetween;

    if (dueDateStr == "") {
      daysBetween = false;
      return daysBetween;
    }

    const taskDueDate = startOfDay(new Date(dueDateStr));
    daysBetween = differenceInDays(taskDueDate, todayStart);

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

    return format(dateOriginalFormat, "dd.MM.yyyy");
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
