# VEC  
  
## vecSum  
  
  
**Description:** Add multiple vectors. If only two vectors need to be added, `vecAdd` can be used.
\n
The function can be called in two ways:
`vec = vecSum([vec1, vec2, vec3])`
`vec = vecSum(vec1, vec2, vec3)`
\n  
  
**Parameters:**  
  * *v:* A list of vectors or just multiple vectors.  
  
**Returns:** The result vector.  
  
  
## vecAvg  
  
  
**Description:** Calculates the average vector given a list of vectors.
\n
The input vectors and resulting average vector are all normalised.
\n
The function can be called in two ways:
`vec = vecAvg([vec1, vec2, vec3])`
`vec = vecAvg(vec1, vec2, vec3)`
\n  
  
**Parameters:**  
  * *v:* A list of vectors or just multiple vectors.  
  
**Returns:** The average vector.  
  
  
## vecAvgDir  
  
  
**Description:** Calculates a normalised vector with a direction that is the average of the directions of the input vectors.
\n
The result is equivalent to:
`vec = vecNorm(vecSum(vecNorm(v)))`
\n
Note that if the input vectors cancel each other out, the result will be `[0,0,0]`.
\n
The function can be called in two ways:
`vec = vecAvgDir([vec1, vec2, vec3])`
`vec = vecAvgDir(vec1, vec2, vec3)`
\n  
  
**Parameters:**  
  * *v:* A list of input vectors or just multiple vectors.  
  
**Returns:** The result vector.  
  
  
## vecAdd  
  
  
**Description:** Adds two vectors. If more vectors need to be added at once, use `vecSum`.
\n
Overloaded with 4 cases.
\n
- v1 can be one vector, and v2 can be one vector.
- v1 can be a list of vectors, and v2 can be one vector.
- v1 can be one vector, and v2 can be a list of vectors.
- v1 can be a list of vectors, and v2 can be a list of vectors. These lists should have the **same size**.  
  
**Parameters:**  
  * *v1:* The first vector or list of vectors.  
  * *v2:* The second vector or list of vectors.  
  * *norm:* True or False: Normalize the resulting vector.  
  
**Returns:** The result vector.  
  
  
## vecSub  
  
  
**Description:** Subtracts v2 from v1.
\n
Overloaded with 4 cases.
\n
- v1 can be one vector, and v2 can be one vector.
- v1 can be a list of vectors, and v2 can be one vector.
- v1 can be one vector, and v2 can be a list of vectors.
- v1 can be a list of vectors, and v2 can be a list of vectors. These lists should have the **same size**.  
  
**Parameters:**  
  * *v1:* The vector or list of vectors to be subtracted from.  
  * *v2:* The vector or list of vectors to subtract by. (Is unmodified by the expression.)  
  * *norm:* True or False: Normalize the resulting vector.  
  
**Returns:** The result vector.  
  
  
## vecDiv  
  
  
**Description:** Divides a vector by a number.
\n
Overloaded with 4 cases.
\n
- v can be one vector, and num can be one number.
- v can be a list of vectors, and num can be one number.
- v can be one vector, and num can be a list of numbers.
- v can be a list of vectors, and num can be a list of numbers. These lists should have the **same size**.  
  
**Parameters:**  
  * *v:* The input vector or list of vectors.  
  * *num:* A number or list of numbers (to divide the vector by).  
  
**Returns:** The result vector.  
  
  
## vecMult  
  
  
**Description:** Multiplies a vector by a number.
\n
Overloaded with 4 cases.
\n
- v can be one vector, and num can be one number.
- v can be a list of vectors, and num can be one number.
- v can be one vector, and num can be a list of numbers.
- v can be a list of vectors, and num can be a list of numbers. These lists should have the **same size**.  
  
**Parameters:**  
  * *v:* The input vector or list of vectors.  
  * *num:* A number or list of numbers (to multiply the vector by).  
  
**Returns:** The result vector.  
  
  
## vecSetLen  
  
  
**Description:** Sets the magnitude of a vector.
\n
Overloaded with 4 cases.
\n
- v can be one vector, and num can be one number.
- v can be a list of vectors, and num can be one number.
- v can be one vector, and num can be a list of numbers.
- v can be a list of vectors, and num can be a list of numbers. These lists should have the **same size**.  
  
