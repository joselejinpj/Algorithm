/*****

You have d dice, and each die has f faces numbered 1, 2, ..., f.
Return the number of possible ways to roll the dice so that the sum of the face up numbers equals target.

-----------------
Sample Test Cases
-----------------

Test Case 1:

Input: d = 1, f = 6, target = 3
Output: 1

Explanation: 
You throw one die with 6 faces.  There is only one way to get a sum of 3.

Test Case 2:

Input: d = 2, f = 5, target = 10
Output: 1

Explanation: 
You throw two dice, each with 5 faces.  There is only one way to get a sum of 10: 5+5.

*****/

class Solution {
public:
    int dp[31][1001] = {};

    int numRollsToTarget(int numberOfDices, int faces, int target, int res = 0) {
        if (numberOfDices == 0 || target <= 0) 
            return numberOfDices == target;
      
        if (dp[numberOfDices][target]) 
            return dp[numberOfDices][target] - 1;
        
        for (auto i = 1; i <= faces; ++i)
            res = (res + numRollsToTarget(numberOfDices - 1, faces, target - i)) % 1000000007;
      
        dp[numberOfDices][target] = res + 1;
        
        return res;
    }
};
