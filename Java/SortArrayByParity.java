/*****

Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [3,1,2,4]
Output: [2,4,3,1]

Note: Output can be [4,2,3,1], [2,4,1,3], and [4,2,1,3] also.

*****/

class Solution {
    public int[] sortArrayByParity(int[] A) {
        int start = 0;
        int end = A.length - 1;
        
        while (start < end) {
            if (A[start] % 2 > A[end] % 2) {
                int tmp = A[start];
                A[start] = A[end];
                A[end] = tmp;
            }

            if (A[start] % 2 == 0) 
                start++;
            
            if (A[end] % 2 == 1) 
                end--;
        }

        return A;
    }
}
 
