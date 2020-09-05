/*****

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n find the one that is missing from the array.

Sample Test Cases
-----------------
Test Case 1:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8

*****/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var expectedSum = nums.length*(nums.length + 1)/2;
    var actualSum = 0;
    
    for (var num of nums)
        actualSum += num;
    
    return expectedSum - actualSum;    
};
