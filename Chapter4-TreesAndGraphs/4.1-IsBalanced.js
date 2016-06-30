/*
Problem: Implement a function to check if a binary tree is balanced. 
Here that is defined as a tree that the heights of the two subtrees of any node never differ by more than one.
*/

//building off of the binary search tree defined in the structures folder

BST.prototype.isBalanced = function() {
	console.log(this);
	function hasRightAndLeft(node){
		if (!node.right && !node.left) return true;
		else if (node.right && node.left) {
			return true;
		} else {
			return false;
		}
	}

	while (this.left && this.right) {
		return (hasRightAndLeft(this.left) && hasRightAndLeft(this.right))
	}
};