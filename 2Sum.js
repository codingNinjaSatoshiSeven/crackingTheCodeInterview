/** Prompt: Given an array of numbers and a target, find all pairs of number in the array
* that adds up to the target
*/

// method 1: O(n) time complexity, O(n) space complexity
var twoSum = function (array, target) {
  var mapObj = {};
  var result = [];
  for (var i = 0; i < array.length; i++) {
    mapObj[array[i]] = target - array[i];
    if(mapObj[target-array[i]] !== undefined ) {
      result.push([array[i], target-array[i]]);
    }
  }
  return result;
}

console.log(twoSum([1,2,3,4,8], 5));


