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

  get data() {
    return { name: this.projName, tasks: this._tasks, id: this.projId };
  }

  set data(newData) {
    const keyArray = Object.keys(newData);
    const properData = ["name", "tasks", "id"];
    for (let key in keyArray) {
      if (!properData.includes(key)) {
        alert("It's not suitable object");
        return;
      }
    }

    this._projName = newData.name;
    this._tasks = newData.tasks;
    this._projId = newData.id;
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
