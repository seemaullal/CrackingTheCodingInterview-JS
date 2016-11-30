/*
Problem: You are given two sorted arrays, A and B, where A has a large anough buffer at the end to hold B. Write a method to merge B into A in sorted order.
*/

/** ex:
A-[1,5,10,20]
B- [0,2,6,7,11,25]
output - [ 0, 1, 2, 5, 6, 7, 10, 11, 20, 25 ]
**/

//javascript has no native array insert method so create one here
Array.prototype.insert = function(index, item) {
  return this.splice(index, 0, item)
}

//binary search through array to find where to insert value
function insertVal(low, high, key, array) {
	//key is higher than highest val - insert @ end
  if (key > array[high]){
  	return high + 1;
  }
  //key is lower than lowest in array - insert @ beginning
  if (low === 0 && key < array[0]) {
  	return -1;
  }
  //comparison point
  var midPoint = Math.ceil((high - low) / 2 + low);
  
  if (key < array[midPoint]) {
  	if (key > array[midPoint - 1]) {
  		return midPoint - 1;
  	}
    return insertVal(low, midPoint, key, array);
  } else if (key > array[midPoint]) {
  	if (key < array[midPoint + 1]) {
  		return midPoint;
  	}
    return insertVal(midPoint, high, key, array);
  }
}

function mergeTwoArrays(A, B) {
  let low = 0;
  let high = A.length -1;
  B.forEach(val => {
    let index = insertVal(low, high, val, A);
    low = index;
    high ++;
    return A.insert(index + 1, val);
  })
  return A;
}

//Runtime: n log log n