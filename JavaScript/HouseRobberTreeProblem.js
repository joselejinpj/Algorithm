/*****

The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root".
Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". 
It will automatically contact the police if two directly-linked houses were broken into on the same night. Means if the root is robbed, its left and right can not be robbed.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [3,2,3,null,3,null,1]

     3
    / \
   2   3
    \   \ 
     3   1

Output: 7 
Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.

Test Case 2:

Input: [3,4,5,1,3,null,1]

     3
    / \
   4   5
  / \   \ 
 1   3   1

Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.

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
var rob = function(root) {
    var options = robHelper(root); // [Including root, Not including root]
    
    return Math.max(options[0], options[1]);
};

function robHelper(root) {
    if(root == null)
        return [0, 0];
    
    var left = robHelper(root.left);
    var right = robHelper(root.right);
    
    var result = new Array(2); //  [Including root, Not including root]
    
    // Case 1: Including root
    result[0] = root.val + left[1] + right[1];
     // Case 2: Not including root
    result[1] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    
    return result;
}
 
