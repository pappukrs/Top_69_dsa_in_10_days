function isValidParenthesis(s){
   let stack = [];

   for (let char of s){
    if(['(','{','['].includes(char)){
        stack.push(char);
   }
   else if ([')','}',']'].includes(char)){
    if (stack.length === 0) return false;
        let top = stack.pop();
        if (top === '(' && char !== ')') return false;
        if (top === '{' && char !== '}') return false;
        if (top === '[' && char !== ']') return false;

   }
   }
    console.log(stack);
    return stack.length === 0;
}


console.log(isValidParenthesis("(){}[]")); 
console.log(isValidParenthesis("([)]")); 
console.log(isValidParenthesis("{[]}"));