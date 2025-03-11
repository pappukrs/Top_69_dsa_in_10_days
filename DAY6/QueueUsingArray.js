class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) { // O(1)
        this.items.push(element);
    }

    dequeue() { // O(n) because shift() moves all elements
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }

    front() { // O(1)
        return this.isEmpty() ? "Queue is empty" : this.items[0];
    }

    isEmpty() { // O(1)
        return this.items.length === 0;
    }
}

// Example Usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // Output: 1
console.log(queue.front()); // Output: 2
