// 示例 1：

// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
// 示例 2：

// 输入：prices = [7,6,4,3,1]
// 输出：0
// 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 

// 提示：

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

let prices = [7,1,5,3,6,4]

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) { 
    let minBuyPrice = prices[0];
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        minBuyPrice = Math.min(minBuyPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minBuyPrice)
    }
    return maxProfit    
}

console.log(maxProfit(prices));
