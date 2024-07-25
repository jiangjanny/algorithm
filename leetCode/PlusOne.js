/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
*/
let digits = [9, 9]
// var plusOne = function (digits) {
//     let num = digits
//     let list = 0
//     if (digits.length === 1) {
//         list = num[0] + 1
//         num = Array.from(String(list), Number);
//     } else {
//         num[digits.length - 1] = num[digits.length - 1] + 1
//     }

//     return num
// };

// function plusOne(digits) {
// let nums = digits
// for (let i = nums.length - 1; i >= 0; i--) {
//     // 如果當前數字小於 9，直接加 1 並返回結果
//     if (nums[i] < 9) {
//         nums[i]++;
//         return nums;
//     }
//     // 如果當前數字是 9，則將其設置為 0
//     nums[i] = 0;
// }

// // 如果所有數字都是 9，例如 [9, 9, 9]，則需要在最前面插入 1
// nums.unshift(1);
// console.log('return', nums);
// return digits;
// }

function plusOne(digits) {
    // 將數組轉換為字符串，然後轉換為大數
    let number = BigInt(digits.join('')) + 1n;
    console.log('number', Array.from(String(number)));
    // 將大數轉換為字符串，再轉換為數字數組
    return Array.from(String(number), Number);
}

// 測試
// plusOne([1, 2, 3])  // 輸出: [1, 2, 4]
console.log(plusOne([9, 9, 9]));  // 輸出: [1, 0, 0, 0]
// console.log(plusOne([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]));  // 輸出: [2, 0, 0]

// console.log(plusOne(digits));

