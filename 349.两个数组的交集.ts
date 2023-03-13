/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
    // 1.创建set
    const nums1Set: Set<number> = new Set(nums1);
    // 2. 创建结果set
    const resSet: Set<number> = new Set()

    // 3. 处理结果
    for (let i of nums2) {
        if (nums1Set.has(i)) {
            resSet.add(i)
        }
    }

    return [...resSet]

};
// @lc code=end

