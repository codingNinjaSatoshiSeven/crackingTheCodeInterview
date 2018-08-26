/**
* Given a string, find if it has all unique characters. what if you cannot use additional
* data structure? (ask to clarify what additional data structure is)
*/

// method 1, O(n^2) time complexity, O(1) space complexity
var uniqueCharacters_1 = function(string) {
  for (var i = 0; i < string.length; i++) {
    for (var j = i+1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
};


console.log(uniqueCharacters_1('abcdef')); //true
console.log(uniqueCharacters_1('abcdea')); //false

// method 2, O(n) time complexity, O(1*) space complexity
/* * since there's only limited set of chars (in ASCII there's only 128 possible char)
* this means the map/hash used to store the char can only be O(k*1), which is O(1) space complexity
*/
var uniqueCharacters_2 = function(string) {
  var charMap = {};
  for (var i = 0; i < string.length; i++) {
    if (charMap[string[i]] === undefined) {
      charMap[string[i]] = 1;
    } else {
      return false;
    }
  }
  return true;
};


console.log(uniqueCharacters_2('abcdef')); //true
console.log(uniqueCharacters_2('abcdea')); //false