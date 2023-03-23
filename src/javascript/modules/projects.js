import { Task } from "./tasks";

export function Project(project_name) {
  let projectName = project_name;
  let isProjectChecked = false;
  function toggleCheckedProject() {
    isProjectChecked = isProjectChecked === false ? true : false;
  }

  let tasksList = [];

  function addTask(task) {
    // adds the task to end of tasksList
    this.tasksList.push(task);
  }

  function removeTask(task) {
    //currently removes the last added task
    //find the task in tasksLists with the given uniqueID
    const taskUniqueID = task.uniqueID;
    console.log(task);

    for (let i = 0; i < tasksList.length; i++) {
      if (taskUniqueID === tasksList[i].uniqueID) {
        console.log(i);
        tasksList.splice(i, 1);
        return;
      }
    }
  }
  function getTask() {}

  return {
    projectName,
    tasksList,
    isProjectChecked,
    addTask,
    removeTask,
    toggleCheckedProject,
  };
}

// console.log("sa");

// const appBoard = AppBoard();

// const myTask1 = Task("cool title", "my_project");
// const myTask2 = Task("cute topic", "my_project");

// const myProject = Project("my_project");

// myProject.addTask(myTask1);
// myProject.addTask(myTask2);

// appBoard.addProject(myProject);

// console.log(appBoard);
