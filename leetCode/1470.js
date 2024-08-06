/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let result = []
    for (let i = 0; i < n; i++) {
        result.push(nums[i])
        result.push(nums[i + n])
    }
    return result
}

// let nums = [2, 5, 1, 3, 4, 7]
// let n = 3
// shuffle(nums, n) // [2,3,5,4,1,7]

let nums = [1, 2, 3, 4, 4, 3, 2, 1]
let n = 4
shuffle(nums, n) // [1,4,2,3,3,2,4,1]
