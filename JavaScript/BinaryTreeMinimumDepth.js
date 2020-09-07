/*****

Given a binary tree find its minimum depth. The minimum depth is the number of nodes along the shortest path from the root node down to the leaf node.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:
    3
   / \
  9  20
    /  \
   15   7
   
Output: 2 

Explanation: 3 -> 9

*****/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root == null) 
        return 0; 

    if (root.left == null && root.right == null) 
        return 1; 

    if (root.left == null) 
        return minDepth(root.right) + 1; 

    if (root.right == null) 
        return minDepth(root.left) + 1; 

    return Math.min(minDepth(root.left), minDepth(root.right)) + 1; 
};
