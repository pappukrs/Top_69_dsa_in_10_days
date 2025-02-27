
//Boyer-Moore Voting Algorithm. 
//(O(n) time, O(1) space)

function majorityElement(nums) {
    let count = 0;
    let candidate = null;
    
    for (let num of nums) {
      if (count === 0) {
        candidate = num;
      }
      count += (num === candidate) ? 1 : -1;
    }
    
    return candidate;
  }
  
 



  //key -value pair approach


  function majorityElement(nums) {
    let countMap = {};
    let majorityCount = Math.floor(nums.length / 2);
  
    for (let num of nums) {
      countMap[num] = (countMap[num] || 0) + 1;
      if (countMap[num] > majorityCount) {
        return num;
      }
    }
  }



  //using map


  function majorityElement(nums) {
    let countMap = new Map();
    let majorityCount = Math.floor(nums.length / 2);
  
    for (let num of nums) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
      if (countMap.get(num) > majorityCount) {
        return num;
      }
    }
  }


  //(O(n) time, O(n) space) 





  let nums = [2, 2, 1, 1, 1, 2, 2];
  console.log(majorityElement(nums)); 
  
  
  