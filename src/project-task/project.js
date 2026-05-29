function Project(name) {
  this._projName = name;
  this._tasks = [];
  this._projID = name + Math.trunc(Math.random() * 1000);

  // return {getProjName, setProjName, getProjID, addTask, removeTask};
}

const displayProject = () => {
  console.log(this.prototype.bind(this));
};

const getProjName = () => {
  return this._projName;
};

const setProjName = (value) => {
  this._projName = value.toString();
};

const getProjID = () => {
  return this._projID;
};

const addTask = (task) => {
  this._tasks.push(task);
};

const removeTask = (taskID) => {};

Object.assign(
  Project,
  getProjName,
  setProjName,
  getProjID,
  addTask,
  removeTask,
  displayProject,
);

export default Project;
