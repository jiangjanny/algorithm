// 输入： nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出： [1,2,2,3,5,6]
// 解释： 需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。

// let nums1 = [1,2,3,0,0,0]
// let m = 3
// let nums2 = [2,5,6]
// let n = 3

// 输入： nums1 = [1], m = 1, nums2 = [], n = 0
// 输出： [1]
// 解释： 需要合并 [1] 和 [] 。
// 合并结果是 [1] 。

// let nums1 = [1]
// let m = 1
// let nums2 = []
// let n = 0

// 输入： nums1 = [0], m = 0, nums2 = [1], n = 1
// 输出： [1]
// 解释： 需要合并的数组是 [] 和 [1] 。
// 合并结果是 [1] 。
// 注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。

let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3


var merge = (nums1, m , nums2, n) => {
  for(let i = m; i < m+n; i++){
    nums1[i] = nums2[i-m]
  }
  nums1.sort((a, b) => a-b);
}

console.log(merge(nums1, m , nums2, n) );
