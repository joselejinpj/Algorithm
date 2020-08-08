/*****

Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [5,7]
Output: 4

Test Case 2:

Input: [0,1]
Output: 0

*****/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    var result = 0;

    while (m > 0 && n > 0) {  
        // Find positions of MSB in x and y  
        var msb_p1 = msbPos(m);  
        var msb_p2 = msbPos(n);  

        if (msb_p1 != msb_p2)  
            break;  

        // Add 2^msb_p1 to result  
        var msb_val = (1 << msb_p1);  
        
        result = result + msb_val;  

        // Remove 2^msb_p1 from x and y.  
        m = m - msb_val;  
        n = n - msb_val;  
    }  

    return result;      
};

function msbPos(n)  
{  
    var msb_p = -1;  

    while (n > 0) {  
        n = n >> 1;  
        msb_p++;  
    }  

    return msb_p;  
}  
