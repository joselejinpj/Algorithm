/*****

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s. Only ASCII characters in the strings.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Test Case 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

*****/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function(s, p) {
    var patternCount = new Array(256).fill(0);
    var currentWindowCount = new Array(256).fill(0);
    var patternLen = p.length;
    var result = [];
    
    for(var i=0; i<patternLen; i++) {
        patternCount[p.charCodeAt(i)] ++;
        currentWindowCount[s.charCodeAt(i)] ++; // Fill for pattern window size in string
    }
    
    for(var i=patternLen; i<s.length; i++) { // Start moving window right
        if(isSameCountMap(currentWindowCount, patternCount))
            result.push(i-patternLen);
        
        currentWindowCount[s.charCodeAt(i-patternLen)]--; 
        currentWindowCount[s.charCodeAt(i)]++;
    }
    
    if(isSameCountMap(currentWindowCount, patternCount)) // Last window
        result.push(s.length-patternLen);    
    
    return result;
};

function isSameCountMap(countMap1, countMap2) {
    for(var i=0; i<256; i++) {
        if(countMap1[i] != countMap2[i])
            return false;
    }
    
    return true;
}
 
