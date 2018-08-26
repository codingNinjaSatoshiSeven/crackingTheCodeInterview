/** Prompt: find all the subset of a string
*/

//method 1
var powerSet = function(string) {
  var arr = string.split('');
  var result=[''];
  var recursePowerSet = function(arr) {
    if (arr.length ===0) {
      return;
    } else if (arr.length === 1) {
      result.push(arr[0]);
    } else {
      var last = arr.pop();
      recursePowerSet(arr);
      var length = result.length;
      for (var i = 0; i < length; i++) {
        result.push(result[i].concat(last));
      }
    }
  }
  recursePowerSet(arr);
  return result;
};
