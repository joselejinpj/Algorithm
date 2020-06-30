/*****

Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

Following 3 operations are allowed on a word:

Insert a character
Delete a character
Replace a character

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

Test Case 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')

*****/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var mem = new Array(word1.length); // Dynamic programming memoization
    
    for(var i=0; i<word1.length; i++)
        mem[i] = new Array(word2.length);
    
    return minDistanceHelper(word1, word2, word1.length, word2.length, mem);
};

function minDistanceHelper(word1, word2, word1Len, word2Len, mem) {
    if(word1Len == 0)
        return word2Len;
    
    if(word2Len == 0)
        return word1Len;
    
    if(mem[word1Len-1][word2Len-1])
        return mem[word1Len-1][word2Len-1];
    
    if(word1.charAt(word1Len-1) == word2.charAt(word2Len-1))
        mem[word1Len-1][word2Len-1] = minDistanceHelper(word1, word2, word1Len-1, word2Len-1, mem);
    else
        // Find min of insert, delete, replace
        mem[word1Len-1][word2Len-1] = 1 + Math.min(
            minDistanceHelper(word1, word2, word1Len, word2Len-1, mem), // Insert
            minDistanceHelper(word1, word2, word1Len-1, word2Len, mem), // Delete
            minDistanceHelper(word1, word2, word1Len-1, word2Len-1, mem) // Replace
        );
    
    return mem[word1Len-1][word2Len-1];
}
 
