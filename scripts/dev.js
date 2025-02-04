// watch a component for changes and generate new .scad
// opens specified component files in OpenSCAD

import * as path from "node:path";
import { distPath, runCommand } from "./utils.js";

const component = process.argv[2];
const watchArgs = ["--watch-path=src", "./scripts/build.js"];
if (component) watchArgs.push(component);

const scadPath = path.join(distPath, `${component ?? "index"}.scad`);
const scadArgs = [scadPath];

const commands = {
  watch: {
    color: "32",
    cmd: "node",
    args: watchArgs,
    env: {},
  },
  scad: {
    color: "35",
    cmd: "openscad",
    args: scadArgs,
    env: {},
  },
};

runCommand(commands.watch);
runCommand(commands.scad);
