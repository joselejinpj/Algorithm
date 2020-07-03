/*****

Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Test Case 2:

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.

*****/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head == null || head.next == null) 
        return null; 
  
    var slow = new ListNode();
    var fast = new ListNode();
    
    slow = head;
    fast = head; 
  
    slow = slow.next; 
    fast = fast.next.next; 
  
    while (fast && fast.next) { 
        if (slow == fast) 
            break; 

        slow = slow.next; 
        fast = fast.next.next; 
    } 
  
    // Loop does not exist 
    if (slow != fast) 
        return null; 
  
    // If loop exists. Start slow from head and fast from meeting point. 
    slow = head; 
    
    while (slow != fast) { 
        slow = slow.next; 
        fast = fast.next; 
    } 
  
    return slow;     
};
