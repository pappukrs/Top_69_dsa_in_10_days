function findMissingNumber(nums) {
    let n = nums.length;
    let totalSum = (n * (n + 1)) / 2;
    let arraySum = nums.reduce((acc, num) => acc + num, 0);
    
    return totalSum - arraySum;
  }
  
 
  let nums = [3, 0, 1];
  console.log(findMissingNumber(nums));  
  