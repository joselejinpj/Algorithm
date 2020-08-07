/*****

You are given an n x n 2D matrix representing an image.
Rotate the image by 90 degrees (clockwise).

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

Output:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

*****/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var n = matrix.length;
    var tmp;
    
    for(var i=0; i<n; i++) {
        for(var j=i; j<n; j++) {
            tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
    
    for(var i=0; i<n; i++) {
        for(var j=0; j<n/2; j++) {
            tmp = matrix[i][j];
            matrix[i][j] = matrix[i][n-1-j];
           matrix[i][n-1-j] = tmp;                
        }
    }
};
