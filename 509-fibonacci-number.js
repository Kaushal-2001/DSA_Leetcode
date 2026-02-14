/**
 * @title 509. Fibonacci Number
 * @url https://leetcode.com/problems/fibonacci-number/
 * @topics Math, Dynamic Programming, Recursion, Memoization
 *
 * @description
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 * Given n, calculate F(n).
 *
 * @constraints
 * - 0 <= n <= 30
 *
 * @example
 * Input: n = 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 *
 * @example
 * Input: n = 3
 * Output: 2
 * Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 *
 * @example
 * Input: n = 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 */

var fib = function (n) {
    if (n <= 1) {
        return n
    }

    else {
        return fib(n - 1) + fib(n - 2)
    }
};

console.log(fib(20))