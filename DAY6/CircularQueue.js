class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    enqueue(value) { // O(1)
        if ((this.rear + 1) % this.size === this.front) return "Queue is full"; // Circular condition
        if (this.front === -1) this.front = 0;
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
    }

    dequeue() { // O(1)
        if (this.front === -1) return "Queue is empty";
        let removedValue = this.queue[this.front];
        if (this.front === this.rear) this.front = this.rear = -1; // Reset when empty
        else this.front = (this.front + 1) % this.size;
        return removedValue;
    }

    frontElement() { // O(1)
        return this.front === -1 ? "Queue is empty" : this.queue[this.front];
    }
}

// Example Usage:
const cQueue = new CircularQueue(5);
cQueue.enqueue(1);
cQueue.enqueue(2);
console.log(cQueue.dequeue()); // Output: 1
console.log(cQueue.frontElement()); // Output: 2
