/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    let slowIndex: number = 0

    for (let fastIndex: number = 0; fastIndex < nums.length; fastIndex++) {
        if (nums[fastIndex] !== val) {
            nums[slowIndex] = nums[fastIndex]
            slowIndex++
        }
    }

    return slowIndex
};
// @lc code=end

