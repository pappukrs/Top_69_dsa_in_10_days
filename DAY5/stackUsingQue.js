class StackUsingQueue {
    constructor() {
        this.queue = [];  // Using a single queue
    }

    push(element) { // O(n) time complexity
        let n = this.queue.length;  
        this.queue.push(element); // Add new element at the end

        // Rotate the queue to bring the newly added element to the front
        for (let i = 0; i < n; i++) {
            this.queue.push(this.queue.shift()); // Move front element to the back
        }
    }

    pop() { // O(1) time complexity
        return this.queue.shift(); // Remove the front element (which is the "top" of stack)
    }

    peek() { // O(1) time complexity
        return this.queue[0]; // Front element is the top of the stack
    }

    isEmpty() { // O(1) time complexity
        return this.queue.length === 0;
    }
}

// Example usage:
const stack = new StackUsingQueue();
stack.push(5);
stack.push(10);
console.log(stack.peek());  // Output: 10 (Top of stack)
console.log(stack.pop());   // Output: 10 (Last pushed element removed)
console.log(stack.isEmpty()); // Output: false (Stack is not empty)
console.log(stack.pop());   // Output: 5 (Last remaining element removed)
console.log(stack.isEmpty()); // Output: true (Stack is now empty)
