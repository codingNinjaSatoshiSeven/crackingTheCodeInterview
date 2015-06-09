/** Prompt: replace all the white space between chars with '%20'
* 
*/
// only iterate through string once, so time complexity O(n)
var replaceSpaceWithPercent20 = function(string, length) {
  var i = 1; 
  var strArr = string.split('');
  while ( i < length - 1) {
    if (strArr[i] === ' ' && strArr[i+1] !== ' ' && strArr[i-1] !== ' ') {
      strArr[i] = '%20';
    }
    i++;
  }
  return strArr.join('');
}

console.log(replaceSpaceWithPercent20("Mr John Smith  ",13)); // Mr%20John%20Smith
