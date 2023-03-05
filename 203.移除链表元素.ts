/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
    const data = new ListNode(0, head);
    let pre = data, cur = data.next;
    while (cur) {
        if (cur.val === val) {
            pre.next = cur.next
        } else {
            pre = cur;
        }
        cur = cur.next;
    }
    return data.next;
};
// @lc code=end

