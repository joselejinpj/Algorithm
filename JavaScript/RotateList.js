/*****

Given a linked list, rotate the list to the right by k places, where k is non-negative.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL

Test Case 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
  
*****/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    var current = head; 
    var len = 0;
    
    if(head == null || k == 0)
        return head;
    
    // Go till the end
    while(current.next != null) {
        current = current.next; 
        len++;
    }
  
    current.next = head; // Make it circular
    current = head; 
  
    // In linked list go to the len-k position
    for(var i = 1; i <= len-(k%len); i++) 
        current = current.next; 
  
    // Update the head_ref and last element pointer to NULL 
    head = current.next; 
    current.next = null;   
    
    return head;
};
