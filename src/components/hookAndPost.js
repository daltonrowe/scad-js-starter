import { cube, union } from "scad-js";
import {
  hookRadius,
  hookThickness,
  hookWidth,
  postLength,
} from "../constants.js";
import hook from "./hook.js";

export default function () {
  return union(
    cube([postLength + hookThickness, hookWidth, hookThickness]),
    hook()
      .rotate([0, 90, 90])
      .translate_x((postLength / 2) * -1 - hookRadius / 2 - hookRadius / 8)
      .translate_z(hookRadius),
  );
}
