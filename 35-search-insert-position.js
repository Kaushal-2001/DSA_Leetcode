/**
 * @title 35. Search Insert Position
 * @url https://leetcode.com/problems/search-insert-position/
 * @topics Array, Binary Search
 *
 * @description
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * @constraints
 * - 1 <= nums.length <= 10^4
 * - -10^4 <= nums[i] <= 10^4
 * - nums contains distinct values sorted in ascending order.
 * - -10^4 <= target <= 10^4
 *
 * @example
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 *
 * @example
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 *
 * @example
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 */

var searchInsert = function (nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] === target || nums[i] > target) {
            return i
        }
        if (target > nums[nums.length - 1]) {
            return nums.length
        }
    }
}