"""

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32

Test Case 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23

"""

class Solution(object):
    def rangeSumBST(self, root, L, R):
        def dfs(node):
            if node:
                if L <= node.val <= R:
                    self.result += node.val
                    
                if L < node.val:
                    dfs(node.left)
                    
                if node.val < R:
                    dfs(node.right)

        self.result = 0
        
        dfs(root)
        
        return self.result
