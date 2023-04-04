import { Project, ProjectsNotToRemove } from "./projects.js";
import { Task } from "./tasks.js";
import { domCreator } from "./tasks.js";

import { format, differenceInDays, startOfDay } from "date-fns";
import { appBoard } from "../index.js";

function taskListSorting(taskList) {
  taskList.sort(function (a, b) {
    //a to x, b to y
    let x = new Date(a.dueDate);
    let y = new Date(b.dueDate);
    let differenceToReturn = differenceInDays(x, y);

    if (differenceToReturn === 0) {
      differenceToReturn = b.uniqueID - a.uniqueID;
    }

    return differenceToReturn;
  });

  return taskList;
}

export function AppBoard() {
  // adding local storage
  const LOCAL_STORAGE_PROJECTS_KEY = "todoapp.projects";
  let projectsList =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];

  // assigning Object methods back, as they were saved as strings
  for (let i = 0; i < projectsList.length; i++) {
    projectsList[i] = Object.assign(new Project(), projectsList[i]);

    for (let j = 0; j < projectsList[i].tasksList.length; j++) {
      projectsList[i].tasksList[j] = Object.assign(
        new Task(),
        projectsList[i].tasksList[j]
      );
    }
  }

  // let projectsList = [];

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
        if (taskUniqueId == project.tasksList[i].uniqueID) {
          project.tasksList.splice(i, 1);
          return;
        }
      }
    });
  }

  function saveProjectsToLocalStorage() {
    localStorage.setItem(
      LOCAL_STORAGE_PROJECTS_KEY,
      JSON.stringify(projectsList)
    );
  }

  function getTasksFromAllProjects() {
    let allTasks = [];

    //projectsList[0] for the Main Project
    // projectsList[5].tasksList.forEach((task) => {
    //   allTasks.push(task);
    // });

    for (let i = ProjectsNotToRemove.length - 1; i < projectsList.length; i++) {
      projectsList[i].tasksList.forEach((task) => {
        allTasks.push(task);
      });
    }

    taskListSorting(allTasks);

    return allTasks;
  }

  function getTasksForTodayTomorrow() {
    //switched to today and tomorrow
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

        if (daysBetween === 0 || daysBetween === 1) {
          allTasks.push(task);
        }
      });
    }

    // checkTasklist(projectsList[5]);
    for (let i = ProjectsNotToRemove.length - 1; i < projectsList.length; i++) {
      checkTasklist(projectsList[i]);
    }

    taskListSorting(allTasks);

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

        if (daysBetween < 0) {
          return;
        }
        if (daysBetween <= 7) {
          allTasks.push(task);
        }
      });
    }

    // checkTasklist(projectsList[5]);
    for (let i = ProjectsNotToRemove.length - 1; i < projectsList.length; i++) {
      checkTasklist(projectsList[i]);
    }

    taskListSorting(allTasks);

    return allTasks;
  }

  function getTasksForMonth() {
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
          return;
        }
        if (daysBetween <= 31) {
          allTasks.push(task);
        }
      });
    }

    // checkTasklist(projectsList[5]);
    for (let i = ProjectsNotToRemove.length - 1; i < projectsList.length; i++) {
      checkTasklist(projectsList[i]);
    }

    taskListSorting(allTasks);

    return allTasks;
  }

  function getImportantTasks() {
    let allTasks = [];

    //projectsList[0] for the Main Project
    // projectsList[5].tasksList.forEach((task) => {
    //   if (task.isImportant === true) {
    //     allTasks.push(task);
    //   }
    // });

    for (let i = ProjectsNotToRemove.length - 1; i < projectsList.length; i++) {
      projectsList[i].tasksList.forEach((task) => {
        if (task.isImportant === true) {
          allTasks.push(task);
        }
      });
    }

    taskListSorting(allTasks);

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

    // checkTasklist(projectsList[5]);
    for (let i = ProjectsNotToRemove.length - 1; i < projectsList.length; i++) {
      checkTasklist(projectsList[i]);
    }

    taskListSorting(allTasks);

    return allTasks;
  }

  return {
    projectsList,
    removeTask,
    addProject,
    removeProject,
    saveProjectsToLocalStorage,
    getTasksFromAllProjects,
    getTasksForTodayTomorrow,
    getTasksForWeek,
    getTasksForMonth,
    getImportantTasks,
    getExpiredTasks,
  };
}
