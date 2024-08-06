/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// var filter = function (arr, fn) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i], i)) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }

var filter = function (arr, fn) {
    return arr.filter(fn)
}

let arr = [0, 10, 20, 30]
let fn = function greaterThan10(n) {
    return n > 10
}
// [20,30]

// let arr = [1, 2, 3]
// let fn = function firstIndex(n, i) {
//     return i === 0
// }

//[1]
// let arr = [-2, -1, 0, 1, 2]
// let fn = function plusOne(n) {
//     console.log('n', n)
//     return n + 1
// }
// [-2,0,1,2]

filter(arr, fn)
