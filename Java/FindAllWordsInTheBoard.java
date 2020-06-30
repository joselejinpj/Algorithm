/*****

Given a 2D board and a list of words from the dictionary, find all words in the board.
Each word must be constructed from letters of sequentially adjacent cells which are horizontally or vertically neighboring. 
The same letter cell may not be used more than once in a word.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: 
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]

*****/

class TrieNode{
    public TrieNode[] children = new TrieNode[26];
    public String item = "";
}
 
class Trie{
    public TrieNode root = new TrieNode();
 
    public void insert(String word){
        TrieNode node = root;
        
        for(char c: word.toCharArray()){
            if(node.children[c-'a']==null){
                node.children[c-'a']= new TrieNode();
            }
            
            node = node.children[c-'a'];
        }
        
        node.item = word;
    }
 
    public boolean search(String word){
        TrieNode node = root;
        
        for(char c: word.toCharArray()){
            if(node.children[c-'a']==null)
                return false;
                
            node = node.children[c-'a'];
        }
        
        if(node.item.equals(word)){
            return true;
        }else{
            return false;
        }
    }
 
    public boolean startsWith(String prefix){
        TrieNode node = root;
        
        for(char c: prefix.toCharArray()){
            if(node.children[c-'a']==null)
                return false;
                
            node = node.children[c-'a'];
        }
        
        return true;
    }
}

public class Solution {
    Set<String> result = new HashSet<String>(); 
 
    public List<String> findWords(char[][] board, String[] words) {
        Trie trie = new Trie();

        for(String word: words){
            trie.insert(word);
        }
 
        int m=board.length;
        int n=board[0].length;
 
        boolean[][] visited = new boolean[m][n];
 
        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
               dfs(board, visited, "", i, j, trie);
            }
        }
 
        return new ArrayList<String>(result);
    }
 
    public void dfs(char[][] board, boolean[][] visited, String str, int i, int j, Trie trie){
        int m=board.length;
        int n=board[0].length;
 
        if(i<0 || j<0||i>=m||j>=n){
            return;
        }
 
        if(visited[i][j])
            return;
 
        str = str + board[i][j];
 
        if(!trie.startsWith(str))
            return;
 
        if(trie.search(str))
            result.add(str);
 
        visited[i][j]=true;
        
        dfs(board, visited, str, i-1, j, trie);
        dfs(board, visited, str, i+1, j, trie);
        dfs(board, visited, str, i, j-1, trie);
        dfs(board, visited, str, i, j+1, trie);
        
        visited[i][j]=false;
    }
}
