/*****

Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.
The input string may contain letters also other than the parentheses ( and ).

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: "()())()"
Output: ["()()()", "(())()"]

Test Case 2:

Input: "(a)())()"
Output: ["(a)()()", "(a())()"]

*****/

class Solution {
    static boolean isParenthesis(char c) { 
        return ((c == '(') || (c == ')')); 
    } 

    static boolean isValidString(String str) { 
        int cnt = 0; 
        
        for (int i = 0; i < str.length(); i++) { 
            if (str.charAt(i) == '(') 
                cnt++; 
            else if (str.charAt(i) == ')') 
                cnt--; 
            
            if (cnt < 0) 
                return false; 
        } 
        
        return (cnt == 0); 
    }     

    public List<String> removeInvalidParentheses(String s) {
        List<String> result = new ArrayList<String>();
        
        if (s.isEmpty()) {
            result.add("");
            
            return result; 
        }

        HashSet<String> visit = new HashSet<String>(); 

        Queue<String> queue = new LinkedList<>(); // BFS queue
        String temp; 
        boolean level = false; 


        queue.add(s); 
        visit.add(s); 

        while (!queue.isEmpty()) { 
            s = queue.peek(); 
            queue.remove(); 
            
            if (isValidString(s)) { 
                result.add(s); // Found one
                level = true; 
            } 
            
            if (level) 
                continue; 
            
            for (int i = 0; i < s.length(); i++) { 
                if (!isParenthesis(s.charAt(i))) 
                    continue; 

                temp = s.substring(0, i) + s.substring(i + 1); // Remove parenthesis

                if (!visit.contains(temp)) { 
                    queue.add(temp); 
                    visit.add(temp); 
                } 
            } 
        }     
        
        return result;
    }
}
