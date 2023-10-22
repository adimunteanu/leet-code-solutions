/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let num = n;
  let occurences = new Set().add(n);

  while (num !== 1) {
    num = calculateSumOfDigitsSquared(num);
    if (occurences.has(num)) {
      return false;
    }
    occurences.add(num);
  }

  return true;
};

const calculateSumOfDigitsSquared = (num) =>
  Array.from(String(num), Number).reduce((acc, curr) => curr * curr + acc, 0);

console.log(isHappy(2));
