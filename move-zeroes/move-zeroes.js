/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  let numberOfZero = 0;

  while (i < nums.length - numberOfZero) {
    if (nums[i] === 0) {
      numberOfZero++;
      nums.splice(i, 1);
      nums.push(0);
    } else {
      i++;
    }
  }
};

moveZeroes([0, 1, 0, 3, 12]);
