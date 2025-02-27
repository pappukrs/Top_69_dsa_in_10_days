class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    pop() {
        let topStack = this.stack.pop();
        if (topStack === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

let stack = new MinStack();
stack.push(5);
stack.push(3);
stack.push(7);
stack.push(1);
console.log(stack.getMin()); 
stack.pop();
console.log(stack.getMin()); 
