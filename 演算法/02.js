// 題目：快速排序演算法實作與理解
// 題目描述
// 請撰寫一個函數，使用快速排序演算法（Quick Sort）來對給定的整數陣列進行排序。

// 根據你所實作的演算法，將以下數列由小到大排序：

// 數列: [6, 3, 8, 5, 2, 7, 4, 1]

// 要求
// 實作過程中需自行選擇分割（pivot）策略，例如選擇最左邊或最右邊元素作為 pivot。
// 使用遞迴（Recursion）實現快速排序。
// 輸出最終排序結果。

// 輸入
let arr =  [6, 3, 8, 5, 2, 7, 4, 1]

// 輸出
// [1, 2, 3, 4, 5, 6, 7, 8]

function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let left = []
    let right = []
    let pivot = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)]
    
}

console.log('d', quickSort(arr));
