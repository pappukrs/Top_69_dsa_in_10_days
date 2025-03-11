class StackUsingTwoQueues {
    constructor() {
        this.q1 = []; // Main queue
        this.q2 = []; // Temporary queue
    }

    push(element) { // O(1) time complexity
        this.q1.push(element);
    }

    pop() { // O(n) time complexity
        if (this.q1.length === 0) {
            console.log("Stack is empty!");
            return -1;
        }

        // Move elements from q1 to q2, leaving the last one
        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }

        // Remove the last element (which is the stack's top)
        let poppedElement = this.q1.shift();

        // Swap q1 and q2
        [this.q1, this.q2] = [this.q2, this.q1];

        return poppedElement;
    }

    peek() { // O(n) time complexity
        if (this.q1.length === 0) {
            console.log("Stack is empty!");
            return -1;
        }

        // Move elements from q1 to q2, leaving the last one
        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }

        // Get the last element (top of the stack)
        let topElement = this.q1[0];

        // Move it to q2
        this.q2.push(this.q1.shift());

        // Swap q1 and q2
        [this.q1, this.q2] = [this.q2, this.q1];

        return topElement;
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
