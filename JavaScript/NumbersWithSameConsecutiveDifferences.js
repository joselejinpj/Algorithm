/*****

Return all non-negative integers of length N with absolute difference between every two consecutive digits is K.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: N = 3, K = 7
Output: [181,292,707,818,929]

Explanation: Note that 070 is not a valid number, because it has leading zeroes.

Test Case 2:

Input: N = 2, K = 1
Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]

*****/

/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, K) {
    if (N == 1)
        return new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

    var queue = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
    
    // Do BFS level by level
    for(var level = 1; level < N; level++) {
        var nextQueue = [];
        
        for (var j=0; j<queue.length; j++) {
            var tailDigit = queue[j] % 10;
            var nextDigit = tailDigit + K;
            var newNum;
            
            if (0 <= nextDigit && nextDigit < 10) {
                newNum = queue[j] * 10 + nextDigit;
                nextQueue.push(newNum);
            }            
           
            if (K != 0) {
                var prevDigit = tailDigit - K;
                
                if (0 <= prevDigit && prevDigit < 10) {
                    newNum = queue[j] * 10 + prevDigit;
                    nextQueue.push(newNum);
                }                  
            }
            
        }

        queue = nextQueue;
    }

    return queue;    
};
 
