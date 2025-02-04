# SCADESM Starter

## Getting Started

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
run run dev hook # src/components/hook.js
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
run run build hook # src/components/hook.js
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
npm run reset -- --remove-git # ⚠️ remove existing git history
```

## OpenSCAD Integration

TODO

## Acknowledgements

Forked from [scad-js-starter](https://github.com/scad-js/scad-js-starter) (MIT) by [20lives](https://github.com/20lives)
Itself from forked from [ScadJS](https://github.com/tasn/scadjs)
