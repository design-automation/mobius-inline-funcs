# COLORS  
  
## colFalse  
  
  
**Description:** Creates a colour from a value in the range between min and max.  
  
**Parameters:**  
  * *vals:* The input number.  
  * *min:* The smallest number of the scale.  
  * *max:* The largest number of the scale.  
  
**Returns:** A list of three numbers, `[r, g, b]`, in the range 0 to 1.  
  
  
## colScale  
  
  
**Description:** Creates a colour from a value in the range between min and max, given a Brewer scale or custom color scale.  
  
**Parameters:**  
  * *vals:* The input number.  
  * *min:* The smallest number of the scale.  
  * *max:* The largest number of the scale.  
  * *scale:* A string representing a Brewer scale, or a list of strings representing a custom colour scale/gradient.
The order of colors in the gradient will follow the order of the list from left to right.  
  
**Returns:** A list of three numbers, `[r, g, b]`, in the range 0 to 1.  
  
  
## colFromStr  
  
  
**Description:** Creates a color from a string representation.  
  
**Parameters:**  
  * *col\_str:* undefined  
  
**Returns:** A list of three numbers, `[r, g, b]`, in the range 0 to 1.  
  
  
