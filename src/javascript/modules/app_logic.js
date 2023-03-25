import { Project, ProjectsNotToRemove } from "./projects.js";
import { Task } from "./tasks.js";
import { domCreator } from "./tasks.js";

import {
  compareAsc,
  format,
  differenceInDays,
  startOfDay,
  endOfDay,
} from "date-fns";
import { appBoard } from "../index.js";

//****************************** */
// TO DO: add sorting to taskLists, especially the specific ones as the order changes
//****************************** */

export function AppBoard() {
  let projectsList = [];

  function addProject(project) {
    // adds the task to end of tasksList
    this.projectsList.push(project);
  }

  function removeProject(index) {
    projectsList.splice(index, 1);
  }

  function removeTask(taskUniqueId) {
    projectsList.forEach((project) => {
      for (let i = 0; i < project.tasksList.length; i++) {
        console.log("inside removeTask for loop");
        console.log(project.projectName);
        if (taskUniqueId == project.tasksList[i].uniqueID) {
          console.log("inside removeTask if loop");
          console.log(project.tasksList[i]);
          console.log("BINGO");
          project.tasksList.splice(i, 1);
          return;
        }
      }
    });
  }

  function getTasksFromAllProjects() {
    let allTasks = [];

    //projectsList[0] for the Main Project
    projectsList[0].tasksList.forEach((task) => {
      allTasks.push(task);
    });

    for (let i = ProjectsNotToRemove.length; i < projectsList.length; i++) {
      projectsList[i].tasksList.forEach((task) => {
        allTasks.push(task);
      });
    }

    //new tasks to the top!
    allTasks.sort(function (a, b) {
      return b.uniqueID - a.uniqueID;
    });
    return allTasks;
  }

  function getTasksForToday() {
    let allTasks = [];

    const now = new Date();
    const todayStart = startOfDay(now);

    function checkTasklist(project) {
      project.tasksList.forEach((task) => {
        if (task.dueDate == false) {
          return;
        }

        const taskDueDate = startOfDay(new Date(task.dueDate));
        const daysBetween = differenceInDays(taskDueDate, todayStart);

        if (daysBetween === 0) {
          allTasks.push(task);
        }
      });
    }

    checkTasklist(projectsList[0]);
    for (let i = ProjectsNotToRemove.length; i < projectsList.length; i++) {
      checkTasklist(projectsList[i]);
    }

    //new tasks to the top!
    allTasks.sort(function (a, b) {
      return b.uniqueID - a.uniqueID;
    });

    return allTasks;
  }

  function getTasksForWeek() {
    let allTasks = [];

    const now = new Date();
    const todayStart = startOfDay(now);

    function checkTasklist(project) {
      project.tasksList.forEach((task) => {
        if (task.dueDate == false) {
          return;
        }

        const taskDueDate = startOfDay(new Date(task.dueDate));
        const daysBetween = differenceInDays(taskDueDate, todayStart);

        if (daysBetween <= 7) {
          allTasks.push(task);
        }
      });
    }

    checkTasklist(projectsList[0]);
    for (let i = ProjectsNotToRemove.length; i < projectsList.length; i++) {
      checkTasklist(projectsList[i]);
    }

    // first sort by dueDate, if same:new tasks to the top!
    allTasks.sort(function (a, b) {
      //a to x, b to y
      let x = new Date(a.dueDate);
      let y = new Date(b.dueDate);
      let differenceToReturn = differenceInDays(x, y);

      if (differenceToReturn === 0) {
        differenceToReturn = b.uniqueID - a.uniqueID;
      }

      return differenceToReturn;
    });

    return allTasks;
  }

  function getImportantTasks() {
    let allTasks = [];

    //projectsList[0] for the Main Project
    projectsList[0].tasksList.forEach((task) => {
      if (task.isImportant === true) {
        allTasks.push(task);
      }
    });

    for (let i = ProjectsNotToRemove.length; i < projectsList.length; i++) {
      projectsList[i].tasksList.forEach((task) => {
        if (task.isImportant === true) {
          allTasks.push(task);
        }
      });
    }

    //new tasks to the top!
    allTasks.sort(function (a, b) {
      return b.uniqueID - a.uniqueID;
    });
    return allTasks;
  }

  function getExpiredTasks() {
    let allTasks = [];

    const now = new Date();
    const todayStart = startOfDay(now);

    function checkTasklist(project) {
      project.tasksList.forEach((task) => {
        if (task.dueDate == false) {
          return;
        }

        const taskDueDate = startOfDay(new Date(task.dueDate));
        const daysBetween = differenceInDays(taskDueDate, todayStart);

        if (daysBetween < 0) {
          allTasks.push(task);
        }
      });
    }

    checkTasklist(projectsList[0]);
    for (let i = ProjectsNotToRemove.length; i < projectsList.length; i++) {
      checkTasklist(projectsList[i]);
    }

    // first sort by dueDate(first newly expired things)
    // if same:new tasks to the top!
    allTasks.sort(function (a, b) {
      //a to x, b to y
      let x = new Date(a.dueDate);
      let y = new Date(b.dueDate);
      let differenceToReturn = differenceInDays(y, x);

      if (differenceToReturn === 0) {
        differenceToReturn = b.uniqueID - a.uniqueID;
      }

      return differenceToReturn;
    });

    return allTasks;
  }

  return {
    projectsList,
    removeTask,
    addProject,
    removeProject,
    getTasksFromAllProjects,
    getTasksForToday,
    getTasksForWeek,
    getImportantTasks,
    getExpiredTasks,
  };
}
