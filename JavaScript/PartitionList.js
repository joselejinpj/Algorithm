/*****

Given a linked list and a value x, partition the list such that all nodes less than x come before nodes greater than or equal to x.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: 
head = 1->4->3->2->5->2
x = 3

Output: 1->2->2->4->3->5

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
 * @param {number} x
 * @return {ListNode}
 */
let partition = function(head, x) {
    let before_head = new ListNode(0);
    let before = before_head;
    let after_head = new ListNode(0);
    let after = after_head;

    while(head != null) {
        if (head.val < x) {
            before.next = head;
            before = before.next;
        } else {
            after.next = head;
            after = after.next;
        }

        head = head.next;
    }

    after.next = null;
    before.next = after_head.next;

    return before_head.next;    
};
