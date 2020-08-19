/*****

Given an array nums of n integers return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:  [1,2,3,4]
Output: [24,12,8,6]

*****/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var length = nums.length;
    var left = new Array(length);
    var right = new Array(length);
    var result = new Array(length);

    left[0] = 1;

    for(var i = 1; i < length; i++) 
        left[i] = nums[i - 1] * left[i - 1];

    right[length - 1] = 1;

    for(i = length - 2; i >= 0; i--) 
        right[i] = nums[i + 1] * right[i + 1];

    for(i = 0; i < length; i++) 
        result[i] = left[i] * right[i];

    return result;    
};
 
