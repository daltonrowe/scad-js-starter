// find all components and render .scad, .stl, and .png

import * as fs from "node:fs";
import * as path from "node:path";
import { runCommand, srcPath } from "./utils.js";

function searchComponents(dirs) {
  const componentsPath = path.join(srcPath, ...dirs);
  const files = fs.readdirSync(componentsPath);

  for (const file of files) {
    const filePath = path.join(componentsPath, file);

    if (file.endsWith(".js") || file.endsWith(".ts")) {
      const filePathArray = filePath.split("/");
      const fileName = filePathArray.slice(-1)[0];
      const [componentName] = fileName.split(".");
      components.push(componentName);
    } else if (fs.lstatSync(filePath).isDirectory()) {
      searchComponents([...dirs, filePath]);
    }
  }
}

const components = [];
searchComponents(["components"]);

runCommand({
  color: "36",
  cmd: "node",
  args: ["./scripts/render.js"],
});

for (const component of components) {
  runCommand({
    color: "36",
    cmd: "node",
    args: ["./scripts/render.js", component],
  });
}
