import { appBoard } from "../index.js";
import { Project, ProjectsNotToRemove } from "./projects.js";
import { Task } from "./tasks.js";

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
    const displaySideBarforProjects = document.querySelector(".projects_menu");
    displayForProjects.innerHTML = "";
    displaySideBarforProjects.innerHTML = "";

    appBoard.projectsList.forEach((project) => {
      //creating display for the sidebar
      //***************************** */
      const newSideBarRow = document.createElement("div");
      newSideBarRow.classList.add("sidebar_project_row");
      newSideBarRow.setAttribute("data-sidebar-project-index", `${i}`);
      displaySideBarforProjects.appendChild(newSideBarRow);

      // const newProjectTitleSidebar = document.createElement("div");
      // newProjectTitleSidebar.classList.add("sidebar_project_title_row");
      // newProjectTitleSidebar.setAttribute("data-sidebar-project-index", `${i}`);
      // newProjectTitleSidebar.innerHTML = project.projectName;
      // newSideBarRow.appendChild(newProjectTitleSidebar);

      //creating displays on the main area
      //******************************* */
      // const newDisplayRow = document.createElement("div");
      // newDisplayRow.classList.add("display_project_row");
      // newDisplayRow.setAttribute("data-project-index", `${i}`);
      // displayForProjects.appendChild(newDisplayRow);

      const newProjectTitleAndButtons = document.createElement("div");
      newProjectTitleAndButtons.classList.add("project_title_and_buttons");
      newProjectTitleAndButtons.setAttribute("data-project-index", `${i}`);
      newSideBarRow.appendChild(newProjectTitleAndButtons);

      // const newContainerForTasks = document.createElement("div");
      // newContainerForTasks.classList.add("container_for_tasks");
      // newContainerForTasks.setAttribute("data-project-index", `${i}`);
      // newSideBarRow.appendChild(newContainerForTasks);

      const newProject = document.createElement("div");
      newProject.classList.add("project");
      newProject.innerHTML = project.projectName;
      newProject.setAttribute("data-project-index", `${i}`);
      newProjectTitleAndButtons.appendChild(newProject);

      // remove button
      // if condition prevents removing the main categories
      if (i >= ProjectsNotToRemove.length) {
        const newRemoveButton = document.createElement("button");
        newRemoveButton.innerHTML = "Remove Project";
        newRemoveButton.setAttribute("data-project-index", `${i}`);
        newProjectTitleAndButtons.appendChild(newRemoveButton);

        newRemoveButton.addEventListener("click", (event) => {
          // console.log(event.target.dataset.projectIndex);
          appBoard.removeProject(event.target.dataset.projectIndex);
          displayProjects();
        });
      }

      //**************

      const newAddTaskButton = document.createElement("button");
      newAddTaskButton.innerHTML = "Add Task";
      newAddTaskButton.setAttribute("data-project-index", `${i}`);
      newProjectTitleAndButtons.appendChild(newAddTaskButton);

      newAddTaskButton.addEventListener("click", (event) => {
        console.log("inside newAddTaskButton");
        console.log(event.target);
        console.log(project.projectName);

        //setting the destination for .container_for_tasks
        // let selectedDisPlayProjectRow = event.target.closest(
        //   "div.display_project_row"
        // );
        // let selectedContainerForTasks = selectedDisPlayProjectRow.querySelector(
        //   ".container_for_tasks"
        // );

        addTaskFormEventListeners(
          project,
          newAddTaskButton
          // selectedContainerForTasks
        );
        // displayTasks(project, newContainerForTasks);
      });
      // ***************
      // ***************

      const newDisplayTasksButton = document.createElement("button");
      newDisplayTasksButton.innerHTML = "Display Tasks for this Project";
      newDisplayTasksButton.setAttribute("data-project-index", `${i}`);
      newProjectTitleAndButtons.appendChild(newDisplayTasksButton);

      newDisplayTasksButton.addEventListener("click", (event) => {
        console.log(event.target);
        console.log(project.tasksList);
        displayTasks(project, displayForProjects);
        // submitTask(event);

        // appBoard.removeProject(event.target.dataset.projectIndex);
        // displayProjects();
      });

      i++;
    });
  }

  // Displays the tasks in a Project
  // TO DO: make it a toggle maybe, also clears display when called again??
  function displayTasks(project) {
    const newContainerForProjectTitle = document.querySelector(
      ".display_project_title"
    );
    const newContainerForTasks = document.querySelector(".display_projects");
    // I need to be able to select the "project" argument`s newContainerForTasks

    // const newContainerForTasks = document.createElement("div");
    // newContainerForTasks.classList.add("container_for_tasks");
    // newContainerForTasks.setAttribute("data-project-index", `${i}`);
    // newSideBarRow.appendChild(newContainerForTasks);
    console.log("inside displayTasks");
    console.log(project);
    newContainerForProjectTitle.innerHTML = project.projectName;
    newContainerForTasks.innerHTML = "";

    // settings for main categories..
    // ******************************
    // ******************************

    //Today
    if (project === appBoard.projectsList[1]) {
      project.tasksList = appBoard.getTasksForToday();
    }

    //This week
    if (project === appBoard.projectsList[2]) {
      project.tasksList = appBoard.getTasksForWeek();
    }

    //Important
    if (project === appBoard.projectsList[3]) {
      project.tasksList = appBoard.getImportantTasks();
    }

    //Expired
    if (project === appBoard.projectsList[4]) {
      project.tasksList = appBoard.getExpiredTasks();
    }

    // All Tasks
    if (project === appBoard.projectsList[5]) {
      project.tasksList = appBoard.getTasksFromAllProjects();
    }

    // ******************************
    // ******************************

    project.tasksList.forEach((task) => {
      console.log(task);
      const newContainerForSingleTask = document.createElement("div");
      newContainerForSingleTask.classList.add("container_for_single_task");
      newContainerForTasks.appendChild(newContainerForSingleTask);

      const newTaskTitleDiv = document.createElement("div");
      newTaskTitleDiv.classList.add(task.uniqueID);
      newTaskTitleDiv.innerHTML = task.title;
      newContainerForSingleTask.appendChild(newTaskTitleDiv);

      const newTaskDescriptionDiv = document.createElement("div");
      newTaskDescriptionDiv.classList.add(task.uniqueID);
      newTaskDescriptionDiv.innerHTML = task.description;
      newContainerForSingleTask.appendChild(newTaskDescriptionDiv);

      const newTaskDateDiv = document.createElement("div");
      newTaskDateDiv.classList.add(task.uniqueID);
      newTaskDateDiv.innerHTML = task.dueDate;
      newContainerForSingleTask.appendChild(newTaskDateDiv);

      const newCheckTaskButton = document.createElement("button");
      newCheckTaskButton.classList.add("check_task_button");
      newCheckTaskButton.innerHTML = `Is checked: ${task.isTaskChecked}`;
      newContainerForSingleTask.appendChild(newCheckTaskButton);
      newCheckTaskButton.addEventListener("click", (event) => {
        task.isTaskChecked = !task.isTaskChecked;
        // console.log(task);
        displayTasks(project, event.target.closest("div.container_for_tasks")); // selects the closest parent
      });

      const newImportantTaskButton = document.createElement("button");
      newImportantTaskButton.classList.add("check_task_button");
      newImportantTaskButton.innerHTML = `Is important: ${task.isImportant}`;
      newContainerForSingleTask.appendChild(newImportantTaskButton);
      newImportantTaskButton.addEventListener("click", (event) => {
        task.isImportant = !task.isImportant;
        // console.log(task);
        displayTasks(project, event.target.closest("div.container_for_tasks")); // selects the closest parent
      });

      const newRemoveTaskButton = document.createElement("button");
      newRemoveTaskButton.classList.add("remove_task_button");
      newRemoveTaskButton.innerHTML = "Remove Task";
      newContainerForSingleTask.appendChild(newRemoveTaskButton);
      newRemoveTaskButton.addEventListener("click", () => {
        appBoard.removeTask(task.uniqueID);
        console.log("my task target");
        console.log(task);
        // console.log(event.target.closest("div.container_for_tasks"));
        displayTasks(project);
      });
    });
  }

  function addProjectFormEventListeners() {
    const addProjectButton = document.querySelector(".add_project_button");
    const closeProjectFormButton = document.querySelector(
      "form.form_project .close_form_button"
    );

    function openProjectForm() {
      projectForm.classList.add("active");
      overlay.classList.add("active");
      projectForm.querySelector("input#form_project_title").focus();
      projectForm.addEventListener("keydown", (event) => {
        if (event.keyCode === 13 || event.which === 13) {
          projectForm.querySelector("button.form_submit").focus();
        }
      });
    }
    function closeProjectForm() {
      projectForm.classList.remove("active");
      overlay.classList.remove("active");
    }

    addProjectButton.addEventListener("click", () => {
      openProjectForm();
    });
    closeProjectFormButton.addEventListener("click", () => {
      closeProjectForm();
    });

    function submitProject(event) {
      function clearProjectFormFields() {
        titleFromProjectForm.value = "";
      }

      console.log("inside submitProject");
      event.preventDefault();

      const titleFromProjectForm = document.querySelector(
        "#form_project_title"
      );

      // if (titleFromProjectForm.value == false) {
      //   console.log("üzdü bro");
      //   projectForm.querySelector("input#form_project_title").focus();
      //   return;
      // }

      const newProject = Project(titleFromProjectForm.value);

      appBoard.addProject(newProject);
      displayProjects();
      console.log(appBoard.projectsList);
      clearProjectFormFields();
    }

    submitProjectButton.addEventListener("click", (event) => {
      if (
        projectForm.querySelector("input#form_project_title").value == false
      ) {
        return;
      }
      submitProject(event);
      // displayTasks(project, selectedContainerForTasks);
      closeProjectForm();
    });
  }

  // This one is called when each Task is generated on DOM, form close events are reduntant :(
  function addTaskFormEventListeners(project, addTaskButton) {
    const selectedProject = project;
    console.log("xx");
    console.log(project);
    // const addTaskButton = document.querySelector(".add_project_button");
    const closeTaskFormButton = document.querySelector(
      "form.form_task .close_form_button"
    );
    function openTaskForm() {
      taskForm.classList.add("active");
      overlay.classList.add("active");
      taskForm.querySelector("input#form_task_title").focus();
      taskForm.addEventListener("keydown", (event) => {
        if (event.keyCode === 13 || event.which === 13) {
          taskForm.querySelector("button.form_submit").focus();
        }
      });
    }
    function closeTaskForm() {
      taskForm.classList.remove("active");
      overlay.classList.remove("active");
    }
    addTaskButton.addEventListener("click", () => {
      openTaskForm();
    });
    closeTaskFormButton.addEventListener("click", () => {
      closeTaskForm();
    });
    function submitTask(event) {
      function clearTaskFormFields() {
        titleFromTaskForm.value = "";
        descriptionFromTaskForm.value = "";
        dateFromTaskForm.value = "";
      }
      event.preventDefault();
      const titleFromTaskForm = document.querySelector("#form_task_title");
      const descriptionFromTaskForm = document.querySelector(
        "#form_task_description"
      );
      const dateFromTaskForm = document.querySelector("#form_task_date");

      const newTask = Task(
        titleFromTaskForm.value,
        selectedProject.projectName
      );
      if (descriptionFromTaskForm.value != false) {
        newTask.description = descriptionFromTaskForm.value;
      }
      if (dateFromTaskForm.value != false) {
        newTask.dueDate = dateFromTaskForm.value;

        // const dateStr = dateFromTaskForm.value;
        // const [year, month, day] = dateStr.split("-");
        // const date = `${year}/${month}/${day}`;
        // newTask.dueDate = date;
      }
      //   const newTask = Task("my new Task", project.projectName);
      selectedProject.addTask(newTask);
      console.log("inside submitTask");
      console.log(event.target);
      console.log(event.target.closest("div.container_for_tasks"));

      console.log(selectedProject);
      // appBoard.addProject(newProject);
      // displayProjects();
      // console.log(appBoard.projectsList);
      clearTaskFormFields();
    }

    const controller = new AbortController();
    // IMPORTANT: do not delete { once: true } from the eventListener!
    submitTaskButton.addEventListener(
      "click",
      (event) => {
        if (taskForm.querySelector("input#form_task_title").value == false) {
          return;
        }
        submitTask(event);
        displayTasks(project);
        closeTaskForm();
        console.log("date below");
        console.log(
          typeof taskForm.querySelector("input#form_task_date").value
        );
        console.log(taskForm.querySelector("input#form_task_date").value);
        controller.abort();
      },
      { signal: controller.signal }
      // { once: true }
    );

    openTaskForm();
  }

  return { displayProjects, addProjectFormEventListeners };
}
