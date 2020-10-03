"""

Imagine asteroids given in an array of integers. For each entry the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left).
Find out the state of the asteroids after all collisions. If two asteroids meet the smaller one will be exploded. If both are the same size both will be exploded. Two asteroids moving in same direction will never meet/collide.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: 
asteroids = [5, 10, -5]
Output: 
[5, 10]
Explanation: 
The 10 and -5 collide resulting in 10.  The 5 and 10 never collide.

Test Case 2:

Input: 
asteroids = [10, 2, -5]
Output: 
[10]
Explanation: 
The 2 and -5 collide resulting in -5.  The 10 and -5 collide resulting in 10.

"""

class Solution(object):
    def asteroidCollision(self, asteroids):
        result = []
        
        for ast in asteroids:
            while result and ast < 0 < result[-1]:
                if result[-1] < -ast:
                    result.pop()
                    continue
                elif result[-1] == -ast:
                    result.pop()
                break
            else:
                result.append(ast)
                
        return result
        
