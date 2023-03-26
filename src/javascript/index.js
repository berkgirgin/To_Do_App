import "../styles/index.css";

import { Task } from "./modules/tasks.js";
import { Project, ProjectsNotToRemove } from "./modules/projects.js";
import { DomCreator } from "./modules/dom_materials";
import { AppBoard } from "./modules/app_logic.js";
import { FormsCreator } from "./modules/forms.js";

import { format, differenceInDays, startOfDay, endOfDay } from "date-fns";

export const domCreator = DomCreator();
export const formCreator = FormsCreator();
export const appBoard = AppBoard();

// domCreator.addProjectFormEventListeners();
formCreator.addProjectFormEventListeners();

//adding default projects
ProjectsNotToRemove.forEach((title) => {
  appBoard.addProject(Project(title));
});
//adding test projects
appBoard.addProject(Project("test1"));
appBoard.addProject(Project("test2"));

//generating test tasks
let testTask_1 = Task("clean your room", "General Tasks");
testTask_1.description = "do not procastinate";
testTask_1.dueDate = "2023-03-30";
testTask_1.uniqueID = 10;
appBoard.projectsList[5].addTask(testTask_1);

let testTask_2 = Task("study programming", "General Tasks");
testTask_2.description = "you can do this!";
testTask_2.dueDate = "2023-03-25";
testTask_2.uniqueID = 20;
appBoard.projectsList[5].addTask(testTask_2);

let testTask_3 = Task("whatever you want", "test1");
testTask_3.description = "chill bro";
testTask_3.dueDate = "2023-03-26";
testTask_3.uniqueID = 30;
appBoard.projectsList[6].addTask(testTask_3);

// keep it at the end to generate the page
domCreator.displayProjects();
domCreator.displayTasks(appBoard.projectsList[0]);

let x = new Date("2023-03-30");
let y = new Date("2023-03-30");
let differenceToReturn = differenceInDays(x, y);
console.log(differenceToReturn);
