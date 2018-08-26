/** Prompt: Given a sorted array of strings with blank strings in between
* search for the target element
*/

// method 1: O(logn) time complexity
var findStrInStringArrays = function(arr, target) {
  var foundIndex = -1;
  var recurseFindString = function(arr, left, right, target) {
    if (left > right) {
      foundIndex = -1; 
      return;
    } else if (left === right && arr[left] !== target) {
      foundIndex = -1;
      return;
    }
    var index = Math.floor((left + right)/2);
    while (index > left) {
      if (arr[index] === "") {
        index --;
      } else {
        break;
      }
    }
    if (target === arr[index]) {
      foundIndex = index;
      return;
    } else if (target < arr[index]) {
      recurseFindString(arr, left, index, target);
    } else {
      recurseFindString(arr, index +1, right, target);
    }
    
  }
  recurseFindString(arr, 0, arr.length-1, target);
  return foundIndex;
};

console.log(findStrInStringArrays(['ab', 'ac', '','','ad', '','bc', 'bd', ''], 'bc')); // 6
console.log(findStrInStringArrays(['ab', 'ac', '','','ad', '','bc', 'bd', ''], 'az')); // -1
console.log(findStrInStringArrays(['ab', 'ac', '','','ae', '','bc', 'bd', ''], 'ad')); // -1
console.log(findStrInStringArrays(['ab', 'ac', '','','ad', '','bc', 'bd', ''], 'ab')); // 0
console.log(findStrInStringArrays(['ab', 'ac', '','','ad', '','bc', 'bd', ''], 'bd')); // 7


