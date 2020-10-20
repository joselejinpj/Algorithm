/*****

A robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. 
Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

-----------------
Sample Test Cases
-----------------

Test Case 1:
Input: nums = [2,3,2]
Output: 3

Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

Test Case 2:
Input: nums = [1,2,3,1]
Output: 4

Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.

*****/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums==null || nums.length==0)
        return 0; 
 
    if(nums.length==1)
        return nums[0];
 
    var exculdeLastHouse = robUtil(nums, 0, nums.length-2);
    var includeLastHouse = robUtil(nums, 1, nums.length-1);
 
    return Math.max(exculdeLastHouse, includeLastHouse);    
};

function robUtil(nums, start, end){
    if(start==end)
        return nums[start];
 
    var dp = new Array(nums.length).fill(0);
    
    dp[start] = nums[start];
    dp[start+1] = Math.max(dp[start], nums[start+1]);
 
    for(var k=start+2; k<=end; k++)
        dp[k] = Math.max(dp[k-1], dp[k-2] + nums[k]);    
 
    return dp[end];
}
