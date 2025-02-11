function mergeIntervals(intervals) {
    if (intervals.length <= 1) return intervals;
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    let merged = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
      let last = merged[merged.length - 1];
      if (intervals[i][0] <= last[1]) {
        last[1] = Math.max(last[1], intervals[i][1]);
      } else {
        merged.push(intervals[i]);
      }
    }
    
    return merged;
  }
  
  let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
  console.log(mergeIntervals(intervals));  // Output: [[1, 6], [8, 10], [15, 18]]
  