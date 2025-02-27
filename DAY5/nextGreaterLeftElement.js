function nextGreaterLeftElement(nums){

    let ans = [];
    let stack = [];
    let n = nums.length;
    for (let i = 0; i < n; i++) {
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
    return ans;

}

console.log(nextGreaterLeftElement([4, 5, 2, 10, 8])); // [ -1, -1, 5, -1, 10 ]
// Time Complexity: O(n)    Space Complexity: O(n)  

