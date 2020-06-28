/*****

Given a linked list, determine if it has a cycle in it.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list in which tail connects to the second node.

Test Case 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list in which tail connects to the first node.

*****/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean checkForLinkedListCycle(ListNode head) {
        if (head == null || head.next == null)
            return false;

        ListNode slow = head;
        ListNode fast = head.next;
        
        while (slow != fast) {
            if (fast == null || fast.next == null)
                return false;
            
            slow = slow.next;
            fast = fast.next.next;
        }
         
        return true;        
    }
}
