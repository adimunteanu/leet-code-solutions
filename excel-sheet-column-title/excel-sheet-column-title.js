/**
 * @param {number} columnNumber
 * @return {string}
 */
const numbersToLetters = [...Array(28)].reduce((acc, _, index) => {
  const number =
    index === 0 || index === 27 ? "Z" : String.fromCharCode(64 + index);
  acc[index] = number;
  return acc;
}, {});

var convertToTitle = function (columnNumber) {
  let remainder = columnNumber % 26;
  let quotient = Math.floor(columnNumber / 26);

  if (remainder === 0 && quotient >= 27) {
    return convertToTitle(quotient - 1) + numbersToLetters[remainder];
  } else if (remainder > 0 && quotient >= 27) {
    return convertToTitle(quotient) + numbersToLetters[remainder];
  } else if (remainder === 0 && quotient === 1) {
    return numbersToLetters[remainder];
  } else if (remainder === 0 && quotient > 1) {
    return numbersToLetters[quotient - 1] + numbersToLetters[remainder];
  } else if (quotient === 0) {
    return numbersToLetters[remainder];
  } else {
    return numbersToLetters[quotient] + numbersToLetters[remainder];
  }
};

const result = convertToTitle(1);
