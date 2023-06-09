import "../styles/index.css";
import "../styles/clock.css";

import { Task } from "./modules/tasks.js";
import {
  Project,
  ProjectsNotToRemove,
  createTestProjects,
} from "./modules/projects.js";
import { DomCreator } from "./modules/dom_materials";
import { AppBoard } from "./modules/app_logic.js";
import { FormsCreator } from "./modules/forms.js";
import { Clock } from "./modules/clock.js";

export const appBoard = AppBoard();
export const domCreator = DomCreator();
export const formCreator = FormsCreator();

formCreator.addProjectFormEventListeners();
Clock();

createTestProjects(); // set of ready projects and tasks to showcase

// keep these at the end to generate the page
domCreator.displayProjects();
domCreator.displayTasks(appBoard.projectsList[0]); // display today's tasks
