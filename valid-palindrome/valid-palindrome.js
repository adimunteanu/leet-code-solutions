/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const cleanString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedString = cleanString.split("").reverse().join("");

  return cleanString === reversedString;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
