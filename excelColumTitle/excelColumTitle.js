/**
 * Prompt: Given a positive integer, return its corresponding column title as appear in an Excel sheet.
 * @param {number} n
 * @return {string}
 */

// solution 1: 
var convertToTitle = function(n) {
    if (isNaN(n) || typeof n ==='object' || n <=0){
    	return null; // invalid case
    }

    var result = '';
    while (n > 0) {
    	n--;
        var ch = String.fromCharCode(n%26 +65);
        result +=ch;
        n = Math.floor(n/26);
    }
    return result.split('').reverse().join('');
};