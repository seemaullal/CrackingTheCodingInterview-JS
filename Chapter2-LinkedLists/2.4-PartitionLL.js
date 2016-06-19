/*
Problem:  Write code to partition a linked list around a value x, such that all nodes less than x 
come before all nodes greater than or equal to x.
*/

/*
@params{firstElement} - first element in the list
@params{x} value to partition around
*/

function partitionLinkedList(firstElement, x) {
	var prev = null;
	var curr = firstElement;
	var headNode = firstElement;

	//if val is less than the partition, set it as the head to move it left
	while ( prev.next ) {
		if ( curr.val < x ) {
			prev.next = curr.next;
			curr.next = headNode;
			headNode = curr;
		}
		prev = curr;
		curr = curr.next;
	}
}

//example: 3->10->11->2, paritioned around 5 becomes 2->3->10->11