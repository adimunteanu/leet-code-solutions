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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  return isSameTree(root.left, root.right);
};

var isSameTree = function (p, q) {
  if ((!p && q) || (p && !q) || p.val !== q.val) {
    return false;
  }

  if (p && q) {
    return isSameTree(p.left, q.right) && isSameTree(p.right, q.left);
  }

  return true;
};
