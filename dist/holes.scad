$fn = 100;
union()
{
  translate(v = [0, 25, 0])
  {
    cylinder(h = 6.53, r = 1.6, center = true);
  }
  translate(v = [0, -25, 0])
  {
    cylinder(h = 6.53, r = 1.6, center = true);
  }
}
