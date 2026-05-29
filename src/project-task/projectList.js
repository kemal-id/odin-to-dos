const projList = [];

export const projListTitle = document.createElement("h2");
projListTitle.innerText = "Projects";

export const projectList = document.createElement("ul");
projectList.className = "proj-list";



function getProjItemDOM (project) {
  const projItemDOM = document.createElement("li");
  projItemDOM.className = "proj-item";

  projItemDOM.innerText = project.getProjName();
  projItemDOM.id = project.getProjID();
}


projList.forEach(proj => {

});