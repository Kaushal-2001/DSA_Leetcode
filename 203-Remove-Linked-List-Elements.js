/**
 * @title 203. Remove Linked List Elements
 * @url https://leetcode.com/problems/remove-linked-list-elements/
 * @topics Linked List, Recursion
 *
 * @description
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 *
 * @constraints
 * - The number of nodes in the list is in the range [0, 10^4].
 * - 1 <= Node.val <= 50
 * - 0 <= val <= 50
 *
 * @example
 * Input: head = [1,2,6,3,4,5,6], val = 6
 * Output: [1,2,3,4,5]
 *
 * @example
 * Input: head = [], val = 1
 * Output: []
 *
 * @example
 * Input: head = [7,7,7,7], val = 7
 * Output: []
 */

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
var removeElements = function (head, val) {
  while (head !== null && head.val === val) {
    head = head.next;
  }
  if (head === null) {
    return head;
  }
  let prev = head;
  while (prev.next != null) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return head;
};
