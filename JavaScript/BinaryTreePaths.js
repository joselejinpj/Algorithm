/*****

Given a binary tree, return all root-to-leaf paths.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]
Explanation: All root-to-leaf paths are: 1->2->5, 1->3

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var sb = "";
    var result = [];
 
    getBinaryTreePaths (root, result, sb);
 
    return result;
}
 
function getBinaryTreePaths (root, result, s) {
    if(root==null)
        return;
 
    s = s+"->"+root.val;
 
    if(root.left==null &&root.right==null) {
        result.push(s.substring(2));
        return;
    }
 
    if(root.left!=null)
        getBinaryTreePaths (root.left, result, s);
 
    if(root.right!=null)
        getBinaryTreePaths (root.right, result, s);
}
 
