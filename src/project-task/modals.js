//imports


  //addProject imports
import { createProject } from "./projectList.js";

//Basic Modal
const basicModal = (content) => {
  const modal = document.createElement("div");
  modal.className = "modal";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  modalContent.append(content);
  modal.append(modalContent);

  return modal;
};

const modalShow = (modalType) => {
  const body = document.body;
  body.append(modalType);

  const mdl = document.querySelector(".modal");
  window.onclick = function (e) {
    if (e.target == mdl) {
      body.removeChild(mdl);
    }
  };

  const cancelBtn = document.querySelector(".cancel-btn");
  cancelBtn.addEventListener("click", cancelBtnHandler);
};

const cancelBtnHandler = (e) => {
  e.preventDefault();
  document.body.removeChild(document.querySelector(".modal"));
  removeEventListener("click", cancelBtnHandler);
};

// Add Project Modal
function createAddProjectContent() {
  const addProjContent = document.createElement("div");
  addProjContent.className = "addProjModal";
  addProjContent.innerHTML = `
          <form action="" class="add-proj-form">
            <label for="projNameInput">Project Name:</label>
            <input type="text" name="projName" id="projNameInput" placeholder="Summer Project" required />
            <button class="cancel-btn">Cancel</button>
            <button class="add-proj-btn" type="submit">Add Project</button>
          </form>
    `;

  const submitBtn = addProjContent.querySelector(".add-proj-btn");
  submitBtn.addEventListener("click", submitProjNameHandler);

  return addProjContent;
}

export const addProjectHandler = (e) => {
  e.preventDefault();

  const addProjModal = basicModal(createAddProjectContent());
  modalShow(addProjModal);
};

function getFormData(formNode) {
  const formData = {};
  const data = new FormData(formNode);
    for (const entry of data) {
    formData[`${entry[0]}`] = entry[1].trim();
  }

  return formData;
}

const submitProjNameHandler = (e) => {
  e.preventDefault();
  const addProjFormInput = document.getElementById("projNameInput");
  if(addProjFormInput && !addProjFormInput.value) {
    console.log("field empty");
    return;
  }
  const addProjForm = document.querySelector(".add-proj-form")
  const data = getFormData(addProjForm);
  console.log(data);
  createProject(data.projName);
};
