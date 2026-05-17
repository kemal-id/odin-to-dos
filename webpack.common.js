import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: {
    app: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "production",
    }),
  ],
  output: {
    filename: "main.bundle.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
