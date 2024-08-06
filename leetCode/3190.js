/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let count = 0
    nums.forEach((num) => {
        if (!Number.isInteger(num / 3)) {
            count += Math.min(num % 3, 3 - (num % 3))
        }
    })
    return count
}

// var minimumOperations = function (nums) {
//     let ans = 0;
//     for (const x of nums) {
//         const mod = x % 3;
//         if (mod) {
//             ans += Math.min(mod, 3 - mod);
//         }
//     }
//     return ans;
// }

let nums = [1, 3, 6, 8] // 3
// let nums = [3, 6, 9] // 0
minimumOperations(nums)
