/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
    // 计算val各位的平方和
    function getSum(val: number): number {
        return String(val).split("").reduce((pre, cur) => (pre + Number(cur) * Number(cur)), 0);
    }

    let storeSet: Set<number> = new Set();
    while (n !== 1 && !storeSet.has(n)) {
        storeSet.add(n);
        n = getSum(n);
    }
    return n === 1;
};
// @lc code=end

