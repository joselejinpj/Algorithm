/*****

Implement a Stream Checker class as follows:
1)StreamChecker(words): Constructor, init the data structure with the given words.
2) query(letter): returns true if and only if for some k >= 1, the last k characters queried (in order from oldest to newest, including this letter just queried) spell one of the words in the given list.

-----------------
Sample Test Cases
-----------------

StreamChecker streamChecker = new StreamChecker(["cd","f","kl"]); // init the dictionary.

streamChecker.query('a'); // return false
streamChecker.query('b'); // return false
streamChecker.query('c'); // return false
streamChecker.query('d'); // return true, because 'cd' is in the wordlist
streamChecker.query('e'); // return false
streamChecker.query('f'); // return true, because 'f' is in the wordlist
streamChecker.query('g'); // return false
streamChecker.query('h'); // return false
streamChecker.query('i'); // return false
streamChecker.query('j'); // return false
streamChecker.query('k'); // return false
streamChecker.query('l'); // return true, because 'kl' is in the wordlist

*****/

class StreamChecker {
    class Node{
        Node[] children;
        boolean endOfWord;
        
        public Node() {
            children = new Node[26];
            endOfWord = false;
        }
    }

    Node root;
    StringBuilder sb;

    private void insert(String word) {
        Node cur = root;
        
        for(int i = word.length() - 1; i >= 0; i--) {
            char ch = word.charAt(i);
            Node next = cur.children[ch - 'a'];
        
            if(next == null)
                cur.children[ch - 'a'] = next = new Node();
            
            cur = next;
        }
        
        cur.endOfWord = true;
    }

    public StreamChecker(String[] words) {
        root = new Node();
        sb = new StringBuilder();
        
        for(String word : words)
            insert(word);
    }

    public boolean query(char letter) {
        sb.append(letter);
        Node cur = root;
        
        for(int i = sb.length() - 1; i >= 0; i--) {
            char ch = sb.charAt(i);
            
            if(cur.children[ch - 'a'] == null)
                return false;
            
            cur = cur.children[ch - 'a'];
            
            if(cur.endOfWord) 
                return true;
        }

        return false;
    }
}
 