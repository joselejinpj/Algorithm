/*****

Write an algorithm to determine if a number n is "happy".
A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
Return true if n is a happy number, and false if not.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: 19
Output: true

Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

*****/

class Solution {
    public boolean isHappy(int n) {
        HashSet<Integer> set = new HashSet<Integer>();

        while(!set.contains(n)){
            set.add(n);

            n = getSum(n);

            if(n==1)
                return true;
        }

        return false;
    }

    public int getSum(int num){
        int sum = 0;
        
        while(num>0){
            sum+= (num%10)*(num%10);
            num = num/10;
        } 
        
        return sum;    
    }
}
 
