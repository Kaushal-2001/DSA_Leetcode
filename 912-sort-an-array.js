/**
 * @title 912. Sort an Array
 * @url https://leetcode.com/problems/sort-an-array/
 * @topics Array, Divide and Conquer, Sorting, Heap, Merge Sort, Bucket Sort, Counting Sort, Radix Sort
 *
 * @description
 * Given an array of integers nums, sort the array in ascending order and return it.
 *
 * You must solve the problem without using any built-in functions in O(nlog(n)) time complexity
 * and with the smallest space complexity possible.
 *
 * @constraints
 * - 1 <= nums.length <= 5 * 10^4
 * - -5 * 10^4 <= nums[i] <= 5 * 10^4
 *
 * @example
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 * Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
 *
 * @example
 * Input: nums = [5,1,1,2,0,0]
 * Output: [0,0,1,1,2,5]
 * Explanation: Note that the values of nums are not necessairly unique.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
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
