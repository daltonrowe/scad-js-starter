import { union } from "scad-js";
import {
  bodySpacing,
  bodyThickness,
  hookThickness,
  postLength,
} from "../constants.js";
import hookAndPost from "./hookAndPost.js";

export default function () {
  return union(
    hookAndPost(),
    hookAndPost().translate_y(bodySpacing * -1),
    hookAndPost().translate_y(bodySpacing),
  )
    .translate_z((bodyThickness / 2) * -1 + hookThickness / 2)
    .translate_x((postLength / 2) * -1);
}
