/*****

Given a linked list, swap every two adjacent nodes and return its head.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: 1->2->3->4
Output: 2->1->4->3.

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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head==null || head.next==null)
        return head;
 
    var h = new ListNode(0);
    
    h.next = head;
 
    var p1 = head;
    var p2 = head.next;
 
    var pre = h;
    
    while(p1!=null && p2!=null){
        pre.next = p2;
 
        var t = p2.next;
        
        p2.next = p1;
        pre = p1;
        p1.next = t;
        p1 = p1.next;
 
        if(t!=null)
            p2 = t.next;
    }
 
    return h.next;    
};
 
