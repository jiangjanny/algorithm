/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let result = 0
    operations.forEach((operation) => (operation.includes('++') ? result++ : result--))
    return result
}

let operations = ['++X', '++X', 'X++'] // 1
finalValueAfterOperations(operations)
