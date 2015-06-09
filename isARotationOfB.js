/** Prompt:Check if string A is a rotation of string B by only calling isSubstring once.
*   rotation is defined such if string A is "apple", A can be split into "ap", "ple", so 
*   "pleap" would be an rotation of A.
*/

// isSubstring is O(n) time complexity
var isSubstring = function(majorStr, minorStr) {
  if (majorStr.indexOf(minorStr) !== -1) {
    return true;
  }
  return false;
}

// since there's no loop, and call isSubstring only once,
// isARotationOfB is O(n) time complexity
var isARotationOfB = function (strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }
  var extendedStr = strA + strA;
  if (isSubstring(extendedStr, strB)) {
    return true;
  } else {
    return false;
  }
}

console.log(isARotationOfB('waterbottle', 'erbottlewat'));
console.log(isARotationOfB('waterbottle', 'erbottlewar'));