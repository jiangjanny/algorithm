// 題目 2：Kth 最大元素（中等）
// 題目描述：
// 在一個未排序的數組中，找到第 k 個最大的元素。

// 請使用分治法（Quick Select）或堆排序（Heap Sort）來解決。

// 輸入: [3,2,1,5,6,4], k = 2  
// 輸出: 5  


// // 測試範例
// let nums = [3,2,1,5,6,4];
// let k = 2;

function findKthLargest(nums, k) {
    // 使用最小堆
    let minHeap = []

    function pushHeap (num){
        minHeap.push(num)
        minHeap.sort((a,b) => a - b )

        if(minHeap.length > k){
            minHeap.shift()
        }
        
    }

    for(let num of nums){
        pushHeap(num)
    }

    return minHeap[0]
    
}

// 測試範例
let nums = [3, 2, 1, 5, 6, 4];
let k = 2;
console.log(findKthLargest(nums, k)); // 輸出: 5

