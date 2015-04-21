/*
Problem: Write a program to sort a stack in ascending order (with biggest items on top).
You may use at most one additional stack to hold items, but you may not copy the elements into any other data structure (such as an array). 
The stack supports the following operations: push, pop, peek, and isEmpty 
*/

//this is the actual solution of the problem
Stack.prototype.sort = function() {
	var currStack = this;
	console.log(currStack);
	var helperStack = new Stack();
	while (!currStack.isEmpty()) { //move all elements from the stack into the helper stack, reordering the helper stack each time
		if (!helperStack.top) {
			helperStack.push(currStack.pop()); //insert initial element from top of stack into helper stack 
			continue;
		}
		helperStack.push(currStack.pop());
		var node = helperStack.top;
		while (node.next && node.data < node.next.data) { //swap until element is in correct position
			var curVal = node.data;
			node.data = node.next.data;
			node.next.data = curVal;
			node = node.next;
		}
	}
	this.top = helperStack.top; //this will effectively make the current stack the helper stack
	return helperStack;
};

//the following is just an implementation of a Stack with the allowed methods so that I could test my solution
function Node(data) {
	this.data = data;
	this.next = null;
}

function Stack() {
	this.top = null;
}

Stack.prototype.push = function(value) {
	var newNode = new Node(value);
	if (!this.top)  { //inserting into empty queue
		this.top = newNode;
	} else {
		newNode.next = this.top;
		this.top = newNode;
	}
};

Stack.prototype.pop = function() {
	if (!this.top) {
		return null; //empty queue
	}
	var popped = this.top.data;
	this.top = this.top.next; //this will either be the next node of the top element or null (if the Stack only had 1 element)
	return popped;
};

Stack.prototype.peek = function() {
	if (!this.top) return null;
	return this.top.data;
};

Stack.prototype.isEmpty = function() {
	if (!this.top) return true;
	return false;
};