function largestRectangleArea(heights) {
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    let minHeight = heights[i];
    for (let j = i; j < heights.length; j++) {
      minHeight = Math.min(minHeight, heights[j]);
      max = Math.max(max, minHeight * (j - i + 1));
    }
  }
  return max;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
// Time Complexity: O(n^2)