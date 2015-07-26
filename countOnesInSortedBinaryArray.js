/** Prompt: Given a binary array sorted in non-increasing order, count the number of 1’s in it.
*/
var binarySearch = function(array, target) {
  var n = array.length;
  var start = 0, end = n-1;
  
  while (start <= end) {
    var mid = Math.floor((start + end)/2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1; 
    }
  }
  return -1;
};

var modifiedBinarySearch = function(array, target) {
  var n = array.length;
  var start = 0, end = n-1;
  while (start <= end) {
    var mid = Math.floor((start + end)/2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      start = mid + 1;
    } else {
      end = mid - 1; 
    }
  }
  return start;
}

// method 1, O(n) time complexity
var countOnesInSortedBinaryArray_1 = function(bitArray) {
  var count = 0;
  for (var i = 0; i < bitArray.length; i++) {
    if (bitArray[i] === 1) {
      count++;
    }
  }
  return count;
};

// method 2, O(logn) time complexity
var countOnesInSortedBinaryArray_2 = function(bitArray, bSearchFunc) {
  var index = bSearchFunc(bitArray, 0.5);
  return index;
};

console.log(countOnesInSortedBinaryArray_2([1,1,1,0,0,0],modifiedBinarySearch ));
console.log(countOnesInSortedBinaryArray_2([1,1,1,1,0,0,0,0], modifiedBinarySearch));
console.log(countOnesInSortedBinaryArray_2([1,1,0,0,0,0], modifiedBinarySearch));

