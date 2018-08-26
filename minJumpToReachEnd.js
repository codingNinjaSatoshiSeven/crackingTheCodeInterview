/** Prompt: 
* Given an array of integers where each element represents the max number 
* of steps that can be made forward from that element. Write a function to 
* return the minimum number of jumps to reach the end of the array 
* (starting from the first element). If an element is 0, 
* then cannot move through that element.
*/

// DP, O(n^2) time complexity, O(n) space complexity
var minJumpToReachEnd = function(array) {
  var n = array.length;
  var jumps = [];
  if (n === 0 || array[0] === 0) { // base case
    // if empty array, or 1st element is 0
    // will not reach the other end, invalid
    return Number.POSITIVE_INFINITY;
  } else {
    // starting at 1st element , so # of jumps
    // to get 1st element is 0;
    jumps[0] = 0;

    for (var i = 1; i < n; i++) {
      jumps[i] = Number.POSITIVE_INFINITY;
      for (var j = 0; j < i; j++) {
        if (i <= j + array[j] && jumps[j] !== Number.POSITIVE_INFINITY) {
          jumps[i] = Math.min(jumps[i], jumps[j]+1);
          break;
        }
      }
    }
    return jumps[n-1];
  }
};

console.log(minJumpToReachEnd([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])); // 3
