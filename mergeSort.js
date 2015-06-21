/** Prompt: implement merge sort
*/

// O(nlogn) average and worst case time complexity
// O(n) space complexity in this case
var mergeSort = function(array) {
  var helper = [];
  var left = 0, right = array.length - 1;
  for (var i = 0; i < array.length; i++) {
    helper[i] = array[i];
  }
  var recurseMergeSort = function(array, helper, low, high) {
    if (low < high) {
      var mid = Math.floor((low + high)/2);
      
      recurseMergeSort(array, helper, low, mid);
      recurseMergeSort(array, helper, mid+1, high);
      merge(array, helper, low, mid, high);
    }
    
  }; 

  var merge = function(array, helper, low, mid, high) {
    for (var i = low; i <= high; i++) {
      helper[i] = array[i];
    }
    var index = low, indexLeft = low, indexRight = mid+1;
    while (index <= high && indexLeft <= mid && indexRight <= high) {
      if (helper[indexLeft] <= helper[indexRight]) {
        array[index++] = helper[indexLeft++];
      } else {
        array[index++] = helper[indexRight++];
      }
    }
    for (var i = indexLeft; i <= mid; i++) {
      array[index++] = helper[indexLeft++];
    }
  };

  recurseMergeSort(array, helper, left, right);
  return array;
}


console.log(mergeSort([2,5,4,7, 3, 1, 8]));
