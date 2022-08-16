# GEOMETRY  
  
## intersect  
  
  
**Description:** Returns the intersection xyz between two rays or a ray and a plane, where...
\n
- `intersect(r1, r2)`, Returns the intersection xyz between two infinite rays.
- `intersect(r1, r2, m)`, Returns the intersection xyz between two rays, where:
     - if `m=2`, rays are infinite in both directions
     - if `m=1` rays are infinite in one direction
     - if `m=0`, rays are not infinite.
\n
- `intersect(r, p)`, Returns the intersection xyz between an infinite ray r and an infinite plane p,
- `intersect(r, p, m)`, Returns the intersection xyz between a ray r and an infinite plane p, where:
     - if `m=2`, the ray is infinite in both directions,
     - if `m=1` the ray is infinite in one direction,
     - and if `m=0`, the ray is not infinite.  
  
**Parameters:**  
  * *r1:* The first ray.  
  * *r2:* The second ray or plane.  
  * *met:* (Optional) Creates certain conditions, as seen above.  
  
**Returns:** The xyz coordinates of the intersection between two rays.  
  
  
## project  
  
  
**Description:** Returns the xyz from projecting an xyz c onto an infinite ray r or infinite plane p where...
\n
- `project(c, r)`, Returns the xyz from projecting an xyz c onto an infinite ray r,
- `project(c, r, m)`, Returns the xyz from projecting an xyz c onto an infinite ray r, where:
     - if `m=2`, the ray is infinite in both directions,
     - if `m=1`, the ray is infinite in one direction,
     - and if `m=0`, the ray is not infinite.
- `project(c, p)`, Returns the xyz from projecting an xyz c onto an infinite plane p.  
  
**Parameters:**  
  * *c:* An xyz coordinate.  
  * *r:* A ray or a plane.  
  * *met:* (Optional) Creates certain conditions, as seen above.  
  
**Returns:** An xyz coordinate.  
  
  
## distance  
  
  
**Description:** `b` can be an xyz, infinite ray or an infinite plane, such that the function calculates one of the following:
\n
- Returns the Euclidean distance between two xyzs, a and b.
- Returns the Euclidean distance between an xyz a and an infinite ray b.
- Returns the Euclidean distance between an xyz a and an infinite plane b.  
  
**Parameters:**  
  * *a:* The first xyz.  
  * *b:* The second xyz, an infinite ray, or an infinite plane.  
  
**Returns:** A number, the distance.  
  
  
## distanceM  
  
  
**Description:** `b` can be an xyz, infinite ray or an infinite plane, such that the function calculates one of the following:
\n
- Returns the Manhattan distance between two xyzs, a and b.
- Returns the Manhattan distance between an xyz a and an infinite ray b.
- Returns the Manhattan distance between an xyz a and an infinite plane b.
\n
<a href="https://www.omnicalculator.com/math/manhattan-distance#what-is-the-manhattan-distance" target="_blank"> See here for an explanation on the Manhattan distance. </a>  
  
**Parameters:**  
  * *a:* The first xyz.  
  * *b:* The second xyz, an infinite ray, or an infinite plane.  
  
**Returns:** A number, the Manhattan distance between the points.  
  
  
## distanceMS  
  
  
**Description:** `b` can be an xyz, infinite ray or an infinite plane, such that the function calculates one of the following:
\n
- Returns the Manhattan squared distance between two xyzs, a and b.
- Returns the Manhattan squared distance between an xyz a and an infinite ray b.
- Returns the Manhattan squared distance between an xyz a and an infinite plane b.
\n
<a href="https://www.omnicalculator.com/math/manhattan-distance#what-is-the-manhattan-distance" target="_blank"> See here for an explanation on the Manhattan distance. </a>  
  
**Parameters:**  
  * *a:* The first point/position.  
  * *b:* The second point/position.  
  
**Returns:** A number. The Manhattan squared distance between the points.  
  
  
