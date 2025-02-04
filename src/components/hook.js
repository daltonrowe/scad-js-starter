import { square } from "scad-js";
import { hookRadius, hookThickness } from "../constants.js";

function hook() {
  return square([hookThickness, hookThickness])
    .translate_x(hookRadius)
    .rotate_extrude(180, { convexity: 4, $fn: 40 })
    .translate_y((hookRadius / 2) * -1);
}

export default hook;
