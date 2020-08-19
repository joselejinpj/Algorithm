/*****

Given an array of integers nums find the "pivot" index of this array, which is the index where the sum of all the numbers to the left of the index is equal to the sum of all the numbers to the right of the index.
If no such index exists return -1.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: nums = [1,7,3,6,5,6]
Output: 3

Explanation:
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.

*****/

class Solution {
    public int pivotIndex(int[] numbers) {
        int sum = 0;
        int leftsum = 0;
        
        for (int x: numbers) 
            sum += x;
        
        for (int i = 0; i < numbers.length; ++i) {
            if (leftsum == sum - leftsum - numbers[i]) 
                return i;
            
            leftsum += numbers[i];
        }
        
        return -1;
    }
}
