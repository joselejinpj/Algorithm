/*****

Given two strings A and B, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.
Swapping letters is defined as taking two indices i and j such that i != j and swapping the characters at A[i] and A[j].

-----------------
Sample Test Cases
-----------------

Test Case 1:

Input: A = "ab", B = "ba"
Output: true
Explanation: You can swap A[0] = 'a' and A[1] = 'b' to get "ba", which is equal to B.

Test Case 2:

Input: A = "aa", B = "aa"
Output: true
Explanation: You can swap A[0] = 'a' and A[1] = 'a' to get "aa", which is equal to B.

*****/

class Solution {
    public boolean stringsWithSwapTwoLetters(String A, String B) {
        if (A.length() != B.length()) 
            return false;
        
        if (A.equals(B)) {
            int[] count = new int[26];
        
            for (int i = 0; i < A.length(); ++i)
                count[A.charAt(i) - 'a']++;

            for (int c: count)
                if (c > 1) return true;
            
            return false;
        } else {
            int first = -1, second = -1;
            
            for (int i = 0; i < A.length(); ++i) {
                if (A.charAt(i) != B.charAt(i)) {
                    if (first == -1)
                        first = i;
                    else if (second == -1)
                        second = i;
                    else
                        return false;
                }
            }

            if(second != -1 && A.charAt(first) == B.charAt(second) && A.charAt(second) == B.charAt(first))
                return true;
            else
                return false;
        }
    }
}
