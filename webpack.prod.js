<<<<<<< HEAD
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");

module.exports = merge(common, {
=======
import merge from "webpack-merge";
import common from "./webpack.common";

export default merge(common, {
>>>>>>> 5ac3367acc0741d85a8ac99e852326cdd237f480
  mode: "production",
});
