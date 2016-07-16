/*
Problem: Given a circular linked list, implement an algorithm which returns the node at the beginning of the loop.
*/

//built on top of linked list in data structures
LinkedList.prototype.findLoop = function() {
	var n = this.head;
	var storedValues = [];
	var res = null;
	while (n) {
		if (storedValues.indexOf(n.data) < 0) {
			storedValues.push(n.data);
			n = n.next;
		} else {
			res = n.data;
			break;
		}
	}
	return res;
};

//runtime: n^2