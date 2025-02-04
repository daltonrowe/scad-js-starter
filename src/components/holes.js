import { cylinder, union } from "scad-js";
import { bodySpacing, holeHeight, holeRadius } from "../constants.js";

export default function () {
  return union(
    cylinder(holeHeight, holeRadius).translate_y(bodySpacing / 2),
    cylinder(holeHeight, holeRadius).translate_y((bodySpacing / 2) * -1),
  );
}
