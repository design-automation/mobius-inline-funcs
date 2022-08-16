# STRS  
  
## strRepl  
  
  
**Description:** Replace all instances of specified search string with a new string. The search string can be a regular expression.
\n
Overloaded. str can be one string or a list of strings.  
  
**Parameters:**  
  * *str:* String to search through and modify.  
  * *search\_str:* String to search for and replace.  
  * *new\_str:* New string to replace search\_str.  
  
**Returns:** The modified string.  
  
  
## strUpp  
  
  
**Description:** Converts all the alphabetic characters in a string to uppercase.
\n
Overloaded. str can be one string or a list of strings.  
  
**Parameters:**  
  * *str:* Input string.  
  
**Returns:** The modified uppercase string.  
  
  
## strLow  
  
  
**Description:** Converts all the alphabetic characters in a string to lowercase.
\n
Overloaded. str can be one string or a list of strings.  
  
**Parameters:**  
  * *str:* Input string, or list of input strings.  
  
**Returns:** The modified lowercase string.  
  
  
## strTrim  
  
  
**Description:** Removes the leading and trailing white space and line terminator characters from a string.
For example, \ is considered a line terminator character.
```
strTrim("This\ is a \sentence")                \\ "This is a sentence" 
strTrim("   This used to have whitespace   ")  \\ "This used to have whitespace"
```
\n
Overloaded. str can be one string or a list of strings.  
  
**Parameters:**  
  * *str:* Input string.  
  
**Returns:** The modified string.  
  
  
## strTrimR  
  
  
**Description:** Removes whitespace from the right end of a string.
\n
Overloaded. str can be one string or a list of strings.  
  
**Parameters:**  
  * *str:* Input string.  
  
**Returns:** The modified string.  
  
  
## strTrimL  
  
  
**Description:** Removes whitespace from the left end of a string.
\n
Overloaded. str can be one string or a list of strings.  
  
**Parameters:**  
  * *str:* Input string.  
  
**Returns:** The modified string.  
  
  
## strPadL  
  
  
**Description:** Pads the start of the s1 string with white spaces so that the resulting string reaches a given length.
If `fill/s2` has been set: Pads the start of the s1 string with the s2 string so that the resulting string reaches a given length.
\n
Overloaded. str can be one string or a list of strings.  
  
**Parameters:**  
  * *str:* "s1", Input string.  
  * *max:* An integer (the desired length).  
  * *fill:* (Optional) "s2", The string to pad the input string with, starting from the left of s1.  
  
**Returns:** The modified string.  
  
  
## strPadR  
  
  
**Description:** Pads the end of the s1 string with white spaces so that the resulting string reaches a given length.
If `fill/s2` has been set: Pads the end of the s1 string with the s2 string so that the resulting string reaches a given length.
\n
Overloaded. str can be one string or a list of strings.  
  
**Parameters:**  
  * *str:* "s1", Input string.  
  * *max:* An integer (the desired length).  
  * *fill:* (Optional) "s2", The string to pad the input string with, starting from the right of s1.  
  
**Returns:** The modified string.  
  
  
## strSub  
  
  
**Description:** Gets a substring beginning at the specified index and ending at the end of the string.
If `length` is set: Gets a substring beginning at the specified index and having the specified length.
\n
Overloaded. str can be one string or a list of strings.  
  
**Parameters:**  
  * *str:* A string.  
  * *from:* An integer corresponding to the starting index.  
  * *length:* (Optional) An integer for the specified length.  
  
**Returns:** The modified string.  
  
  
## strStarts  
  
  
**Description:** Returns true if the string s1 starts with s2, false otherwise.
\n
Overloaded. str can be one string or a list of strings.  
  
**Parameters:**  
  * *str:* A string, "s1".  
  * *starts:* A string, "s2".  
  
**Returns:** True or False.  
  
  
## strEnds  
  
  
**Description:** Returns true if the string s1 ends with s2, false otherwise.
\n
Overloaded with 2 cases.
\n
- str can be one string and ends can be one string.
- str can be a list of strings and ends can be one string.  
  
**Parameters:**  
  * *str:* A string or list of strings, "s1".  
  * *ends:* A string, "s2".  
  
**Returns:** True or False.  
  
  
## strToJSON  
  
  
**Description:** Returns a JSON object parsed from an input string.
\n
<a href ="https://www.w3schools.com/js/js_json_objects.asp" target="_blank">See w3schools for more info on JSON objects. </a>
\n
```
strToJSON("{\"name\":\"John\",\"age\":\"30\"}")   
```
\\ returns {"<b>name</b>": "John", "<b>age</b>": "30"}  
  
**Parameters:**  
  * *str:* Input string.  
  
**Returns:** A JSON object.  
  
  
