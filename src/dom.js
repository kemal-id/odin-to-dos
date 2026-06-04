//sidebar imports
import { addProjectHandler } from "./project-task/modals.js";

//Header

//Side Bar

export const addProjectBox = document.createElement("div");
addProjectBox.className = "addProj";
addProjectBox.innerHTML = `<p>+ (Add Project)</p>`;
addProjectBox.addEventListener("click", addProjectHandler);

export const sb = document.querySelector(".sidebar");


//project list
export const projListTitle = document.createElement("h2");
projListTitle.innerText = "Projects";

export const projectList = document.createElement("ul");
projectList.className = "proj-list";

//project node
export const createProjectItemNode = (project) => {
  const projItem = document.createElement("li");
  projItem.className = "proj-item";
  projItem.id = project.getProjID();

  projItem.innerHTML = `<p>${project.getProjName()}</p>`;
}

//Main Pane
