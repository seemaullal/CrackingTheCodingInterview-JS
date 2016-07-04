/*
Problem: In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of different sixez which can slide onto any tower. The puzzle starts with. The puzzle starts wtih disks sorted in ascending order of size from top to bottom (each disk sits on top of an even larger one). You have the following constraints:
1. Only one disk can be moved at a time.
2. A disk is slid off the top of one tower onto the next rod.
3. A disk can onle be placed on top of a larger disk.

Write a program to move the disks from the first to the last using Stacks.
*/

/**
@params: Three stacks, extends stack in data structure.
**/
function moveDisks(origin, buffer, destination) {
 while(origin.top) {
    var top = origin.pop();
    moveDisks(origin, buffer, destination);
    destination.push(top);
    moveDisks(buffer, origin, destination);
  }
}
