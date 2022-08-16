# RAND  
  
## rand  
  
  
**Description:** Returns a random number in the specified range.
If `seed` is set: Returns a random number (with decimals) in the specified range, given a numeric seed.  
  
**Parameters:**  
  * *min:* The minimum number (inclusive).  
  * *max:* The maximum number (exclusive).  
  * *seed:* (Optional) If a seed is given, the result will be the same for the same seed.  
  
**Returns:** A number (with decimals).  
  
  
## randInt  
  
  
**Description:** Returns a random integer in the specified range.
If `seed` is set: Returns a random integer in the specified range, given a numeric seed.  
  
**Parameters:**  
  * *min:* The minimum integer (inclusive).  
  * *max:* The maximum integer (exclusive).  
  * *seed:* (Optional) A number. If a seed is given, the result will be the same for the same seed.  
  
**Returns:** An integer.  
  
  
## randPick  
  
  
**Description:** Returns a random set of items from the list.
If `seed` is set: Returns a random set of items from the list, based on the numeric seed.  
  
**Parameters:**  
  * *list:* A list. The set of items that can be returned.  
  * *num:* An integer. The number of items to return from the list.  
  * *seed:* (Optional) A number. If a seed is given, the result will be the same for the same seed.  
  
**Returns:** A list, or a value (if num is set to 1).  
  
  
