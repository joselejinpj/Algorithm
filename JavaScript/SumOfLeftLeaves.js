/*****

Find the sum of all left leaves in a given binary tree.

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
Output: 24

Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively. 9+15 = 24.

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
var sumOfLeftLeaves = function(root) {
    if(root == null)
        return 0;
    else if(root.left!= null && root.left.left==null && root.left.right== null)
        return root.left.val + sumOfLeftLeaves(root.right);
    else
        return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
