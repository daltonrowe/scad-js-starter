import * as fs from "node:fs";
import { constantsPath } from "./utils.js";

const component = process.argv[2];
const shape = process.argv[3];

const fileTemplates = {
  cube: (component) => `import { cube } from "scad-js";
import { ${component}Width, ${component}Depth, ${component}Height } from "../constants.js"

export default function () {
  return cube([${component}Width, ${component}Depth, ${component}Height]);
}
`,

  cylinder: (component) => `import { cylinder } from "scad-js";
import { ${component}Height, ${component}Diameter } from "../constants.js"

export default function () {
  return cylinder(${component}Height, ${component}Diameter / 2);
}
`,

  default: `
import { union } from "scad-js";

export default function () {
  return union();
}
`,
};

const constantsTemplates = {
  cube: (component) => [
    `export const ${component}Width = 20;`,
    `export const ${component}Depth = 20;`,
    `export const ${component}Height = 10;`,
  ],
  cylinder: (component) => [
    `export const ${component}Height = 20;`,
    `export const ${component}Diameter = 10;`,
  ],
};

const componentFile = fileTemplates[shape ?? "default"];
const constants = constantsTemplates[shape ?? "default"];

fs.writeFileSync(path.join(componentsPath, `${component}.js`), componentFile);

const constantsFile = fs.readFileSync(constantsPath, "UTF-8");
const constantsArray = constantsFile.split("\n");
constantsArray.push(...constants);

fs.writeFileSync(constantsPath, constantsArray.join("\n"));
