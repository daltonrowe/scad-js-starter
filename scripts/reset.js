// remove all example objects and start fresh
import * as fs from "node:fs";
import * as path from "node:path";
import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";
import { distPath, rootPath, srcPath } from "./utils.js";

const resetReadmeIndex = process.argv.findIndex((arg) => arg === "readme");
const resetReadme = resetReadmeIndex !== -1;

const toRemove = [];

const readmePath = path.join(rootPath, "README.md");

function readmeReset() {
  const objectNameArg = process.argv[resetReadmeIndex + 1];
  const objectNameProvided = objectNameArg && !objectNameArg.startsWith("--");
  const objectName = objectNameProvided
    ? objectNameArg
    : rootPath.split("/").splice(-1);

  return `# ${objectName}

![](./dist/index.png?raw=true)

## Quick Start

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

function search(dirs) {
  const currentPath = path.join(...dirs);
  const files = fs.readdirSync(currentPath);

  for (const file of files) {
    const filePath = path.join(currentPath, file);

    if (fs.lstatSync(filePath).isDirectory()) {
      search([filePath]);
    } else {
      if (!file.includes(".gitkeep")) toRemove.push(filePath);
    }
  }
}

function collectFilesToRemove() {
  search([srcPath]);
  search([distPath]);

  if (resetReadme) toRemove.push(readmePath);
}

async function fileRemovalPrompt() {
  for (const r of toRemove) console.log(r);

  const rl = readline.createInterface({ input, output });

  const answer = await rl.question(
    "\n⚠️ These files will be deleted, proceed? (y/n): ",
  );

  rl.close();

  return answer === "y" || answer === "yes";
}

function removeFiles() {
  for (const r of toRemove) {
    fs.rmSync(r);
  }

  fs.writeFileSync(indexPath, indexReset);
  fs.writeFileSync(constantsPath, constantsReset);

  if (resetReadme) fs.writeFileSync(readmePath, readmeReset());

  console.log("\nReset complete! ");
}

collectFilesToRemove();
const proceedWithRemoval = await fileRemovalPrompt();
proceedWithRemoval ? removeFiles() : console.log("Aborting!");
