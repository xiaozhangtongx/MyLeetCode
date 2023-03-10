/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

function detectCycle(head: ListNode | null): ListNode | null {
    // 可以使用set来判断
    const visited: Set<ListNode> | null = new Set()

    while (head !== null) {
        if (visited.has(head)) {
            return head
        }
        visited.add(head)
        head = head.next
    }

    return null
};
// @lc code=end

