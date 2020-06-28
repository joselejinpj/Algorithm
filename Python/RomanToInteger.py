"""

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: IX
Output: 9
IX is a Roman symbol which represents 9 

Test Case 2:

Input: XL
Output: 40
XL is a Roman symbol which represents 40

"""

class Solution(object):
    def value(self, roman): 
        if (roman == 'I'): 
            return 1
        if (roman == 'V'): 
            return 5
        if (roman == 'X'): 
            return 10
        if (roman == 'L'): 
            return 50
        if (roman == 'C'): 
            return 100
        if (roman == 'D'): 
            return 500
        if (roman == 'M'): 
            return 1000
        
        return -1   
    
    def romanToInt(self, str): 
        result = 0
        i = 0

        while (i < len(str)): 
            s1 = self.value(str[i]) 

            if (i + 1 < len(str)): 
                s2 = self.value(str[i + 1]) 

                if (s1 >= s2): 
                    result = result + s1 
                    i = i + 1
                else: 
                    result = result + s2 - s1 
                    i = i + 2
            else: 
                result = result + s1 
                i = i + 1

        return result  
