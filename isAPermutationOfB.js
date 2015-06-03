/**
* Given two string, find if one is a permutation of the other
*/
// method 1, create a map for A, a map for B, 
// O(n) time complexity, O(1*) space complexity, see 'uniqeCharacter' for space complexity explanation

var isAPermutationOfB_1 = function(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }
  var mapA = {}, mapB = {};
  for (var i = 0; i < strA.length; i++) {
    if (mapA[strA[i]] === undefined) {
      mapA[strA[i]] = 1;
    } else {
      mapA[strA[i]] ++;
    }
  }

  for (var i = 0; i < strB.length; i++) {
    if (mapB[strB[i]] === undefined) {
      mapB[strB[i]] = 1;
    } else {
      mapB[strB[i]] ++;
    }
  }

  for (key in mapA) {
    if (mapB[key] === undefined || mapB[key] !== mapA[key]) {
      return false;
    }
  }

  for (key in mapB) {
    if (mapA[key] === undefined || mapB[key] !== mapA[key]) {
      return false;
    }
  }
  return true;
};

console.log(isAPermutationOfB_1('abc', 'cab')); // true
console.log(isAPermutationOfB_1('abc', 'cabb')); // false
console.log(isAPermutationOfB_1('abc', 'caj')); // false