/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  ways = [1, 2];

  for (let i = 2; i < n; i++) {
    ways.push(ways[ways.length - 1] + ways[ways.length - 1]);
  }

  return ways[ways.length - 1];
};
