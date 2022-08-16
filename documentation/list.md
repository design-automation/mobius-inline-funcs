# LIST  
  
## listCopy  
  
  
**Description:** Returns a shallow copy of the list.
\n
A shallow copy means that changing primitive entities (e.g. numbers, strings) in the
copied list will not affect the original list.  
  
**Parameters:**  
  * *list:* The list.  
  
**Returns:** The copy of the list.  
  
  
## listCount  
  
  
**Description:** Returns the number of times the value is in the list.  
  
**Parameters:**  
  * *list:* The list.  
  * *val:* The value, can be any type.  
  
**Returns:** An integer.  
  
  
## listCull  
  
  
**Description:** Returns a new list of all the values that evaluate to true.  
  
**Parameters:**  
  * *list1:* The list.  
  * *list2:* (Optional) A list of values, to be used to cull the first list.  
  
**Returns:** A new list.  
  
  
## listEq  
  
  
**Description:** Returns true if the values in the two lists are equal.  
  
**Parameters:**  
  * *list1:* The first list.  
  * *list2:* The second list.  
  
**Returns:** True or False.  
  
  
## listFind  
  
  
**Description:** Returns the index of the first occurence of the value in the list.  
  
**Parameters:**  
  * *list:* The list.  
  * *val:* The value, can be of any type.  
  
**Returns:** The index of the first occurence of the value (an integer), or null.  
  
  
## listFlat  
  
  
**Description:** Returns a flattened copy of the list. If the input list has lists nested within it, the values of
the nested lists will be unnested.  
  
**Parameters:**  
  * *list:* The list.  
  * *depth:* (Optional) The depth to flatten to, an integer.  
  
**Returns:** The flattened list.  
  
  
## listGet  
  
  
**Description:** Returns the item in the list specified by index, either a positive or negative integer.
If the index is larger than the size of the list, `undefined` is returned.  
  
**Parameters:**  
  * *list:* The list.  
  * *idx:* The index, an integer or a list of integers.  
  
**Returns:** The specified item, or list of items.  
  
  
## listHas  
  
  
**Description:** Returns true if the list contains the value, false otherwise.  
  
**Parameters:**  
  * *list:* The list.  
  * *val:* The value, can be any type.  
  
**Returns:** True or False.  
  
  
## listJoin  
  
  
**Description:** Joins two or more lists into a single list.  
  
**Parameters:**  
  * *lists:* Multiple lists.  
  
**Returns:** The combined list.  
**Examples:**  
  * `list = listJoin([1, 2], [3, 4], [5, 6])`  
    Returns `[1, 2, 3, 4, 5, 6]`.
  
  * `list = listJoin([1, 2, 3], 4)`  
    Returns `[1, 2, 3, 4]`.
  
  * `list = listJoin(1, 2, 3)`  
    Returns `[1, 2, 3]`.
  
  * `list = listJoin(1, [2, 3], [[4, 5, 6]])`  
    Returns `[1, 2, 3, [4, 5, 6]]`.
  
  
  
## listRep  
  
  
**Description:** Returns a new list that repeats the contents of the input list n times.  
  
**Parameters:**  
  * *list:* The list.  
  * *n:* An integer. The number of repetitons.  
  
**Returns:** A new list.  
  
  
## listRev  
  
  
**Description:** Creates a new list, with the items in reverse order.  
  
**Parameters:**  
  * *list:* The list to reverse.  
  
**Returns:** A new list.  
  
  
## listRot  
  
  
**Description:** Return a list that is rotated, i.e. items from the end of the list are moved to the start of the list.
For a positive rotation, items are moved from the end to the start of the list.
For a negative rotation, items are moved from the start to the end of the list.  
  
**Parameters:**  
  * *list:* The list.  
  * *rot:* The number of items to rotate, an integer.  
  
**Returns:** The rotated list.  
  
  
## listSlice  
  
  
**Description:** Return a sub-list from the list.  
  
**Parameters:**  
  * *list:* The list.  
  * *start:* The start index of the slice operation, an integer.  
  * *end:* (Optional) The end index of the slice operation, an integer. Defaults to the length of the list.  
  
**Returns:** The sub-list.  
  
  
## listSort  
  
  
**Description:** Creates a new list, with the items in sorted order.  
  
**Parameters:**  
  * *list1:* The input list.  
  * *list2:* (Optional) A list indicating the order to sort list 1 in.  
  
**Returns:** A new list.  
  
  
## listZip  
  
  
**Description:** Converts a set of lists from rows into columns.  
  
**Parameters:**  
  * *lists:* The list of lists, or first row list.  
  
**Returns:** A new list.  
  
  
## range  
  
  
**Description:** Generates a list of integers, from 0 to `end` (exclusive), with a step size of 1.
If `start` has been set: Generates a list of integers, from start (inclusive) to `end` (exclusive), with a step size of 1.
If `start` and `step` has been set: Generates a list of integers, from start to end, with a specified step size.
```
range(3)           // [0, 1, 2]
range(2, 6)        // [2, 3, 4, 5]
range(1, 9, 2)     // [1, 3, 5, 7]
```  
  
**Parameters:**  
  * *start:* (Optional) An integer. The start of the range, inclusive.  
  * *end:* An integer. The end of the range, exclusive.  
  * *step:* (Optional) An integer. The step size.  
  
**Returns:** A list.  
  
  
