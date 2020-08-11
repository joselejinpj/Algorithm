/*****

Given a binary tree, you need to compute the length of the diameter of the tree. 
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:
          1
         / \
        2   3
       / \     
      4   5   
Output: 3

Explanation: This is the length of the path [4,2,1,3] or [5,2,1,3].
  
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
var diameterOfBinaryTree = function(root) {
  if (root == null || (root.left == null && root.right == null)) 
    return 0; 

	var leftHeight = height(root.left); 
	var rightHeight = height(root.right); 
    
	var leftDiameter = diameterOfBinaryTree(root.left); 
	var rightDiameter = diameterOfBinaryTree(root.right); 

	return Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));     
};

function height(node) 
{ 
  if (node == null) 
    return 0; 

	return (1 + Math.max(height(node.left), height(node.right))); 
} 
 
