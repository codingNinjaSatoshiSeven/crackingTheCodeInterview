/** Prompt: find the longest common subsequence of string A and B
*/

// method 2, O(m*n) time complexity, O(m*n) space complexity
var longestCommonSubsequence = function(strA, strB) {
  var lenA = strA.length;
  var lenB = strB.length;
  var result = [];
  for (var i = 0; i < lenA; i++) {
    result.push([]);
    for (var j = 0; j < lenB; j++) {
      if (i === 0 || j === 0) {
        result[i][j] = 1;
      } else if (strA[i-1] === strB[j-1]) {
        result[i][j] = result[i-1][j-1] +1;
      } else {
        result[i][j] = Math.max(result[i-1][j], result[i][j-1]);
      }
    }
  }
  return result[lenA-1][lenB-1];
};

console.log(longestCommonSubsequence('ABCDGH','AEDFHR'));