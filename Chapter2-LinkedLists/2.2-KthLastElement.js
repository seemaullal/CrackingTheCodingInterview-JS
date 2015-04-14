/*
Problem: Implement an algorithm to find the kth to last element of a singly linked list.
*/

//input is the head of the LinkedList (as a node) and an integer k (the kth element from the end will be returned; k=1 returns the last element)
function kthLastElement(head, k) { 
	if (!head || k<= 0) return; //empty linked list or invalid input for k
	var curr = head;
	var kthNode = head;
	for (var i=1; i<=k; i++) {
		if (!kthNode) return null; //in case there are fewer than k nodes
		kthNode = kthNode.next;
	}
	while (kthNode) {
		curr = curr.next;
		kthNode = kthNode.next;
	}

	return curr;

}



/*
1 -> 5 -> 6 -> 8 -> 9 -> 2 -> 4 k=3 (should return node w/ 9)
curr = 1, kth = 8
       5        9
       6        2
       8        4
       9      null
*/