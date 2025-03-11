class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class QueueLinkedList {
    constructor() {
        this.front = this.rear = null;
    }

    enqueue(value) { // O(1)
        let newNode = new Node(value);
        if (!this.rear) this.front = this.rear = newNode;
        else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    dequeue() { // O(1)
        if (!this.front) return "Queue is empty";
        let removedValue = this.front.value;
        this.front = this.front.next;
        if (!this.front) this.rear = null;
        return removedValue;
    }

    frontElement() { // O(1)
        return this.front ? this.front.value : "Queue is empty";
    }

    isEmpty() { // O(1)
        return this.front === null;
    }
}

// Example Usage:
const llQueue = new QueueLinkedList();
llQueue.enqueue(10);
llQueue.enqueue(20);
console.log(llQueue.dequeue()); // Output: 10
console.log(llQueue.frontElement()); // Output: 20
