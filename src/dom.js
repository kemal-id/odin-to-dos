

//sidebar imports
import { addProjectHandler } from "./project-task/modals.js";


//Header

//Side Bar

export const addProjectBox = document.createElement("div");
addProjectBox.className = 'addProj'
addProjectBox.innerHTML = `<p>+ (Add Project)</p>`;
addProjectBox.addEventListener("click", addProjectHandler);

export const sb = document.querySelector(".sidebar");

//Main Pane

//Modals
export const modal = document.createElement("div");
modal.className = "modal";
