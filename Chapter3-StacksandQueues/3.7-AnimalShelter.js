/*
Problem: An animal shelter holds only dogs and cats, and operates on a strictly 'first in, first out' basis. People must adopt either the 'oldest' (based on arrival time) of all animals at the shelter, or they can selected whether they would prefer a dog or a cat (and will receive the oldest anumal of that type). They cannot selected which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog and dequeueCat.
*/
function Shelter(){
	this.head = null;
	this.tail = null;
}

Shelter.prototype.enqueue = function(type, name) {
	var data = {
		type: type,
		name: name
	};
	if (!this.tail) {
		var newNode = new Node(data, null, null);
		this.head = newNode;
		this.tail = newNode;
	} else {
		var currTail = this.tail;
		var newTail = new Node(data, currTail, null);
		currTail.next = newTail;
		this.tail = newTail;
	}
};

function Node(data, previous, next) {
	this.data = data;
	this.previous = previous;
	this.next = next;
}

Shelter.prototype.dequeueAny = function () { //remove the tail and return its value
	if (!this.tail) 
		return;
	var value = this.tail.data;
	this.tail = this.tail.previous;
	if (this.tail) {
		this.tail.next = null;
	} else {
		this.head = null;
	}
	return value;
};

Shelter.prototype.dequeueCat = function(){
	if (!this.tail) return;
	var last = this.tail;
	while (last.data.type !== 'cat') {
		last = last.previous;
	}
	var animal = last.data;
	var temp = last.previous;
	if (last.previous) last.previous.next = last.next;
	last.next.previous = temp;
	return animal;
}

Shelter.prototype.dequeueDog = function(){
	if (!this.tail) return;
	var last = this.tail;
	while (last.data.type !== 'dog') {
		last = last.previous;
	}
	var animal = last.data;
	var temp = last.previous;
	if (last.previous) last.previous.next = last.next;
	last.next.previous = temp;
	return animal;
}