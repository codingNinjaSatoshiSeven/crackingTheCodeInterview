/** Prompt: Write a function that takes two parameters n and k 
* and returns the value of Binomial Coefficient C(n, k). 
*/

// method 1: recursion. O(2^n) time complexity, O(1) space complexity
var findBinomialCoeficient = function(n, k) {
  if ( n <=0 || k < 0) { // invalid input
    return null;
  } 
  if (k === 0 || k === n) {
    return 1;
  } else {
    return findBinomialCoeficient(n-1, k-1) + findBinomialCoeficient(n-1, k);
  }
};

console.log(findBinomialCoeficient(4,2)); // 6

//method 2: DP. O(kn) time complexity, O(kn) space complexity
var findBinomialCoeficient_2 = function(n, k) {
  if ( n <=0 || k < 0) { // invalid input
    return null;
  } 
  var coeficientMatrix = [];
  for (var i = 0; i <= n; i++) {
    coeficientMatrix.push([]);
    for (var j = 0; j <= Math.min(k, i); j++) {
      if (j === 0 || j === i) { // base case
        coeficientMatrix[i][j] = 1;
      } else {
        coeficientMatrix[i][j] = coeficientMatrix[i-1][j-1] + coeficientMatrix[i-1][j];
      }
    }
  }
  return coeficientMatrix[n][k];
};

console.log(findBinomialCoeficient_2(4,2)); // 6

