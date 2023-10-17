/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  return prices.slice(1).reduce((acc, curr, index) => {
    if (curr > prices[index - 1]) {
      return acc + curr - prices[index - 1];
    }

    return acc;
  }, 0);
  // let maxProfit = 0;

  // for (let i = 1; i < prices.length; i++) {
  //   if (prices[i] > prices[i - 1]) {
  //     maxProfit += prices[i] - prices[i - 1];
  //   }
  // }

  // return maxProfit;
};
