/*****

Sort a linked list using insertion sort.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: -1->5->3->4->0
Output: -1->0->3->4->5

*****/

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
	public ListNode insertionSortList(ListNode head) {
		if (head == null || head.next == null)
			return head;
 
		ListNode resultHead = new ListNode(head.val);
		ListNode pointer = head.next;
 
		while (pointer != null) {
			ListNode innerPointer = resultHead;
			ListNode next = pointer.next;
 
			if (pointer.val <= resultHead.val) {
				ListNode oldHead = resultHead;
				resultHead = pointer;
				resultHead.next = oldHead;
			} else {
				while (innerPointer.next != null) {
 
					if (pointer.val > innerPointer.val && pointer.val <= innerPointer.next.val) {
						ListNode oldNext = innerPointer.next;
						innerPointer.next = pointer;
						pointer.next = oldNext;
					}
 
					innerPointer = innerPointer.next;
				}
 
				if (innerPointer.next == null && pointer.val > innerPointer.val) {
					innerPointer.next = pointer;
					pointer.next = null;
				}
			}
 
			pointer = next;
		}
 
		return resultHead;
	}
}
