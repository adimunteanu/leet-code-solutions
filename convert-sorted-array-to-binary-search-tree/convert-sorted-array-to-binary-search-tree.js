/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return undefined;
  }

  const middle = (nums.length - 1) / 2;

  return TreeNode(
    nums[middle],
    sortedArrayToBST(nums.slice(0, middle)),
    sortedArrayToBST(nums.slice(middle + 1))
  );
};
