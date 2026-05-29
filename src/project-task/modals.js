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

  const modalbg = document.querySelector(".modal");
  window.onclick = function (e) {
    if (e.target == modalbg) {
      body.removeChild(modalType);
    }
  };
};

// Add Project Modal
const addProjContent = document.createElement("div");
addProjContent.className = "addProjModal";
addProjContent.innerHTML = `
        <form action="" class="add-proj-form">
          <label for="projName">Project Name:</label>
          <input type="text" name="projName" id="projName" placeholder="Summer Project" required>
          <button class="cancel-btn">Cancel</button>
          <button class="add-proj-btn" type="submit">Add Project</button>
        </form>
  `;

export const addProjectHandler = (e) => {
  e.preventDefault();
  // alert("This works");

  const addProjModal = basicModal(addProjContent);
  modalShow(addProjModal);
};
