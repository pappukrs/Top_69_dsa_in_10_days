class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(value, priority) {
      this.queue.push({ value, priority });
      this.queue.sort((a, b) => a.priority - b.priority); 
    }
  
    dequeue() {
      return this.queue.length === 0 ? "Queue is empty" : this.queue.shift().value;
    }
  
    peek() {
      return this.queue.length === 0 ? "Queue is empty" : this.queue[0].value;
    }
  }
  
  const pq = new PriorityQueue();
  pq.enqueue("A", 2);
  pq.enqueue("B", 1); 
  console.log(pq.dequeue()); 
  console.log(pq.peek());    
  