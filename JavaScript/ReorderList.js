/*****

Given a singly linked list L: L0→L1→…→Ln-1→Ln, reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: 1->2->3->4
Output: 1->4->2->3

Test Case 2:

Input: 1->2->3->4->5
Output: 1->5->2->4->3

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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (head != null && head.next != null) {
        var slow = head;
        var fast = head;

        // Fast and Slow pointer method to break the link to two parts.
        while (fast != null && fast.next != null && fast.next.next!= null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        var second = slow.next;
        slow.next = null;

        // Reverse second part
        second = reverseList(second);

        var p1 = head;
        var p2 = second;

        // Merge two lists
        while (p2 != null) {
            var temp1 = p1.next;
            var temp2 = p2.next;

            p1.next = p2;
            p2.next = temp1;		

            p1 = temp1;
            p2 = temp2;
        }
    }    
};

function reverseList(head) {
    if (head == null || head.next == null) 
        return head;

    var pre = head;
    var curr = head.next;

    while (curr != null) {
        var temp = curr.next;
        
        curr.next = pre;
        pre = curr;
        curr = temp;
    }

    head.next = null;

    return pre;
}
