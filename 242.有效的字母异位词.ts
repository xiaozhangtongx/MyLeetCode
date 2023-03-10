/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    // 结题思路：使用字符排序判断两个字符是否相等
    let news: string = s.split('').sort().join('');
    let newt: string = t.split('').sort().join('');

    return news === newt ? true : false;
};
// @lc code=end

