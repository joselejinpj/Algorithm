/*****

Given a n-ary tree find its maximum depth.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: root = [1,null,3,2,4,null,5,6]
              
               1
              
     3         2         4
     
5         6   

Output: 3

*****/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root == null) 
        return 0;
    
    let max = 0;
    
    root.children.forEach(function(child, index) {
            if(child != null) 
                max = Math.max(max, maxDepth(child));
        }
    );
    
    return max + 1;    
};
