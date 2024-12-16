// 二分搜尋法 (Binary Search)

function binarySearch(arr, target) {
    
    let left  = 0
    let right = arr.length - 1

    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(arr[mid] === target){
            return mid;
        }
        // 目標在右半邊
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        // 目標在左半邊
        else {
            right = mid - 1;
        }

        // 找不到目標值
        return -1;
    }
    
}

// 使用範例
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(arr, 7));  // 輸出：3（索引位置）
// console.log(binarySearch(arr, 10)); // 輸出：-1（未找到）