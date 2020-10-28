/*****

An array with elements sorted in ascending order is given as input, convert it to a balanced BST.

-----------------
Sample Test Cases
-----------------

Test Case 1:

Input: [-10,-3,0,5,9],
Output:

One possible answer is: [0,-3,9,-10,null,5], which represents the following BST:

      0
     / \
   -3   9
   /   /
 -10  5

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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return sortedArrayToBSTUtil(nums, 0, nums.length-1);
};

function sortedArrayToBSTUtil(arr, start, end) { 
   if (start > end)
        return null; 

    var mid = start + Math.trunc((end-start)/2); 
    var node = new TreeNode(arr[mid]); 

    node.left = sortedArrayToBSTUtil(arr, start, mid - 1); 
    node.right = sortedArrayToBSTUtil(arr, mid + 1, end); 

    return node;   
} 
 
