function rottenOranges(grid) {
    let rows = grid.length, cols = grid[0].length;
    let queue = [];
    let fresh = 0;
    let minutes = 0;
  
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === 2) queue.push([r, c]);
        if (grid[r][c] === 1) fresh++;
      }
    }
  
    let directions = [[0,1], [1,0], [0,-1], [-1,0]];
    
    while (queue.length > 0 && fresh > 0) {
      let size = queue.length;
      minutes++;
  
      for (let i = 0; i < size; i++) {
        let [r, c] = queue.shift();
        for (let [dr, dc] of directions) {
          let nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
            grid[nr][nc] = 2;
            queue.push([nr, nc]);
            fresh--;
          }
        }
      }
    }
  
    return fresh === 0 ? minutes : -1;
  }
  
  console.log(rottenOranges([
    [2,1,1],
    [1,1,0],
    [0,1,1]
  ])); 
  