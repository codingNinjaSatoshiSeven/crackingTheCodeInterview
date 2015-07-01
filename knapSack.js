/** Prompt: Given weights and values of n items, put these items 
* in a knapsack of capacity W to get the maximum total value in the knapsack. 
* In other words, given two integer arrays val[0..n-1] and wt[0..n-1] 
* which represent values and weights associated with n items respectively. 
* Also given an integer W which represents knapsack capacity, find out the 
* maximum value subset of val[] such that sum of the weights of this subset 
* is smaller than or equal to W. You cannot break an item, either pick 
* the complete item, or don’t pick it (0-1 property).
*/

//method 1, O(2^n) time complexity, O(1) space complexity
var knapSack = function(W, wt, val, n) {
  if (n === 0 || W === 0) {
    return 0;
  }
  if (wt[n-1] > W) {
    return knapSack(W, wt, val, n-1);
  } else {
    return Math.max(val[n-1]+ knapSack(W-wt[n-1], wt, val, n-1), knapSack(W, wt, val, n-1));
  }
};

console.log(knapSack(50, [10,20,30], [60,100,120], 3));

// method 2, O(n^2) time complexity, O(nW) space complexity
var knapSack_2 = function(W, wt, val, n) {
  var K = [];
  for (var i = 0; i <= n; i ++) {
    K.push([]);
    for (var w = 0; w <= W; w++) {
      if (i === 0 || w === 0) {
        K[i][w] = 0;
      } else if (wt[i-1] <= w) {
        K[i][w] = Math.max(val[i-1]+ K[i-1][w-wt[i-1]], K[i-1][w]);
      } else {
        K[i][w] = K[i-1][w];
      }
    }
  }
  return K[n][W];
};

console.log(knapSack_2(50, [10,20,30], [60,100,120], 3));
