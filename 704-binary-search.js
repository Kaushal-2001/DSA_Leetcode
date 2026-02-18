/**
 * @title 704. Binary Search
 * @url https://leetcode.com/problems/binary-search/
 * @topics Array, Binary Search
 *
 * @description
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * @constraints
 * - 1 <= nums.length <= 10^4
 * - -10^4 <= nums[i], target <= 10^4
 * - All the integers in nums are unique.
 * - nums is sorted in ascending order.
 *
 * @example
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 *
 * @example
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1
    while (r >= l) {
        let m = Math.floor((l + r) / 2)
        if (nums[m] === target) {
            return m
        }
        else if (nums[m] < target) {
            l = m + 1
        }
        else {
            r = m - 1;
        }
    }
    return -1
};