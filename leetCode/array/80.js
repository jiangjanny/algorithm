// 示例 1：

// 输入：nums = [1,1,1,2,2,3]
// 输出：5, nums = [1,1,2,2,3]
// 解释：函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3。 不需要考虑数组中超出新长度后面的元素。
// 示例 2：

// let nums = [1,1,1,2,2,3]

// 输入：nums = [0,0,1,1,1,1,2,3,3]
// 输出：7, nums = [0,0,1,1,2,3,3]
// 解释：函数应返回新长度 length = 7, 并且原数组的前七个元素被修改为 0, 0, 1, 1, 2, 3, 3。不需要考虑数组中超出新长度后面的元素。
let nums = [0,0,1,1,1,1,2,3,3]

// 提示：

// 1 <= nums.length <= 3 * 104
// -104 <= nums[i] <= 104
// nums 已按升序排列

// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

 /**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {

//    let trackCountElement = countOccurence(nums)
//    const arrayLength = nums.length;
//    let p1 = 0
    
//     for (let i = 0; i < arrayLength; i++) {
//         if(trackCountElement[nums[p1]] > 2){
//             nums.splice(p1, i)
//             trackCountElement = countOccurence(nums)
//         }else{
//             p1++
//         }
//     }
  
   
   
//   function countOccurence(params) {
//     const trackCountElement = {};
//     for (let i = 0; i < params.length; i++) {
//         if (!trackCountElement[params[i]]) {
//             trackCountElement[params[i]] = 1
//         } else {
//             trackCountElement[params[i]]++
//         }
//     };
//     return trackCountElement
//   }
  
//   return nums
// };


var removeDuplicates = function(nums) {

    let trackCountElement = countOccurence(nums)
    
    let p1 = 0
    Object.entries(trackCountElement).forEach((item, i) => {
        if(item[1] > 2){
            nums.splice(p1+ 1, i + 1)
            trackCountElement = countOccurence(nums)
        }else{
            p1++
        }
    })

    function countOccurence(params) {
        const trackCountElement = {};
        for (let i = 0; i < params.length; i++) {
            if (!trackCountElement[params[i]]) {
                trackCountElement[params[i]] = 1
            } else {
                trackCountElement[params[i]]++
            }
        };
        return trackCountElement
    }

    return nums
 };

removeDuplicates(nums)


