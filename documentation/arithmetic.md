# ARITHMETIC  
  
## abs  
  
  
**Description:** Returns the absolute value of the given number.
\n
```
abs('-1');     // 1
abs(-2);       // 2
abs(null);     // 0
abs('');       // 0
abs([]);       // 0
abs([2]);      // [2]
abs([1,2]);    // [1,2]
abs({});       // NaN
abs('string'); // NaN
abs();         // NaN
```  
  
**Parameters:**  
  * *num:* A number or list of numbers.  
  
**Returns:** A number, list of numbers or NaN if invalid.  
  
  
## square  
  
  
**Description:** Returns the square of the number.
\n
If the input is a list, the result will also be a list.
\n
```
square([1, 2, 3, 4])    // [1, 4, 9, 16]
square(5)               // 25
```  
  
**Parameters:**  
  * *list:* A number or a list containing numbers.  
  
**Returns:** A number or a list containing numbers.  
  
  
## cube  
  
  
**Description:** Returns the cube of the number.
\n
If the input is a list, the result will also be a list.
\n
```
cube([1, 2, 3, 4])   // [1, 8, 27, 64]
cube(5)              // 125
```  
  
**Parameters:**  
  * *list:* A number or a list containing numbers.  
  
**Returns:** A number or a list containing numbers.  
  
  
## pow  
  
  
**Description:** Returns a number representing the given base taken to the power of the given exponent.
\n
```
pow(7, 2);    // 49
pow(4, 0.5);  // 2 (square root of 4)
pow(8, -1/3); // 0.5
pow(-7, 2);   // 49 (squares are positive)
pow(-7, 3);   // -343 (cubes can be negative)  
  
**Parameters:**  
  * *base:* A number or list of numbers.  
  * *xp:* A number, the exponent used to raise the base.  
  
**Returns:** A number or a list of numbers.  
  
  
## sqrt  
  
  
**Description:** Returns the square root of the given number. If the number is negative, NaN is returned.
\n
```
sqrt(9); // 3
sqrt(2); // 1.414213562373095  
  
**Parameters:**  
  * *num:* A number or list of numbers.  
  
**Returns:** A number, NaN, or a list of numbers.  
  
  
## exp  
  
  
**Description:** Returns a number representing e raised to the power of x, where e is Euler's number and x is the argument.  
  
**Parameters:**  
  * *num:* A number or list of numbers.  
  
**Returns:** A number or a list of numbers.  
  
  
## log  
  
  
**Description:** Returns the natural logarithm (base e) of the given number or list of numbers. If the number is negative, NaN is returned.
\n
If a custom base is needed, using `log(y) / log(x)` will return the logarithm of `y` with base `x`. (log x (y))
\n
```
log(-1);  // NaN, out of range
log(0);   // -Infinity
log(1);   // 0
log(10);  // 2.302585092994046
```  
  
**Parameters:**  
  * *base:* A number or list of numbers.  
  
**Returns:** A number, list of numbers, `Infinity` or `NaN`.  
  
  
## log10  
  
  
**Description:** Returns the base 10 logarithm of the given number or list of numbers. If the number is negative, NaN is returned.
\n
If a custom base is needed, using `log10(y) / log10(x)` will return the logarithm of `y` with base `x`. (log x (y))
\n
```
Math.log10(2);       // 0.3010299956639812
Math.log10(1);       // 0
Math.log10(0);       // -Infinity
Math.log10(-2);      // NaN
Math.log10(100000);  // 5
```  
  
**Parameters:**  
  * *base:* A number or list of numbers.  
  
**Returns:** A number, list of numbers, `Infinity` or `NaN`.  
  
  
## round  
  
  
**Description:** The value of the given number rounded to the nearest integer.
```
round( 20.49); //  20
round( 20.5 ); //  21
round( 42   ); //  42
round(-20.5 ); // -20
round(-20.51); // -21
```  
  
**Parameters:**  
  * *num:* A number or list of numbers.  
  * *dec\_pla:* An integer. Set as 0 by default.  
  
