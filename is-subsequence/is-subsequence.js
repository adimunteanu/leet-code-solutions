/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const sChars = s.split("");
  for (let i = 0; i < t.length; i++) {
    if (sChars.length === 0) {
      break;
    }

    if (t[i] === sChars[0]) {
      sChars.splice(0, 1);
    }
  }

  return sChars.length === 0;
};
