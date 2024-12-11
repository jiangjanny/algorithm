// 這裡是一些針對 forEach 的 JavaScript 題目，這些題目範圍從基礎到中等難度，
// 可以幫助學生更好地理解和應用 forEach 方法。

// 題目 1: 計算數字陣列的總和
// 給定一個數字陣列，使用 forEach 方法來計算陣列中所有數字的總和。

// 題目要求：
// 使用 forEach 來遍歷陣列。
// 遍歷過程中將所有數字加總。
// 返回總和。reduce

function sumArray(numbers) {
    return numbers.reduce((sum, item) => sum + item, 0)
}

console.log('sumArray([1, 2, 3, 4, 5])', sumArray([1, 2, 3, 4, 5]));
