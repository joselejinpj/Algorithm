/*****

Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. 
All of the tickets belong to a traveller who departs from JFK. Thus, the itinerary must begin with JFK.

If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. 
For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]

Test Case 2:

Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Based on lexical order ATL taken first before SFO.

*****/

public class Solution{
	HashMap<String, PriorityQueue<String>> map = new HashMap<String, PriorityQueue<String>>();
	LinkedList<String> result = new LinkedList<String>();
 
	public List<String> findItinerary(List<List<String>> tickets) {
		for (List<String> ticket : tickets) {
			if (!map.containsKey(ticket.get(0))) {
				PriorityQueue<String> q = new PriorityQueue<String>();
                
				map.put(ticket.get(0), q);
			}
            
			map.get(ticket.get(0)).offer(ticket.get(1));
		}
 
		dfs("JFK");
        
		return result;
	}
 
	public void dfs(String s) {
		PriorityQueue<String> q = map.get(s);
 
		while (q != null && !q.isEmpty()) {
			dfs(q.poll());
		}
 
		result.addFirst(s);
	}
}
