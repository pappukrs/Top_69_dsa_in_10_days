function isValid(s) {
    let stack = [];
    let map = { '(': ')', '{': '}', '[': ']' };
  
    for (let char of s) {
      if (map[char]) {
        stack.push(map[char]);
      } else if (stack.length === 0 || stack.pop() !== char) {
        return false;
      }
    }
  
    return stack.length === 0;
  }
  
  console.log(isValid("()[]{}")); // Output: true
  