/** Prompt: Write an algorithm such that if an element in an MxN matrix is 0, 
*   its entire row and column are set to 0
*/
var setEntireRowAndColumnToZero = function (matrix) {
  var result = []; 
  var rows = matrix.length;
  for (var i = 0; i < rows; i++) {
      result[i] = matrix[i].slice();
  }
  var cols = matrix[0].length;
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        for (var k = 0 ; k < cols; k++) {
          result[i][k] = 0;
        }
        for (var l = 0; l < rows; l++) {
          result[l][j] = 0;
        }
      }
    }
  }
  matrix = result;
  return matrix;
}

console.log(setEntireRowAndColumnToZero([[0,1,2],[1,3,5],[2,4,6]]));