/*****

With an array for which the ith element is the price of a given stock on day i, design an algorithm to find the maximum profit. 
Only two transactions allowed. You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: prices = [3,3,5,0,0,3,1,4]
Output: 6

Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3. Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.

Test Case 2:

Input: prices = [7,6,4,3,1]
Output: 0

Explanation: In this case, no transaction is done, i.e. max profit = 0.

*****/

class Solution {
    public int maxProfit(int[] prices) {
        if (prices == null || prices.length < 2)
            return 0;
        
        int[] left = new int[prices.length];
        int[] right = new int[prices.length];

        left[0] = 0; 
        int min = prices[0];
        
        for (int i = 1; i < prices.length; i++) {
            min = Math.min(min, prices[i]);
            left[i] = Math.max(left[i - 1], prices[i] - min);
        }

        right[prices.length - 1] = 0;
        int max = prices[prices.length - 1];
        
        for (int i = prices.length - 2; i >= 0; i--) {
            max = Math.max(max, prices[i]);
            right[i] = Math.max(right[i + 1], max - prices[i]);
        }

        int profit = 0;
        
        for (int i = 0; i < prices.length; i++)
            profit = Math.max(profit, left[i] + right[i]);

        return profit;
    }    
}
 
