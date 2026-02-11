/**
 * @title 66. Plus One
 * @url https://leetcode.com/problems/plus-one/
 * @topics Array, Math
 *
 * @description
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 *
 * Increment the large integer by one and return the resulting array of digits.
 *
 * @constraints
 * - 1 <= digits.length <= 100
 * - 0 <= digits[i] <= 9
 * - digits does not contain any leading 0's.
 *
 * @example
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * Incrementing by one gives 123 + 1 = 124.
 * Thus, the result should be [1,2,4].
 *
 * @example
 * Input: digits = [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * Incrementing by one gives 4321 + 1 = 4322.
 * Thus, the result should be [4,3,2,2].
 *
 * @example
 * Input: digits = [9]
 * Output: [1,0]
 * Explanation: The array represents the integer 9.
 * Incrementing by one gives 9 + 1 = 10.
 * Thus, the result should be [1,0].
 */

var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (i == 0 && digits[0] == 9) {
            digits[0] = 0;
            digits.splice(0, 0, 1)
            break;
        }
        if (digits[i] == 9) {
            digits[i] = 0
            console.log(digits)
        }
        else {
            digits[i] = digits[i] + 1
            break;
        }
    }
    return digits
};
console.log(plusOne([9]))