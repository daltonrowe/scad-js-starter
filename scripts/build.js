// generate .scad file for a component

// for index.js
// node scripts/build.js

// for a component in /components
// node scripts/build.js mycomponent.js

import * as fs from "node:fs";
import * as path from "node:path";
import { distPath, srcPath } from "./utils.js";

const start = performance.now();

const component = process.argv[2] ?? "index";
const target = process.argv[2] ? `components/${component}.js` : "index.js";

const file = path.join(srcPath, target);
const scad = (await import(file)).default();

const scadStr = scad.serialize({ $fn: 100 });
const scadPath = path.join(distPath, `${component}.scad`);

fs.writeFileSync(scadPath, scadStr);

const end = performance.now();
console.log(`Built ${component} in ${(end - start).toFixed(2)}ms`);
