/**
 * @title 9. Palindrome Number
 * @url https://leetcode.com/problems/palindrome-number/
 * @topics Math
 * 
 * @description
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
 * @constraints
 * - -2^31 <= x <= 2^31 - 1
 * 
 * @example
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 * 
 * @example
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it 
 *              becomes 121-. Therefore it is not a palindrome.
 * 
 * @example
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 * 
 * @follow-up
 * Could you solve it without converting the integer to a string?
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   if (x < 0) {
    return false}
  let rev = 0;
  let org = x;
  
  while (x >= 1) {
    let rem = x % 10
    rev = (rev * 10) + rem
    x = Math.floor(x / 10);
  }
  if (rev === org) {
    return true
  }
  else {
    return false
  }
  
};