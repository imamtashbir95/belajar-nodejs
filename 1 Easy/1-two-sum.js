/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map(); // Create a hash map to store the number and its index
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; // Return the indices of the two numbers
        }
        
        numMap.set(nums[i], i); // Add the number and its index to the map
    }
    
    throw new Error("No solution exists"); // If no solution exists (shouldn't happen per constraints)
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));