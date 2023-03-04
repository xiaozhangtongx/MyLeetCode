/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
    let [left, right] = [0, 0];
    let [res, sum] = [nums.length + 1, 0]

    while (right < nums.length) {
        sum += nums[right]
        if (sum >= target) {
            while (sum - nums[left] >= target) {
                sum -= nums[left++]
            }
            res = Math.min(res, right - left + 1)
        }
        right++
    }

    return res === nums.length + 1 ? 0 : res
};
// @lc code=end

