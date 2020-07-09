/*****

Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.
If possible, output any possible result.  If not possible, return the empty string.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: S = "aab"
Output: "aba"

Test Case 2:
Input: S = "aaab"
Output: ""

*****/

class Solution {
    public String reorganizeString(String str) {
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();

        for(int i=0; i<str.length(); i++) {
            char c = str.charAt(i);
        
            if(map.containsKey(c))
                map.put(c, map.get(c)+1);
            else
                map.put(c, 1);
        }

        // Sort by count
        PriorityQueue<Character> queue = new PriorityQueue<Character>(new Comparator<Character>(){
            public int compare(Character c1, Character c2){
                if(map.get(c2).intValue()!=map.get(c1).intValue())
                    return map.get(c2)-map.get(c1);
                else
                    return c1.compareTo(c2);
            }
        });

        for(char c: map.keySet())
            queue.offer(c);

        StringBuilder sb = new StringBuilder();
        int len = str.length();

        while(!queue.isEmpty()){
            int cnt = Math.min(2, len); // Keep packing 2
            ArrayList<Character> temp = new ArrayList<Character>();

            for(int i=0; i<cnt; i++){
                if(queue.isEmpty())
                    return "";

                char c = queue.poll();
                sb.append(String.valueOf(c));

                map.put(c, map.get(c)-1);

                if(map.get(c)>0){
                    temp.add(c);
                }

                len--;
            }

            for(char c: temp)
                queue.offer(c);
        }

        return sb.toString();
    }    
}
