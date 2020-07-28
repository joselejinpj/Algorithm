/*****

You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1

Test Case 2:

Input: coins = [2], amount = 3
Output: -1

*****/

public class Solution {
    public int coinChange(int[] coins, int amount) {
      if (amount < 1) return 0;
          return coinChange(coins, amount, new int[amount]);
    }

    private int coinChange(int[] coins, int rem, int[] count) {
      if (rem < 0) 
          return -1;

      if (rem == 0) 
          return 0;

      if (count[rem - 1] != 0) 
          return count[rem - 1];

      int min = Integer.MAX_VALUE;

      for (int coin : coins) {
          int res = coinChange(coins, rem - coin, count);

          if (res >= 0 && res < min)
              min = 1 + res;
      }

      count[rem - 1] = (min == Integer.MAX_VALUE) ? -1 : min;

      return count[rem - 1];
    }
}
 
