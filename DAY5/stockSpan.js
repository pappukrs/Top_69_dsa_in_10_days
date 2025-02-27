
//next greater element to the left
// **Time complexity: O(n)**

function stockSpan(prices) {
    let stack = [];
    let result = [];
    let n = prices.length;

    for (let i = 0; i < n; i++) {
        if (stack.length === 0) {   
            result.push(-1);
        } else if (stack.length > 0 && stack[stack.length - 1].price > prices[i]) {
            result.push(stack[stack.length - 1].index);
        } else if (stack.length > 0 && stack[stack.length - 1].price <= prices[i]) {
            while (stack.length > 0 && stack[stack.length - 1].price <= prices[i]) {
                stack.pop();
            }
            if (stack.length === 0) {
                result.push(-1);
            } else {
                result.push(stack[stack.length - 1].index);
            }
        }

        stack.push({ price: prices[i], index: i });
    }
    
    for(let i = 0; i < result.length; i++){
        result[i] = i - result[i];
    }
    return result;
}

console.log(stockSpan([100, 80, 60, 70, 60, 75, 85])); 
// Expected Output: [1, 1, 1, 2, 1, 4, 6]
