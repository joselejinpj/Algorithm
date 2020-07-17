/*****

Given a non-empty array of integers, return the k most frequent elements.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Test Case 1:

Input: nums = [1], k = 1
Output: [1]

*****/

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        if (k == nums.length) {
            return nums;
        }
        
        Map<Integer, Integer> count = new HashMap();
        for (int n: nums) {
          count.put(n, count.getOrDefault(n, 0) + 1);
        }

        // Min heap
        Queue<Integer> heap = new PriorityQueue<>(
            (n1, n2) -> count.get(n1) - count.get(n2));

        for (int n: count.keySet()) {
            heap.add(n);
            
            if (heap.size() > k) 
                heap.poll();    
        }

        int[] top = new int[k];
        
        for(int i = k - 1; i >= 0; --i)
            top[i] = heap.poll();
        
        return top;
    }
}
 
