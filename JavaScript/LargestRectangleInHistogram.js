/*****

Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, calculate the area of largest rectangle in the histogram.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [2,1,5,6,2,3]
Output: 10

Explanation:

Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

   6
  5*
  **
  ** 3
2 **2*
*1****
******

215623

   6
  5#
  ##
  ## 3
2 ##2*
*1##**
**##**
The largest rectangle is shown in the #, which has area = 10.

*****/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var stack = [];
    var maxArea = 0;
    var currentArea = 0;
    var i = 0;
    
    while(i < heights.length) {
        if(stack.length == 0 || heights[stack[stack.length-1]] < heights[i]) {
            stack.push(i++);
        } else {
            var popIndex = stack.pop();
            
            currentArea = heights[popIndex]*(stack.length == 0 ? i: (i-stack[stack.length-1]-1))
            
            if(currentArea > maxArea) {
                maxArea = currentArea;
            }
        }
    }
    
    while(stack.length != 0) {
        var popIndex = stack.pop();

        currentArea = heights[popIndex]*(stack.length == 0 ? i: (i-stack[stack.length-1]-1))

        if(currentArea > maxArea) {
            maxArea = currentArea;
        }        
    }
    
    return maxArea;
};
