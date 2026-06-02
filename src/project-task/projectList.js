import Project from "./project.js";

const projList = [];

export const projListTitle = document.createElement("h2");
projListTitle.innerText = "Projects";

export const projectList = document.createElement("ul");
projectList.className = "proj-list";

function createProjectItemNode(project) {
  const projItem = document.createElement("li");
  projItem.className = "proj-item";
  projItem.id = project.getProjID();

  projItem.innerHTML = `<p>${project.getProjName()}</p>`;
}


export const createProject = (projName) => {
  // projList.forEach(project => {
  //   if(project.getProjName() == projName);
  //   console.log("The project already exists");
  //   return;
  // });
  const project = new Project(projName);
  console.log(project.hasOwnProperty())
  // projList.push(project);
  // console.log(projList);
}