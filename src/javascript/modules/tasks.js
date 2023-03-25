export function Task(arg_title, arg_project_name) {
  let title = arg_title;
  let projectName = arg_project_name;

  let uniqueID = Date.now();
  let description = "";
  let dueDate = ""; // check the formatting, maybe external module?
  let isImportant = false; //by default tasks have normal priority
  let isTaskChecked = false; //by default tasks are not done

  function toggleImportance() {
    isImportant = !isImportant;
  }

  function toggleTaskCheck() {
    isTaskChecked = !isTaskChecked;
  }

  // check this later
  function setDueDate() {}

  return {
    title,
    projectName,
    uniqueID,
    description,
    dueDate,
    isImportant,
    isTaskChecked,
    toggleImportance,
    toggleTaskCheck,
    setDueDate,
  };
}
