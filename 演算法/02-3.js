// 題目 5：最大子陣列和（中等）
// 題目描述：
// 給定一個整數數組，找到具有最大和的連續子陣列，並返回其最大和。

// 輸入: [-2,1,-3,4,-1,2,1,-5,4]  
// 輸出: 6  
// 解釋: [4,-1,2,1] 的和最大為 6。  

let nums = [-2,1,-3,4,-1,2,1,-5,4] 
function findKthLargest(nums) {
    let currentSum = nums[0]; // 當前子陣列和，初始化為第一個元素
    let maxSum = nums[0];     // 整體最大和

    for (let i = 0; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(currentSum, maxSum)
        
    }
    return maxSum
}

findKthLargest(nums)