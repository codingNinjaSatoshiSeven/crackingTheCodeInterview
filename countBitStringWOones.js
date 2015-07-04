/** Prompt: Given a positive integer N, count all possible 
* distinct binary strings of length N such that there are 
* no consecutive 1’s.
*/
var countBitStringWOones = function(n) {
  var a = [], b = [];
  a[0] = 1;
  b[0] = 1;
  for (var  i = 1; i < n; i ++) {
    a[i] = a[i-1] + b[i-1];
    b[i] = a[i-1];
  }
  return a[n-1] + b[n-1];
};

console.log(countBitStringWOones(3)); // 5
