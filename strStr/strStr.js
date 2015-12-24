/**
 * Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// solution 1: O(n^2) time complexity, O(1) space complexity
var strStr = function(haystack, needle) {
    if (!needle){
    	return 0;
    }
    if (!haystack){
    	return -1;
    }

    var index = -1;
    for (var i=0; i<haystack.length; i++) {
    	if (haystack[i] === needle[0]) {
    		// only if the first letter match 
    		index = i;
    		for (var j = 0 ; j < needle.length; j++){
    			if (haystack[i+j] !== needle[j]) { // no longer a match
    				index = -1;
    				break;
    			}
    		}
    	}	
    }
    return index;
};

// solution 2: O(n) time complexity with KMP to be done