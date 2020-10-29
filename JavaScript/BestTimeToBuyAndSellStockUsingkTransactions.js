/*****

You are given integer array prices where prices[i] is the price of a stock on the ith day. Design an algorithm to find the maximum profit. 
Maximum k transactions allowed.

-----------------
Sample Test Cases
-----------------

Test Case 1:

Input: k = 2, prices = [2,4,1]
Output: 2

Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.

Test Case 2:

Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7

Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.

*****/

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let n = prices.length;
	let profit = new Array(k+1);
    
    if (n <= 0 || k <= 0)
        return 0;
    
    for(let i=0; i<k+1; i++)
        profit[i] = new Array(n + 1); 

	// For day 0, you can't  earn money irrespective of how many times you trade 
	for (let i = 0; i <= k; i++) 
		profit[i][0] = 0; 

	// Profit is 0 if we don't do any transation 
	for (let j = 0; j <= n; j++) 
		profit[0][j] = 0; 

	for (let i=1; i <= k; i++) { 
		for (let j = 1; j < n; j++) { 
			var max_so_far = 0; 

			for (let m = 0; m < j; m++) 
				max_so_far = Math.max(max_so_far, prices[j] - prices[m] + profit[i - 1][m]); 

			profit[i][j] = Math.max(profit[i] [j - 1], max_so_far); 
		} 
	} 

	return profit[k][n - 1];     
};
