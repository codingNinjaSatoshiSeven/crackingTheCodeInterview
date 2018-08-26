/** Prompt: The Floyd Warshall Algorithm is for solving the All Pairs Shortest Path problem. 
*The problem is to find shortest distances between every pair of vertices in a given 
*edge weighted directed Graph.
*/

// solution, O(n^3) time complexity, O(n^2) space complexity
var floydWarshallAlgorithm = function(matrix) {
  var result = [];
  for (var i = 0 ; i < matrix.length; i++) {
    result.push(matrix[i].slice());
  }

  for (var k = 0; k < matrix.length; k++ ) {
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix.length; j++) {
        if (result[i][k] + result[k][j] < result[i][j]) {
          result[i][j] = result[i][k] + result[k][j];
        }
      }
    }
  }
  return result;
};

console.log(floydWarshallAlgorithm([[0,5,Number.POSITIVE_INFINITY,10], 
  [Number.POSITIVE_INFINITY,  0,  3,  Number.POSITIVE_INFINITY], 
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, 0, 1], 
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, 0]]));
