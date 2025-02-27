function nextSmallerLeftElement(arr){
    let ans = [];
    let stack = [];
    let n = arr.length;

    for(let i =0; i<n; i++){

        if(stack.length == 0){
            ans.push(-1);
        }else if(stack.length > 0 && stack[stack.length - 1] < arr[i]){
            ans.push(stack[stack.length - 1]);
        }else if(stack.length > 0 && stack[stack.length - 1] >= arr[i]){
            while(stack.length > 0 && stack[stack.length - 1] >= arr[i]){
                stack.pop();
            }
            if(stack.length == 0){
                ans.push(-1);
            }else{
                ans.push(stack[stack.length - 1]);
            }
        }
        stack.push(arr[i]);
    }
    return ans;
}

console.log(nextSmallerLeftElement([1, 3, 2, 4])); // Output: [ -1, 1, 1, 2 ]
console.log(nextSmallerLeftElement([4, 5, 2, 10, 8])); // Output: [ -1, 4, -1, 2, 2 ]

// Time Complexity: O(n)
// Space Complexity: O(n)