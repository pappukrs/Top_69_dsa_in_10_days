class QueueUsingStacks {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(value) {
      this.stack1.push(value);
    }
  
    dequeue() {
      if (this.isEmpty()) return "Queue is empty";
      if (this.stack2.length === 0) {
        while (this.stack1.length) {
          this.stack2.push(this.stack1.pop());
        }
      }
      return this.stack2.pop();
    }
  
    peek() {
      if (this.isEmpty()) return "Queue is empty";
      if (this.stack2.length === 0) {
        while (this.stack1.length) {
          this.stack2.push(this.stack1.pop());
        }
      }
      return this.stack2[this.stack2.length - 1];
    }
  
    isEmpty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  }
  
 
  const qs = new QueueUsingStacks();
  qs.enqueue(10);
  qs.enqueue(20);
  console.log(qs.dequeue()); 
  console.log(qs.peek());    
  