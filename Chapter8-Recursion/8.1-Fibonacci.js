/*
Problem: Write a method to generate the nth Fibonacci number.
*/

function getFib(n) {
    if (n < 0) 
    	throw new TypeError("Input must be positive!");
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return getFib(n-1) + getFib(n-2);
}