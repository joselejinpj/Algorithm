/*****

Find the minimum element in an array sorted in ascending order which is rotated at some pivot unknown to you beforehand.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [3,4,5,1,2] 
Output: 1

*****/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length == 1)
      return nums[0];


    var left = 0;
    var right = nums.length - 1;

    if (nums[right] > nums[0]) // No rotation
        return nums[0]
    
    while (right >= left) {
        var mid = left + Math.trunc((right - left) / 2);

        if (nums[mid] > nums[mid + 1])
            return nums[mid + 1];

        if (nums[mid - 1] > nums[mid])
            return nums[mid];

        if (nums[mid] > nums[0])
            left = mid + 1;
        else
            right = mid - 1;
    }
    
    return -1;    
};
 
