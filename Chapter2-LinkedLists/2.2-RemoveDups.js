/*
Write code to remove duplicates from an unsorted linked list.
*/

function removeDuplicates(firstElement) { //assumes input is the head of the LinkedList (and that it is a singly linked list)
	var values = [firstElement.data]; //first element is not a duplicate
	var prev = firstElement;
	var curr = firstElement.next;
	while (curr) {
		if (values.indexOf(curr.data) !== -1) {
			prev.next = curr.next;
		} else {
			values.push(curr.data);
			prev = curr;
		}
		curr = curr.next;
	}
	return;
}

/*
Example:
1 -> 5 -> 2 -> 1 -> 2 -> 3
values = [1] prev = 1  curr = 5
values = [1,5] prev = 5 curr = 2
values = [1,5,2] prev = 2 curr = 1
values = [1,5,2] prev.next=2 (1 -> 5 -> 2 -> 1 -> 2 -> 3 becomes 1 -> 5 -> 2 -> 2 -> 3)  prev = 2 (1st 2) curr = 2 (2nd 2)
values = [1,5,2] prev.next = 3   prev= 2 (does not change)  curr = 3
values = [1,5,2,3] prev =3 curr = null
*/


