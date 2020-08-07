/*****

Suppose you have n versions [1, 2, ..., n] for a software and you want to find out the first bad one, which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

-----------------
Sample Test Cases
-----------------
Test Case 1:
Input: 

Given n = 5, and version = 4 is the first bad version.

Output:
4 is the first bad version. 

*****/

public class Solution extends VersionControl {
  public int firstBadVersion(int n) {
      int left = 1;
      int right = n;
      
      while (left < right) {
          int mid = left + (right - left) / 2;
          
          if (isBadVersion(mid)) {
              right = mid;
          } else {
              left = mid + 1;
          }
      }
      
      return left;
  }
}
