function nextSmallerRightElement(arr) {
    let stack = [];
    let result = [];
    let n = arr.length;
    for (let i = n - 1; i >= 0; i--) {
        if(stack.length === 0) {
            result.push(-1);
        } else if(stack.length > 0 && stack[stack.length - 1] < arr[i]) {
            result.push(stack[stack.length - 1]);
        } else if(stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
            while(stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
                stack.pop();
            }
            if(stack.length === 0) {
                result.push(-1);
            } else {
                result.push(stack[stack.length - 1]);
            }
        }
        stack.push(arr[i]);
    }
    return result.reverse();
}

console.log(nextSmallerRightElement([1, 3, 2, 4])); // Output: [ -1, 2, -1, -1 ]
console.log(nextSmallerRightElement([4, 5, 2, 10, 8])); // Output: [2, 2, -1, 8, -1]
// Time Complexity: O(n)    
// Space Complexity: O(n)