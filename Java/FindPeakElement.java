/*****

A peak element is an element that is greater than its neighbors.
Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.

*****/

class Solution {
    public int findPeakElement(int[] numbers) {
        return search(numbers, 0, numbers.length - 1);
    }
    
    private int search(int[] nums, int left, int right) {
        if (left == right)
            return left;
        
        int mid = (left + right) / 2;
        
        if (nums[mid] > nums[mid + 1])
            return search(nums, left, mid);
        
        return search(nums, mid + 1, right);
    }
}
 
