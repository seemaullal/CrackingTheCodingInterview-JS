/*
A Javascript implementation of a Singly Linked List with methods for insertion (at the end of the Linked List), search, and deletion
*/

function Node(data, next) {
	this.data = data;
	this.next = next;
}

function LinkedList() {
	this.head = null;
}

LinkedList.prototype.insert = function (data) { //inserts node with value of data at end of linked list
	if (!this.head) {
		var newHead = new Node(data,null);
		this.head = newHead;
	} else {
		var curr = this.head;
		while (curr.next) {
			curr = curr.next; //iterate until you have the last element (the tail of the LinkedList)
		}
		var newNode = new Node(data,null);
		curr.next = newNode;
	}
};

//this delete function will remove the first node with the value (can be modified to remove multiple/all nodes w/ value instead if desired)
LinkedList.prototype.delete = function (valToDelete) {
	if (!this.head) return; //empty LinkedList
	if (this.head.data === valToDelete) { //remove the head
		this.head = this.head.next;
		return;
	}
	var curr = this.head;    
	while (curr.next.data !== valToDelete) {
		if (curr.next === null) 
			return; //on the last node so stop iterating (value not found)
		curr = curr.next;
	}
	curr.next = curr.next.next;
	return;
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