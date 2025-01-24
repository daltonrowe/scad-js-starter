import scadjs from 'scad-js';
const { cylinder, difference, sphere } = scadjs

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
