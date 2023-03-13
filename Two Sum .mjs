/*
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


 */

let twoSum = function(nums, target) {
    const map = new Map();  // create a new empty map

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];  // calculate the complement

        if (map.has(complement)) {  // check if complement exists in map
            return [map.get(complement), i];  // return the pair of indices
        }

        map.set(nums[i], i);  // add current element and its index to map
    }
}


