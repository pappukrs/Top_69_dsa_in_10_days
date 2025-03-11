class StackUsingTwoQueues {
    constructor() {
        this.q1 = []; // Main queue
        this.q2 = []; // Temporary queue
    }

    push(element) { // O(n) time complexity
        // Push the new element into q2
        this.q2.push(element);
        
        // Move all elements from q1 to q2
        while (this.q1.length > 0) {
            this.q2.push(this.q1.shift());
        }
        
        // Swap the names of q1 and q2
        [this.q1, this.q2] = [this.q2, this.q1];
    }

    pop() { // O(1) time complexity
        if (this.q1.length === 0) {
            console.log("Stack is empty!");
            return -1;
        }
        return this.q1.shift();
    }

    peek() { // O(1) time complexity
        if (this.q1.length === 0) {
            console.log("Stack is empty!");
            return -1;
        }
        return this.q1[0];
    }

    isEmpty() { // O(1) time complexity
        return this.q1.length === 0;
    }
}

// Example usage:
const stack = new StackUsingTwoQueues();
stack.push(5);
stack.push(10);
stack.push(15);
console.log(stack.peek()); // Output: 15
console.log(stack.pop()); // Output: 15
console.log(stack.pop()); // Output: 10
console.log(stack.isEmpty()); // Output: false
console.log(stack.pop()); // Output: 5
console.log(stack.isEmpty()); // Output: true

console.log(stack.pop()); // Output: Stack is empty!



// Time Complexity: O(n) for push, O(1) for pop, peek, isEmpty
// Space Complexity: O(n) where n is the number of elements in the stack
// The space complexity is O(n) because we are using two queues to simulate the stack.

// Note: The push operation has a time complexity of O(n) because we are moving all elements from q1 to q2 and then back to q1. This can be optimized by using a single queue and a recursive push operation.


//second approach





