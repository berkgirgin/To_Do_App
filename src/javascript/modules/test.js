i = 6;

function confirmDeleteProjectEventListeners(openConfirmDeleteProjectButton) {
  console.log("sa");
  // const selectedProject = project;
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

  function submitDeleteProjectRequest(projectIndex) {
    //   appBoard.removeProject(projectIndex);
  }

  submitConfirmDeleteProjectButton.addEventListener("click", (event) => {
    let projectIndex = openConfirmDeleteProjectButton.dataset.projectIndex;

    console.log(openConfirmDeleteProjectButton);
    console.log(projectIndex);

    event.preventDefault();

    submitDeleteProjectRequest(projectIndex);

    closeConfirmDeleteProjectForm();
  });
}

while (i < 11) {
  confirmDeleteProjectEventListeners(newRemoveButton);
}
