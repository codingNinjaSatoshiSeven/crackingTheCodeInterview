/** implement selection sort 
*/

// method 1, O(n^2) worst case and average case and best case
var selectionSort = function(array) {
  for (var i = 1; i < array.length; i++) {
    var index = i;
    while (index > 0 ) {
      if (array[index] < array[index-1]) {
        var temp = array[index];
        array[index] = array[index-1];
        array[index-1] = temp;
        index--;
      } else {
        break;
      }
    }
  }
  return array;
}

console.log(selectionSort([4,1,3,5,7,6,2,9]));
