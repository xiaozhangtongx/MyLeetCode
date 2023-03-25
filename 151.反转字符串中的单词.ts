/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
function reverseWords(s: string): string {
    // 首先先切割字符串
    let arr = s.trim().split(' ')
    let temp = arr.filter(item => item !== '')
    temp.reverse()
    return temp.join(' ')

};
// @lc code=end

