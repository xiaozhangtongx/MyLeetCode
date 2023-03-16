/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let map: Map<number, number> = new Map()

    for (let i = 0; i < nums.length; i++) {
        let index = map.get(target - nums[i])
        if (index !== undefined) {
            return [i, index]
        }
        map.set(nums[i], i)
    }

    return []
};
// @lc code=end

