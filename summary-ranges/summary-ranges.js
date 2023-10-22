/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) {
    return [];
  }

  if (nums.length === 1) {
    return [nums[0].toString()];
  }

  const ranges = [];
  let left = nums[0];
  let right = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - right > 1) {
      ranges.push(left === right ? `${left}` : `${left}->${right}`);
      left = nums[i];
    }
    right = nums[i];
  }

  ranges.push(left === right ? `${left}` : `${left}->${right}`);

  return ranges;
};
