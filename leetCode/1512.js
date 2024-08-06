/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && i < j) {
                count++
            }
        }
    }
    return count
}
// let nums = [1, 2, 3, 1, 1, 3] // 4
let nums = [1, 1, 1, 1] // 6
numIdenticalPairs(nums)
