$fn = 100;
translate(v = [0, -7.5, 0])
{
  rotate_extrude(angle = 180, convexity = 4, $fn = 40)
  {
    translate(v = [15, 0, 0])
    {
      square(size = [5, 5], center = true);
    }
  }
}
