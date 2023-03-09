/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let [sizeA, sizeB] = [0, 0]
    let curA: ListNode | null = headA,
        curB: ListNode | null = headB;

    while (curA) {
        sizeA++;
        curA = curA.next;
    }
    while (curB) {
        sizeB++;
        curB = curB.next;
    }
    curA = headA;
    curB = headB;
    if (sizeA < sizeB) {
        [sizeA, sizeB] = [sizeB, sizeA];
        [curA, curB] = [curB, curA];
    }
    let gap = sizeA - sizeB;
    while (gap-- && curA) {
        curA = curA.next;
    }
    while (curA && curB) {
        if (curA === curB) {
            return curA;
        }
        curA = curA.next;
        curB = curB.next;
    }
    return null;
};
// @lc code=end

