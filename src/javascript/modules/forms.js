import { appBoard, domCreator } from "../index.js";
import { Project, ProjectsNotToRemove } from "./projects.js";
import { Task } from "./tasks.js";

import appProjectIcon from "../../assets/images/add_folder_icon.png";

import { format, differenceInDays, startOfDay, endOfDay } from "date-fns";

export function FormsCreator() {
  const mainContainer = document.querySelector(".main_container");

  const overlay = document.querySelector(".overlay_for_form");
  const formsMainContainer = document.querySelector(".forms_main_container");
  const infoForm = document.querySelector(".form.task_info");
  const taskForm = document.querySelector(".form.form_task");
  const editTaskForm = document.querySelector(".form.form_edit_task");
  const projectForm = document.querySelector(".form.form_project");
  const confirmDeleteProjectForm = document.querySelector(
    ".form.confirm_delete_project"
  );

  const submitProjectButton = document.querySelector(
    "form.form_project button.form_submit"
  );
  const submitTaskButton = document.querySelector(
    "form.form_task button.form_submit"
  );
  const submitEditTaskButton = document.querySelector(
    "form.form_edit_task button.form_submit"
  );

  const submitConfirmDeleteProjectButton = document.querySelector(
    "form.confirm_delete_project button.form_submit"
  );

  // *******************************
  // *******************************
  // *******************************

  // *******************************
  // *******************************
  // *******************************

  function addProjectFormEventListeners() {
    const addProjectButton = document.querySelector(".add_project_button");
    const closeProjectFormButton = document.querySelector(
      "form.form_project .close_form_button"
    );

    addProjectButton.innerHTML = "";
    const addProjectButtonImage = document.createElement("img");
    addProjectButtonImage.setAttribute("alt", "add project");
    addProjectButtonImage.setAttribute("src", appProjectIcon);
    addProjectButtonImage.classList.add("sidebar_icon");
    addProjectButton.appendChild(addProjectButtonImage);

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
    overlay.addEventListener("click", () => {
      closeProjectForm();
    });

    function submitProject(event) {
      function clearProjectFormFields() {
        titleFromProjectForm.value = "";
      }

      event.preventDefault();

      const titleFromProjectForm = document.querySelector(
        "#form_project_title"
      );

      const newProject = Project(titleFromProjectForm.value);

      appBoard.addProject(newProject);
      domCreator.displayProjects();
      domCreator.displayTasks(newProject);

      clearProjectFormFields();
    }

    submitProjectButton.addEventListener("click", (event) => {
      if (
        projectForm.querySelector("input#form_project_title").value == false
      ) {
        return;
      }
      submitProject(event);
      closeProjectForm();
    });
  }

  // *******************************
  // *******************************
  // *******************************

  // *******************************
  // *******************************
  // *******************************

  function addTaskFormEventListeners(project, addTaskButton) {
    const selectedProject = project;
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
    overlay.addEventListener("click", () => {
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
      }

      selectedProject.addTask(newTask);

      clearTaskFormFields();
    }

    const controller = new AbortController();
    // IMPORTANT: do not delete { signal: controller.signal } from the eventListener!
    submitTaskButton.addEventListener(
      "click",
      (event) => {
        if (taskForm.querySelector("input#form_task_title").value == false) {
          return;
        }
        submitTask(event);
        domCreator.displayTasks(project);
        closeTaskForm();

        controller.abort();
      },
      { signal: controller.signal }
    );

    openTaskForm();
  }

  // *******************************
  // *******************************
  // *******************************

  // *******************************
  // *******************************
  // *******************************

  function editTaskFormEventListeners(project, task, editTaskButton) {
    const selectedProject = project;
    const selectedTask = task;
    const closeTaskFormButton = document.querySelector(
      "form.form_edit_task .close_form_button"
    );
    function openTaskForm() {
      editTaskForm.classList.add("active");
      overlay.classList.add("active");
      editTaskForm.querySelector("input#form_edit_task_title").focus();
      editTaskForm.addEventListener("keydown", (event) => {
        if (event.keyCode === 13 || event.which === 13) {
          editTaskForm.querySelector("button.form_edit_submit").focus();
        }
      });

      titleFromEditTaskForm.value = selectedTask.title;
      descriptionFromEditTaskForm.value = selectedTask.description;
      if (selectedTask.dueDate !== "") {
        dateFromEditTaskForm.value = selectedTask.dueDate;
      }

      console.log(task);
      console.log(project);
    }
    function closeTaskForm() {
      editTaskForm.classList.remove("active");
      overlay.classList.remove("active");
    }
    editTaskButton.addEventListener("click", () => {
      openTaskForm();
    });
    closeTaskFormButton.addEventListener("click", () => {
      closeTaskForm();
    });
    overlay.addEventListener("click", () => {
      closeTaskForm();
    });

    const titleFromEditTaskForm = document.querySelector(
      "#form_edit_task_title"
    );
    const descriptionFromEditTaskForm = document.querySelector(
      "#form_edit_task_description"
    );

    const dateFromEditTaskForm = document.querySelector("#form_edit_task_date");

    // console.log(selectedTask);
    // console.log(titleFromEditTaskForm.value);
    // console.log(descriptionFromEditTaskForm.value);
    // console.log(dateFromEditTaskForm.value);

    const submitEditTask = function (event) {
      function clearTaskFormFields() {
        titleFromEditTaskForm.value = "";
        descriptionFromEditTaskForm.value = "";
        dateFromEditTaskForm.value = "";
      }
      task.title = titleFromEditTaskForm.value;
      task.description = descriptionFromEditTaskForm.value;
      task.dueDate = dateFromEditTaskForm.value;

      if (descriptionFromEditTaskForm.value != false) {
        task.description = descriptionFromEditTaskForm.value;
      } else {
        task.description = "";
      }

      if (dateFromEditTaskForm.value != false) {
        task.dueDate = dateFromEditTaskForm.value;
      } else {
        task.dueDate = "";
      }

      // clearTaskFormFields();
      event.preventDefault();

      // const newTask = Task(
      //   titleFromEditTaskForm.value,
      //   selectedProject.projectName
      // );
      // newTask.description = descriptionFromEditTaskForm.value;

      // dateFromEditTaskForm.value != false;
      // newTask.dueDate = dateFromEditTaskForm.value;

      // Object.assign(selectedTask, newTask);

      // selectedProject.replaceTask(index, selectedProject)

      clearTaskFormFields();
    };

    const controller = new AbortController();
    // IMPORTANT: do not delete { signal: controller.signal } from the eventListener!
    submitEditTaskButton.addEventListener(
      "click",
      (event) => {
        if (
          editTaskForm.querySelector("input#form_edit_task_title").value ==
          false
        ) {
          return;
        }
        submitEditTask(event);
        domCreator.displayTasks(project);
        closeTaskForm();

        controller.abort();
      },
      { signal: controller.signal }
    );

    openTaskForm();
  }

  // *******************************
  // *******************************
  // *******************************

  // *******************************
  // *******************************
  // *******************************

  function addTaskInfoEventListeners(openInfoButton, task) {
    const selectedTask = task;
    const infoTitleField = infoForm.querySelector(".fill_task_info_title");
    const infoDescriptionField = infoForm.querySelector(
      ".fill_task_info_description"
    );
    const infoDueDateField = infoForm.querySelector(".fill_task_info_duedate");
    const infoImportanceField = infoForm.querySelector(
      ".fill_task_info_importance"
    );
    const infoProjectField = infoForm.querySelector(".fill_task_info_project");

    const closeInfoFormButton = document.querySelector(
      "form.task_info .close_form_button"
    );

    function setTaskInfoFields() {
      infoTitleField.innerHTML = selectedTask.title;
      infoDescriptionField.innerHTML = selectedTask.description;

      if (selectedTask.dueDate == false) {
        infoDueDateField.innerHTML = "not stated";
      } else {
        infoDueDateField.innerHTML = format(
          new Date(selectedTask.dueDate),
          "MMMM dd, yyyy"
        );
      }

      infoImportanceField.innerHTML = selectedTask.isImportant
        ? "High"
        : "Normal";
      infoProjectField.innerHTML = selectedTask.projectName;
    }

    function openInfoForm() {
      infoForm.classList.add("active");
      overlay.classList.add("active");
    }
    function closeInfoForm() {
      infoForm.classList.remove("active");
      overlay.classList.remove("active");
    }
    openInfoButton.addEventListener("click", () => {
      openInfoForm();
      setTaskInfoFields();
    });
    closeInfoFormButton.addEventListener("click", () => {
      closeInfoForm();
    });
    overlay.addEventListener("click", () => {
      closeInfoForm();
    });
  }

  // *******************************
  // *******************************
  // *******************************

  // *******************************
  // *******************************
  // *******************************

  function confirmDeleteProjectEventListeners(
    openConfirmDeleteProjectButton,
    project
  ) {
    const closeConfirmDeleteProjectButton = document.querySelector(
      "form.confirm_delete_project .close_form_button"
    );

    function openConfirmDeleteProjectForm() {
      confirmDeleteProjectForm.classList.add("active");
      overlay.classList.add("active");
    }
    function closeConfirmDeleteProjectForm() {
      confirmDeleteProjectForm.classList.remove("active");
      overlay.classList.remove("active");
    }
    openConfirmDeleteProjectButton.addEventListener("click", () => {
      openConfirmDeleteProjectForm();
    });
    closeConfirmDeleteProjectButton.addEventListener("click", () => {
      closeConfirmDeleteProjectForm();
    });
    overlay.addEventListener("click", () => {
      closeConfirmDeleteProjectForm();
    });

    function submitDeleteProjectRequest() {
      let projectIndex = openConfirmDeleteProjectButton.dataset.projectIndex;
      appBoard.removeProject(projectIndex);
    }

    submitConfirmDeleteProjectButton.onclick = function (event) {
      submitDeleteProjectRequest();

      domCreator.displayProjects();
      closeConfirmDeleteProjectForm();
    };

    openConfirmDeleteProjectForm();
  }

  return {
    addProjectFormEventListeners,
    addTaskFormEventListeners,
    editTaskFormEventListeners,
    addTaskInfoEventListeners,
    confirmDeleteProjectEventListeners,
  };
}
