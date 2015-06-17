/** Prompt Given 2 sorted array, A and B, where A has a large enough buffer at the 
* end to hold B. Write a method to merge B into A in sorted Order
*/

//method 1, O(n) time complexity
var merge2SortedArray = function(array1, array2) {
  var arr1Index = array1.length - 1;
  var arr2Index = array2.length - 1;
  var totalLen = arr1Index + arr2Index + 1;
  while ( arr2Index >=0 ){
    if (array1[arr1Index] >= array2[arr2Index]) {
      array1[totalLen] = array1[arr1Index];
      arr1Index--;
    } else {
      array1[totalLen] = array2[arr2Index];
      arr2Index--;
    }
    totalLen--;
  }
  return array1;
}

console.log(merge2SortedArray([1,4,7,8,10],[2, 5]));
