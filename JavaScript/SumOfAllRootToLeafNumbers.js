/*****

Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

Note: A node is leaf it has no children.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [1,2,3]
    1
   / \
  2   3
  
Output: 25

Explanation:

The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.

Test Case 2:

Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1

Output: 1026

Explanation:

The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026

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
 
var sumNumbers = function(root) {
    if(root==null)
        return 0;
    
    return sumNumbersHelper(root, 0, 0);
};

function sumNumbersHelper(node, currentLeafNumber, sum) {
    if(node==null) 
        return sum;
    
    currentLeafNumber = currentLeafNumber*10 + node.val;
    
    if(node.left==null && node.right== null) { // Found the leaf node
        sum = sum + currentLeafNumber;
        
        return sum;
    } 

    sum = sumNumbersHelper(node.left, currentLeafNumber, sum) + sumNumbersHelper(node.right, currentLeafNumber, sum);
    
    return sum;
}
