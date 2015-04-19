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



