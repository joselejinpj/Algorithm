/*****

Return roman representation of the number given. Input is guaranteed to be within the range from 1 to 3999.
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: 3
Output: "III"

Test Case 2:

Input: 58
Output: "LVIII"

Explanation: L = 50, V = 5, III = 3.

*****/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var integers = [1,4,5,9,10,40,50,90,100,400,500,900,1000]; 
    var romanSymbols = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    var i = integers.length-1;     
    var roman = "";
    
    while(num>0) 
    { 
        var div = Math.trunc(num/integers[i]);
        num = num%integers[i]; 

        while(div--) 
        { 
            roman = roman + romanSymbols[i]; // Keep collecting roman symbol mappings
        } 

        i--; 
    }  
    
    return roman;
};
 
