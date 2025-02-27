function subarraySum(nums, target) {
    let start = 0;
    let currentSum = 0;
    
    for (let end = 0; end < nums.length; end++) {
      currentSum += nums[end];
      
      while (currentSum > target) {
        currentSum -= nums[start++];
      }
      
      if (currentSum === target) {
        return nums.slice(start, end + 1);
      }
    }
    
    return [];
  }
  
 
  let nums = [1, 2, 3, 7, 5];
  let target = 12;
  console.log(subarraySum(nums, target)); 