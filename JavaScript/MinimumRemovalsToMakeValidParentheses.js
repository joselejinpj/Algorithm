/*****

Given a string s of '(' , ')' and lowercase English characters, remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:
It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"

Test Case 2:

Input: s = "(a(b(c)d)"
Output: "a(b(c)d)"

*****/

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    var strArr = [];
	var open = 0;
	var result = [];
	
	for(var i=0; i<s.length; i++) {
		if(s.charAt(i) == '(')
			open++;
		else if(s.charAt(i) == ')') {
			if(open == 0)
				continue;
			
			open --;
		}
		
		strArr.push(s.charAt(i));
	}

	for(i=strArr.length-1; i>=0; i--) {
		if(strArr[i] == '(' && open-- >0)
			continue;
			
		result.push(strArr[i]);
	}
	
	return result.reverse().join("");
};
