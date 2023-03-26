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
  let dueDate = ""; // check the formatting, maybe external module?
  let isImportant = false; //by default tasks have normal priority
  let isTaskChecked = false; //by default tasks are not done

  // check this later

  function getDaysLeftStatus() {
    //returns a string message
    const now = new Date();
    const todayStart = startOfDay(now);
    let statusMessage = "";

    const taskDueDate = startOfDay(new Date(this.dueDate));
    const daysBetween = differenceInDays(taskDueDate, todayStart);

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

  return {
    title,
    projectName,
    uniqueID,
    description,
    dueDate,
    isImportant,
    isTaskChecked,
    getDaysLeftStatus,
  };
}
