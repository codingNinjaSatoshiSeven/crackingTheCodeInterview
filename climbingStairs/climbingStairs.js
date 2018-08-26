/**
 * Prompt: You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var ways = []; // an array storing # of ways to climb of step n
    ways.push(1);
    ways.push(2); // base case, 1 way for 1 step, 2 ways for 2 step;k
    if (n <=0){ // impossible case
        return -1; 
    } else {
        for (var i=0; i<=n; i++) {
            if (ways[i] === undefined) { // not calculated yet, then calculate
                ways.push(ways[i-2] + ways[i-1]);
            }
        }
        return ways[n-1];
    }
    
};

