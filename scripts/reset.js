// remove all example objects and start fresh
import * as fs from "node:fs";
import * as path from "node:path";
import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";
import { distPath, rootPath, srcPath } from "./utils.js";

const removeGit = process.argv[2] === "--remove-git";
const toRemove = [];

function findFiles(dirs) {
  const currentPath = path.join(...dirs);
  const files = fs.readdirSync(currentPath);

  for (const file of files) {
    const filePath = path.join(currentPath, file);

    if (fs.lstatSync(filePath).isDirectory()) {
      findFiles([...dirs, filePath]);
    } else {
      if (!file.includes(".gitkeep")) toRemove.push(filePath);
    }
  }
}

findFiles([srcPath, "components"]);
findFiles([distPath]);

if (removeGit) toRemove.push(path.join(rootPath, ".git"));

for (const r of toRemove) {
  console.log(r);
}

const rl = readline.createInterface({ input, output });
const answer = await rl.question(
  "\nThese files will be deleted, is this okay? (y/n) ",
);
rl.close();

if (answer === "y" || answer === "yes") {
  for (const r of toRemove) {
    fs.rmSync(r);
  }
} else {
  console.log("Aborting!");
}
