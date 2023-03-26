import { appBoard, formCreator } from "../index.js";
import { Project, ProjectsNotToRemove } from "./projects.js";
import { Task } from "./tasks.js";

import deleteIcon from "../../assets/images/delete_folder_icon.svg";
import deleteIconRed from "../../assets/images/delete_folder_icon_red.svg";

import threeLinesIcon from "../../assets/images/three_lines_icon.png";
import addIcon from "../../assets/images/add_icon.png";
import threeDotsIcon from "../../assets/images/three_dots_icon.png";
import checkedBoxIcon from "../../assets/images/checked_box_icon.png";
import infoIcon from "../../assets/images/info_icon.png";

export function DomCreator() {
  const mainContainer = document.querySelector(".main_container");

  const overlay = document.querySelector(".overlay_for_form");
  const taskForm = document.querySelector(".form.form_task");
  const projectForm = document.querySelector(".form.form_project");

  const submitProjectButton = document.querySelector(
    "form.form_project button.form_submit"
  );
  const submitTaskButton = document.querySelector(
    "form.form_task button.form_submit"
  );

  function displayProjects() {
    let i = 0;
    const displayForProjects = document.querySelector(".display_projects");
    let displaySideBarforProjects;

    // clearing the menus
    document.querySelector(".home_menu").innerHTML = "";
    document.querySelector(".projects_menu").innerHTML = "";

    appBoard.projectsList.forEach((project) => {
      if (i < ProjectsNotToRemove.length - 1) {
        displaySideBarforProjects = document.querySelector(".home_menu");
      } else {
        displaySideBarforProjects = document.querySelector(".projects_menu");
      }

      //creating display for the sidebar
      //***************************** */
      const newSideBarRow = document.createElement("div");
      newSideBarRow.classList.add("sidebar_project_row");
      newSideBarRow.setAttribute("data-sidebar-project-index", `${i}`);
      displaySideBarforProjects.appendChild(newSideBarRow);

      const newProjectTitleAndButtons = document.createElement("div");
      newProjectTitleAndButtons.classList.add("project_title_and_buttons");
      newProjectTitleAndButtons.setAttribute("data-project-index", `${i}`);
      newSideBarRow.appendChild(newProjectTitleAndButtons);

      const newDisplayTasksButton = document.createElement("button");
      newDisplayTasksButton.setAttribute("data-project-index", `${i}`);
      newProjectTitleAndButtons.appendChild(newDisplayTasksButton);

      newDisplayTasksButton.addEventListener("click", (event) => {
        displayTasks(project, displayForProjects);
      });

      const newDisplayTasksButtonImage = document.createElement("img");
      newDisplayTasksButtonImage.setAttribute("alt", "expand icon");
      newDisplayTasksButtonImage.setAttribute("src", threeLinesIcon);
      newDisplayTasksButtonImage.classList.add("sidebar_icon");
      newDisplayTasksButton.appendChild(newDisplayTasksButtonImage);

      const newProject = document.createElement("div");
      newProject.classList.add("project");
      newProject.innerHTML = project.projectName;
      newProject.setAttribute("data-project-index", `${i}`);
      newProjectTitleAndButtons.appendChild(newProject);

      // remove button
      // if condition prevents removing the main categories
      if (i >= ProjectsNotToRemove.length) {
        const newRemoveButton = document.createElement("button");
        newRemoveButton.setAttribute("data-project-index", `${i}`);
        newProjectTitleAndButtons.appendChild(newRemoveButton);

        newRemoveButton.onclick = function () {
          formCreator.confirmDeleteProjectEventListeners(
            newRemoveButton,
            project
          );
        };

        const newRemoveButtonImage = document.createElement("img");
        newRemoveButtonImage.setAttribute("alt", "delete icon");
        newRemoveButtonImage.setAttribute("src", deleteIcon);
        newRemoveButtonImage.setAttribute("data-project-index", `${i}`);
        newRemoveButtonImage.classList.add("sidebar_icon");
        newRemoveButtonImage.classList.add("delete_project_icon");
        newRemoveButton.appendChild(newRemoveButtonImage);
      }

      if (i === 5 || i >= ProjectsNotToRemove.length) {
        const newAddTaskButton = document.createElement("button");
        newAddTaskButton.classList.add("add_task_button");
        newAddTaskButton.setAttribute("data-project-index", `${i}`);
        newProjectTitleAndButtons.appendChild(newAddTaskButton);

        const newAddTaskButtonImage = document.createElement("img");
        newAddTaskButtonImage.setAttribute("alt", "add icon");
        newAddTaskButtonImage.setAttribute("src", addIcon);
        newAddTaskButtonImage.classList.add("sidebar_icon");
        newAddTaskButton.appendChild(newAddTaskButtonImage);

        newAddTaskButton.addEventListener("click", (event) => {
          formCreator.addTaskFormEventListeners(project, newAddTaskButton);
        });
      }
      //**************

      i++;
    });
  }

  // Displays the tasks in a Project
  function displayTasks(project) {
    const newContainerForProjectTitle = document.querySelector(
      ".display_project_title"
    );
    const newContainerForTasks = document.querySelector(".display_projects");
    newContainerForProjectTitle.innerHTML = project.projectName;
    newContainerForTasks.innerHTML = "";

    // settings for main categories..
    // ******************************
    // ******************************

    //Today
    if (project === appBoard.projectsList[0]) {
      project.tasksList = appBoard.getTasksForToday();
    }

    //This week
    if (project === appBoard.projectsList[1]) {
      project.tasksList = appBoard.getTasksForWeek();
    }

    //Important
    if (project === appBoard.projectsList[2]) {
      project.tasksList = appBoard.getImportantTasks();
    }

    //Expired
    if (project === appBoard.projectsList[3]) {
      project.tasksList = appBoard.getExpiredTasks();
    }

    // All Tasks
    if (project === appBoard.projectsList[4]) {
      project.tasksList = appBoard.getTasksFromAllProjects();
    }

    // ******************************
    // ******************************

    //adding the header titles for tasks
    (function addHeaderForTasks() {
      const newContainerForSingleTask = document.createElement("div");
      newContainerForSingleTask.classList.add(
        "container_for_single_task_header"
      );
      newContainerForTasks.appendChild(newContainerForSingleTask);

      const newTaskDateDiv = document.createElement("div");
      newTaskDateDiv.classList.add("task_due_date");
      newTaskDateDiv.innerHTML = "Due Date";
      newContainerForSingleTask.appendChild(newTaskDateDiv);

      const newTaskTitleDiv = document.createElement("div");
      newTaskTitleDiv.classList.add("task_title");
      newTaskTitleDiv.innerHTML = "Task Title";
      newContainerForSingleTask.appendChild(newTaskTitleDiv);
    })();

    project.tasksList.forEach((task) => {
      const newContainerForSingleTask = document.createElement("div");
      newContainerForSingleTask.classList.add("container_for_single_task");
      newContainerForTasks.appendChild(newContainerForSingleTask);

      const newTaskDateDiv = document.createElement("div");
      newTaskDateDiv.classList.add(task.uniqueID);
      newTaskDateDiv.classList.add("task_due_date");
      newTaskDateDiv.classList.add(task.getClassForDuedate());
      newTaskDateDiv.innerHTML = task.getDaysLeftStatus();
      newContainerForSingleTask.appendChild(newTaskDateDiv);

      const newTaskTitleDiv = document.createElement("div");
      newTaskTitleDiv.classList.add(task.uniqueID);
      newTaskTitleDiv.classList.add("task_title");
      newTaskTitleDiv.innerHTML = task.title;
      newContainerForSingleTask.appendChild(newTaskTitleDiv);

      const newTaskButtonsContainer = document.createElement("div");
      newTaskButtonsContainer.classList.add(task.uniqueID);
      newTaskButtonsContainer.classList.add("task_buttons_container");
      newContainerForSingleTask.appendChild(newTaskButtonsContainer);

      const newCheckTaskButton = document.createElement("button");
      newCheckTaskButton.classList.add("check_task_button");
      newCheckTaskButton.innerHTML = task.isTaskChecked ? "&#9745;" : "&#9744;";
      newTaskButtonsContainer.appendChild(newCheckTaskButton);
      if (task.isTaskChecked) {
        newContainerForSingleTask.classList.add("checked");
      }

      newCheckTaskButton.addEventListener("click", () => {
        task.isTaskChecked = !task.isTaskChecked;
        displayTasks(project); // selects the closest parent
      });

      const newImportantTaskButton = document.createElement("button");
      newImportantTaskButton.classList.add("check_priority_button");
      newImportantTaskButton.innerHTML = "&#9734;";
      newTaskButtonsContainer.appendChild(newImportantTaskButton);
      if (task.isImportant) {
        newImportantTaskButton.innerHTML = "&#9733;";
        newImportantTaskButton.classList.add("checked");
      }

      newImportantTaskButton.addEventListener("click", () => {
        task.isImportant = !task.isImportant;
        displayTasks(project); // selects the closest parent
      });

      const newInfoTaskButton = document.createElement("button");
      newInfoTaskButton.classList.add("info_task_button");
      newTaskButtonsContainer.appendChild(newInfoTaskButton);
      formCreator.addTaskInfoEventListeners(newInfoTaskButton, task);

      const newInfoTaskButtonImage = document.createElement("img");
      newInfoTaskButtonImage.setAttribute("alt", "info icon");
      newInfoTaskButtonImage.setAttribute("src", infoIcon);
      newInfoTaskButtonImage.classList.add("sidebar_icon");
      newInfoTaskButton.appendChild(newInfoTaskButtonImage);

      const newRemoveTaskButton = document.createElement("button");
      newRemoveTaskButton.classList.add("remove_task_button");
      newRemoveTaskButton.innerHTML = "&#x2716;";
      newTaskButtonsContainer.appendChild(newRemoveTaskButton);
      newRemoveTaskButton.addEventListener("click", () => {
        appBoard.removeTask(task.uniqueID);
        displayTasks(project);
      });
    });
  }

  return { displayProjects, displayTasks };
}
