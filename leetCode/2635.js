/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i], i)
    }
    return result
}

let arr = [1, 2, 3]
let fn = function plusone(n) {
    return n + 1
}
map(arr, fn) // [2,3,4]
