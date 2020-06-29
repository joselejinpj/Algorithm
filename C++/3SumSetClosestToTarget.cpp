/*****

Given an array nums of n integers and a target number, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target 1 is 2. (-1 + 2 + 1 = 2).

*****/

class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        int diff = INT_MAX;
        int n = nums.size();
        
        sort(begin(nums), end(nums));
        
        for (int i = 0; i < n && diff != 0; ++i) {
            int low = i + 1;
            int high = n - 1;
            
            while (low < high) {
                int sum = nums[i] + nums[low] + nums[high];
                
                if (abs(target - sum) < abs(diff))
                    diff = target - sum;
                
                // Move window as needed
                if (sum < target)
                    low++;
                else
                    high--;
            }
        }
        
        return target - diff;
    }
};
