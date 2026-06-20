//sidebar imports
import { addProjectHandler } from "./project-task/modals.js";
import { getProjList } from "./project-task/projectList.js";

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

export const updateProjListDisplay = () => {
  const updatedProjList = getProjList();
  console.log(updatedProjList);
  const listId = getListChildrenId();

  updatedProjList.forEach((project) => {
    // console.log(listId.includes(project.projId))
    if (!listId.includes(project.projId)) {
      addprojNodetoList(project);
    }
  });
};

const getListChildrenId = () => {
  // const listDOM = document.querySelector(".proj-list");
  // console.log(projectList.childNodes);
  const childrenList = [...projectList.childNodes];
  // console.log(childrenList);
  const listChildrenId = [];

  childrenList.forEach((node) => listChildrenId.push(node.id));
  return listChildrenId;
};

const addprojNodetoList = (node) => {
  const projNode = createProjectItemNode(node);
  projectList.append(projNode);
};

//project node
export const createProjectItemNode = (project) => {
  const projItem = document.createElement("li");
  projItem.className = "proj-item";
  projItem.id = project.projId;

  projItem.innerHTML = `<p>${project.projName}</p>`;

  return projItem;
};

//Main Pane
