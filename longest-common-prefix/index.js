/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const sortedStrs = strs.sort((a, b) => a.length - b.length);

  const shortest = sortedStrs[0];
  let i = 1;
  let result = shortest;

  while (i < sortedStrs.length) {
    let commonPrefix = '';
    for (let j = 0; j < shortest.length; j += 1) {
      if (shortest[j] !== sortedStrs[i][j]) {
        break;
      }

      commonPrefix += shortest[j];
    }
    if (result.length > commonPrefix.length) {
      result = commonPrefix;
    }

    i += 1;
  }

  return result;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]))
