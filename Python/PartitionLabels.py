"""

A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part.
Return the list of integers representing the size of these parts.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]


Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.

"""

class Solution(object):
    def partitionLabels(self, S):
        last = {c: i for i, c in enumerate(S)}
        j = 0
        base = 0
        ans = []
        
        for i, c in enumerate(S):
            j = max(j, last[c])
            
            if i == j:
                ans.append(i - base + 1)
                base = i + 1
            
        return ans
 
