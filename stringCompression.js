/** Prompt
* Implement a method to perform basic string compression using the counts of 
* repeated characters. I.e., the string 'aabcccccaaa' would become 'a2b1c5a3'. 
* If compressed string is not smaller than the original string, then return
* the original string. You can assume string has only uppercase and lowercase
* letters (a - z)
*/

/** 
* Method 1: Use an array to keep track.
* O(2n)= O(n) time complexity, O(n) space complexity
*/
var stringCompression_1 = function(string) {
  if (typeof string !== 'string') {
    return null;
  }
  if (string === '') {
    return string;
  }
  var start = 0, end = -1, currentChar = string[0], currentIndex = 0; 
  var arrChar = [];
  arrChar[currentIndex] = [currentChar, []];
  for (var i = 0; i < string.length; i++) {
    if (string[i] === currentChar) {
      end++;
    } else {
      arrChar[currentIndex][1] = [start, end];
      currentChar = string[i];
      currentIndex++;
      arrChar[currentIndex] = [currentChar, []];
      start = i; 
      end = i;
    }
  }
  arrChar[currentIndex] = [currentChar,[start, string.length - 1]];

  var compressedString = '';
  for (var i = 0 ; i < arrChar.length; i++) {
    compressedString += arrChar[i][0] + (arrChar[i][1][1] - arrChar[i][1][0] + 1);
  }
  return (compressedString.length >= string.length) ? string : compressedString;

}

stringCompression_1('aabbbccdddeee');