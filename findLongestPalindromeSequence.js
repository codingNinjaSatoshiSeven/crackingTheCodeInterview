/** Prompt: Given a sequence, find the length of the longest palindromic subsequence in it
*/

//method 1: recursion, O(2^n) time complexity, O(1) space complexity
var findLongestPalindromeSequence = function(string, start, end) {
  if (start === end) {
    return 1;
  } else {
    if (string[start] === string[end] && start+1 === end) {
      return 2;
    } else if (string[start] === string[end] ) {
      return findLongestPalindromeSequence(string, start+1, end-1) + 2;
    } else {
      return Math.max(findLongestPalindromeSequence(string, start, end-1), findLongestPalindromeSequence(string, start+1, end));
    }
  }
};

console.log(findLongestPalindromeSequence('BBABCBCAB', 0, 8)); //7

//method 2: DP, O(n^2) time complexity, O(n^2) space complexity
var findLongestPalindromeSequence_2 = function(string, start, end) {
  var record = [];
  var n = end - start + 1; 
  for (var i = 0 ; i < n; i++) {
    record.push([]);
    for (var j = 0; j < n; j++) {
      if (i === j) {
        record[i][j] = 1;
      } else {
        record[i][j] = 0;
      }
    }
  }
  for (var len = 2; len <= n; len++) {
    for (var i = start; i < end - len + 2 ; i++) {
      j = i + len - 1;
      if (string[i] === string[j] && len === 2) {
        record[i-start][j-start] = 2;
      } else if (string[i] === string[j]){
        record[i-start][j-start] = record[i-start+1][j-start-1] +2;
      } else {
        record[i-start][j-start] = Math.max(record[i-start+1][j-start], record[i-start][j-start-1]);
      }
    }
  }
  return record[start][end];
};
console.log(findLongestPalindromeSequence_2('BBABCBCAB', 0, 8));//7

