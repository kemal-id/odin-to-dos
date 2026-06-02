class Project {
  constructor(name) {
    this._projName = name;
    this._tasks = [];
    this._projID = name + Math.trunc(Math.random() * 1000);
  }

  get projName() {
    return this._projName;
  }

  set projName(value) {
    this._projName = value.toString().trim();
  }

  get projId() {
    return this._projID;
  }
}

const displayProject = () => {
  console.log(this.prototype.bind(this));
};

const addTask = (task) => {
  this._tasks.push(task);
};

const removeTask = (taskID) => {};

Object.assign(
  Project,
  addTask,
  removeTask,
  displayProject,
);

export default Project;
