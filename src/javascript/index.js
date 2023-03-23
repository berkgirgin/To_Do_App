import "../styles/index.css";

import { Task } from "./modules/tasks.js";
import { Project } from "./modules/projects.js";
import { DomCreator } from "./modules/dom_materials";
import { AppBoard } from "./modules/app_logic.js";

const domCreator = DomCreator();
export const appBoard = AppBoard();

domCreator.addFormEventListeners();

const mainProject = Project("Main");
appBoard.addProject(mainProject);
domCreator.displayProjects();
