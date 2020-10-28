/*****

Return the product of two non-negative integers num1 and num2 represented as strings.

-----------------
Sample Test Cases
-----------------

Test Case 1:

Input: num1 = "2", num2 = "3"
Output: "6"

Test Case 2:

Input: num1 = "123", num2 = "456"
Output: "56088"

*****/

class Solution {
    public String multiply(String num1, String num2) {
        String n1 = new StringBuilder(num1).reverse().toString();
        String n2 = new StringBuilder(num2).reverse().toString();
        int[] digits = new int[num1.length()+num2.length()];

        for(int i=0; i<n1.length(); i++) {
            for(int j=0; j<n2.length(); j++)
                digits[i+j] += (n1.charAt(i)-'0') * (n2.charAt(j)-'0');
        }

        StringBuilder sb = new StringBuilder();

        for(int i=0; i<digits.length; i++){
            int mod = digits[i]%10;
            int carry = digits[i]/10;
            
            if(i+1 < digits.length)
                digits[i+1] += carry;

            sb.insert(0, mod);
        }

        while(sb.charAt(0) == '0' && sb.length()> 1)
            sb.deleteCharAt(0);

        return sb.toString();
    }
}
 
