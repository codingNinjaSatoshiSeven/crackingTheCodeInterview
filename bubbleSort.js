/** Prompt: implement bubble sort to sort an array in place
*/

// method 1, O(n^2) time complexity, both average case and worst case
var bubbleSort_1 = function(array) {
  for (var i = array.length-1; i >= 0; i--) {
    for (var j = 0 ; j < i ; j ++) {
      if (array[j] > array[j+1]) {
        var temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort_1([2,1,3,6,4,9,5]));

// method 2, slight improvement, but still O(O^2) worst case, 
var bubbleSort_2 = function(array) {
  for (var i = array.length -1; i >= 0; i--) {
    var swapped = false;
    for (var j = 0; j < i; j ++) {
      if (array[j] > array[j+1]) {
        var temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        swapped = true;
      }
    }
    if (swapped === false) { // if iterate through array once and didn't swap anything
      // then it's already sorted, can return
      break;
    }
  }
  return array;
}

console.log(bubbleSort_2([2,1,3,6,4,9,5]));
