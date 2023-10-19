/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const left = [];
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
    left.push(product);
  }

  product = 1;
  const right = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    product *= nums[i];
    right.unshift(product);
  }

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      result.push(right[i + 1]);
    } else if (i === nums.length - 1) {
      result.push(left[i - 1]);
    } else {
      result.push(left[i - 1] * right[i + 1]);
    }
  }

  return result;
};

const result = productExceptSelf([1, 2, 3, 4]);
