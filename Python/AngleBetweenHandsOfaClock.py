"""

Given two numbers, hour and minutes. Return the smaller angle (in degrees) formed between the hour and the minute hand.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: hour = 12, minutes = 30
Output: 165

Test Case 2:

Input: hour = 3, minutes = 30
Output: 75

"""

class Solution(object):
    def angleClock(self, hour, minutes):

        # Position of hour's hand
        h = ((hour * 60  + minutes) * 0.5) % 360.0; # 0.5 = (360/(12*60))

        # Position of minute's hand
        m = minutes * (360 // 60)

        # Angle difference
        angle = abs(h - m)

        # Return min
        if angle > 180:
            angle = 360 - angle

        return angle  
        
