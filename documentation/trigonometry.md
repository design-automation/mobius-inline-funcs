# TRIGONOMETRY  
  
## sin  
  
  
**Description:** Returns the sine of the given number.
\n
```
sin(0);           // 0
sin(PI/2);        // 1
```  
  
**Parameters:**  
  * *num:* A number or list of numbers (in radians).  
  
**Returns:** A number or list of numbers.  
  
  
## asin  
  
  
**Description:** Returns the arcsine (in radians) of the given number if it's between -1 and 1; otherwise, NaN.
\n
```
asin(-2);  // NaN
asin(-1);  // -1.5707963267948966 (-pi/2)
asin(0);   // 0
asin(0.5); // 0.5235987755982989
asin(1);   // 1.5707963267948966 (pi/2)
asin(2);   // NaN
```  
  
**Parameters:**  
  * *num:* A number or list of numbers between -1 and 1.  
  
**Returns:** A number or list of numbers (in radians).  
  
  
## sinh  
  
  
**Description:** Returns the hyperbolic sine (in radians) of the given number.
\n
```
sinh(0); // 0
sinh(1); // 1.1752011936438014
```  
  
**Parameters:**  
  * *num:* A number or list of numbers.  
  
**Returns:** A number or list of numbers (in radians).  
  
  
## asinh  
  
  
**Description:** Returns the hyperbolic arcsine of the given number.
\n
```
asinh(1);  // 0.881373587019543
asinh(0);  // 0
```  
  
**Parameters:**  
  * *num:* A number or list of numbers.  
  
**Returns:** A number or list of numbers.  
  
  
## cos  
  
  
**Description:** Returns the cosine of the given number.
\n
```
cos(0);           // 1
cos(1);           // 0.5403023058681398
cos(PI);          // -1
cos(2 * PI);      // 1
```  
  
**Parameters:**  
  * *num:* A number or list of numbers (in radians).  
  
**Returns:** A number or list of numbers.  
  
  
## acos  
  
  
**Description:** Returns the arc-cosine (in radians) of the given number between -1 and 1; otherwise, NaN.
\n
```
acos(-2);  // NaN
acos(-1);  // 3.141592653589793
acos(0);   // 1.5707963267948966
acos(0.5); // 1.0471975511965979
acos(1);   // 0
acos(2);   // NaN
```  
  
**Parameters:**  
  * *num:* A number or list of numbers between -1 and 1.  
  
**Returns:** A number, list of numbers or NaN.  
  
  
## cosh  
  
  
**Description:** Returns the hyperbolic cosine (in radians) of the given number.
\n
```
cosh(0); // 1
cosh(1); // 1.5430806348152437
```  
  
**Parameters:**  
  * *num:* A number or list of numbers (in radians).  
  
**Returns:** A number.  
  
  
## acosh  
  
  
**Description:** Returns the hyperbolic arc-cosine of the given number. If the number is less than 1, NaN.
\n
```
acosh(-1);  // NaN
acosh(0);   // NaN
acosh(0.5); // NaN
acosh(1);   // 0
acosh(2);   // 1.3169578969248166
```  
  
**Parameters:**  
  * *num:* A number or list of numbers.  
  
**Returns:** A number, or NaN.  
  
  
## tan  
  
  
**Description:** Returns the tangent of the given number.
\n
```
tan(1); // 1.5574077246549023
```  
  
**Parameters:**  
  * *num:* A number or list of numbers (in radians).  
  
**Returns:** A number.  
  
  
## atan  
  
  
**Description:** Returns the arc-tangent (in radians) of the given number.
\n
```
atan(1);   // 0.7853981633974483
atan(0);   // 0
atan(-0);  // -0
atan(Infinity);   //  1.5707963267948966
atan(-Infinity);  // -1.5707963267948966
```  
  
**Parameters:**  
  * *num:* A number or list of numbers between -1 and 1.
  
  
  
## atan2  
  
  
**Description:** Returns the angle in radians (in [-π,π]) between the positive x-axis and the ray from (0,0) to
the point.
\n
```
atan2([15, 90]]); // 1.4056476493802699
atan2([90, 15]]); // 0.16514867741462683
```  
  
**Parameters:**  
  * *xy:* A list of two numbers [x,y] or a list of lists [[x,y], [x,y], [x,y]...].  
  
**Returns:** A number (in radians).  
  
  
## tanh  
  
  
**Description:** Returns the hyperbolic tangent of the given number.
\n
```
tanh(0);        // 0
tanh(Infinity); // 1
tanh(1);        // 0.7615941559557649
```  
  
**Parameters:**  
  * *num:* A number or list of numbers (in radians).  
  
**Returns:** A number or list of numbers.  
  
  
## atanh  
  
  
**Description:** Returns the hyperbolic arc-tangent of the given number.
\n
```
atanh(-2);  // NaN
atanh(-1);  // -Infinity
atanh(0);   // 0
atanh(0.5); // 0.5493061443340548
atanh(1);   // Infinity
atanh(2);   // NaN
```  
  
**Parameters:**  
  * *num:* A number or list of numbers.  
  
**Returns:** A number or list of numbers.  
  
  
