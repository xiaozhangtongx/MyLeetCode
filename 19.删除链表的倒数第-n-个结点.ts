/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let newHead: ListNode | null = new ListNode(null, head)
    let slowHead: ListNode | null = newHead
    let fastHead: ListNode | null = newHead

    while (n > 0) {
        fastHead = fastHead.next
        n--
    }

    while (fastHead.next) {
        slowHead = slowHead.next
        fastHead = fastHead.next
    }

    slowHead.next = slowHead.next.next

    return newHead.next

};
// @lc code=end

