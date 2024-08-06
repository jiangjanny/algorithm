/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let result = []
    for (let i = 0; i < accounts.length; i++) {
        if (Array.isArray(accounts[i])) {
            const sumWithInitial = accounts[i].reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            result.push(sumWithInitial)
        }
    }

    return result.sort((a, b) => b - a)[0]
}

// let accounts = [
//     [1, 2, 3],
//     [3, 2, 1],
// ]

let accounts = [
    [1, 5],
    [7, 3],
    [3, 5],
]
maximumWealth(accounts) // 6
