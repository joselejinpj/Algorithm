/*****

Given inorder and postorder traversal of a tree, construct the binary tree.
You may assume that duplicates do not exist in the tree.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: 

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    return buildTreeHelper(inorder, postorder);    
};

function buildTreeHelper(inorder, postorder) {
    var node = new TreeNode();
    
    if(inorder.length == 0 || postorder.length == 0)
        return null;
    
    node.val = postorder[postorder.length-1];
    postorder.splice(postorder.length-1, 1);
    
    var inorderIndex = inorder.indexOf(node.val);
    
    node.right = buildTreeHelper(inorder.slice(inorderIndex+1, inorder.length), postorder);
    node.left = buildTreeHelper(inorder.slice(0, inorderIndex), postorder);    
    
    return node;
}
