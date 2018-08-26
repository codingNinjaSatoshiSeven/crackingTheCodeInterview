/**
 * (leetcode) Prompt: The count-and-say sequence is the sequence of integers beginning as follows:
 * 1, 11, 21, 1211, 111221, ...
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * Given an integer n, generate the nth sequence.
 * @param {number} n
 * @return {string}
 */

//solution 1: O(n) time complexity, O(n) space complexity
var countAndSay = function(n) {
    if (typeof n ==='object' || isNaN(n)){ // invalid input case
    	return null; 
    }
    var n_str = n.toString();
    var prev = n_str[0], count = 1, result = [];
    for (var i=1; i< n_str.length; i++){
    	if (n_str[i] === prev){ // same as previous
    		count++;
    	} else { // diff as previous, then reset
    		result.push(count, prev);
    		prev = n_str[i];
    		count = 1; 
    	}
    }
    result.push(count, prev);
    return result.join('');
};