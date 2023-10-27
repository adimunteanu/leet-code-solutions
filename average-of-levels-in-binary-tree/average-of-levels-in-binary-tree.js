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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  queueWithDepth.push({ node: root, depth: 0 });

  while (queueWithDepth.length > 0) {
    const currentNode = queueWithDepth.shift();

    if (!averageMapByDepth.has(currentNode.depth)) {
      averageMapByDepth.set(currentNode.depth, {
        avg: currentNode.node.val,
        sum: currentNode.node.val,
        count: 1,
      });
    } else {
      const { oldSum, oldCount } = averageMapByDepth.get(currentNode.depth);
      averageMapByDepth.set(currentNode.depth, {
        avg: (currentNode.node.val + oldSum) / (oldCount + 1),
        sum: currentNode.node.val + oldSum,
        count: oldCount + 1,
      });
    }

    if (Boolean(currentNode.node.left)) {
      queueWithDepth.push({
        node: currentNode.node.left,
        depth: currentNode.depth + 1,
      });
    }

    if (Boolean(currentNode.node.right)) {
      queueWithDepth.push({
        node: currentNode.node.right,
        depth: currentNode.depth + 1,
      });
    }
  }

  return Array.from(averageMapByDepth.values()).map(({ avg }) => avg);
};

var queueWithDepth = [];
var averageMapByDepth = new Map();
