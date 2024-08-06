/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
    const n = grid.length // 缓存矩阵的长宽
    // 创建存储结果的数组
    let result = Array.from({ length: n - 2 }, () => new Array(n - 2).fill(0))

    // 创建大小为(n - 2) x (n - 2) 的整数矩阵
    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < n - 2; j++) {
            let max = -Infinity // 缓存最大值

            // 搜索以i和j为左上角，长宽为3的矩阵中的最大值
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    console.log('k', k, 'l', l)
                    max = Math.max(max, grid[i + k][j + l])
                }
            }

            // 将最大值存储到结果矩阵相应位置
            result[i][j] = max
        }
    }
}

let grid = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
]
// [[2,2,2],[2,2,2],[2,2,2]]

// largestLocal(grid)

// let grid = [
//     [9, 9, 8, 1],
//     [5, 6, 2, 6],
//     [8, 2, 6, 4],
//     [6, 2, 2, 2],
// ] //  [[9 ,9],[8,6]]
largestLocal(grid)
