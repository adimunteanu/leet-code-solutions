/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const rotation = k % nums.length;
  const deleted = nums.splice(nums.length - rotation, rotation);
  nums.unshift(...deleted);
};

const nums = [-1, -100, 3, 99];
rotate(nums, 3);
console.log(nums);
