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
var getMinimumDifference = function (root) {
  const DFS = (node, low, high) =>
    !Boolean(node)
      ? high - low
      : Math.min(
          DFS(node.left, low, node.val),
          DFS(node.right, node.val, high)
        );
  return DFS(root, -Infinity, Infinity);
};
