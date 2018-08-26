/** Prompt: Given a rod of length n inches and an array 
* of prices that contains prices of all pieces of 
* size smaller than n. Determine the maximum value 
* obtainable by cutting up the rod and selling the pieces.
*/

//method 1: recursion. O(2^n) time complexity, O(1) space complexity
var cutRod = function(price, n) {
  if (n <= 0) {
    return 0;
  }
  var max = Number.NEGATIVE_INFINITY;
  for (var i = 0; i < n; i++) {
    max = Math.max(max, price[i] + cutRod(price, n-i-1));
  }
  return max;
};

console.log(cutRod([1, 5, 8, 9, 10, 17, 17, 20], 8)); // 22

// method 2: DP. O(n^2) time complexity, O(n) space complexity

var cutRod_2 = function(price, n) {
  if (n <= 0) {
    return 0;
  }
  var val = [];
  val[0] = 0;
  
  for (var i = 1; i <= n; i++) {
    var max = Number.NEGATIVE_INFINITY;
    for (var j = 0; j < i; j++) {
      max = Math.max(max, price[j] + val[i-j-1]);
    }
    val[i] = max;
  }
  return val[n];
};

console.log(cutRod_2([1, 5, 8, 9, 10, 17, 17, 20], 8));

