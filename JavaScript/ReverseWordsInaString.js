/*****

Given an input string, reverse the string word by word.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: "the sky is blue"
Output: "blue is sky the"

Test Case 2:

Input: " a good   example "
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string. Also leading or trailing spaces needs to be removed.

*****/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var i=0;
    var sArr = s.split("");
    
    for(var j=0; j<s.length; j++){
        if(sArr[j] == ' '){
            reverse(sArr, i, j-1);        
            i=j+1;
        }
    }
 
    reverse(sArr, i, s.length-1);
    reverse(sArr, 0, s.length-1); 
    
    return sArr.join("").replace(/\s+/g,' ').trim();
};

 
function reverse(s, i, j) {
    while(i<j){
        var temp = s[i];
        
        s[i]=s[j];
        s[j]=temp;
        
        i++;
        j--;
    }
}
