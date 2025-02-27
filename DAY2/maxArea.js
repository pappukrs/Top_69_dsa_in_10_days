//Container with Most Water - LeetCode

function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxWater = 0;
    
    while (left < right) {
      let width = right - left;
      let minHeight = Math.min(height[left], height[right]);
      maxWater = Math.max(maxWater, width * minHeight);
      
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }
    
    return maxWater;
  }
  
  
  let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  console.log(maxArea(height)); 

  // Time complexity: O(n)
  // Space complexity: O(1)
  