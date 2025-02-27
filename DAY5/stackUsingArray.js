class StackUsingArray{
    constructor(){
        this.arr = []
    }
    push(ele){
        if(ele == null){
            return null;
        }
        this.arr.push(ele)
    }

    pop(){
        if(this.isEmpty()){
            return null;
        }
        return this.arr.pop();
    }

    peek(){
        if(this.arr.length == 0){
            return null;
        }
        return this.arr[this.arr.length - 1];
    }


    isEmpty(){
        return this.arr.length == 0;
    }
    }

    const stack = new StackUsingArray();
    stack.push(5);
    stack.push(3);
    stack.push(7);
    stack.push(1);
    console.log(stack.peek()); // 1
    console.log(stack.pop()); // 1
    console.log(stack.peek()); // 7
// Time Complexity: O(1) for all operations (push, pop, peek, isEmpty)



    
