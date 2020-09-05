/*****

Given two binary search trees root1 and root2, get a list containing all the integers from both trees sorted in sorted order.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: root1 = [2,1,4], root2 = [1,0,3]
    
    2
 1     4

    1
 0     3
 
Output: [0,1,1,2,3,4]

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
    List<Integer> result = new ArrayList<>();

    public List<Integer> getAllElements(TreeNode root1, TreeNode root2) {

        if(root1 == null && root2 == null)
            return result;

        traverseTree(root1);
        traverseTree(root2);
        Collections.sort(result);

        return result;
    }


    private void traverseTree(TreeNode root){
        if(root == null)
            return;
        else {
            result.add(root.val);
            traverseTree(root.left);
            traverseTree(root.right);
        }
    }
}
 
