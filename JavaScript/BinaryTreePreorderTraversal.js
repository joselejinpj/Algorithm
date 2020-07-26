/*****

Given a binary tree, return the preorder traversal of its nodes' values.
Recursive solution is trivial, do it iteratively.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]

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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
   var returnList = [];

    if(root == null)
        return returnList;

    var stack = [];
    
    stack.push(root);

    while(stack.length!=0) {
        var treeNode = stack.pop();
        
        returnList.push(treeNode.val);

        if(treeNode.right != null)
            stack.push(treeNode.right);
        
        if(treeNode.left != null)
            stack.push(treeNode.left);
    }

    return returnList;    
};
 
