/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
    let strArr: number[] = new Array(26).fill(0)
    let base: number = "a".charCodeAt(0);
    for (const s of magazine) {
        strArr[s.charCodeAt(0) - base]++;
    }
    for (const s of ransomNote) {
        const index = s.charCodeAt(0) - base;
        if (!strArr[index]) return false;
        strArr[index]--;
    }
    return true;
};
// @lc code=end

