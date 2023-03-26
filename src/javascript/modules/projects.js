import { Task } from "./tasks";
import { appBoard } from "../index.js";

export const ProjectsNotToRemove = [
  "Today",
  "Next 7 Days",
  "Important",
  "Expired",
  "All Tasks",
  "General Tasks",
];

export function Project(project_name) {
  let projectName = project_name;
  let isProjectChecked = false;

  let tasksList = [];

  function addTask(task) {
    // adds the task to end of tasksList
    this.tasksList.push(task);
  }

  return {
    projectName,
    tasksList,
    isProjectChecked,
    addTask,
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
