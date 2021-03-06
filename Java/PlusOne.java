/*****

Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Test Case 2:

Input: [4,3,2,1]
Output: [4,3,2,2]

*****/

class Solution {
    public int[] plusOne(int[] digits) {
        if(digits==null||digits.length==0)
            return new int[0];

        int carry = 1;    
        
        for(int i=digits.length-1; i>=0; i--) {
            int sum = digits[i]+carry;
            if(sum>=10)
                carry=1;
            else
                carry=0;
            
            digits[i]=sum%10;
        }

        if(carry==1) {
            int[] result = new int[digits.length+1];
            System.arraycopy(digits, 0, result, 1, digits.length);
            result[0]=1;
            
            return result;
        } else {
            return digits;
        }
    }
}
 
