"""

Given a string find the first non-repeating character in it and return its index. If it doesn't exist return -1.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: "abcbcdd"
Output: 0

"""

class Solution:
    def firstUniqChar(self, s: str) -> int:
        count = collections.Counter(s)
        
        for idx, ch in enumerate(s):
            if count[ch] == 1:
                return idx  
            
        return -1
