function Node(data) {
	this.data = data;
	this.next = null;
}

function Queue() {
	this.first = null;
	this.last = null;
}

Queue.prototype.enqueue = function(value) {
	var newNode = new Node(value);
	if (!this.first) {
		//adding to an empty queue
		this.first = newNode;
		this.last = newNode;
		return;
	}
	this.last.next = newNode;
	this.last = newNode;
};

Queue.prototype.dequeue = function() {
	if (!this.first)
		return null;
	var popped = this.first.data;
	this.first = this.first.next;
	if (!this.first) //removing the only node in the queue
		this.last = null;
	return popped;
};

Queue.prototype.peek = function() {
	if (!this.first) return null;
	return this.first.data;
};