/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        //init reqs
        let dummy = new ListNode()
        dummy.next = head;
        let left = dummy, right = head;
        // search for targeted index
        while(right && n > 0){
            right = right.next;
            n--;
        }
        //move until right reaches end of list
        while(right){
            left = left.next
            right = right.next
        }

        //reassign pointer
        left.next = left.next.next;
        return dummy.next;
    }
}
