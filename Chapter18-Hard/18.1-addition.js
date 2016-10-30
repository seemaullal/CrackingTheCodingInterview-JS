/*
Write a function that adds two numbers. You should not use + or any arithmetic operators.
*/

//convert numbers to binary in order to perform operations on them
function add(num1, num2) {
  let bin1 = num1.toString(2);
  let bin2 = num2.toString(2);
  return parseInt(addBinary(bin1, bin2), 2);
}

//recursively add binary numbers using XOR and AND
function addBinary(bin1, bin2) {
  if (bin2 === 0) return bin1;
  let sum = bin1 ^ bin2;
  let carry = (bin1 & bin2) << 1;
  return addBinary(sum, carry);
}