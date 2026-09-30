/**
 * @title 169. Majority Element
 * @url https://leetcode.com/problems/majority-element/
 * @topics Array, Hash Table, Divide and Conquer, Sorting, Counting, Boyer-Moore Majority Vote Algorithm
 *
 * @description
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 *
 * Follow-up: Could you solve the problem in linear time and in O(1) space?
 *
 * @constraints
 * - n == nums.length
 * - 1 <= n <= 5 * 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - The input is generated such that a majority element will exist in the array.
 *
 * @example
 * Input: nums = [3,2,3]
 * Output: 3
 *
 * @example
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 */

var sortArray = function (arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = sortArray(arr.slice(0, mid))
    let right = sortArray(arr.slice(mid))
    return merge(left, right)
}
var merge = function (left, right) {
    let res = []
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] >= right[j]) {
            res.push(right[j])
            j++
        }
        else {
            res.push(left[i])
            i++
        }
    }
    return [...res, ...left.slice(i), ...right.slice(j)]
} 