/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var buildArray = function (nums) {
//     let result = []
//     for (const num of nums) {
//         result.push(nums[num])
//     }
//     return result
// }

var buildArray = function (nums) {
    nums.map((num) => {
        console.log(nums[num])
    })
}

let nums = [0, 2, 1, 5, 3, 4] // [0,1,2,4,5,3]
// let nums = [5, 0, 1, 2, 3, 4] // [4,5,0,1,2,3]
buildArray(nums)
