/** Prompt: Implement the indexOf functionality of JavaScript
*/

// method 1, O(n^2) time complexity, O(1) space complexity
var strIndexOf = function(incoming, target) {
  for (var i = 0; i < incoming.length; i++) {
    var potentialPosition = -1;
    var matched = true;
    var iPos = i;
    var tPos = 0;
    var initial = true;
    while (tPos < target.length) {
      if (incoming[iPos] === target[tPos]) { // if still matching, go to next char
        if (initial === true) {
          potentialPosition = i; 
          initial = false;
        }
        iPos++;
        tPos++;
      } else {
        matched = false;
        potentialPosition = -1;
        initial = true;
        break;
      }
    }
    if (matched === true) { // if scanning through the sequence, and matched,
      return potentialPosition;
    } else { // not match
      potentialPosition = -1;
      continue;
    }
  }
  return potentialPosition;
};

console.log(strIndexOf('pineapplapple', 'apple'));
console.log(strIndexOf('ababc', 'b'));
console.log(strIndexOf('a', 'b'));
