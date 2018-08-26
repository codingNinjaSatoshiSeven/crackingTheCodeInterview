/**
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 * @param {string} s
 * @return {number}
 */

// solution 1: O(n) time complexity, O(1) space complexity
var titleToNumber = function(s) {
    if (typeof s !== 'string' || s.length<1){
    	return null;
    }
    var str = s.toUpperCase();
    var length = str.length;
    var sum = 0;
    for(var i=0; i<str.length; i++) {
    	sum += (str[i].charCodeAt(0)-65+1)*parseInt(Math.pow(26, length-i-1));
    }
    return sum;
};