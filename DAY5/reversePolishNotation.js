function reversePolishNotation(tokens){

    let stack = [];

    for (let token of tokens) {
        if(!isNaN(token)){ 
           stack.push(Number(token)); 
        }
        else{
            let b = stack.pop(); 
            let a = stack.pop();
            switch(token){
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(Math.trunc(a / b));
                    break;
            }
        }
    }
    return stack[0]
}

console.log(reversePolishNotation(["2", "1", "+", "3", "*"]));
console.log(reversePolishNotation(["4", "13", "5", "/", "+"]));

console.log(reversePolishNotation(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));