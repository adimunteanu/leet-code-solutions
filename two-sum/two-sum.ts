function twoSum(nums: number[], target: number): number[] {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    numsMap.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numsMap.has(complement) && i !== numsMap.get(complement)) {
      return [i, numsMap.get(complement)]
    }
  }

  return [];
};

let input_nums = [3, 3];
let input_target = 6;
console.log(twoSum(input_nums, input_target));
