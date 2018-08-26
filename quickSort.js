/** Prompt: implement quick sort
*/

// O(nlogn) average case time complexity, O(n^2) worst case time complexity
// space complexity O(logn)
var quickSort = function(array, left, right) {
  var index = partition(array, left, right);
  if (left < index -1) {
    quickSort(array, left, index -1);
  } 
  if (index < right) {
    quickSort(array, index, right);
  }
  return array;
}

var partition = function(arr, left, right) {
  var pivot = arr[Math.floor((left+right)/2)];
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if( left <= right) {
      var temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
    
  }
  return left;
}

console.log(quickSort([1,4,2,7,3,9,10], 0, 6));
