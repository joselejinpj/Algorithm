/*****

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
Find solution in O(n)

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [3,2,3]
Output: 3

Test Case 2:

Input: [2,2,1,1,1,2,2]
Output: 2

*****/

class Solution {
    public int majorityElement(int[] nums) {
        int count = 0;
        Integer majorEle = null;

        for (int num : nums) {
            if (count == 0) 
                majorEle = num;

            count += (num == majorEle) ? 1 : -1;
        }

        return majorEle;
    }
}
