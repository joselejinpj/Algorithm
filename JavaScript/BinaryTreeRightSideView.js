/*****

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]

Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

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
var rightSideView = function(root) {
    var result = [];
 
    if(root == null) 
        return result;
 
    var queue = [];
    
    queue.push(root);
 
    while(queue.length > 0) {
        var size = queue.length;
 
        for(var i=0; i<size; i++) {
            var top = queue.shift();
 
            if(i==0)
                result.push(top.val);
            
            // Right first
            if(top.right != null)
                queue.push(top.right);

            if(top.left != null)
                queue.push(top.left);
        }
    }
 
    return result;    
};
 
