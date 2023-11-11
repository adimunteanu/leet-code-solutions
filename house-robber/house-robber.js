/*
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length < 2) {
    return nums[0];
  }

  let profits = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < nums.length; i++) {
    profits = [...profits, Math.max(nums[i] + profits[i - 2], profits[i - 1])]
  }

  return profits.pop();
};
