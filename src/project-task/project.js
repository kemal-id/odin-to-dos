class Project {
  constructor(name) {
    this._projName = name;
    this._tasks = [];
    this._projId = name;
  }

  get projName() {
    return this._projName;
  }

  set projName(value) {
    this._projName = value.toString().trim();
  }

  get projId() {
    return this._projId;
  }
}

const displayProject = () => {
  console.log(this.prototype.bind(this));
};

const addTask = (task) => {
  this._tasks.push(task);
};

const removeTask = (taskID) => {};

const project = (projName) => {
  const newProject = new Project(projName);
  const proj = Object.assign(newProject, {
    addTask,
    removeTask,
    displayProject,
  });
  return proj;
};

export default project;
