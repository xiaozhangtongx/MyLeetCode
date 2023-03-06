/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
    const recur = (preNode: ListNode | null, curNode: ListNode | null): ListNode | null => {
        if (curNode === null) return preNode;
        let tempNode: ListNode | null = curNode.next;
        curNode.next = preNode;
        preNode = curNode;
        curNode = tempNode;
        return recur(preNode, curNode);
    }

    return recur(null, head);
};
// @lc code=end

