
// recursive solution, O(k^n) time complexity, O(1) space complexity
var doesSubsetContainSum = function(set, sum, n ) {
  if (sum === 0 ) {
    return true;
  } else if ( n === 0 && sum !== 0 ) {
    return false;
  } else if ( set[n-1] > sum) {
    return doesSubsetContainSum(set, sum, n-1);
  } else {
    return doesSubsetContainSum(set, sum, n-1) || doesSubsetContainSum(set, sum- set[n-1], n-1);
  }
};

console.log(doesSubsetContainSum([3, 34, 4, 12, 5, 2], 9, 6)); // true

// method 2:  DP, O(n^2) time complexity, O(n^2) space complexity
var doesSubsetContainSum_2 = function(set, sum, n) {
  if (sum === 0 ) {
    return true;
  } else if ( n === 0 && sum !== 0 ) {
    return false;
  }

  var subset = [];
  for (var i = 0; i <= sum; i++) {
    subset.push([]);
  }
  // if sum is 0, it's always true
  for (var i = 0; i <= n; i++) {
    subset[0][i] = true;
  }

  // if sum is not 0 and set is empty, then it's false
  for (var i = 1; i <= sum; i++) {
    subset[i][0] = false;
  }

  for (var i = 1; i <=sum; i++) {
    for (var j = 1; j <= n; j++) {
      subset[i][j] = subset[i][j-1];
      if (i >= set[j-1]) {
        subset[i][j] = subset[i][j] || subset[i-set[j-1]][j-1];
      }
    }
  }
  return subset[sum][n];
}; 

console.log(doesSubsetContainSum_2([3, 34, 4, 12, 5, 2], 9, 6)); // true
