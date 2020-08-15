/*****

Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: 
[3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
   
Output: 3

*****/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int maxDepth(TreeNode root) {
        if(root==null)
            return 0;

        int leftSideDepth = maxDepth(root.left);
        int rightSideDepth = maxDepth(root.right);

        return 1 + Math.max(leftSideDepth, rightSideDepth);
    }
}
