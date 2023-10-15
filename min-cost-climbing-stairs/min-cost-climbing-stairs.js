/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const dp = Array(cost.length + 1).fill(0);
  cost.push(0);

  for (let i = 0; i < cost.length; i++) {
    if (i == 0 || i == 1) {
      dp[i] = cost[i];
    } else {
      dp[i] = Math.min(cost[i] + dp[i - 1], cost[i] + dp[i - 2]);
    }
  }

  return dp[cost.length - 1];
};

const result = minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
console.log(result);
