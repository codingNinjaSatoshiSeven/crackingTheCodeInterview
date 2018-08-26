/** Prompt: In this post, we will discuss solution to a general problem with n eggs and k floors. 
* The solution is to try dropping an egg from every floor 
* (from 1 to k) and recursively calculate the minimum number of 
* droppings needed in worst case. The floor which gives the minimum value in 
* worst case is going to be part of the solution.
* In the following solutions, we return the minimum number of trails in worst case; 
* these solutions can be easily modified to print floor numbers of every trials also. 
*/

// method 1: recursion. O(2^n) time complexity, O(1) space complexity
var eggDrop = function(n, k) {
  if (k <= 1) {
    return k;
  }
  if (n === 1) {
    return k;
  }

  var min = Number.POSITIVE_INFINITY;
  for (var x = 1; x <= k; x++) {
    var res = Math.max(eggDrop(n-1, x-1), eggDrop(n, k-x));
    if (res < min) {
      min = res;
    }
  }
  return min + 1;
};

console.log(eggDrop(2,10));

//method 2: DP, O(n^3) time complexity, O(nk) space complexity
var eggDrop_2 = function(n,k) {
  var eggFloor = [];

  for (var i = 0; i <=n; i++) {
    eggFloor.push([]);
    for (var j = 0; j <=k; j++) {
      eggFloor[i][j] = 0;
    }
  }
  for (var i = 1; i <=n; i++) {
    eggFloor[i][1] = 1;
    eggFloor[i][0] = 0;
  }
  for (var i = 0; i <= k; i++) {
    eggFloor[1][i] = i;
  }

  for (var i  = 2; i <= n; i++) {
    for (var j = 2; j <=k; j++) {
      eggFloor[i][j] = Number.POSITIVE_INFINITY;
      for (var x = 1; x <= j; x++) {
        var res = 1 + Math.max(eggFloor[i-1][x-1], eggFloor[i][j-x]);
        if (res < eggFloor[i][j]) {
          eggFloor[i][j] = res;
        }
      }
    }
  };
  return eggFloor[n][k];
};

console.log(eggDrop_2(2,10));
