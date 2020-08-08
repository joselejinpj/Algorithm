/*****

Find the total area covered by two rectilinear rectangles in a 2D plane.
Each rectangle is defined by its bottom left corner and top right corner.

 ............ (C,D)
 .          .
 .          .
 .      ............................. (G,H)
 .      .   .                       .
 .      .   .                       .
 ............                       .
(A,B)   .                           .
        .                           .
        .                           .
        .............................
        (E,F)
    
-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2
Output: 45

*****/

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    if(C<E||G<A )
        return (G-E)*(H-F) + (C-A)*(D-B);
 
    if(D<F || H<B)
        return (G-E)*(H-F) + (C-A)*(D-B);
 
    var right = Math.min(C,G);
    var left = Math.max(A,E);
    var top = Math.min(H,D);
    var bottom = Math.max(F,B);
 
    return (G-E)*(H-F) + (C-A)*(D-B) - (right-left)*(top-bottom);    
};
