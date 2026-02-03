/**
 * @title 136. Single Number
 * @url https://leetcode.com/problems/single-number/
 * @topics Array, Bit Manipulation
 * 
 * @description
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * 
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * 
 * @constraints
 * - 1 <= nums.length <= 3 * 10^4
 * - -3 * 10^4 <= nums[i] <= 3 * 10^4
 * - Each element in the array appears twice except for one element which appears only once.
 * 
 * @example
 * Input: nums = [2,2,1]
 * Output: 1
 * 
 * @example
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 * 
 * @example
 * Input: nums = [1]
 * Output: 1
 */

var singleNumber = function (nums) {
  let sn = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sn = sn ^ nums[i]
  }
  return sn
};



