/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
    let left: number = 0
    let right: number = 1

    let arr: any = [[left, nums[left]]]

    // 处理特殊情况
    if (k === 1) {
        return nums
    }

    const compare = (right: number): void => {
        // 如果比较大则从头部插入
        if (arr.length < 2) {
            // 判断和头部的大小
            if (nums[right] >= arr[0][1]) {
                arr.unshift([right, nums[right]])
            } else {
                arr.push([right, nums[right]])
            }
        } else {
            if (nums[right] >= arr[0][1]) {
                arr.unshift([right, nums[right]])
                arr.pop()
            } else {
                // 和2进行比较
                if (nums[right] >= arr[1][1]) {
                    arr[1] = [right, nums[right]]
                }
            }

        }
    }

    const comparea = (left: number, right: number) => {
        // 首先判断arr里面的值是否过期
        for (let i = 0; i < arr.length; i++) {
            console.log('i0', i, left)
            // 如果过期就删掉
            if (arr[i][0] - left < 0) {
                arr.splice(i, 1)
                break
            }
        }
        compare(right)
    }

    // 快指针先走
    while (right < k) {
        if (!nums[right]) {
            return arr[0][1]
        }
        compare(right)
        right++
    }

    let res: number[] = [arr[0][1]]

    while (right < nums.length) {
        // 如果新进入的值大于最大值则进入
        left++
        comparea(left, right)
        res.push(arr[0][1])
        right++
    }

    return res
};
// @lc code=end

