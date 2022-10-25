/*Check If Two String Arrays are Equivalent
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

 

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
Example 3:

Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true
 

Constraints:

1 <= word1.length, word2.length <= 103
1 <= word1[i].length, word2[i].length <= 103
1 <= sum(word1[i].length), sum(word2[i].length) <= 103
word1[i] and word2[i] consist of lowercase letters. */
function checkArrayEquality(_array1, _array2) {
    if (_array1 === null || _array2 === null) 
        return false;
    if (_array1.length !== _array2.length)
        return false;
    for (var i = 0; i < _array1.length; ++i) 
    {
         if (_array1[i] !== _array2[i]) 
         return false;
    }
    return true;
  }
//usage
let array1 = [1,2,"Hello",7] 
let array2 = ["Hello",7,2,1] 
let array3 = [1,2,"Hello", 7] 
console.log(checkArrayEquality(array1,array2));
console.log(checkArrayEquality(array1,array3));