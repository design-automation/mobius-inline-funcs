# DICT  
  
## dictGet  
  
  
**Description:** Returns the item in the dictionary specified by key.
\n
If the key does not exist, undefined is returned.
If a list of keys is provided, then a list of values will be returned.  
  
**Parameters:**  
  * *dict:* The dictionary.  
  * *key:* The key, either a single string or a list of strings.  
  
**Returns:** The value (or list of values) associated with the given key.  
  
  
## dictKeys  
  
  
**Description:** Returns an array of all the keys in a dictionary.
\n
```
dict1                   = {"key1": 1, "key2": 2}
dictKeys(dict1)        \\ ["key1", "key2"]
```  
  
**Parameters:**  
  * *dict:* The dictionary.  
  
**Returns:** A list.  
  
  
## dictVals  
  
  
**Description:** Returns an array of all the values in a dictionary.
\n
```
dict1                   = {"key1": 1, "key2": 2}
dictVals(dict1)        \\ [1, 2]
```  
  
**Parameters:**  
  * *dict:* The dictionary.  
  
**Returns:** A list.  
  
  
## dictHasKey  
  
  
**Description:** Returns true if the dictionary contains the given key, false otherwise.
\n
If a list of keys is given, a list of true/false values will be returned.  
  
**Parameters:**  
  * *dict:* The dictionary.  
  * *key:* The key, either a string or a list of strings.  
  
**Returns:** True or False, or a list of True/False values.  
  
  
## dictHasVal  
  
  
**Description:** Returns true if the dictionary contains the given value, false otherwsie.  
  
**Parameters:**  
  * *dict:* The dictionary.  
  * *val:* The value to seach for, can be any type.  
  
**Returns:** True or False.  
  
  
## dictFind  
  
  
**Description:** Returns the first key in the dictionary that has the given value.
\n
If the value does not exist, returns null.  
  
**Parameters:**  
  * *dict:* The dictionary.  
  * *val:* The value, can be any type.  
  
**Returns:** The first key, or null.  
  
  
## dictCopy  
  
  
**Description:** Returns a deep copy of the dictionary.
\n
A deep copy means that changing values in the copied dictionary will not affect the original dictionary.  
  
**Parameters:**  
  * *dict:* The dictionary.  
  
**Returns:** The copied dictionary.  
  
  
## dictEq  
  
  
**Description:** Returns true if the values in the two dictionaries are equal.
\n
Performs a deep comparison between values to determine if they are equivalent.  
  
**Parameters:**  
  * *dict1:* The first dictionary.  
  * *dict2:* The second dictionary.  
  
**Returns:** True or False.  
  
  
