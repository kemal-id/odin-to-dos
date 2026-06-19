import { sb, addProjectBox } from "./dom.js";
import { projListTitle, projectList } from "./dom.js";
import { addDefaultProject } from "./project-task/projectList.js";



export default (() => {
  // sb.insertAdjacentHTML("beforeend",`<h1>Hello</h1>`);
  sb.append(projListTitle);
  sb.append(projectList);
  sb.append(addProjectBox);
})();

addDefaultProject();