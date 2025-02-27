function convert(s, numRows) {
    if (numRows === 1) return s;
    
    let rows = Array.from({ length: Math.min(numRows, s.length) }, () => "");
    let curRow = 0, goingDown = false;
  
    for (let char of s) {
      rows[curRow] += char;
      if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
      curRow += goingDown ? 1 : -1;
    }
  
    return rows.join('');
  }
  
  console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
  