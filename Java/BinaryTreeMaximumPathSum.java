/*****

Given a non-empty binary tree, find the maximum path sum.
For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6 
Explanation: Using path 2, 1, 3

Test Case 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
Explanation: Using path 15, 20, 7

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

class Res { 
    public int val; 
} 

class Solution {
    private int findMaxUtil(TreeNode node, Res res) { 
        // Base Case 
        if (node == null) {
            return 0; 
		}
		
        int leftMax = findMaxUtil(node.left, res); 
        int rightMax = findMaxUtil(node.right, res); 
        int maxSingle = Math.max(Math.max(leftMax, rightMax) + node.val, node.val); 
  
        int max = Math.max(maxSingle, leftMax + rightMax + node.val); 
  
        // Choose the maximum Result. 
        res.val = Math.max(res.val, max); 
  
        return max; 
    } 
  
    public int maxPathSum(TreeNode root) {
        Res res = new Res(); 
        res.val = Integer.MIN_VALUE; 
        findMaxUtil(root, res); 

        return res.val;         
    }
}
