/*
 * @lc app=leetcode.cn id=454 lang=typescript
 *
 * [454] 四数相加 II
 */

// @lc code=start
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    let map: Map<number, number> = new Map()
    let count: number = 0

    // 统计nums1和nums2数组元素之和，和出现的次数，放到map中
    for (let i of nums1) {
        for (let j of nums2) {
            let sum = i + j
            map.set(sum, (map.get(sum) || 0) + 1)
        }
    }

    // 找到如果 0-(c+d) 在map中出现过的话，就把map中key对应的value也就是出现次数统计出来
    for (const c of nums3) {
        for (const d of nums4) {
            const sum = c + d;
            count += (map.get(0 - sum) || 0)
        }
    }

    return count
};
// @lc code=end

