// 題目
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// 題意
// 從陣列中，找出超過半數的元素。

// Example 1:
// Input: [3,2,3]
// Output: 3

// let nums = [3,2,3]

// Example 2:
// Input: [2,2,1,1,1,2,2]
// Output: 2

let nums = [2,2,1,1,1,2,2]

var majorityElement = function(nums) {

    let count = countOccurence(nums)
    let num = 0
    let d = 0
    Object.entries(count).forEach((item, i) => {
        num = item[1]
        if(item[1] === num){
            d = item[0]
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
        }
        return trackCountElement
    }

    return d
}

console.log('majorityElement(nums)', majorityElement(nums));
