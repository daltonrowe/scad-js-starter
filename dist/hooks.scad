$fn = 100;
translate(v = [-15, 0, 0])
{
  translate(v = [0, 0, -0.75])
  {
    union()
    {
      union()
      {
        cube(size = [35, 5, 5], center = true);
        translate(v = [0, 0, 15])
        {
          translate(v = [-24.375, 0, 0])
          {
            rotate(a = [0, 90, 90], v = undef)
            {
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
            }
          }
        }
      }
      translate(v = [0, -50, 0])
      {
        union()
        {
          cube(size = [35, 5, 5], center = true);
          translate(v = [0, 0, 15])
          {
            translate(v = [-24.375, 0, 0])
            {
              rotate(a = [0, 90, 90], v = undef)
              {
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
              }
            }
          }
        }
      }
      translate(v = [0, 50, 0])
      {
        union()
        {
          cube(size = [35, 5, 5], center = true);
          translate(v = [0, 0, 15])
          {
            translate(v = [-24.375, 0, 0])
            {
              rotate(a = [0, 90, 90], v = undef)
              {
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
              }
            }
          }
        }
      }
    }
  }
}
