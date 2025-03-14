class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(value) {
      this.queue.push(value); // O(1)
    }
  
    dequeue() {
      if (this.isEmpty()) return "Queue is empty";
      return this.queue.shift(); // O(n) (shifts elements)
    }
  
    peek() {
      return this.isEmpty() ? "Queue is empty" : this.queue[0];
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  }
  
  
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  console.log(q.dequeue()); 
  console.log(q.peek());    
  