/**
 * @title 231. Power of Two
 * @url https://leetcode.com/problems/power-of-two/
 * @topics Math, Bit Manipulation, Recursion
 *
 * @description
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 *
 * An integer n is a power of two, if there exists an integer x such that n == 2^x.
 *
 * @constraints
 * - -2^31 <= n <= 2^31 - 1
 *
 * @example
 * Input: n = 1
 * Output: true
 * Explanation: 2^0 = 1
 *
 * @example
 * Input: n = 16
 * Output: true
 * Explanation: 2^4 = 16
 *
 * @example
 * Input: n = 3
 * Output: false
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n > 1 && n % 2 != 0) {
        return false
    }
    if (n <= 0) {
        return false
    }
    else if (n == 1) {
        return true
    }
    else {
        return isPowerOfTwo(n / 2)
    }
};
