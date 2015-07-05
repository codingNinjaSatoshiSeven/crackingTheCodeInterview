/** Prompt: determine whether a given set can be partitioned 
* into two subsets such that the sum 
* of elements in both subsets is same.
*/

//method 1: recursion: O(2^n) time complexity, O(1) space complexity
var isSubsetSum = function(arr, n, target) {
  if (target === 0 ) {
    return true;
  } 
  if (n === 0 && target !==0) {
    return false;
  } 
  if (arr[n-1] > target) {
    return isSubsetSum(arr, n-1, target);
  }
  return isSubsetSum(arr, n-1, target-arr[n-1]) || isSubsetSum(arr, n-1, target);
};

var partitionSum = function(arr, n) {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += arr[i];
  }
  if (sum % 2 !== 0) {
    return false;
  } else {
    return isSubsetSum(arr, n, sum/2);
  }
};

console.log(partitionSum([3, 1, 5, 9, 12], 5));


//method 2: DP: O(n*sum) time complexity, O(n*sum) space complexity
var partitionSum_2 = function(arr, n) {
  var sum  = 0;
  for (var i = 0; i < n; i++) {
    sum += arr[i];
  }
  if (sum % 2 !== 0) {
    return false;
  }
  var part = [];
  // part[sum/2+1][n+1];
  for (var i = 0; i <= sum/2; i++) {
    part.push([]);
  }
  for (var i = 0; i <= n; i++) {
    part[0][i] = true;
  }
  for (var i = 1; i <= sum/2; i++) {
    part[i][0] = false;
  }
  for (var i = 1; i <= sum/2; i++) {
    for (var j =  1; j <= n; j++) {
      part[i][j] = part[i][j-1];
      if ( i >= arr[j-1]) {
        if ( i >= arr[j-1]) {
          part[i][j] = part[i][j] || part[i-arr[j-1]][j-1];
        }
      }
    }
  }
  return part[sum/2][n];
};

console.log(partitionSum_2([3, 1, 5, 9, 12], 5));

