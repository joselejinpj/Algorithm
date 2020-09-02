"""

Given an array of 4 digits, return the largest 24 hour time that can be made.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [1,2,3,4]
Output: "23:41"

Test Case 2:

Input: [5,5,5,5]
Output: ""

"""

class Solution:
    def largestTimeFromDigits(self, A: List[int]) -> str:
        
        maxTime = -1

        for h, i, j, k in itertools.permutations(A):
            hour = h*10 + i
            minute = j*10 + k
            
            if hour < 24 and minute < 60:
                maxTime = max(maxTime, hour * 60 + minute)
        
        if maxTime == -1:
            return ""
        else:
            return "{:02d}:{:02d}".format(maxTime // 60, maxTime % 60)
            
