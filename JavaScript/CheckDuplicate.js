/*****

Given an array of integers, find if the array contains any duplicates.
It should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [1,2,3,1]
Output: true

Test Case 2:

Input: [1,2,3,4]
Output: false

*****/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkDuplicate = function(nums) {
    var set = {};
    
    for(var i=0; i<nums.length; i++) {
        if(set[nums[i]]) 
            return true;
        
        set[nums[i]] = true;
    }
    
    return false;    
};
