/*
Problem: GIven a sorted (increasing oders) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.
*/

//building off of the BST in Data Structures

var createBST = function(arr){
	if (arr.length === 0) return null;
	var midpoint = Math.floor(arr.length/2);
	var tree = new BST(arr[midpoint]);
	tree.left = createBST(arr.slice(0, midpoint));
	tree.right = createBST(arr.slice(midpoint + 1, arr.length));
	
	return tree;
};

//runtime: O(n)