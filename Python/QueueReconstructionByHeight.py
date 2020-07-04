"""

Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k).
IN this h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. 
Write an algorithm to reconstruct the queue.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

"""

class Solution(object):
    def reconstructQueue(self, people):
        people = sorted(people, key = lambda x: (-x[0], x[1]))
        
        result = []
        
        for p in people:
            result.insert(p[1], p)
        
        return result
