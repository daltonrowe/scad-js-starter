import { cylinder, difference, sphere } from 'scad-js'

const size = 50;
const hole = size / 2;
const cylinderHeight = size * 2.5;

export default function () {
  return difference(
    sphere(size),
    cylinder(cylinderHeight, hole).rotate([0, 0, 0]),
    cylinder(cylinderHeight, hole).rotate([0, 100, 0]).debug(),
    cylinder(cylinderHeight, hole).rotate([90, 0, 0]),
  );
}
