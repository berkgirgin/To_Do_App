export function Task(arg_title, arg_project_name) {
  let title = arg_title;
  let projectName = arg_project_name;

  let uniqueID = Date.now();
  let description = "";
  let dueDate = ""; // check the formatting, maybe external module?
  let isHighPrio = false; //by default tasks have normal priority
  let isTaskChecked = false;

  function togglePriority() {
    isHighPrio = !isHighPrio;
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
    isHighPrio,
    isTaskChecked,
    togglePriority,
    toggleTaskCheck,
    setDueDate,
  };
}
