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
  
    isEmpty() {
      return this.front === null;
    }
  
    enqueue(value) {
      let newNode = new Node(value);
      if (this.isEmpty()) {
        this.front = this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
    }
  
    dequeue() {
      if (this.isEmpty()) return "Queue is empty";
      let removedValue = this.front.value;
      this.front = this.front.next;
      if (!this.front) this.rear = null;
      return removedValue;
    }
  
    peek() {
      return this.isEmpty() ? "Queue is empty" : this.front.value;
    }
  }
  
  
  const ql = new QueueLinkedList();
  ql.enqueue(5);
  ql.enqueue(10);
  console.log(ql.dequeue()); 
  console.log(ql.peek());    
  