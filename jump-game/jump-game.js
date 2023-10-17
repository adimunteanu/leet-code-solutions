/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxReach = 0;

  for (let index = 0; index < nums.length; index++) {
    if (index > maxReach) {
      return false;
    }

    maxReach = Math.max(maxReach, nums[index] + index);

    if (maxReach >= nums.length - 1) {
      return true;
    }
  }

  return false;
};

const nums = [2, 5, 0, 0];
const result = canJump(nums);
console.log(result);
