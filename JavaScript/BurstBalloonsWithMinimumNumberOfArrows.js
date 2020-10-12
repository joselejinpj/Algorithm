/*****

There are some balloons spread in two-dimensional space. For each balloon, provided input is the start and end coordinates of the horizontal diameter.
Since it's horizontal we can ignore y-coordinates and the x-coordinates of start and end of the diameter suffice. The start is always smaller than the end.
Given an array points where points[i] = [xstart, xend] return the minimum number of arrows that must be shot to burst all balloons.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: One way is to shoot one arrow for example at x = 6 (bursting the balloons [2,8] and [1,6]) and another arrow at x = 11 (bursting the other two balloons).

Test Case 2:

Input: points = [[1,2],[2,3],[3,4],[4,5]]
Output: 2

*****/

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    var n = points.length;
    
    if(n == 0)
        return 0;
  
    points.sort((a,b)=>a[1]-b[1]); // Sort according to end point
  
    var arrowPos = points[0][1];
    var arrowCount = 1;
    
    for(var i=1;i<points.length;i++){
        if(arrowPos>=points[i][0])
            continue;
      
        arrowCount++;
        arrowPos = points[i][1];
    }
  
    return arrowCount;
};
 
