/*****

Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit. 
Write function to return the sum of these numbers.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [1,0,1,0,1,0,1]
                  1
          0                1

    0         1      0           1 
     
Output: 22

Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

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
let rootToLeaf = 0;

var sumRootToLeaf = function(root) {
    preorder(root, 0);
    
    return rootToLeaf;    
};

let preorder = (node, currNumber) => {
    if (node != null) {
        currNumber = (currNumber << 1) | node.val;
        
        if (node.left == null && node.right == null)
            rootToLeaf += currNumber;

        preorder(node.left, currNumber);
        preorder(node.right, currNumber);
    }
};
 