**Parameters:**  
  * *v:* The input vector or list of vectors. (It can have no set magnitude or have its current one be overwritten).  
  * *num:* A number or list of numbers for the new magnitude of v.  
  
**Returns:** The result vector or a list of result vectors.  
  
  
## vecDot  
  
  
**Description:** Calculates the dot product of two vectors.
\n
Overloaded with 4 cases.
\n
- v1 can be one vector, and v2 can be one vector.
- v1 can be a list of vectors, and v2 can be one vector.
- v1 can be one vector, and v2 can be a list of vectors.
- v1 can be a list of vectors, and v2 can be a list of vectors. These lists should have the **same size**.  
  
**Parameters:**  
  * *v1:* The first vector or list of vectors.  
  * *v2:* The second vector or list of vectors.  
  
**Returns:** The number, the result dot product.  
  
  
## vecCross  
  
  
**Description:** Calculates the cross product of two vectors.
\n
Overloaded with 4 cases.
\n
- v1 can be one vector, and v2 can be one vector.
- v1 can be a list of vectors, and v2 can be one vector.
- v1 can be one vector, and v2 can be a list of vectors.
- v1 can be a list of vectors, and v2 can be a list of vectors. These lists should have the **same size**.  
  
**Parameters:**  
  * *v1:* The first vector or list of vectors.  
  * *v2:* The second vector or list of vectors.  
  
**Returns:** The resultant cross product, a list of 3 numbers.  
  
  
## vecAng  
  
  
**Description:** Calculate the angle (0 to PI) between two vectors.
\n
The inner (smaller) angle is always returned, which will always be smaller than or equal to PI.
\n
Overloaded with 4 cases.
\n
- v1 can be one vector, and v2 can be one vector.
- v1 can be a list of vectors, and v2 can be one vector.
- v1 can be one vector, and v2 can be a list of vectors.
- v1 can be a list of vectors, and v2 can be a list of vectors. These lists should have the **same size**.  
  
**Parameters:**  
  * *v1:* The first vector or list of vectors.  
  * *v2:* The second vector or list of vectors.  
  
**Returns:** An angle in radians.  
  
  
## vecFromTo  
  
  
**Description:** Creates a vector between two points.
\n
Overloaded with 4 cases.
\n
- xyz1 can be one coordinate, and xyz2 can be one coordinate.
- xyz1 can be a list of coordinates, and xyz2 can be one coordinate.
- xyz1 can be one coordinate, and xyz2 can be a list of coordinates.
- xyz1 can be a list of coordinates, and xyz2 can be a list of coordinates. These lists should have the **same size**.  
  
**Parameters:**  
  * *xyz1:* The first point or list of points.  
  * *xyz2:* The second point or list of points.  
  
**Returns:** The new vector.  
  
  
## vecEqual  
  
  
**Description:** Returns true if the difference between two vectors is smaller than a specified tolerance.
\n
Overloaded with 2 cases.
\n
- v1 can be one vector, and v2 can be one vector.
- v1 can be a list of vectors, and v2 can be a list of vectors. These lists should have the **same size**.  
  
**Parameters:**  
  * *v1:* The first vector or list of vectors.  
  * *v2:* The second vector or list of vectors.  
  * *tol:* A number to specify the tolerance.  
  
**Returns:** True or False.  
  
  
## vecAng2  
  
  
**Description:** Calculate the angle (0 to 2PI) between two vectors, relative to the plane normal.
\n
Unlike the vecAng() function, this funtion may return an angle larger than PI.
\n
The function calculates the angle from the first vector to the second vector
in a counter-clockwise direction, assuming the normal is pointing up towards the viewer.
\n
Overloaded with 8 cases.
\n
- All single inputs
     - v1 can be one vector, v2 can be one vector, and v3 can be one vector.
- Two single inputs, one list
     - v1 can be a list of vectors, v2 can be one vector, and v3 can be one vector.
     - v1 can be one vector, v2 can be a list of vectors, and v3 can be one vector.
     - v1 can be one vector, v2 can be one vector, and v3 can be a list of vectors.
