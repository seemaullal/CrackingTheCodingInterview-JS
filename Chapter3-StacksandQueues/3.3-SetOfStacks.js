/*
Problem:  Imagine a (literal) stack of plates. If the stack gets too high, it migh t topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. 

SetOfStacks.push() and SetOfStacks.pop () should behave identically to a single stack (that is, pop () should return the same values as it would if there were just a single stack).
*/

function Node(value) {
	this.value = value;
}

function Stack() {
	this.top = null;
	this.length = 0;
}

Stack.prototype.push = function(value) {
	var newNode = new Node(value);
	if (!this.top) {
		this.top = newNode;
	} else {
		newNode.next = this.top;
		this.top =newNode;
	}
	this.length ++;
};

Stack.prototype.pop = function() {
	if (!this.top) return null;
	var popped = this.top.value;
	this.top = this.top.next;
	this.length--;
	return popped;
};

Stack.prototype.peek = function() {
	if (!this.top) return null;
	return this.top.value;
};

function setOfStacks(maxValue) {
	this.maxValue = maxValue || 10; //set a default max value of  10 if no max value is provided
	this.stackOfStacks = new Stack();
	this.currentStack = null;
}

setOfStacks.prototype.push = function(value) {
	var newNode = new Node(value);
	if (!this.currentStack || this.currentStack.length === this.maxValue) { //need to create a new stack
		var newStack = new Stack();
		newStack.push(new Node(value));
		this.stackOfStacks.push(newStack);
		this.currentStack = this.stackOfStacks.peek();
	} else {
		this.currentStack.push(newNode);
	}
};

setOfStacks.prototype.pop = function() {
	if (!this.currentStack) return null;
	var popped = this.currentStack.pop();
	if (!this.currentStack.length) { //current stack is now empty so remove it
		this.stackOfStacks.pop();
		this.currentStack = this.stackOfStacks.peek();
	}
	return popped;
};

setOfStacks.prototype.peek = function() {
	if (!this.currentStack) return null;
	return this.currentStack.peek();
};