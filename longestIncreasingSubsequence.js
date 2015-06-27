/** Prompt: The longest Increasing Subsequence (LIS) problem is to 
* find the length of the longest subsequence of a given sequence such that 
* all elements of the subsequence are sorted in increasing order. 
* For example, length of LIS for { 10, 22, 9, 33, 21, 50, 41, 60, 80 } 
* is 6 and LIS is {10, 22, 33, 50, 60, 80}.
*/

// DP, with O(n^2) time complexity, and O(n) space complexity
var longestIncreasingSubsequence = function(array) {
  var n = array.length;
  if (n <= 1) {
    return n;
  }
  var lis = [];
  for (var i = 0; i < n; i++) {
    lis[i] = 1;
  }
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < i; j++) {
      if (array[i] > array[j]) {
        if (lis[i] <= lis[j]) {
          lis[i] = lis[j] + 1;
        }
      }
    }
  }
  var max = 0;
  for (var i = 0; i < n; i++) {
    if (lis[i] > max) {
      max = lis[i];
    }
  }
  return max;
};

console.log(longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80])); // 6
