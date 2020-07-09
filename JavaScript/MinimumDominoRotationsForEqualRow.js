/*****

In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the i-th domino.  (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)
We may rotate the i-th domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.
If it cannot be done, return -1.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
Output: 2

Explanation: 
The first figure represents the dominoes as given by A and B: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.

Test Case 2:

Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
Output: -1

Explanation: 
In this case, it is not possible to rotate the dominoes to make one row of values equal.

*****/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
    if(A.length != B.length)
        return -1;
    
    if(A.length == 0 || B.length ==0)
        return -1;
    
    var min = Math.min(
                neededRotations(A[0], A, B), 
                neededRotations(B[0], A, B),
                neededRotations(A[0], B, A), 
                neededRotations(B[0], B, A)
            );     
    
    return min == Number.MAX_SAFE_INTEGER? -1:min;
};

function neededRotations(target, A, B) {
    var rotations = 0;
    
    for(var i=0; i<A.length;i++) {
        if(A[i]!=target && B[i]!=target)
            return Number.MAX_SAFE_INTEGER;
        else if(A[i]!=target)
            rotations++;
    }
    
    return rotations;
}
 
