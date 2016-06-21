/*
Problem:  Implement a MyQueue class which imprements a queue using two stacks
*/

var myQueue = function(stack1, stack2) {
	this.newestStack = new Stack(stack1);
	this.oldestStack = new Stack(stack2);
}

//pushing adds value to newer stack
myQueue.prototype.push = function(val) {
	this.newestStack.push(val);
}

//shift values to oldest stack if it is empty for peek() and pop() operations
myQueue.prototype.shift = function(){
	if (this.olderStack.size() === 0) {
		while (this.newestStack.size() > 0) {
			var curr = this.newestStack.pop();
			this.oldestStack.push(curr);
		}
	}
}

//peek from oldest stack where oldest values are on top
myQueue.prototype.peek = function() {
	myQueue.shift();
	return this.oldestStack.peek();
}

//pop from older stack
myQueue.prototype.pop = function(){
	myQueue.shift();
	return this.oldestStack.pop();
}

//size is the two stacks combined
myQueue.prototype.size = function(){
	return this.newestStack.size() + this.oldestStack.size()
}

myQueue.prototype.isEmpty = function() {
	return (this.newestStack.size() === 0) && (this.oldestStack.size() === 0);
}