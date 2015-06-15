/** Prompt: Gien a string of unique char, find all permutation
* of that string
*/

// method 1
var stringPermutation_1 = function(string) {
  var arr = string.split('');
  var result = [];
  var recurseStringPermutation = function(arr) {
    if (arr.length === 0) {
      return;
    } else if (arr.length === 1) {
      result.push(arr[0]);
    } else {
      var last = arr.pop();
      recurseStringPermutation(arr);
      var length = result.length;
      var resultCpy = result.slice();
      result = [];
      for (var i = 0; i < length; i++) {
        for (var j = 0; j < resultCpy[i].length; j++) {
          var newCell = resultCpy[i].slice(0,j) + last + resultCpy[i].slice(j);
          result.push(newCell);
        }
        var newCell = resultCpy[i].slice() + last;
        result.push(newCell);
      }  
    }
  }
  recurseStringPermutation(arr);
  return result;
};

console.log(stringPermutation_1('abc'));
console.log(stringPermutation_1('ab'));
