# RAY  
  
## rayMake  
  
  
**Description:** Creates a ray from an origin "o" and a direction vector "d".
If `len` is set: Creates a ray from an origin "o", a direction vector "d", and length "l".
\n
Overloaded with 4 cases.
\n
- origin can be one coordinate, dir can be one plane, and len can be one integer.
- origin can be a list of coordinates, dir can be one plane, and len can be one integer.
- origin can be one coordinate, dir can be a list of planes, and len can be one integer.
- origin can be a list of coordinates, dir can be a list of planes, and len can be one integer. These lists should have the **same size**.  
  
**Parameters:**  
  * *origin:* Coordinates or a list of coordinates in the form of [x, y, z].  
  * *dir:* A vector or list of vectors that provides the direction.  
  * *len:* (Optional) An integer for the length.  
  
**Returns:** A new ray.  
  
  
## rayFromTo  
  
  
**Description:** Creates a ray between two points.
\n
Overloaded with 4 cases.
\n
- xyz1 can be one coordinate, and xyz2 can be one coordinate.
- xyz1 can be a list of coordinates, and xyz2 can be one coordinate.
- xyz1 can be one coordinate, and xyz2 can be a list of coordinates.
- xyz1 can be a list of coordinates, and xyz2 can be a list of coordinates. These lists should have the **same size**.  
  
**Parameters:**  
  * *xyz1:* Coordinate 1.  
  * *xyz2:* Coordinate 2.  
  
**Returns:** The created ray or list of rays that has xyz1 as an origin and xyz2 as an endpoint.  
  
  
## rayCopy  
  
  
**Description:** Make a copy of the ray "r".
\n
Overloaded. ray can be one ray or a list of rays.  
  
**Parameters:**  
  * *ray:* The original ray to be copied.  
  
**Returns:** A copy of the original ray.  
  
  
## rayMove  
  
  
**Description:** Move the ray "r" relative to the global X, Y, and Z axes, by vector "v".
\n
Overloaded with 3 cases.
\n
- ray can be one ray, and vec can be one vector.
- ray can be a list of rays, and vec can be one vector.
- ray can be a list of rays, and vec can be a list of vectors. These lists should have the **same size**.  
  
**Parameters:**  
  * *ray:* The ray to be moved.  
  * *vec:* The vector to move the ray with.  
  
**Returns:** The new, moved ray.  
  
  
## rayRot  
  
  
**Description:** Rotate the ray "r1" around the ray "r2", by angle "a" (in radians).
\n
Overloaded with 3 cases.
\n
- ray1 can be one ray, ray2 can be one ray, and ang can be one number.
- ray1 can be a list of rays, ray2 can be one ray, and ang can be one number.
- ray1 can be a list of rays, ray2 can be a list of rays, and ang can be a list of numbers. These lists should have the **same size**.  
  
**Parameters:**  
  * *ray1:* The ray to be rotated.  
  * *ray2:* The ray to be used as the axis of rotation.  
  * *ang:* The angle (in radians) to rotate r1 by.  
  
**Returns:** The new, rotated ray.  
  
  
## rayLMove  
  
  
**Description:** Move the ray "r" relative to the ray direction vector, by distance "d".
\n
Overloaded with 3 cases.
\n
- ray can be one ray, and dist can be one number.
- ray can be a list of rays, and dist can be one number.
- ray can be a list of rays, and dist can be a list of numbers. These lists should have the **same size**.  
  
**Parameters:**  
  * *ray:* The ray to be moved.  
  * *dist:* The distance to move the ray by.  
  
**Returns:** The new, moved ray.  
  
  
## rayFromPln  
  
  
**Description:** Create a ray from a plane "p", with the same origin and with a direction along the plane's z axis.
\n
Overloaded. pln can be one plane or a list of planes.  
  
**Parameters:**  
  * *pln:* The input plane to create a ray from.  
  
**Returns:** A ray.  
  
  
## rayLtoG  
  
  
**Description:** Transforms a ray from a local coordinate system defined by plane "p" to the global coordinate system.
\n
Overloaded with 4 cases.
\n
- r can be one ray, and p can be one plane.
- r can be a list of rays, and p can be one plane.
- r can be one ray, and p can be a list of planes.
- r can be a list of rays, and p can be a list of planes. These lists should have the **same size**.  
  
**Parameters:**  
  * *r:* The ray to be transformed.  
  * *p:* The source plane.  
  
**Returns:** A new ray.  
  
  
## rayGtoL  
  
  
**Description:** Transforms a ray from the global coordinate system to a local coordinate system defined by plane "p".
\n
Overloaded with 4 cases.
\n
- r can be one ray, and p can be one plane.
- r can be a list of rays, and p can be one plane.
- r can be one ray, and p can be a list of planes.
- r can be a list of rays, and p can be a list of planes. These lists should have the **same size**.  
  
**Parameters:**  
  * *r:* The ray to be transformed.  
  * *p:* The target plane.  
  
**Returns:** A new ray.  
  
  
