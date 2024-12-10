// 输入：nums = [1,1,2]
// 输出：2, nums = [1,2]
// 解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素

// let nums = [1,1,2]

// 输入：nums = [0,0,1,1,1,2,2,3,3,4]
// 输出：5, nums = [0,1,2,3,4]
// 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。

let nums = [0,0,1,1,1,2,2,3,3,4]

// 0 <= nums.length <= 3 * 104
// -104 <= nums[i] <= 104
// nums 已按升序排列

// 1.首先Set去重
// 2.然后splice删除全部原数组
// 3.最后利用push添加到原数组

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   
};

console.log(removeDuplicates(nums));
