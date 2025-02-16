# SCADESM Starter

![](./dist/index.png?raw=true)

## Quick Start

```sh
npm install
npm run dev
```

### Dev

To generate a .scad file, and update when changes are made, use `npm run dev`.
This command will also attempt to start OpenSCAD for the specified file. See OpenSCAD integration below for more info.

```sh
# watch for changes from src/index.js, start OpenSCAD
npm run dev
npm run dev hook # src/components/hook.js
```

### New

To quickly generate a new component js file, use `npm run new`.
This command will also attempt to start OpenSCAD for the specified file. See OpenSCAD integration below for more info.

```sh
# create a new file in src/components
npm run new myObject
run run new myObject cube # create cube constants and imports
run run new myObject cylinder # create cylinder constants and imports
```

### Build

To generate a .scad file from from index.js or a component, use `npm run build`.

```sh
# generate .scad file from src/index.js
npm run build
run run build hook # src/components/hook.js
```

### Render

To generate a .stl, .png, and .scad file from from index.js or a component, use `npm run render`.

```sh
# generate stl, png, scad from src/index.js
npm run build
npm run build hook # src/components/hook.js
```

### Lint

Uses biome for linting but not included as a dependency, install or not as you prefer.

```sh
# install biome via npm
npm install --save-dev --save-exact @biomejs/biome

# format all files
npm run lint
```

### Reset

To remove all example code, and optionally existing git history, use `npm run reset`

```sh
# remove all example code
npm run reset
npm run reset readme "My Object" # wipe readme with new object name
```

## OpenSCAD Integration

The command scripts in `package.json` rely on `openscad` being available in your path, in order to call OpenSCAD via it's CLI.

#### Mac

```zsh
# use openscad app via command line on Mac with zsh
path+=('/Applications/OpenSCAD.app/Contents/MacOS/')
export PATH
```

## Roadmap

- Rename package json on reset
- Swap to camelcase function names here, and in ScadESM
- Brand as ObjectKit
- Add more new object scripts
- OpenSCAD integration details on Windows / Linux

## Acknowledgements

Forked from [scad-js-starter](https://github.com/scad-js/scad-js-starter) (MIT) by [20lives](https://github.com/20lives)
Itself from forked from [ScadJS](https://github.com/tasn/scadjs)
