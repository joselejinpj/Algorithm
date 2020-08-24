"""

Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [[1,2],[2,3],[3,4],[1,3]]
Output: 1

Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.

Test Case 2:

Input: [[1,2],[2,3]]
Output: 0

Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

"""

class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        if len(intervals) < 2: return 0
        
        intervals.sort()
        count, last_included = 0, 0
        
        for i in range(1, len(intervals)):
            if intervals[i][0] < intervals[last_included][1]:
                count += 1
                
                if intervals[i][1] < intervals[last_included][1]: 
                    last_included = i
            else:
                last_included = i
        
        return count        
