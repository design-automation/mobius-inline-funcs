# CONVERSION  
  
## boolean  
  
  
**Description:** Create a boolean or convert a string or number to a boolean.
\n
In case of a number, true is returned for non-zero numbers, and false in case of zero.
Strings can be 'true' or 'false', or can contain a number.
When value is a matrix, all elements will be converted to boolean.  
  
**Parameters:**  
  * *val:* A value of any type.  
  
**Returns:** True or False.  
  
  
## number  
  
  
**Description:** Create a number or convert a string, boolean, or unit to a number.
When value is a matrix, all elements will be converted to numbers.  
  
**Parameters:**  
  * *val:* A value of any type.  
  
**Returns:** A number/numbers.  
  
  
## string  
  
  
**Description:** Create a string or convert any object into a string.
Elements of Arrays and Matrices are processed element wise.  
  
**Parameters:**  
  * *val:* A value of any type.  
  
**Returns:** A string/strings.  
  
  
## radToDeg  
  
  
**Description:** Converts radians to degrees.
```
radToDeg(PI)         // 180
radToDeg(PI / 2)     // 90
```  
  
**Parameters:**  
  * *rad:* A number (representing radians).  
  
**Returns:** A number (representing degrees).  
  
  
## degToRad  
  
  
**Description:** Converts degrees to radians.
```
degToRad(45)   // 0.7853981633974483 (PI/4)
degToRad(180)  // 3.141592653589793 (PI)
```  
  
**Parameters:**  
  * *deg:* A number (representing degrees).  
  
**Returns:** A number (representing radians).  
  
  
## numToStr  
  
  
**Description:** Converts the number to a string, with commas, e.g. 1,234,567  
  
**Parameters:**  
  * *num:* A number (with decimals) or an integer.  
  * *frac\_digits:* (Optional) An integer specifying the number of fraction digits.  
  * *locale:* (Optional) A locale in the form of a string.  
  
**Returns:** A string.  
  
  
## numToCurr  
  
  
**Description:** Converts the number to a string representing currency, with numbers formatted based on locale.
```
numToCurr(232.4, "Usd", "en-AU")       // USD 232.40
numToCurr(1000000000, "sgd", "en-GB")  // SGD 1,000,000,000.00
numToCurr(10, "EUR")                   // €10.00
```
See <a href="https://www.w3schools.com/jsref/jsref_tolocalestring_number.asp" target="_blank">
w3schools' full list of locales.</a>  
  
**Parameters:**  
  * *num:* A number (with decimals) or an integer.  
  * *currency:* A string of 3 letters to indicate the desired currency. The letters will be converted to uppercase.  
  * *locale:* (Optional) A locale in the form of a string.  
  
**Returns:** A string.  
  
  
