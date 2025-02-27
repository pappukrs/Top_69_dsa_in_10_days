function minWindow(s, t) {
    let map = new Map();
    for (let char of t) map.set(char, (map.get(char) || 0) + 1);
    
    let left = 0, right = 0, count = map.size, minLen = Infinity, start = 0;
    
    while (right < s.length) {
      let char = s[right++];
      if (map.has(char)) {
        map.set(char, map.get(char) - 1);
        if (map.get(char) === 0) count--;
      }
  
      while (count === 0) {
        if (right - left < minLen) {
          minLen = right - left;
          start = left;
        }
        let leftChar = s[left++];
        if (map.has(leftChar)) {
          map.set(leftChar, map.get(leftChar) + 1);
          if (map.get(leftChar) > 0) count++;
        }
      }
    }
  
    return minLen === Infinity ? "" : s.substring(start, start + minLen);
  }
  
  console.log(minWindow("ADOBECODEBANC", "ABC")); 
  