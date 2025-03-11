class QueueUsingTwoStacks {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    enqueue(element) { // O(1)
        this.s1.push(element);
    }

    dequeue() { // O(n) worst case, O(1) amortized
        if (this.s2.length === 0) {
            if (this.s1.length === 0) return "Queue is empty";
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2.pop();
    }
}

// Example Usage:
const queueStackOptimized = new QueueUsingTwoStacks();
queueStackOptimized.enqueue(1);
queueStackOptimized.enqueue(2);
console.log(queueStackOptimized.dequeue()); // Output: 1
