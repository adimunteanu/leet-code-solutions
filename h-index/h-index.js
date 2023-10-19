/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((num1, num2) => num2 - num1);

  let h = 0;

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1;
    } else {
      break;
    }
  }

  return h;
};

console.log(hIndex([0, 0, 4, 4]));
