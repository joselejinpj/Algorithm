/*****

Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true

Test Case 2:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false

*****/

 public class Solution {
    public boolean is_Interleave(String s1, int i, String s2, int j, String s3, int k, int[][] memo) {
        if (i == s1.length())
            return s2.substring(j).equals(s3.substring(k));
        
        if (j == s2.length())
            return s1.substring(i).equals(s3.substring(k));
        
        if (memo[i][j] >= 0) // Return from Memoization
            return memo[i][j] == 1 ? true : false;
        
        if (s3.charAt(k) == s1.charAt(i) && is_Interleave(s1, i + 1, s2, j, s3, k + 1, memo)
                || s3.charAt(k) == s2.charAt(j) && is_Interleave(s1, i, s2, j + 1, s3, k + 1, memo))
            memo[i][j] = 1;
        else 
            memo[i][j] = 0;
        
        return memo[i][j]==1? true: false;
    }
     
    public boolean isInterleave(String s1, String s2, String s3) {
        int memo[][] = new int[s1.length()][s2.length()]; // Memoization
        
        for (int i = 0; i < s1.length(); i++) {
            for (int j = 0; j < s2.length(); j++) {
                memo[i][j] = -1;
            }
        }
        
        return is_Interleave(s1, 0, s2, 0, s3, 0, memo);
    }
}
 
