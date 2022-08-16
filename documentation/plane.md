# PLANE  
  
## plnMake  
  
  
**Description:** Creates a plane from an origin "o", an "x" axis vector, and any other vector in the "xy" plane.
\n
Overloaded with 4 cases.
\n
- origin can be one coordinate, x_vec can be one vector, and xy_vec can be one vector.
- origin can be a list of coordinates, x_vec can be one vector, and xy_vec can be one vector.
- origin can be a list of coordinates, x_vec can be a list of vectors, and xy_vec can be one vector. These lists should have the **same size**.
- origin can be a list of coordinates, and v2 can be a list of vectors. These lists should have the **same size**.  
  
**Parameters:**  
  * *origin:* A point/position or list of points/positions.  
  * *x\_vec:* A vector or a list of vectors.  
  * *xy\_vec:* Another vector or list of vectors.  
  
**Returns:** A plane.  
  
  
## plnCopy  
  
  
**Description:** Make a copy of the plane "pln".  
  
**Parameters:**  
  * *pln:* The plane to be copied.  
  
**Returns:** The copied plane.  
  
  
## plnMove  
  
  
**Description:** Move the plane "p" relative to the global X, Y, and Z axes, by vector "v".
\n
Overloaded with 3 cases.
\n
- pln can be one plane, and vec can be one vector.
- pln can be a list of planes, and vec can be one vector.
- pln can be a list of planes, and vec can be a list of vectors. These lists should have the **same size**.  
  
**Parameters:**  
  * *pln:* The plane to be moved.  
  * *vec:* The vector to move the plane by.  
  
**Returns:** A new plane that has been moved.  
  
  
## plnRot  
  
  
**Description:** Rotate the plane "p" around the ray "r", by angle "a" (in radians).
\n
Overloaded with 3 cases.
\n
- pln can be one plane, ray can be one ray, and ang can be one number.
- pln can be a list of planes, ray can be one ray, and ang can be one number.
- pln can be a list of planes, ray can be a list of rays, and ang can be a list of numbers. These lists should have the **same size**.  
  
**Parameters:**  
  * *pln:* The plane to be rotated.  
  * *ray:* The ray to rotate the plane around.  
  * *ang:* The angle to rotate the plane, in radians.  
  
**Returns:** A new, rotated plane.  
  
  
## plnLMove  
  
  
**Description:** Move the plane "p" relative to the local X, Y, and Z axes, by vector "v".
\n
Overloaded with 3 cases.
\n
- pln can be one plane, and vec can be one vector.
- pln can be a list of planes, and vec can be one vector.
- pln can be a list of planes, and vec can be a list of vectors. These lists should have the **same size**.  
  
**Parameters:**  
  * *pln:* The plane to be moved.  
  * *vec:* The vector to move the plane by.  
  
**Returns:** The new, moved plane.  
  
  
## plnLRotX  
  
  
**Description:** Rotate the plane "p" around the local X axis, by angle "a" (in radians).
\n
Can be overloaded.  
  
**Parameters:**  
  * *pln:* Plane to be rotated (around the X axis).  
  * *ang:* Angle to rotate plane by, in radians.  
  
**Returns:** The new, rotated plane.  
  
  
## plnLRotY  
  
  
**Description:** Rotate the plane "p" around the local Y axis, by angle "a" (in radians).
\n
Overloaded with 3 cases.
\n
- pln can be one plane, and ang can be one number.
- pln can be a list of planes, and ang can be one number.
- pln can be a list of planes, and ang can be a list of numbers. These lists should have the **same size**.  
  
**Parameters:**  
  * *pln:* Plane to be rotated (around the Y axis).  
  * *ang:* Angle to rotate plane by, in radians.  
  
**Returns:** The new, rotated plane.  
  
  
## plnLRotZ  
  
  
**Description:** Rotate the plane "p" around the local Z axis, by angle "a" (in radians).
\n
Overloaded with 3 cases.
\n
- pln can be one plane, and ang can be one number.
- pln can be a list of planes, and ang can be one number.
- pln can be a list of planes, and ang can be a list of numbers. These lists should have the **same size**.  
  
**Parameters:**  
  * *pln:* Plane to be rotated (around the Z axis).  
  * *ang:* Angle to rotate plane by, in radians.  
  
**Returns:** The new, rotated plane.  
  
  
## plnFromRay  
  
  
**Description:** Generate a plane from a ray. The plane is perpendicular to the ray,
and the origin of the plane will be the same as the ray.  
  
**Parameters:**  
  * *ray:* Input ray (or list of rays) to generate a plane (or list of planes) from.  
  
**Returns:** A plane or list of planes.  
  
  
