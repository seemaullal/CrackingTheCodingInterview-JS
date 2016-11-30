/*
Problem: Impletement a MyQueue class which implements a queue using two stacks
*/

var MyQueue = function(){
	this.current = [];
	this.empty = [];
};

MyQueue.prototype.enqueue = function(val){
	this.current.push(val);
};
//runtime O(1)

MyQueue.prototype.dequeue = function(){
	var currentVal;
	while (this.current.length > 1) {
		this.empty.push(this.current.pop());
	}
	var result = this.current.pop();
	while (this.empty.length > 0) {
		this.current.push(this.empty.pop());
	}
	return result;
};
//runtime O(n)