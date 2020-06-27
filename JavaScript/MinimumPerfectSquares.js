/*****

Given a positive integer n, find the minimum number of perfect square numbers (for example, 1, 4, 9, ...) which sum to n.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:  n = 100
Output: 1

100 can be written as sqaure of 10. Note that 100 can also be  written as sqaure(5) + sqaure(5) + sqaure(5) + sqaure(5), but this representation requires 4 squares. 
What we need is minimum, which is 1.

Test Case 2:

Input: n = 12
Output: 3 
Explanation: 12 = sqaure(2) + sqaure(2) + sqaure(2).

*****/

var getMinNnumSquares = function(n) {
    var mem = {};
    
    return getMinNnumSquaresHelper(n, mem);
};

function getMinNnumSquaresHelper(n, mem) {
    if(n<=3) 
        return n;
    
    if(mem[n]) 
        return mem[n];
    
    var res = n;
    
    for(var i=1; i<=n; i++) {
        var sqr = i*i;
        
        if(sqr<=n)
            res = Math.min(res, 1+getMinNnumSquaresHelper(n-sqr, mem));
        else
            break;
    }
    
    mem[n] = res;
    
    return mem[n];
}
