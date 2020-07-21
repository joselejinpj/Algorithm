/*****

Remove all elements from a linked list of integers that have value val.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5

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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var helper = new ListNode(0, null);
    
    helper.next = head;
    
    var p = helper;
 
    while(p.next != null) {
        if(p.next.val == val) {
            var next = p.next;
            p.next = next.next; 
        } else {
            p = p.next;
        }
    }
 
    return helper.next;    
};
 
