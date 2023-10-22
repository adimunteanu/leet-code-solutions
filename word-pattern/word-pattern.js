/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const map = new Map();

  const words = s.split(" ");

  if (words.length !== pattern.length) {
    return false;
  }

  if (new Set(words).size !== new Set(pattern).size) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i])) {
      map.set(pattern[i], words[i]);
    } else if (map.get(pattern[i]) !== words[i]) {
      return false;
    }
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat fish"));
