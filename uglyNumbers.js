/** Prompt: Ugly numbers are numbers whose only prime factors are 2, 3 or 5. 
* The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, …
* shows the first 11 ugly numbers. By convention, 1 is included.
* Write a program to find and print the n’th ugly number
*/

// DP, O(n) time complexity, O(n) space complexity
var uglyNumbers = function(n) {
  var ugly = [];
  ugly[0] = 1;
  var i2 = 0, i3 = 0, i5 = 0;
  var nextMultOf2 = ugly[i2] * 2,
      nextMultOf3 = ugly[i3] * 3,
      nextMultOf5 = ugly[i5] * 5;

  for (var i = 1; i < n; i++) {
    var nextUglyNo = Math.min(nextMultOf2, nextMultOf3, nextMultOf5);
    ugly[i] = nextUglyNo;
    if (nextUglyNo === nextMultOf2) {
      i2++;
      nextMultOf2 = ugly[i2] * 2;
    }
    if (nextUglyNo === nextMultOf3) {
      i3++;
      nextMultOf3 = ugly[i3] * 3;
    }
    if (nextUglyNo === nextMultOf5) {
      i5++;
      nextMultOf5 = ugly[i5] * 5;
    }
  }
  return ugly[n-1];
};


console.log(uglyNumbers(150)); // 5832

