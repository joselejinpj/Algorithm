/*****

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: "A man, a plan, a canal: Panama"
Output: true

*****/

class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function isPalindrome($s) {
        $s = preg_replace("/[^a-zA-Z0-9]+/", "", $s);
        $s = strtolower($s);
        
        return $s === strrev($s);      
    }
}
