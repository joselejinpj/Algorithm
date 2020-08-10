/*****

You are given a binary tree in which each node contains an integer value. Find the number of paths that sum to a given value.
The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:
root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Output: 3

Explanation:

The paths that sum to 8 are:
1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11

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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    var path = [];
    var result = {count: 0};
    
    printKPathUtil(root, sum, path, result);
    
    return result.count;
};

function printKPathUtil(root, sum, path, result)  
{  
    if (root == null)  
        return;  
  
    path.push(root.val);  // Add
  
    printKPathUtil(root.left, sum, path, result);  
	printKPathUtil(root.right, sum, path, result);  
  
    // k sum path that  terminates at this node  
    var current_sum = 0;  
    
    for (var i = path.length - 1; i >= 0; i--)  
    {  
        current_sum += path[i];  
  
        if (current_sum == sum)
            result.count = result.count + 1;
    }  

    path.pop();  // Remove to backtrack
}  
