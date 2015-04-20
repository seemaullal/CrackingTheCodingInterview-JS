/*
Problem: How would you design a stack which, in addition to push and pop, also has a function min which returns the minimum element? Push, pop and min should all operate in O(1) time.

Comment: Below is my original solution but the solution in CTCI is much more efficient. They use a second stack to keep track of the minimum values. Using an object (as I did) is less scalable due to the memory that the object uses. 
*/

function Node(value) {
	this.value = value;
}

function stackWithMin() {
	this.top = null;
	this.minValues = { };
}

stackWithMin.prototype.push = function(value) {
	var newNode = new Node(value);
	if (!this.top) { //pushing to an empty stack
		this.top = newNode;
		this.minValues[value] = [value] //the minimum of stack with the current element on top is just the current element
	} else {
		var min = Math.min(value, this.minValues[this.top.value][0]);
		if (!this.minValues[value]) this.minValues[value] = [min]; //no previous elements in the stack with the current value
		else this.minValues[value].unshift(min);
		newNode.next = this.top;
		this.top = newNode;
	}
};

stackWithMin.prototype.pop = function() {
	if (!this.top) return null; //empty stack
	var popped = this.top.value;
	if (this.minValues[popped].length === 1) //remove the minValue for the element being popped
		delete this.minValues[popped]
	else //there is at least 1 other element in the stack with the value being removed so we still want to track that
		this.minValues[popped].splice(0,1);
	this.top = this.top.next;
	return popped;
};

stackWithMin.prototype.getMin = function() {
	if (!this.top) throw('Empty stack does not have a minimum!'); //could also just return null or the max integer value
	return this.minValues[this.top.value][0];
}

