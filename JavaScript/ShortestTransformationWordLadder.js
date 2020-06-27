/*****

Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord.

Only one letter can be changed at a time.
Each transformed word must exist in the word list.

Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
Assume no duplicates in the word list.
Assume beginWord and endWord are non-empty and are not the same.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

Test Case 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

*****/

var WordNode = function(word, numSteps) {
    this.word = word? word: "";
    this.numSteps = numSteps? numSteps:0; 
}

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    var queue = [];
    
    queue.push(new WordNode(beginWord, 1));
  
    while(queue.length !=0) {
        var top = queue.shift();
        var word = top.word;

        if(word == endWord){
            return top.numSteps;
        }

        var arr = word.split("");
        
        for(var i=0; i<arr.length; i++) {
            for(var c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
                var char = String.fromCharCode(c);
                var temp = arr[i];
                
                if(arr[i] != char){
                    arr[i] = char; // Try with this character
                }

                var newWord = arr.join("");
                
                if(wordList.indexOf(newWord) != -1){
                    queue.push(new WordNode(newWord, top.numSteps+1));
                    wordList.splice(wordList.indexOf(newWord), 1);
                }

                arr[i] = temp;
            }
        }
    }
 
    return 0;
};
