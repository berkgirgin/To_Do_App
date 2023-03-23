import { Project } from "./projects.js";
import { Task } from "./tasks.js";
import { domCreator } from "./tasks.js";

export function AppBoard() {
  let projectsList = [];

  function addProject(project) {
    // adds the task to end of tasksList
    this.projectsList.push(project);
  }

  function removeProject(index) {
    projectsList.splice(index, 1);
  }

  return { projectsList, addProject, removeProject };
}
