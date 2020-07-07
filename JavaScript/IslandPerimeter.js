/*****

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.
Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1.
The grid is rectangular. Determine the perimeter of the island.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16

*****/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var perimeter = 0; 
    var rows = grid.length;
    var cols = grid[0].length;

    // Traversing the matrix and find ones
    for (var i = 0; i < rows; i++) 
        for (var j = 0; j < cols; j++) 
            if (grid[i][j]) 
                perimeter += (4 - numofneighbours(grid, i ,j)); 

    return perimeter;      
};

function numofneighbours(grid, i, j) { 
    var count = 0; 
    var rows = grid.length;
    var cols = grid[0].length;
    
    // Up
    if (i > 0 && grid[i - 1][j]) 
        count++; 

    // Left 
    if (j > 0 && grid[i][j - 1]) 
        count++; 

    // Down 
    if (i < rows-1 && grid[i + 1][j]) 
        count++; 

    // Right 
    if (j < cols-1 && grid[i][j + 1]) 
        count++; 

    return count; 
}    
 
