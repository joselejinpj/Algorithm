/*****

Determine whether an integer is a palindrome or not.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: 121
Output: true

Test Case 2:

Input: 10
Output: false
Explanation: Reads 01 from right to left. It is not a palindrome.

*****/

class Solution {

    /**
     * @param Integer $x
     * @return Boolean
     */
    function isPalindrome($x) {
        if($x == $this->palindrome($x))
            return true;
        else
            return false;
    }
    
    function palindrome($n){  
        $number = $n;  
        $sum = 0; 
        
        while(floor($number)) {  
            $rem = $number % 10;  
            $sum = $sum * 10 + $rem;  
            $number = $number/10;  
        }  
        
        return $sum;  
    }      
}
