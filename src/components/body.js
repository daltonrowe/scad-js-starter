import { cube, difference } from "scad-js";
import { bodyHeight, bodyLength, bodyThickness } from "../constants.js";
import holes from "./holes.js";
import hooks from "./hooks.js";

export default function () {
  return difference(
    cube([bodyHeight, bodyLength, bodyThickness]),
    hooks(),
    holes(),
  );
}
