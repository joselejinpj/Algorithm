/*****

Write a program to find the n-th number whose prime factors only include 2, 3, 5. 

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

*****/

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if(n<=0)
        return 0;
 
    var dp = [];
    
    dp.push(1);
 
    var i=0;
    var j=0;
    var k=0;
 
    while(dp.length < n) {
        var m2 = dp[i]*2;
        var m3 = dp[j]*3;
        var m5 = dp[k]*5;
        var min = Math.min(m2, Math.min(m3, m5));
 
        dp.push(min);
 
        if(min == m2)
            i++;
 
        if(min==m3)
            j++;
 
        if(min==m5)
            k++;
    }
 
    return dp[dp.length-1];    
};
