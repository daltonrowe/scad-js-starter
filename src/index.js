import { union } from "scad-js-esm";
import body from "./components/body.js";
import hooks from "./components/hooks.js";

export default function () {
  return union(body(), hooks());
}
