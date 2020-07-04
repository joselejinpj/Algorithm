/*****

Write an efficient algorithm that searches for a value in an m x n matrix. 

In the matrix, integers in each row are sorted in ascending from left to right and integers in each column are sorted in ascending from top to bottom.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5

Output: true

Test Case 2:

Input:
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 20

Output: false

*****/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var  m = matrix.length-1;
    
    if(m < 0)
        return false;
        
    var  n = matrix[0].length-1;
 
    var i = m; 
    var j = 0;
 
    while(i>=0 && j<=n){
        if(target < matrix[i][j]) {
            i--;
        } else if(target > matrix[i][j]) {
            j++;
        } else {
            return true;
        }
    }
 
    return false;    
};
