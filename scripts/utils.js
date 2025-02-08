// utilties for running scadesm scripts

import { spawn } from "node:child_process";
import * as path from "node:path";

export const srcPath = path.join(import.meta.dirname, "..", "src");
export const constantsPath = path.join(srcPath, "constants.js");
export const componentsPath = path.join(
  import.meta.dirname,
  "..",
  "src",
  "components",
);
export const distPath = path.join(import.meta.dirname, "..", "dist");
export const rootPath = path.join(import.meta.dirname, "..");

export function runCommand(command) {
  const { cmd, args, env = {}, color } = command;

  function logColor(data) {
    process.stdout.write(`\x1b[${color}m${data.toString()}\x1b[0m`);
  }

  const child = spawn(cmd, args, { env: { ...process.env, ...env } });

  child.stdout.on("data", (data) => logColor(data));
  child.stderr.on("data", (data) => logColor(data));

  return child;
}
