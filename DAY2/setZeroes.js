

function setZeroes(matrix) {
    let rowSet = new Set();
    let colSet = new Set();
    
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] === 0) {
          rowSet.add(i);
          colSet.add(j);
        }
      }
    }
    
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (rowSet.has(i) || colSet.has(j)) {
          matrix[i][j] = 0;
        }
      }
    }
    
    return matrix;
  }





  function setZeroes(matrix) {
    let isColZero = false;
    let rows = matrix.length;
    let cols = matrix[0].length;
  
    for (let i = 0; i < rows; i++) {
      if (matrix[i][0] === 0) isColZero = true; 
      for (let j = 1; j < cols; j++) {
        if (matrix[i][j] === 0) {
          matrix[i][0] = 0; 
          matrix[0][j] = 0;  
        }
      }
    }
  
    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
  
    
    if (matrix[0][0] === 0) {
      for (let j = 0; j < cols; j++) {
        matrix[0][j] = 0;
      }
    }
  
    
    if (isColZero) {
      for (let i = 0; i < rows; i++) {
        matrix[i][0] = 0;
      }
    }
  
    return matrix;
  }
  
  
  let matrix = [[1, 1, 1],[1, 0, 1], [1, 1, 1]];
  console.log(setZeroes(matrix)); 
  