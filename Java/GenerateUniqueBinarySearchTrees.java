/*****

Given an integer input n, generate all structurally unique binary search trees that store values 1 ... n.


-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: 3
Output:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]

Explanation:
The above output corresponds to the 5 unique BST's shown below:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

*****/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<TreeNode> generateTrees(int num) {
        if(num == 0)
            return new ArrayList<TreeNode>();

        return helper(1, num);
    }

    public List<TreeNode> helper(int start, int end){
        List<TreeNode> result = new ArrayList<TreeNode>();
        
        if(start > end){
            result.add(null);
            
            return result;
        }

        for(int i=start; i<=end; i++){
            List<TreeNode> leftTree = helper(start, i-1);
            List<TreeNode> rightTree = helper(i+1, end);
            
            for(TreeNode l: leftTree){
                for(TreeNode r: rightTree){
                    TreeNode curr = new TreeNode(i);
                    
                    curr.left=l;
                    curr.right=r;
                    
                    result.add(curr);
                }
            }
        }

        return result;
    }
}
