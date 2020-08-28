/*****

Given a set of intervals, for each of the interval i, check if there exists an interval j whose start point is bigger than or equal to the end point of the interval i, which can be called that j is on the "right" of i.
For any interval i, you need to store the minimum interval j's index, which means that the interval j has the minimum start point to build the right relationship for interval i. If the interval j doesn't exist, store -1 for the interval i. Return the stored value of each interval as an array.


-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [ [3,4], [2,3], [1,2] ]
Output: [-1, 0, 1]

Explanation: 
There is no satisfied "right" interval for [3,4], so it is -1.
For [2,3], the interval [3,4] has minimum-"right" start point;
For [1,2], the interval [2,3] has minimum-"right" start point.

Test Case 2:

Input: [ [1,4], [2,3], [3,4] ]
Output: [-1, 2, -1]

Explanation: 
There is no satisfied "right" interval for [1,4] and [3,4], so it is -1.
For [2,3], the interval [3,4] has minimum-"right" start point.

*****/

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    var n = intervals.length;

    if (intervals == null || n == 0) 
        return [];

    var res = new Array(n);
    var startIntervals = new Array(n);

    for (var i = 0; i < n; ++i) {
        startIntervals[i] = {start: intervals[i][0], index:i};
    }

    startIntervals.sort(function(a,b){return a.start - b.start;});

    for (var i = 0; i < n; i++) {
        var key = intervals[i][1];

        // Binary search
        var l = 0;
        var r = n - 1;
        var right = -1;

        while (l <= r) {
            var m = l + Math.trunc((r - l)/2);

            if (startIntervals[m].start == key) {
                right = startIntervals[m].index;
                break;
            } else if (startIntervals[m].start < key) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        if ((right == -1) && (l < n) && (startIntervals[l].start > key)) 
            right = startIntervals[l].index;

        res[i] = right;
    }

    return res;    
};
