function nextGreaterRightElement(nums) {
    let stack = [];
    let n = nums.length;
    let ans = []

    for (let i = n - 1; i >= 0; i--) {
        if (stack.length == 0) {
            ans.push(-1);
        } else if (stack.length > 0 && stack[stack.length - 1] > nums[i]) {

            ans.push(stack[stack.length - 1]);
        }

        else if (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {


            while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
                stack.pop();
            }
            if (stack.length == 0) {
                ans.push(-1);
            } else {
                ans.push(stack[stack.length - 1]);
            }
        }
        stack.push(nums[i]);
    }

    return ans.reverse();
}


console.log(nextGreaterRightElement([4, 5, 2, 10, 8])); // [5, 10, 10, -1, -1]
console.log(nextGreaterRightElement([1, 3, 2, 4])); // [3, 4, 4, -1]

// Time Complexity: O(n)
// Space Complexity: O(n)
