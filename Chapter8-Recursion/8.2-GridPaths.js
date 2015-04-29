/*
Problem: Imagine a robot sitting on the upper left hand corner of an NxN grid. The robot can
only move in two directions: right and down. How many possible paths are there for
the robot?
*/


//n represents the size of the length and width of an NxN grid
//memoizing so memory overflow does not happen
var numPaths = { };
function getPaths(n, xPos, yPos) {
	var xPos = xPos || 0;
	var yPos = yPos || 0;
	if (xPos === n) //if at max xPos, you have only 1 option- go down
		return 1; 
	if (yPos === n) //if at max yPos, you have to go right 
		return 1;
	//otherwise, you can either go right or go down
	return memoize(n, xPos + 1, yPos) + memoize(n, xPos, yPos + 1);
}

function memoize(n,  xPos, yPos) {
	if (numPaths[[n,xPos,yPos]])
		return numPaths[[n,xPos,yPos]];
	numPaths[[n,xPos,yPos]] = getPaths(n,xPos,yPos);
	return numPaths[[n,xPos,yPos]];
}