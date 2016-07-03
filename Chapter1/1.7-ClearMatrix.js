/*
Problem: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
*/

/*
ex: input [ [1 ,2, 3], [0, 0, 4], [5, 6, 7] ] returns [ [ 0, 0, 3 ], [ 0, 0, 0 ], [ 0, 0, 7 ] ]
*/

function clearZeroes(matrix) {
	//create empty row to use later on
  var emptyRow = matrix[0].map(function(){
    return 0;
  })
  
  //store columns to check if column has already been cleared
  var emptyColumnArray = [];
  
  var emptyColumns = function(index) {
    emptyColumnArray.push(index);
    matrix.forEach(function(row, i) {
      matrix[i][index] =  0;
    })
  }

  matrix.forEach((row,j) => {
    for (let i = 0, len = row.length; i < len; i++) {
      if (row[i] === 0 && emptyColumnArray.indexOf(i) === -1) {
        emptyColumns(i);
        matrix[j] = emptyRow;
        //break out of loop since we already cleared the entire row
        i = -1;
      }
    }
  })

  return matrix;
}

//runtime: O(n^2)
