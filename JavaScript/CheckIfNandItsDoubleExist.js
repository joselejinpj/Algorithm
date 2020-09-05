/*****

Given an array arr of integers, check if there exists two integers N and M such that N is the double of M.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: arr = [10,2,5,3]
Output: true

Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

Test Case 2:

Input: arr = [3,1,7,11]
Output: false

Explanation: In this case does not exist N and M, such that N = 2 * M.

*****/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let set = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i] << 1) || set.has(arr[i] / 2)) 
            return true;
        
        set.add(arr[i]);
    }
    
    return false;
};
