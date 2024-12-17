// 題目 1：合併排序數組（簡單）
// 題目描述：
// 給你兩個已排序的整數陣列 nums1 和 nums2，將 nums2 合併到 nums1，使得合併後的陣列依然有序。

// 輸出：修改後的 nums1。
// 範例：

// 輸入: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3  
// 輸出: [1,2,2,3,5,6]  

// let nums1 = [1,2,3,0,0,0]
// let m = 3
// let nums2 = [2,5,6]
// let n = 3  

// 挑戰：
// 使用 原地演算法 修改 nums1。
// 時間複雜度應為 O(m + n)。

function merge(nums1, m, nums2, n) {
//     // 合併兩個有序陣列
   while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]);
            i++;
        }else{
            merged.push(nums1[i]);
            j++;
        }
   }


   
    // 將剩餘的元素加入 merged
    while (i < m) {
        merged.push(nums1[i]);
        i++;
    }


    

    while (j < n) {
        merged.push(nums2[j]);
        j++;
    }

    // 將 merged 的內容複製回 nums1
    for (let k = 0; k < merged.length; k++) {
        nums1[k] = merged[k];
    }
}

// 測試範例
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // 輸出: [1, 2, 2, 3, 5, 6]



