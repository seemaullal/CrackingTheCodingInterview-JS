/*
Write a function to swap a number in place (that is, without any temporary variables).
*/

function switchVals(a,b) {
  if (a > b) {
    a = a - b;
    b = a + b;
    a = b - a;
  }  else if (b > a) {
    b = b - a;
    a = a + b;
    b = a - b;
  }
}