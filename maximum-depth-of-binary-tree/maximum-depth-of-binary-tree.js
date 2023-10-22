/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  return maxDepthRecursive(root, 0);
};

const maxDepthRecursive = (root, depth) => {
  if (!root) {
    return depth;
  }

  return Math.max(
    maxDepthRecursive(root.left, depth + 1),
    maxDepthRecursive(root.right, depth + 1)
  );
};
