/*****

Given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
Find this single element that appears only once in O(log n) time complexity.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

Test Case 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10

*****/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    return singleNonDuplicateHelper(nums, 0, nums.length-1);
};

function singleNonDuplicateHelper(nums, low, high) {
    if(low > high)
        return;
    
    if(low == high)
        return nums[low];
    
    var mid = Math.trunc((low+high)/2);
    
    if(mid%2 == 0) { // Even position
        if(nums[mid] == nums[mid+1]) 
            return singleNonDuplicateHelper(nums, mid+2, high)
        else
            return singleNonDuplicateHelper(nums, low, mid)
        
    } else { // Odd position
        if(nums[mid] == nums[mid-1]) 
            return singleNonDuplicateHelper(nums, mid+1, high)
        else
            return singleNonDuplicateHelper(nums, low, mid-1)        
    }
}
 
