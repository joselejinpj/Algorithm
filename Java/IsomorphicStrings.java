/*****

Given two strings s and t, determine if they are isomorphic. Two strings are isomorphic if the characters in s can be replaced to get t, while preserving the order of characters.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: s = "paper", t = "title"
Output: true

Test Case 2:

Input: s = "foo", t = "bar"
Output: false
  
*****/

class Solution {
    public boolean isIsomorphic(String s, String t) {
        if (s.length() != t.length())
            return false;

        HashMap<Character, Character> map = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char char1 = s.charAt(i);
            char char2 = t.charAt(i);

            if (map.containsKey(char1)) {
                if (map.get(char1) != char2)
                    return false;
            } else {
                map.put(char1, char2);
            }
        }

        HashSet<Character> set = new HashSet<>(map.values());
        
        if (set.size() == map.values().size())
            return true;

        return false;        
    }
}
 
