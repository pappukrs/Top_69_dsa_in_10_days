class QueueUsingDeque {
    constructor() {
      this.deque = [];
    }
  
    enqueue(value) {
      this.deque.push(value);
    }
  
    dequeue() {
      return this.deque.length === 0 ? "Queue is empty" : this.deque.shift();
    }
  
    peek() {
      return this.deque.length === 0 ? "Queue is empty" : this.deque[0];
    }
  }
  
 
  const qd = new QueueUsingDeque();
  qd.enqueue(100);
  qd.enqueue(200);
  console.log(qd.dequeue()); 
  console.log(qd.peek());    
  