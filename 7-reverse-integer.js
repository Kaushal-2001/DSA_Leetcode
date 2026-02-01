/**
 * @title 7. Reverse Integer
 * @url https://leetcode.com/problems/reverse-integer/
 * @topics Math
 * 
 * @description
 * Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit integer 
 * range [-2^31, 2^31 - 1], then return 0.
 * 
 * Assume the environment does not allow you to store 64-bit integers 
 * (signed or unsigned).
 * 
 * @constraints
 * - -2^31 <= x <= 2^31 - 1
 * 
 * @example
 * Input: x = 123
 * Output: 321
 * 
 * @example
 * Input: x = -123
 * Output: -321
 * 
 * @example
 * Input: x = 120
 * Output: 21
 */


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;
  let neg = false;
  let ans = 0;
  if (x < 0) {
    x = Math.abs(x);
    neg = true;
  }
  while (x >= 1) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }
  if (neg == true) {
    ans = -rev;
  } else {
    ans = rev;
  }
  if (rev < -(2 ** 31) || rev > 2 ** 31 - 1) {
    return 0;
  } else {
    return ans;
  }
};