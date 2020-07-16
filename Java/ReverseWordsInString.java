/*****

Given an input string, reverse the string word by word.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: "the sky is blue"
Output: "blue is sky the"

Test Case 2:

Input: "  hello world!  "
Output: "world! hello"

*****/

class Solution {
    public String reverseWords(String s) {
		if (s == null || s.length() == 0) {
			return "";
		}
 
		String[] arr = s.split(" ");
		StringBuilder sb = new StringBuilder();

        for (int i = arr.length - 1; i >= 0; --i) {
			if (!arr[i].equals(""))
				sb.append(arr[i]).append(" ");
		}
		
        return sb.length() == 0 ? "" : sb.substring(0, sb.length() - 1);        
    }
}
 
