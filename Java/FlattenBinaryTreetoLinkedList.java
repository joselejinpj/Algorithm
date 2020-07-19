/*****

Given a binary tree, flatten it to a linked list in-place.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: 

    1
   / \
  2   5
 / \   \
3   4   6

Output:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
****/

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    void flatten(TreeNode* root) {
        if (root == NULL || (root->left == NULL && root->right == NULL)) { 
            return; 
        } 

        if (root->left != NULL) { 
            flatten(root->left); 

            TreeNode* tmpRight = root->right; 
            root->right = root->left; 
            root->left = NULL; 
   
            TreeNode* tmp = root->right; 
            
            while (tmp->right != NULL)
                tmp = tmp->right; 

            tmp->right = tmpRight; 
        } 

        flatten(root->right);         
    }
};
