/*****

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
You can only move either down or right at any point in time.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.

*****/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid == null || grid.length==0)
        return 0;
 
    var m = grid.length;
    var n = grid[0].length;
    var i;
    var j;
    var dp = new Array(m);
    
    for(i=0; i<m; i++)
        dp[i] = new Array(n);
    
    dp[0][0] = grid[0][0];    
 
    // Top row
    for(i=1; i<n; i++){
        dp[0][i] = dp[0][i-1] + grid[0][i];
    }
 
    // Left column
    for( j=1; j<m; j++){
        dp[j][0] = dp[j-1][0] + grid[j][0];
    }
 
    // Dynamic programming table
    for(i=1; i<m; i++) {
        for(j=1; j<n; j++) {
               dp[i][j] = Math.min(dp[i-1][j] + grid[i][j], dp[i][j-1] + grid[i][j]);
        }
    }
 
    return dp[m-1][n-1];    
};
