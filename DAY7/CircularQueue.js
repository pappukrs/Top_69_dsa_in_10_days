class CircularQueue {
    constructor(size) {
      this.queue = new Array(size);
      this.front = this.rear = -1;
      this.size = size;
    }
  
    isFull() {
      return (this.rear + 1) % this.size === this.front;
    }
  
    isEmpty() {
      return this.front === -1;
    }
  
    enqueue(value) {
      if (this.isFull()) return "Queue is full";
      if (this.isEmpty()) this.front = 0;
      this.rear = (this.rear + 1) % this.size;
      this.queue[this.rear] = value;
    }
  
    dequeue() {
      if (this.isEmpty()) return "Queue is empty";
      let removedValue = this.queue[this.front];
      if (this.front === this.rear) {
        this.front = this.rear = -1;
      } else {
        this.front = (this.front + 1) % this.size;
      }
      return removedValue;
    }
  
    peek() {
      return this.isEmpty() ? "Queue is empty" : this.queue[this.front];
    }
  }
  
 
  const cq = new CircularQueue(5);
  cq.enqueue(10);
  cq.enqueue(20);
  console.log(cq.dequeue()); 
  console.log(cq.peek());    
  