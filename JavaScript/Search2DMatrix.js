/*****

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
> Integers in each row are sorted from left to right.
> The first integer of each row is greater than the last integer of the previous row.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3

Output: true

Test Case 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13

Output: false

*****/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix==null || matrix.length==0 || matrix[0].length==0) 
        return false;

    var m = matrix.length;
    var n = matrix[0].length;

    var start = 0;
    var end = m*n-1;

    while(start<=end) {
        var mid = Math.trunc((start+end)/2);
        var row = Math.trunc(mid/n);
        var col = mid%n;

        if(matrix[row][col]==target) 
            return true;

        if(matrix[row][col]<target)
            start=mid+1;
        else
            end=mid-1;
    }

    return false;    
};
 
