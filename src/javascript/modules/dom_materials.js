import { appBoard } from "../index.js";
import { Project } from "./projects.js";
import { Task } from "./tasks.js";

export function DomCreator() {
  const mainContainer = document.querySelector(".main_container");

  const overlay = document.querySelector(".overlay_for_form");
  const taskForm = document.querySelector(".form.form_task");
  const projectForm = document.querySelector(".form.form_project");
  const addTaskButton = document.querySelector(
    ".form.form_task button.form_submit"
  );
  const submitProjectButton = document.querySelector(
    "form.form_project button.form_submit"
  );

  function displayProjects() {
    let i = 0;
    const displayForProjects = document.querySelector(".display_projects");
    displayForProjects.innerHTML = "My Projects";

    appBoard.projectsList.forEach((project) => {
      const newDislayRow = document.createElement("div");
      newDislayRow.classList.add("display_project_row");
      displayForProjects.appendChild(newDislayRow);

      const newProjectTitleAndButtons = document.createElement("div");
      newProjectTitleAndButtons.classList.add("project_title_and_buttons");
      newDislayRow.appendChild(newProjectTitleAndButtons);

      const newContainerForTasks = document.createElement("div");
      newContainerForTasks.classList.add("container_for_tasks");
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

      // ***************
      // add task button
      function submitTask(event) {
        function clearTaskFormFields() {
          //   titleFromForm.value = "";
        }
        // event.preventDefault();
        // const titleFromForm = document.querySelector("#form_title");
        // const newTask = Project(titleFromForm.value);

        const newTask = Task("my new Task", project.projectName);
        project.addTask(newTask);
        console.log(project);

        // appBoard.addProject(newProject);
        // displayProjects();
        // console.log(appBoard.projectsList);
        // clearTaskFormFields();
      }

      const newAddTaskButton = document.createElement("button");
      newAddTaskButton.innerHTML = "Add Task";
      newAddTaskButton.setAttribute("data-project-index", `${i}`);
      newProjectTitleAndButtons.appendChild(newAddTaskButton);

      newAddTaskButton.addEventListener("click", (event) => {
        console.log(event.target);
        console.log(project.projectName);
        submitTask(event);
        displayTasks();

        // appBoard.removeProject(event.target.dataset.projectIndex);
        // displayProjects();
      });
      // ***************
      // ***************

      //display tasks button
      //********************

      function displayTasks() {
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
          newCheckTaskButton.addEventListener("click", () => {
            task.isTaskChecked = !task.isTaskChecked;
            // console.log(task);
          });

          const newRemoveTaskButton = document.createElement("button");
          newRemoveTaskButton.classList.add("remove_task_button");
          newRemoveTaskButton.innerHTML = "Remove Task";
          newContainerForSingleTask.appendChild(newRemoveTaskButton);
          newRemoveTaskButton.addEventListener("click", () => {
            project.removeTask(task);
            displayTasks();
          });
        });
      }

      const newDisplayTasksButton = document.createElement("button");
      newDisplayTasksButton.innerHTML = "Display Tasks for this Project";
      newDisplayTasksButton.setAttribute("data-project-index", `${i}`);
      newProjectTitleAndButtons.appendChild(newDisplayTasksButton);

      newDisplayTasksButton.addEventListener("click", (event) => {
        console.log(event.target);
        console.log(project.tasksList);
        displayTasks();
        // submitTask(event);

        // appBoard.removeProject(event.target.dataset.projectIndex);
        // displayProjects();
      });

      i++;
    });
  }

  function addFormEventListeners() {
    function addProjectFormEventListeners() {
      const addProjectButton = document.querySelector(".add_project_button");
      const closeProjectFormButton = document.querySelector(
        "form.form_project .close_form_button"
      );

      function openProjectForm() {
        projectForm.classList.add("active");
        overlay.classList.add("active");
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
          titleFromForm.value = "";
        }
        event.preventDefault();
        const titleFromForm = document.querySelector("#form_project_title");
        const newProject = Project(titleFromForm.value);

        appBoard.addProject(newProject);
        displayProjects();
        console.log(appBoard.projectsList);
        clearProjectFormFields();
      }

      submitProjectButton.addEventListener("click", (event) => {
        submitProject(event);
      });
    }

    function addTaskFormEventListeners() {
      // const addTaskButton = document.querySelector(".add_project_button"); // check!!!
      const closeTaskFormButton = document.querySelector(
        "form.form_task .close_form_button"
      );

      function openTaskForm() {
        taskForm.classList.add("active");
        overlay.classList.add("active");
      }
      function closeTaskForm() {
        taskForm.classList.remove("active");
        overlay.classList.remove("active");
      }

      addProjectButton.addEventListener("click", () => {
        openTaskForm();
      });
      closeProjectFormButton.addEventListener("click", () => {
        closeTaskForm();
      });
    }

    addProjectFormEventListeners();
  }

  return { displayProjects, addFormEventListeners };
}
