/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = (nums, target) => {
    let pointer = 0;
    
    // keep the outer loop from going out of bounds
    while (pointer < nums.length) {
        // set the start of the inner loop to the next available integer from the pointer
        let index = pointer + 1;

        // keep the inner loop from going out of bounds
        while (index < nums.length) {
            if (nums[pointer] + nums[index] === target) {
                return [pointer, index];
            } else {
                index++;
            }
        }
        
        pointer++;
    }
};

// Test Cases
console.log(twoSum([3, 4, 12, 19], 16));
console.log(twoSum([-1, 0, 3, 21], 20));