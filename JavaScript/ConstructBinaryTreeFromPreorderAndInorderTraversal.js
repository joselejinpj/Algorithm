/*****

Given preorder and inorder traversal of a tree, construct the binary tree.
You may assume that duplicates do not exist in the tree.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]

Output:
    3
   / \
  9  20
    /  \
   15   7

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    return buildTreeHelper(preorder, inorder);
};

function buildTreeHelper(preorder, inorder) {
    var node = new TreeNode();
    
    if(inorder.length == 0 || preorder.length == 0)
        return null;
    
    node.val = preorder[0];
    preorder.shift();
    
    var inorderIndex = inorder.indexOf(node.val);
    
    node.left = buildTreeHelper(preorder, inorder.slice(0, inorderIndex));
    node.right = buildTreeHelper(preorder, inorder.slice(inorderIndex+1, inorder.length));
    
    return node;
}
