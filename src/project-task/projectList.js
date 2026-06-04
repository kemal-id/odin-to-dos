import project from "./project.js";

const projList = [];

export const createProject = (projName) => {
  let exist = false;
  projList.forEach((project) => {
    if (project.projName.toLowerCase() == projName.toLowerCase()) {
      console.log("The project already exists");
      exist = true;
      return;
    }
  });

  if (exist) {
    return false;
  }

  const proj = project(projName);
  console.log(proj);
  projList.push(proj);
  console.log(projList);

  return true
};

export const getProjList = () => {
  const list = [...projList];
  return list;
}