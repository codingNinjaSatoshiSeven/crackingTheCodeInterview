/** Prompt: Given a binary matrix, find out the maximum size 
* square sub-matrix with all 1s.
*/

// DP, O(n^2) time complexity, O(n^2) space complexity
var maximumSizeSquareSubMatrix = function(matrix) {
  var m = matrix.length;
  var n = matrix[0].length;

  var sub = [];
  for (var i = 0; i < m; i++) {
    sub.push([]);
    for (var j = 0; j < n; j++) {
      sub[i][j] = 0;
    }
  }
  for (var i = 0; i < m; i++) {
    sub[i][0] = matrix[i][0];
  }
  for (var j = 0; j < n; j++) {
    sub[0][j] = matrix[0][j];
  }

  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      if (matrix[i][j] === 1 ) {
        sub[i][j] = Math.min(sub[i][j-1], sub[i-1][j], sub[i-1][j-1]) + 1;
      } else {
        sub[i][j] = 0;
      }
    }
  }
  var maxS = sub[0][0];
  var maxI = 0, maxJ = 0;

  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (maxS < sub[i][j]) {
        maxS = sub[i][j];
        maxI = i;
        maxJ = j;
      }
    }
  }
  return {i: maxI, j: maxJ, maxLength: maxS};
}

console.log(maximumSizeSquareSubMatrix([ [0,1,1,0,1],
  [1,1,0,1,0],
  [0,1,1,1,0],
  [1,1,1,1,0],
  [1,1,1,1,1],
  [0,0,0,0,0]
  ]));
