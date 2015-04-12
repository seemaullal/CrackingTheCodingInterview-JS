/*
A Javascript implementation of a Doubly Linked List (this implementation keeps track of both the head and tail)
Methods include inserting and deleting from both the head and tail
*/

function Node(data, previous, next) {
	this.data = data;
	this.previous = previous;
	this.next = next;
}

function LinkedList() {
	this.head = null;
	this.tail = null;
}

LinkedList.prototype.insertAtHead = function (data) {
	if (!this.head) { //empty list so the new node becomes both the head and the tail
		var newNode = new Node(data,null,null);
		this.head = newNode;
		this.tail = newNode;
	} else {
		var currHead = this.head;
		var newHead = new Node(data, null, currHead);
		currHead.previous = newHead;
		this.head = newHead;
	}
};

LinkedList.prototype.insertAtTail = function (data) { //a 'push' function
	if (!this.tail) { //empty list
		var newNode = new Node(data,null,null);
		this.head = newNode;
		this.tail = newNode;
	} else {
		var currTail = this.tail;
		var newTail = new Node(data,currTail, null);
		currTail.next = newTail;
		this.tail = newTail;
	}
};

LinkedList.prototype.removeHead = function () { //removes the head of the LinkedList and returns its value
	if (!this.head) 
		return; //empty LinkedList
	var value =  this.head.data;
	this.head = this.head.next;
	if (this.head) {
		this.head.previous = null; //if the removed element was not the only node in the LinkedList
	} else {
		this.tail = null; //the only element was removed so we now have an empty LinkedList
	}
	return value;
};

LinkedList.prototype.removeTail = function () { //remove the tail of the LinkedList and return its value
	if (!this.tail) 
		return; //empty LinkedList
	var value = this.tail.data;
	this.tail = this.tail.previous;
	if (this.tail) { //check if the LinkedList is non empty
		this.tail.next = null;
	} else {
		this.head = null; //LinkedList is empty now
	}
	return value;
};

LinkedList.prototype.search = function (value) { // returns first node with value or null if value not in LinkedList
	if (!this.head) return null; //empty LinkedList
	var curr = this.head;
	while (curr.data !== value) {   
		if (!curr.next) 
			return null; //at end of LinkedList (element not found)
		curr = curr.next;
	}
	return curr;
};