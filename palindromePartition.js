/** Prompt: Given a string, a partitioning of the string is 
* a palindrome partitioning if every substring of the partition is a palindrome. 
* For example, “aba|b|bbabb|a|b|aba” is a palindrome partitioning of “ababbbabbababa”. 
* Determine the fewest cuts needed for palindrome partitioning of a given string. 
*/

// DP method: O(n^2) time complexity, O(n^2) space complexity
var palindromePartition = function(str, n) {
  var C = [];
  var P = [];
  for (var i = 0; i < n; i++) {
    P.push([]);
    P[i][i] = true;
  }

  for (var l = 2; l <= n; l++) { 
    for (var i = 0; i < n-l+1; i++) {
      var j = i+l-1;
      if (l === 2) {
        P[i][j] = (str[i] === str[j]);
      } else {
        P[i][j] = (str[i] === str[j]) && P[i+1][j-1];
      }
    }
  }

  for (var i = 0; i < n; i++) {
    if (P[0][i] === true) {
      C[i] = 0;
    } else {
      C[i] = Number.POSITIVE_INFINITY;
      for (var j = 0; j < i; j++) {
        if (P[j+1][i] === true && 1+C[j] < C[i]) {
          C[i] = 1 + C[j];
        }
      }
    }
  }
  return C[n-1];
};

console.log(palindromePartition("ababbbabbababa", 14));

