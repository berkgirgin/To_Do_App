import { appBoard } from "../index.js";
import { Project } from "./projects.js";
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
    displayForProjects.innerHTML = "My Projects";

    appBoard.projectsList.forEach((project) => {
      const newDislayRow = document.createElement("div");
      newDislayRow.classList.add("display_project_row");
      newDislayRow.setAttribute("data-project-index", `${i}`);
      displayForProjects.appendChild(newDislayRow);

      const newProjectTitleAndButtons = document.createElement("div");
      newProjectTitleAndButtons.classList.add("project_title_and_buttons");
      newProjectTitleAndButtons.setAttribute("data-project-index", `${i}`);
      newDislayRow.appendChild(newProjectTitleAndButtons);

      const newContainerForTasks = document.createElement("div");
      newContainerForTasks.classList.add("container_for_tasks");
      newContainerForTasks.setAttribute("data-project-index", `${i}`);
      newDislayRow.appendChild(newContainerForTasks);

      const newProject = document.createElement("div");
      newProject.classList.add("project");
      newProject.innerHTML = project.projectName;
      newProject.setAttribute("data-project-index", `${i}`);
      newProjectTitleAndButtons.appendChild(newProject);

      // remove button
      const newRemoveButton = document.createElement("button");
      newRemoveButton.innerHTML = "Remove Project";
      newRemoveButton.setAttribute("data-project-index", `${i}`);
      newProjectTitleAndButtons.appendChild(newRemoveButton);

      newRemoveButton.addEventListener("click", (event) => {
        console.log(event.target.dataset.projectIndex);
        appBoard.removeProject(event.target.dataset.projectIndex);
        displayProjects();
      });
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
        let selectedDisPlayProjectRow = event.target.closest(
          "div.display_project_row"
        );
        let selectedContainerForTasks = selectedDisPlayProjectRow.querySelector(
          ".container_for_tasks"
        );

        addTaskFormEventListeners(
          project,
          newAddTaskButton,
          selectedContainerForTasks
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
        displayTasks(project, newContainerForTasks);
        // submitTask(event);

        // appBoard.removeProject(event.target.dataset.projectIndex);
        // displayProjects();
      });

      i++;
    });
  }

  // Displays the tasks in a Project
  // TO DO: make it a toggle maybe, also clears display when called again??
  function displayTasks(project, newContainerForTasks) {
    // I need to be able to select the "project" argument`s newContainerForTasks
    console.log("inside displayTasks");
    console.log(project);
    newContainerForTasks.innerHTML = "";

    project.tasksList.forEach((task) => {
      console.log(task);
      const newContainerForSingleTask = document.createElement("div");
      newContainerForSingleTask.classList.add("container_for_single_task");
      newContainerForTasks.appendChild(newContainerForSingleTask);

      const newTaskDiv = document.createElement("div");
      newTaskDiv.classList.add(task.uniqueID);
      newTaskDiv.innerHTML = task.title;
      newContainerForSingleTask.appendChild(newTaskDiv);

      const newCheckTaskButton = document.createElement("button");
      newCheckTaskButton.classList.add("check_task_button");
      newCheckTaskButton.innerHTML = "Check Task";
      newContainerForSingleTask.appendChild(newCheckTaskButton);
      newCheckTaskButton.addEventListener("click", (event) => {
        task.isTaskChecked = !task.isTaskChecked;
        // console.log(task);
        displayTasks(project, event.target.closest("div.container_for_tasks")); // selects the closest parent
      });

      const newRemoveTaskButton = document.createElement("button");
      newRemoveTaskButton.classList.add("remove_task_button");
      newRemoveTaskButton.innerHTML = "Remove Task";
      newContainerForSingleTask.appendChild(newRemoveTaskButton);
      newRemoveTaskButton.addEventListener("click", (event) => {
        project.removeTask(task);
        // console.log(event.target);
        // console.log(event.target.closest("div.container_for_tasks"));
        displayTasks(project, event.target.closest("div.container_for_tasks")); // selects the closest parent
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
  function addTaskFormEventListeners(
    project,
    addTaskButton,
    displayTasksDestination
  ) {
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
      }
      event.preventDefault();
      const titleFromTaskForm = document.querySelector("#form_task_title");
      const newTask = Task(
        titleFromTaskForm.value,
        selectedProject.projectName
      );
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
        displayTasks(project, displayTasksDestination);
        closeTaskForm();
        controller.abort();
      },
      { signal: controller.signal }
      // { once: true }
    );

    openTaskForm();
  }

  return { displayProjects, addProjectFormEventListeners };
}
