class QueueUsingStacks {
    constructor() {
        this.s1 = []; // Main stack
        this.s2 = []; // Temporary stack
    }

    enqueue(element) { // O(n)
        while (this.s1.length > 0) {
            this.s2.push(this.s1.pop());
        }
        this.s1.push(element);
        while (this.s2.length > 0) {
            this.s1.push(this.s2.pop());
        }
    }

    dequeue() { // O(1)
        if (this.s1.length === 0) return "Queue is empty";
        return this.s1.pop();
    }
}

// Example Usage:
const queueStack = new QueueUsingStacks();
queueStack.enqueue(1);
queueStack.enqueue(2);
console.log(queueStack.dequeue()); // Output: 1
