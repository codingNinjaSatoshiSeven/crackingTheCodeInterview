
// method 1, recursion. O(2^n) time complexity, O(1) space complexity
var findMinCostPath = function(matrix, m, n) {
  if (m === 0 && n === 0) { // base case 1, if at origin
    return matrix[0][0];
  } else if ( m < 0 || n < 0) { // base case 2, out of bound condition, invalid
    return Number.POSITIVE_INFINITY;
  } else {
    return matrix[m][n] + Math.min(findMinCostPath(matrix, m-1, n), findMinCostPath(matrix, m, n-1), findMinCostPath(matrix, m-1, n-1));
  }
};

console.log(findMinCostPath([[1,2,3], [4,8,2],[1,5,3]], 2, 2)); // 8

// method2, DP, O(mn) time complexity, O(mn) space complexity

var findMinCostPath_2 = function(matrix, m, n) {
  var costMatrix = [];
  for (var i = 0; i <= m; i++) {
    costMatrix.push([]);
    for (var j = 0; j <= n; j++) {
      costMatrix[i][j] = 0;
    }
  }

  costMatrix[0][0] = matrix[0][0];

  for (var i = 1; i <= m; i++) {
    costMatrix[i][0] = costMatrix[i-1][0] + matrix[i][0];
  }

  for (var j = 1; j <= n; j++) {
    costMatrix[0][j] = costMatrix[0][j-1] + matrix[0][j];
  }
 
  for (var i = 1; i <= m; i++) {
    for (var j = 1; j <= n; j++) {
      costMatrix[i][j] = Math.min(costMatrix[i-1][j], costMatrix[i][j-1], costMatrix[i-1][j-1]) + matrix[i][j];
    }
  }
  return costMatrix[m][n];
};

console.log(findMinCostPath_2([[1,2,3], [4,8,2],[1,5,3]], 2, 2)); // 8
