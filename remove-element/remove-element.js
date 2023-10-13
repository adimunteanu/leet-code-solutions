/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  let i = 0;

  while (i < nums.length) {
    if (val === nums[i]) {
      nums.splice(i, 1);
    } else {
      k++;
      i++;
    }
  }

  return k;
};

const result = removeElement([3, 2, 2, 3], 3);
