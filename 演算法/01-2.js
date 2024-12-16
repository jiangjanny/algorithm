// 題目：尋找旋轉排序陣列中的最小值 II（這是一個較複雜的 LeetCode 題目）
// 假設一個原本按升序排列的陣列在某個未知的樞紐點上進行了旋轉，且陣列中可能包含重複的元素。例如，原陣列 [1,1,2,2,3,3] 可能變成 [2,3,3,1,1,2]。
// 請找出這個陣列中的最小值。

// 輸入: [2,2,2,0,1]
// 輸出: 0

// 輸入: [3,3,1,3]
// 輸出: 1

// 輸入: [1,3,3]
// 輸出: 1

// 輸入: [3,3,3,1]
// 輸出: 1

function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[right]) {
            // 最小值一定在右半部分
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            // 最小值可能是 mid，或在左半部分
            right = mid;
        } else {
            // 處理重複元素的情況
            // 無法確定最小值在哪一側，但可以排除右端點
            right--;
        }
    }
    
    return nums[left];
}



// 測試案例
// console.log(findMin([2,2,2,0,1])); // 輸出：0
// console.log(findMin([3,3,1,3]));   // 輸出：1
console.log(findMin([1,3,3]));     // 輸出：1