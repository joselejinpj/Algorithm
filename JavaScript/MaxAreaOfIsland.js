/*****

Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
Find the maximum area of an island in the given 2D array. If there is no island, return the maximum area as 0.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
 
Output: 6

*****/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var seen = new Array(grid.length);
    
    for(var i=0; i<grid.length; i++) 
        seen[i] = new Array(grid[0].length);
    
    var result = 0;
    
    for (var r = 0; r < grid.length; r++) {
        for (var c = 0; c < grid[0].length; c++) {
            result = Math.max(result, area(r, c, grid, seen));
        }
    }
    
    return result;    
};

function area(r, c, grid, seen) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || seen[r][c] || grid[r][c] == 0)
        return 0;
    
    seen[r][c] = true;
    
    return 1 + area(r+1, c, grid, seen) + area(r-1, c, grid, seen) + area(r, c-1, grid, seen) + area(r, c+1, grid, seen);
}
 
