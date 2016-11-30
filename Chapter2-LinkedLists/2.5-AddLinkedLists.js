/*
Problem: You have two numbers represented by a linked list, where each node contains a sinle digit. THe digits are stored in reverse order, such that the 1's digits is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.
*/

function addLinkedList(list1, list2) {
  let newList = new LinkedList();
  let num1 = list1.head;
  let num2 = list2.head;
  var carry = 0;
  while ((num1 && num1.data) || (num2 && num2.data)) {
  	console.log(num1.data)
    if (!num1) num1 = {data: 0};
    if (!num2) num2 = {data: 0};
    let sum = num1.data + num2.data + carry;
    newList.insert(sum % 10)
    carry = sum >= 10 ? 1 : 0;
    num1 = num1.next;
    num2 =num2.next;
  }
  if (carry === 1) {
  	newList.insert(1);
  }
  return newList;
}