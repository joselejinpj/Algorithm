/*****

Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.

*****/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var count = new Array(128).fill(0);
    
    for(var i=0; i<s.length; i++)
        count[s.charCodeAt(i)]++;

    var res = 0;
    
    for (i=0; i< count.length; i++) {
        res += Math.trunc(count[i]/2) * 2;
    
        if (res % 2 == 0 && count[i] % 2 == 1)
            res++;
    }
    
    return res;    
};
