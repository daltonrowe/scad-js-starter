import * as fs from "node:fs";
import * as path from "node:path";

const target = process.argv[2] || "index.js";
console.log(`Building ${target}...`);

const file = path.join(import.meta.dirname, "src", target);
const output = (await import(file)).default();

fs.writeFileSync("./dist/output.scad", output.serialize({ $fn: 100 }));
