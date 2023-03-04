/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {

    /**
     * 方法1：暴力破解
     */
    // return nums.map((num) => num ** 2).sort((a, b) => a - b);

    /**
     * 方法2：双指针
     */
    let ans: number[] = []
    let [left, right] = [0, nums.length - 1];

    while (left <= right) {
        if (Math.abs(nums[left]) > nums[right]) {
            ans.unshift(nums[left] ** 2);
            left++
        } else {
            ans.unshift(nums[right] ** 2);
            right--
        }
    }

    return ans;
}
// @lc code=end
