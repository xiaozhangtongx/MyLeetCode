/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    let res: number[][] = [];
    // 1.首先对数组进行排序
    nums.sort((a, b) => a - b)

    // 2.处理一些特殊情况
    if (nums.length < 3 || nums[0] > 0) {
        return res
    }

    // 3.开始循环遍历
    for (let i = 0; i < nums.length - 2; i++) {
        // 如果当前值和前面的值相同，则退出
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        // 保存当前值
        let num: number = nums[i]
        // 开始进行求和，类似于两数之和
        let left: number = i + 1
        let right: number = nums.length - 1
        // 开始循环
        while (left < right) {
            let sum: number = nums[left] + nums[right] + num
            if (sum > 0) {
                right--
            } else if (sum < 0) {
                left++
            } else {
                res.push([nums[i], nums[left], nums[right]])
                // 开始处理相同的值的情况
                while (nums[left] === nums[left + 1]) {
                    left++
                }
                left++
                while (nums[right] === nums[right - 1]) {
                    right--
                }
                right--
            }
        }
    }

    // 4.输出结果
    return res
};
// @lc code=end

