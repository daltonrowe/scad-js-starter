// remove all example objects and start fresh
import * as fs from "node:fs";
import * as path from "node:path";
import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";
import { distPath, rootPath, srcPath } from "./utils.js";

const resetGit = process.argv.includes("--git");
const resetReadmeIndex = process.argv.findIndex("--readme");
const resetReadme = resetReadmeIndex !== -1;

const toRemove = [];

const readmePath = path.join(srcPath, "README.md");

function readmeReset() {
  const objectNameArg = process.argv[resetReadmeIndex + 1];
  let objectName = "My Object";

  if (objectNameArg.startsWith('"') && objectNameArg.endsWith('"')) {
    objectName = objectNameArg.slice(1, objectNameArg.length - 1);
  } else {
    objectName = import.meta.dirname.split('/').splice(-1)
  }

  return `# ${objectName}

## Getting Started

\`\`\`sh
npm install
npm run dev
\`\`\`
  `;
}

const indexPath = path.join(srcPath, "index.js");
const indexReset = `import { union } from "scad-js";

export default function () {
  return union();
}
`;
const constantsPath = path.join(srcPath, "constants.js");
const constantsReset = `export const nothing = 0.03; // some small spacing to prevent z-fighting
export const tolerance = 0.2;
`;

function findFiles(dirs) {
  const currentPath = path.join(...dirs);
  const files = fs.readdirSync(currentPath);

  for (const file of files) {
    const filePath = path.join(currentPath, file);

    if (fs.lstatSync(filePath).isDirectory()) {
      findFiles([filePath]);
    } else {
      if (!file.includes(".gitkeep")) toRemove.push(filePath);
    }
  }
}

findFiles([srcPath]);
findFiles([distPath]);

if (resetReadme) toRemove.push(readmePath);
if (resetGit) toRemove.push(path.join(rootPath, ".git"));

for (const r of toRemove) {
  console.log(r);
}

const rl = readline.createInterface({ input, output });
const answer = await rl.question(
  "\nThese files will be deleted, proceed? (y/n) ",
);
rl.close();

if (answer === "y" || answer === "yes") {
  for (const r of toRemove) {
    fs.rmSync(r);
  }

  fs.writeFileSync(indexPath, indexReset);
  fs.writeFileSync(constantsPath, constantsReset);

  fs.writeFileSync(readmePath, readmeReset());
} else {
  console.log("Aborting!");
}
