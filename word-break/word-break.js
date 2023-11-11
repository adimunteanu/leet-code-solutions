/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  if (wordDict.includes(s)) {
    return true;
  }

  let result = false;

  for (let i = 0; i < s.length; i++) {
    // console.log('currentWord', s.substring(0, i));
    // console.log('remaining word', s.substring(i));
    if (wordDict.includes(s.substring(0, i))) {
      result ||= wordBreak(s.substring(i), wordDict);
    }
  }

  return result;
};

console.log(wordBreak("leetcode", ["leet", "code"]))
