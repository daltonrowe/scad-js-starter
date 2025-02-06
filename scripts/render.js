// render a single component .scad, .stl, .png

import * as path from "node:path";
import { distPath, runCommand } from "./utils.js";

const component = process.argv[2];
const buildArgs = ["./scripts/build.js"];
if (component) buildArgs.push(component);

const componentName = component ?? "index";
const scadPath = path.join(distPath, `${componentName}.scad`);

const stlPath = path.join(distPath, `${componentName}.stl`);
const stlArgs = ["-o", stlPath, scadPath];

const pngPath = path.join(distPath, `${componentName}.png`);
const pngArgs = [
  "-o",
  `${pngPath}`,
  "--viewall",
  "--autocenter",
  "--render",
  "--imgsize",
  "600,400",
  "--projection",
  "o",
  scadPath,
];

const commands = {
  build: {
    color: "32",
    cmd: "node",
    args: buildArgs,
    env: {},
  },
  stl: {
    color: "35",
    cmd: "openscad",
    args: stlArgs,
    env: {},
  },
  png: {
    color: "96",
    cmd: "openscad",
    args: pngArgs,
    env: {},
  },
};

runCommand(commands.build);
runCommand(commands.stl);
runCommand(commands.png);
