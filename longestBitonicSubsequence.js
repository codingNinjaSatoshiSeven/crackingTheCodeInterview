/** Prompt: Given an array arr[0 … n-1] containing n positive integers, 
* a subsequence of arr[] is called Bitonic if it is first increasing, 
* then decreasing. Write a function that takes an array as argument and returns the length 
* of the longest bitonic subsequence.
* A sequence, sorted in increasing order is considered Bitonic 
* with the decreasing part as empty. Similarly, decreasing order 
* sequence is considered Bitonic with the increasing part as empty.
*/

// O(2^n) time complexity, O(n) space complexity
var longestBitonicSubsequence = function(arr, n) {
  var lis = [];
  for (var i = 0; i < n; i++) {
    lis[i] = 1;
  }
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i] < lis[j] +1) {
        lis[i] = lis[j] + 1;
      }
    }
  }

  var lds = [];
  for (var i = 0; i < n; i++) {
    lds[i] = 1;
  }
  for (var i = n-2; i >=0; i--) {
    for (var j = n-1; j > i; j--) {
      if (arr[i] > arr[j] && lds[i] < lds[j]+1) {
        lds[i] = lds[j] + 1;
      }
    }
  }
  var max = 0;
  for (var i = 0; i < n; i ++) {
    if (lis[i] + lds[i] -1 > max) {
      max = lis[i] + lds[i] -1;
    }
  }
  return max;
};

console.log(longestBitonicSubsequence([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15], 16)); // 7
