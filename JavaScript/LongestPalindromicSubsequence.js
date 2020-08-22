/*****

Given a string s, find the longest palindromic subsequence's length in s. 
Note - characters need not be adjacent.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: "bbbab"
Output: 4

Explanation: One possible longest palindromic subsequence is "bbbb".

Test Case 2:

Input: "cbbd"
Output: 2

Explanation: One possible longest palindromic subsequence is "bb".

*****/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    return getLongestPalindromeSubseq(s, 0, s.length-1, {});
};

function getLongestPalindromeSubseq(seq, i, j, map) { // Use memoization map
    if(map[i+"-"+j])
        return map[i+"-"+j];
    
    if (i == j) 
        return 1; 
  
    if (seq[i] == seq[j] && i + 1 == j) 
        return 2; 
  
    if (seq[i] == seq[j]) {
        map[i+"-"+j] = 2 + getLongestPalindromeSubseq(seq, i+1, j-1, map); 
        
        return map[i+"-"+j];
    }
    
    map[i+"-"+j] = Math.max(getLongestPalindromeSubseq(seq, i, j-1, map), getLongestPalindromeSubseq(seq, i+1, j, map)); 
    
    return map[i+"-"+j];
}
