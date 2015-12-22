/**
 * Prompt: You are a professional robber planning to rob houses along a street. 
 * Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent 
 * houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
 * Given a list of non-negative integers representing the amount of money of each house, 
 * determine the maximum amount of money you can rob tonight without alerting the police.
 * @param {number[]} nums
 * @return {number}
 */

// solution 1: O(n) time complexity, O(n) space complexity 
var houseRobber = function(nums) {
	if (!nums || nums.length ===0 || !Array.isArray(nums)){ // invalid range case
		return -1; 
	}
	var best = []; // an array to store the optimal result so far 
	// base cases
	best[0] = 0;
	best[1] = nums[0];

	for (var i = 2; i < nums.length+1; i++){
		// the best result at ith house, is either the best of all the previous house, and skipping the ith house
		// or it's the best of all previous house except the previous 1 house, plus the ith house
		best[i] = Math.max(best[i-1], best[i-2]+nums[i-1]);
	}
	return best[nums.length];
};


// solution 2: O(n) time complexity, O(1) space complexity
var houseRobber_2 = function(nums){
	if (!nums || nums.length ===0 || !Array.isArray(nums)){ // invalid range case
		return -1; 
	}
	var odd = 0, even = 0;
	for (var i = 0 ; i < nums.length; i++){
		if (i %2 === 0){
			even += nums[i];
			// refresh to get the best result up to i 
			// so when the next iteration of even is added, it will add up to the best of previous
			// escaping an odd number right before i;
			even = even > odd ? even: odd;
		} else {
			odd += nums[i];
			// refresh to get the best result up to i 
			odd = even > odd ? even: odd;
		}
	}
	return even > odd ? even: odd;
}; 