/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Infinity;

  return prices.reduce((accumulatedProfit, currentPrice) => {
    if (minPrice > currentPrice) {
      minPrice = currentPrice;
      return accumulatedProfit;
    } else {
      const currentProfit = currentPrice - minPrice;
      return Math.max(accumulatedProfit, currentProfit);
    }
  }, 0);
};

const result = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(result);
