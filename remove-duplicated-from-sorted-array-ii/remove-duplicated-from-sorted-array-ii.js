/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let firstIndex = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === nums[firstIndex] && i - firstIndex == 2) {
      nums.splice(i--, 1);
    } else if (nums[i] !== nums[firstIndex]) {
      firstIndex = i;
    }
    i++;
  }

  return nums.length;
};

let array = [1, 1, 1];
removeDuplicates(array);
console.log(array);
