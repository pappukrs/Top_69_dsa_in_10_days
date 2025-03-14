function firstNonRepeatingCharacter(stream) {
    let queue = [];
    let charCount = {}; 
  
    for (let char of stream) {
      charCount[char] = (charCount[char] || 0) + 1;
      queue.push(char);
  
      while (queue.length > 0 && charCount[queue[0]] > 1) {
        queue.shift();
      }
  
      console.log(queue.length > 0 ? queue[0] : "#");
    }
  }
  
  firstNonRepeatingCharacter("aabcbd"); 
  