# STATISTICS  
  
## min  
  
  
**Description:** Returns the smallest of the given numbers.
\n
If any one or more of the parameters cannot be converted into a number, NaN is returned.
\n
If no parameters are provided, Infinity is returned.
\n
```
min([5,3,6,2,4])    // 2
min([10, 20, 30])   // 10
```  
  
**Parameters:**  
  * *list:* A list of numbers, or a sequence of numbers.  
  
**Returns:** A number or a list of numbers.  
  
  
## max  
  
  
**Description:** Returns the largest of the given numbers.  
  
**Parameters:**  
  * *list:* A list of numbers, or a sequence of numbers.  
  
**Returns:** A number.  
  
  
## mad  
  
  
**Description:** Returns the median absolute deviation of the list.
\n
```
mad(10, 20, 30)             // returns 10
mad([1, 2, 3])              // returns 1
mad([[1, 2, 3], [4, 5, 6]]) // returns 1.5
```  
  
**Parameters:**  
  * *list:* A list containing numbers.  
  
**Returns:** A number (The median absolute deviation).  
  
  
## mean  
  
  
**Description:** Returns the mean value of the list.
\n
```
mean([1, 2.7, 3.2, 4])               // returns 2.725
```
If the list contains sublists, then the returned list will have the same number of sublists.  
  
**Parameters:**  
  * *list:* A list containing numbers.  
  
**Returns:** A number (The mean).  
  
  
## median  
  
  
**Description:** Returns the median of the list.
\n
```
median([5, 2, 7])        // returns 5
median([3, -1, 5, 7])    // returns 4
```  
  
**Parameters:**  
  * *list:* A list containing numbers.  
  
**Returns:** A number (The median).  
  
  
## mode  
  
  
**Description:** Returns the mode of the list.
\n
```
mode([2, 1, 4, 3, 1])               // returns [1]
mode([1, 2.7, 3.2, 4, 2.7])         // returns [2.7]
mode([1, 4, 6, 1, 6])               // returns [1, 6]
mode(['a','a','b','c'])             // returns ["a"]
mode([1, 1.5, 'abc'])               // returns [1, 1.5, "abc"]
```  
  
**Parameters:**  
  * *list:* A list containing any values.  
  
**Returns:** A list (The mode).  
  
  
## std  
  
  
**Description:** Returns the standard deviation of the list.
By default, the sum of squared errors is divided by (n - 1).
\n
```
std([2, 4, 6])             // returns 2
std([2, 4, 6, 8])          // returns 2.581988897471611
```  
  
**Parameters:**  
  * *list:* A list containing numbers.  
  
**Returns:** A number (The standard deviation).  
  
  
## vari  
  
  
**Description:** Returns the variance of the list.
By default, the sum of squared errors is divided by (n - 1).
\n
```
vari([2, 4, 6])     \\ 4
vari([2, 4, 6, 8])  \\ 6.666666666666667
```  
  
**Parameters:**  
  * *list:* A list containing numbers.  
  
**Returns:** A number (The variance).  
  
  
