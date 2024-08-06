/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    let result = nums.concat(nums)
    return result
}

let nums = [1, 2, 1] // [1,2,1,1,2,1]
// let nums = [1,3,2,1] // [1,3,2,1,1,3,2,1]
getConcatenation(nums) // [1, 2, 1, 1, 2]
