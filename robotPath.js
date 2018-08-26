/** Prompt: robot path: can only go down or right, find # of ways
* a robot can travel from 0,0 to x, y
*/

// method 1: O(k^n) time complexity
var initializeMatrix = function(x, y) { //x * y matrix
  var matrix = [];
  for(var i = 0; i < x; i++) {
    matrix[i] = [];
    for (var j = 0 ; j < y; j++) {
      matrix[i].push(false);
    }
  }
  return matrix;
};

var matrix = initializeMatrix(3,3);


var toggleBoard = function(i, j, matrix) {
  matrix[i][j] = !matrix[i][j];
}

var hasBeenVisited = function(i, j, matrix) {
  return !!matrix[i][j];
}

var robotPathCount = function(x, y, matrix) {
  var count = 0;
  var recurseRobotPathCount = function(x, y, matrix, i, j) {
    if (i=== x-1 && j === y-1) {
      count+=1;
      return;
    } else {
      toggleBoard(i, j, matrix);
      if (i < x-1 && !hasBeenVisited(i+1, j, matrix)) {
        recurseRobotPathCount(x, y, matrix, i+1, j);
      }
      if (j < y-1 && !hasBeenVisited(i, j+1, matrix)) {
        recurseRobotPathCount(x, y, matrix, i, j+1);
      }
      toggleBoard(i, j, matrix);
    }
  };
  recurseRobotPathCount(x, y, matrix, 0,0);
  return count;

};


console.log(robotPathCount(3,3,matrix));
