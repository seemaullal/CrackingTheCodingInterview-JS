/*
Problem: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
write a method to rotate the image by 90 degrees.
Can you do this in place?
*/

/*
ex: input [[0,1,0], [0,1,0], [0,0,0]] returns [ [ 0, 0, 0 ], [ 0, 1, 1 ], [ 0, 0, 0 ] ]
*/

function rotateNinety(matrix) {
  const N = matrix.length;
  var floor = Math.floor(N/2);
  var ceil = Math.ceil(N/2);
  x = 0;
  y = 0;
  while (x < floor) {
  	while(y < ceil) {
  		let temp = matrix[x][y];
  		matrix[x][y] = matrix[N-y-1][x];
  		matrix[N-y-1][x] = matrix[N-x-1][N-y-1];
  		matrix[N-x-1][N-y-1] = matrix[y][N - x-1];
			matrix[y][N - x-1] = temp;
			y++;
		}
  	x++;
  }
  return matrix;
}

//runtime: O(n^2)