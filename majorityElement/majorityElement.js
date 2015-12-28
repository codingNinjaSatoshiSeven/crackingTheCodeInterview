/**
 * Given an array of size n, find the majority element. 
 * The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * @param {number[]} nums
 * @return {number}
 */
//solution 1: O(n) time complexity, O(n) space complexity
var majorityElement = function(nums) {
	if (typeof nums !=='object') {
		// invalid case
		return null;
	}
	var countHash ={};
    for (var i=0; i < nums.length; i++){
    	if (countHash[nums[i]]=== undefined){
    		countHash[nums[i]] = 0;
    	} else {
    		countHash[nums[i]]+=1;
    	}
    }
    var count = 0, value; 
    console.log(countHash);
    for (var key in countHash) {
    	if (countHash[key] > count) {
    		count = countHash[key];
    		value = key;
    	}
    }
    return parseInt(value);
};

// solution 2: O(n) time complexity, O(1) space complexity
var majorityElement_2 = function(nums) {
	if (typeof nums !=='object') {
		// invalid case
		return null;
	}
	var value, count = 0;
	for (var i =0; i<nums.length; i++){
		if (count ===0){
			value = nums[i];
			count=1;
		} else {
			if (value === nums[i]){
				count++;
			} else {
				count--;
			}
		}
	}
	return value;
};