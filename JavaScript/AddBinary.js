/*****

Given two binary strings, return their sum (also a binary string).
The input strings are both non-empty and contains only characters 1 or 0.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: a = "11", b = "1"
Output: "100"

Test Case 2:

Input: a = "1010", b = "1011"
Output: "10101"

*****/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(a==null || a.length==0)
        return b;
    
    if(b==null || b.length==0)
        return a;
 
    var pa = a.length-1;
    var pb = b.length-1;
    var carry = 0;    
    var sb = "";
    
    while(pa >= 0 || pb >=0){
        var va = 0;
        var vb = 0;
 
        if(pa >= 0){
            va = a.charAt(pa)=='0'? 0 : 1;    
            pa--;
        }
        
        if(pb >= 0){
            vb = b.charAt(pb)=='0'? 0: 1;
            pb--;
        }
 
        var sum = va + vb + carry;
        
        if(sum >= 2){
            sb += "" + (sum-2);
            carry = 1;
        } else {
            carry = 0;
            sb += "" + sum;
        }
    }
 
    if(carry == 1)
        sb += "1";

    var result = sb.split("").reverse().join("");
    
    return result;    
};
 
