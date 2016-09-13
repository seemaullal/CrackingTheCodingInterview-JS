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

/*
Follow Up: Imagine certain spots are 'off limits', such that the robot cannot step on them.
Design an algorithm to find a path for the robot from the top left to the bottom right;
*/

var findPath = function(x,y,forbiddenArray) {
	var path = [];
	//cache so that we do not iterate over the same point twice
	var cache = {};
	
	var isForbidden = function(x, y) {
		var res = false;
		for (var i = 0; i < forbiddenArray.length; i++) {
			if (forbiddenArray[i][0] === x && forbiddenArray[i][1] === y) {
				if (!cache[x]) cache[x] = {};
				cache[x][y] = false;
				res = true;
				break;
			} else {
				if (!cache[x]) cache[x] = {};
				cache[x][y] = true;
			}
		}
		return res;
	};

	var existsPath = function(x,y,forbiddenArray) {
		if (x < 0 || y < 0) return false;
		if (cache[x] && cache[x][y]) return cache[x][y];
		if (isForbidden(x,y)) return false;
		
		if ((x ===0) && (y === 0)) {
			path.push([0,0]);
			return true;
		}
		
		if (existsPath(x-1, y, forbiddenArray) || existsPath(x, y-1, forbiddenArray)){
			path.push([x,y]);
			if (!cache[x]) cache[x] = {};
			cache[x][y] = true;
			return true;
		}
		
		return false;
	};
	
	existsPath(x,y,forbiddenArray);
	
	return path;
};//runtime: O(x * y)