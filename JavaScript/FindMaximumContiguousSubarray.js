/*****

Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

Test Case 2:

Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

*****/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    var map = {};
    var maxLen = 0;
    var count = 0;
    
    map[0] = -1;
    
    for(var i=0; i<nums.length; i++) {
        count = count + (nums[i] == 1 ? 1:-1);
        
        if(map[count] != undefined) 
            maxLen = Math.max(maxLen, i - map[count]);
        else
            map[count] = i;
    }
    
    return maxLen;
};
 
