/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
用 Map() 與 hash table 觀念破解 Two Sum
題目：給你一個 nums 陣列(array)和 target 數字，請你找出 nums 當中兩個相加等於 target 的數字，並輸出這兩個數字在陣列中的位置(index)。

解題觀念：
1. target 減去 nums[i] 會等於一個補數
2. 如果此補數沒出現在 Hash Table 當中，就把補數當 key 目前的 i 當 value 存進 Hash Table
3. 如果下 n 輪的補數有出現在 Hash Table 過，就 return 出該補數的 value 與這一輪的 i
 */



let nums = [3, 7, 11, 15]
let target = 14
// var twoSum = function (nums, target) {
//     const indexMap = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (indexMap.has(complement)) {
//             console.log('4353', indexMap.get(complement), i);
//             return [indexMap.get(complement), i];
//         }
//         indexMap.set(nums[i], i);
//     }
// };


var twoSum = function (nums, target) {
    const numToIndex = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const difference = target - num;

        if (numToIndex.hasOwnProperty(difference)) {
            return [numToIndex[difference], i];
        }

        numToIndex[num] = i;
    }
}
console.log(twoSum(nums, target));