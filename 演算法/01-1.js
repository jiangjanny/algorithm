// 題目：搜尋插入位置
// 給定一個排序好的陣列 nums 和一個目標值 target，如果目標值在陣列中找到，就返回它的索引。
// 如果沒找到，則返回它應該被插入的位置索引（保持陣列仍然有序）。

// 輸入: nums = [1,3,5,6], target = 5
// 輸出: 2 (因為 5 在索引 2 的位置)

// let nums = [1,3,5,6]
// let target = 5

// 輸入: nums = [1,3,5,6], target = 2
// 輸出: 1 (因為 2 應該插入到索引 1 的位置)

let  nums = [1,3,5,6]
let target = 2

// 輸入: nums = [1,3,5,6], target = 7
// 輸出: 4 (因為 7 應該插入到最後面)
// let nums = [1,3,5,6]
// let target = 7

function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  // while (left <= right) {
  //     let mid = Math.floor((left + right) / 2);
      
  //     // 找到目標值
  //     if (nums[mid] === target) {
  //         return mid;
  //     } 
  //     // 目標值比中間值大，搜尋右半邊
  //     else if (nums[mid] < target) {
  //         left = mid + 1;
  //     } 
  //     // 目標值比中間值小，搜尋左半邊
  //     else {
  //         right = mid - 1;
  //     }
  // }

  while (left <= right) {
    let min = Math.floor((left + right) / 2)

    if(arr[min] === target){
      return min
    }else if(arr[min] < target){
      left = min + 1
    }else{
      right = min - 1
    }
  }
  
  // 如果沒找到，left 就是要插入的位置
  return left;
}

// 測試您的案例
console.log(searchInsert(nums, target));
