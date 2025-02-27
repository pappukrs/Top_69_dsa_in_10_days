//longest consecutive sequence from given array of integers
function longestConsecutive(nums) {
  let numSet = new Set(nums);
  let longestStreak = 0;
  
  for (let num of nums) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }
      
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  
  return longestStreak;
}

let nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums)); 
