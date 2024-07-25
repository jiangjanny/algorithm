/**
* @param {number[]} nums
* @return {boolean}
*/
var containsDuplicate = function (nums) {
    return new Set(nums).size < nums.length;
};

let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]


containsDuplicate(nums)
