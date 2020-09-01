/*****

Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference of the BST.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:

root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

Output:

One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

    5
   / \
  4   6
 /     \
2       7

Another valid answer is [5,2,6,null,4,null,7].

    5
   / \
  2   6
   \   \
    4   7

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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (root == null)  
        return root; 

    if (key < root.val) 
        root.left = deleteNode(root.left, key); 
    else if (key > root.val) 
        root.right = deleteNode(root.right, key); 
    else { 
        // Tree node with only one child or no child 
        if (root.left == null) 
            return root.right; 
        else if (root.right == null) 
            return root.left; 

        // Tree node with two children
        root.val = minimumValue(root.right); 
        root.right = deleteNode(root.right, root.val); 
    } 

    return root;    
};
 

function minimumValue(root) 
{ 
    var min = root.val; 
    
    while (root.left != null) { 
        min = root.left.val; 
        root = root.left; 
    } 
    
    return min; 
} 
