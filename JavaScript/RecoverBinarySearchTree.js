/*****

Two elements of a binary search tree (BST) are swapped by mistake.
Recover the tree without changing its structure.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [1,3,null,null,2]

   1
  /
 3
  \
   2

Output: [3,1,null,null,2]

   3
  /
 1
  \
   2

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    var recoverNodes = {
        first: null,
        second: null,
        prev: null
    };
    
    inorder(root, recoverNodes);
    
    if(recoverNodes.first != null && recoverNodes.second != null) {
        var tmp = recoverNodes.first.val;
        
        recoverNodes.first.val = recoverNodes.second.val;
        recoverNodes.second.val = tmp;
    }
};

function inorder(root, recoverNodes) {
    if(root == null)
        return;
    
    inorder(root.left, recoverNodes);
    
    if(recoverNodes.prev != null) {
        if(root.val < recoverNodes.prev.val) { // Sort order wrong. Misplaced node.
            if(recoverNodes.first==null)
                recoverNodes.first = recoverNodes.prev;
            
            recoverNodes.second = root;
        }
    }
    
    recoverNodes.prev = root;
    
    
    inorder(root.right, recoverNodes);
}
 
