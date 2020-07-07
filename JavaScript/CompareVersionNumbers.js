/*****

Compare two version numbers version1 and version2.
If version1 > version2 return 1; if version1 < version2 return -1;otherwise return 0.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: version1 = "7.5.2.4", version2 = "7.5.3"
Output: -1

Test Case 2:

Input: version1 = "1.0.1", version2 = "1"
Output: 1
 
*****/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var arr1 = version1.split(".");
    var arr2 = version2.split(".");
 
    var i=0;
    
    while(i<arr1.length || i<arr2.length){
        if(i<arr1.length && i<arr2.length){
            if(Number(arr1[i]) < Number(arr2[i]))
                return -1;
            else if(Number(arr1[i]) > Number(arr2[i]))
                return 1;
        } else if(i<arr1.length){
            if(Number(arr1[i]) != 0)
                return 1;
        } else if(i<arr2.length){
           if(Number(arr2[i]) != 0)
                return -1;
        }
 
        i++;
    }
 
    return 0;    
};
 
