  
/*****

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:
    1
   / \
  2   2
 / \ / \
3  4 4  3

Output:
true

Test Case 2:

Input:
    1
   / \
  2   2
   \   \
   3    3
   
Output:
false

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isMirror(root, root);
};

function isMirror(tree1, tree2) {
    if(tree1==null && tree2==null)
        return true;
    
    if(tree1==null || tree2==null)
        return false;
    
    return tree1.val==tree2.val 
            && isMirror(tree1.left, tree2.left)
            && isMirror(tree1.right, tree2.right);
    
}
 
