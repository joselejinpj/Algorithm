/*****

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.

-----------------
Sample Test Cases
-----------------

Test Case 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]

Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Test Case 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

*****/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort(function(a, b) {return a-b;}); 
    candidates = [...new Set(candidates)];
    
    var current = []; 
    var result = []; 
    
    combinationSumUtil(candidates, target, result, current, 0); 

    return result;    
};

function combinationSumUtil(candidates, target, result, current, i) { 
    if (target < 0) 
        return; 

    if (target == 0) { 
        result.push([...current]); 
        return; 
    } 

    while(i < candidates.length && target - candidates[i] >= 0) { 
        current.push(candidates[i]); 

        combinationSumUtil(candidates, target - candidates[i], result, current, i); 
        i++; 

        current.pop();
    } 
} 
 
