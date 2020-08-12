/*****

iven a string s and a string t, check if s is subsequence of t.
A subsequence of a string is a new string which is formed from the original string by deleting some of the characters without disturbing the relative positions of the remaining characters. 

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: s = "abc", t = "ahbgdc"
Output: true

Test Case 2:

Input: s = "axc", t = "ahbgdc"
Output: false

*****/

class Solution {
    public boolean isSubsequence(String s, String t) {
        if(s.length()==0)
            return true;

        int i=0;
        int j=0;   
        
        while(i<s.length() && j<t.length()){
            if(s.charAt(i) == t.charAt(j))
                i++;

            j++;

            if(i==s.length())
                return true;
        }

        return false;
    }
}