**Returns:** An integer or list of integers.  
  
  
## sigFig  
  
  
**Description:** Returns the value of the given number converted to the specified number of significant figures.  
  
**Parameters:**  
  * *num:* A number or list of numbers.  
  * *sig\_figs:* An integer. The number of significant figures.  
  
**Returns:** A number.  
  
  
## ceil  
  
  
**Description:** Returns the smallest integer greater than or equal to the given number.
```
ceil(.95);    // 1
ceil(4);      // 4
ceil(7.004);  // 8
ceil(-0.95);  // -0
ceil(-4);     // -4
ceil(-7.004); // -7
```  
  
**Parameters:**  
  * *num:* A number or list of numbers.  
  
**Returns:** An integer or list of integers.  
  
  
## floor  
  
  
**Description:** Returns the largest integer less than or equal to the specified number.
```
floor( 45.95); //  45
floor( 45.05); //  45
floor(  4   ); //   4
floor(-45.05); // -46
floor(-45.95); // -46
```  
  
**Parameters:**  
  * *num:* A number or list of numbers.  
  
**Returns:** An integer or list of integers.  
  
  
## sum  
  
  
**Description:** Returns the sum of all values in a list.  
  
**Parameters:**  
  * *list:* A list containing numbers.  
  
**Returns:** A number (The sum).  
  
  
## prod  
  
  
**Description:** Returns the product of all values in a list.
\n
```
prod([2, 3])             // 6
prod([2, 3, 4])          // 24
prod([[2, 5], [4, 3]])   // 120
```  
  
**Parameters:**  
  * *list:* A list containing numbers.  
  
**Returns:** A number (The total product).  
  
  
## hypot  
  
  
**Description:** Returns the hypotenuse (square root of the sum of squares and its arguments) of all values in a list.  
  
**Parameters:**  
  * *list:* A number or list containing numbers.  
  
**Returns:** A number (The hypotenuse).  
  
  
## norm  
  
  
**Description:** Returns the norm of a number or list of numbers. The norm of a mathematical object is a quantity
that generally describes the length, size, or extent of the object.
\n
The norm (length) of a vector should not be confused with a normal vector (a vector perpendicular
to a surface).  
  
**Parameters:**  
  * *list:* A number or list of numbers.  
  * *p:* (Optional) Vector space, a number. Its default value is 2.
Other supported numbers include `Infinity` and `-Infinity`.  
  
**Returns:** A number (The norm).  
  
  
## isApprox  
  
  
**Description:** Returns true if the absolute difference between the two numbers is less than the tolerance, t.  
  
**Parameters:**  
  * *n1:* The first number.  
  * *n2:* The second number.  
  * *t:* The tolerance, a number.  
  
**Returns:** True or False.  
  
  
## isIn  
  
  
**Description:** Returns v1 < v2 < v3 (True/False).  
  
**Parameters:**  
  * *v1:* The first value.  
  * *v2:* The second value.  
  * *v3:* The third value.  
  
**Returns:** True or False.  
  
  
## isWithin  
  
  
**Description:** Returns v1 <= v2 <= v3 (True/False).  
  
**Parameters:**  
  * *v1:* The first value.  
  * *v2:* The second value.  
  * *v3:* The third value.  
  
**Returns:** True or False.  
  
  
## remap  
  
  
**Description:** Maps a number from the d1 domain to the d2 domain.
\n
This can be thought of as a percentage.
The percentage of num in d1's range is calculated,
then used to find the equivalent value for num in d2.
\n
```
remap(10, [0, 100], [100,200]) // 10 is 10% of 0-100. Hence, 10% of 100-200 is 110.
remap(40, [20, 80], [0, 30])   // 40 is 33.3% of 20-80. Hence, 33.3% of 0-30 is 10.
```  
  
**Parameters:**  
  * *num:* The number/integer to be remapped.  
  * *d1:* A list of two numbers, representing the first domain.  
  * *d2:* A list of two numbers, representing the second domain.  
  
**Returns:** The remapped number.  
  
  
