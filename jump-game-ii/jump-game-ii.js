/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let maxReach = 0;
  let steps = 0;
  if (nums.length === 1) {
    return 0;
  }

  for (let index = 0; index < nums.length; index++) {
    if (maxReach < nums[index] + index) {
      steps++;
      maxReach = nums[index] + index;
    }

    if (maxReach >= nums.length - 1) {
      return steps;
    }
  }

  return steps;
};

const nums = [2, 5, 0, 0];
const result = canJump(nums);
console.log(result);
