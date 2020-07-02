/*****

Given a binary tree, return the bottom-up level order traversal of its nodes' values. This means from left to right, level by level from leaf to root.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:
   3
   / \
  9  20
    /  \
   15   7

Output:
[
  [15,7],
  [9,20],
  [3]
]

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
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();

        if(root == null)
            return result;

        LinkedList<TreeNode> current = new LinkedList<TreeNode>();
        LinkedList<TreeNode> next = new LinkedList<TreeNode>();

        current.offer(root);

        ArrayList<Integer> numberList = new ArrayList<Integer>();

        while(!current.isEmpty()) {
            TreeNode head = current.poll();
            numberList.add(head.val);

            if(head.left != null){
                next.offer(head.left);
            }
            if(head.right!= null){
                next.offer(head.right);
            }

            if(current.isEmpty()){
                current = next;
                next = new LinkedList<TreeNode>(); // Reset
                result.add(numberList);
                numberList = new ArrayList<Integer>(); // Reset
            }
        }

        // Return reverse
        List<List<Integer>> reversedResult = new ArrayList<>();
        
        for(int i=result.size()-1; i>=0; i--)
            reversedResult.add(result.get(i));

        return reversedResult;
    }    
}