- One single input, two lists
     - v1 can be a list of vectors, v2 can be a list of vectors, and v3 can be one vector. These lists should have the **same length**.
     - v1 can be a list of vectors, v2 can be one vector, and v3 be a list of vectors. These lists should have the **same length**.
     - v1 can be one vector, v2 can be a list of vectors, and v3 can be a list of vectors. These lists should have the **same length**.
- All lists
     - v1 can be a list of vectors, v2 can be a list of vectors, and v3 can be a list of vectors. All lists should have the **same length**.  
  
**Parameters:**  
  * *v1:* The first vector or list of vectors.  
  * *v2:* The second vector or list of vectors.  
  * *v3:* A normal vector or a list of normal vectors.  
  
**Returns:** The angle, in radians.  
  
  
## vecRot  
  
  
**Description:** Rotates one vector around another vector by a specified angle (in radians).
\n
Overloaded with 8 cases.
\n
- All single inputs
     - v1 can be one vector, v2 can be one vector, and ang can be one number.
- Two single inputs, one list
     - v1 can be a list of vectors, v2 can be one vector, and ang can be one number.
     - v1 can be one vector, v2 can be a list of vectors, and ang can be one number.
     - v1 can be one vector, v2 can be one vector, and ang can be a list of numbers.
- One single input, two lists
     - v1 can be a list of vectors, v2 can be a list of vectors, and ang can be one number. These lists should have the **same length**.
     - v1 can be a list of vectors, v2 can be one vector, and ang be a list of numbers. These lists should have the **same length**.
     - v1 can be one vector, v2 can be a list of vectors, and ang can be a list of numbers. These lists should have the **same length**.
- All lists
     - v1 can be a list of vectors, v2 can be a list of vectors, and ang can be a list of numbers. All lists should have the **same length**.  
  
**Parameters:**  
  * *v1:* The first vector or list of vectors to be rotated.  
  * *v2:* The second vector or list of vectors for v1 to rotate around.  
  * *ang:* The angle or list of angles to rotate v1 by (in radians).  
  
**Returns:** The new vector.  
  
  
## vecLen  
  
  
**Description:** Calculates the magnitude of a vector.
\n
Overloaded. v can be one vector or a list of vectors.  
  
**Parameters:**  
  * *v:* The input vector or list of vectors.  
  
**Returns:** A number or list of numbers.  
  
  
## vecNorm  
  
  
**Description:** Sets the magnitude of a vector to 1.
\n
Overloaded. v can be one vector or a list of vectors.  
  
**Parameters:**  
  * *v:* The input vector or list of vectors.  
  
**Returns:** A new vector or list of new vectors(with a magnitude of 1).  
  
  
## vecRev  
  
  
**Description:** Reverses the direction of a vector.
\n
Overloaded. v can be one vector or a list of vectors.  
  
**Parameters:**  
  * *v:* The input vector or list of vectors.  
  
**Returns:** A new vector or list of new vectors.  
  
  
## vecLtoG  
  
  
**Description:** Transforms a vector from a local coordinate system defined by plane "p" to the global coordinate system.
\n
Overloaded with 4 cases.
\n
- v can be one vector, and p can be one plane.
- v can be a list of vectors, and p can be one plane.
- v can be one vector, and p can be a list of planes.
- v can be a list of vectors, and p can be a list of planes. These lists should have the **same size**.  
  
**Parameters:**  
  * *v:* The vector to be transformed.  
  * *p:* The source plane.  
  
**Returns:** A new vector or list of new vectors.  
  
  
## vecGtoL  
  
  
**Description:** Transforms a vector from the global coordinate system to a local coordinate system defined by plane "p".
\n
Overloaded with 4 cases.
\n
- v can be one vector, and p can be one plane.
- v can be a list of vectors, and p can be one plane.
- v can be one vector, and p can be a list of planes.
- v can be a list of vectors, and p can be a list of planes. These lists should have the **same size**.  
  
**Parameters:**  
  * *v:* The vector or list of vectors to be transformed.  
  * *p:* The target plane or list of planes.  
  
**Returns:** A new vector or list of new vectors.  
  
  
