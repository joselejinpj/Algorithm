/*****

Given a string s, remove duplicate letters so that every letter appears once and only once. 
You must make sure your result is the smallest in lexicographical order among all possible results.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: s = "bcabc"
Output: "abc"

Test Case 2:

Input: s = "cbacdcbc"
Output: "acdb"

*****/

class Solution {
public:
    string removeDuplicateLetters(string s) {
        int last_index[26]={0};
        
        for(int i=0;i<s.size();i++)
            last_index[s[i]-'a']=i;

        int visited[26]={0};
        stack<int> stack;
        string ans;

        for(int i=0;i<s.size();i++) {
            if(stack.empty()) {
                stack.push(s[i]);
                visited[s[i]-'a']=1;
            } else {
                while(!stack.empty()&&!visited[s[i]-'a']&&stack.top()>s[i]&&last_index[stack.top()-'a']>i) {
                    visited[stack.top()-'a']=0;
                    stack.pop();
                }
                
                if(stack.empty()) { 
                    stack.push(s[i]);
                    visited[s[i]-'a']=1;
                } else if(!visited[s[i]-'a']) {
                    stack.push(s[i]);
                    visited[s[i]-'a']=1;
                }
            }    
        }
        
         while(!stack.empty()) {
                ans.push_back(stack.top());
                stack.pop();
        }

        reverse(ans.begin(),ans.end());
        
        return ans;
    }
};
