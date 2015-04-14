/*
Problem: Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.
*/

function removeNode(nodeToDelete) { //this will return the value of the node you are 'deleting'
	if (!nodeToDelete) return;
	if (!nodeToDelete.next) //deleting tail of linked list
		throw ("this algorithm does not work for deleting the last node!");
	var deletingNodeData = nodeToDelete.data;
	nodeToDelete.data = nodeToDelete.next.data; //copy the data of the next node
	nodeToDelete.next = nodeTodelete.next.next; 
	return deletingNodeData;
}

