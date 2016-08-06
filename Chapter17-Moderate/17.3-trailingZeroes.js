/*
Problem: Write an algorithm which computes the number of trailing zeroes in n factorial.
*/

function factorial(n) {
	if (n ===1 ) return 1;
	return n * factorial(n-1);
}

function trailingZeroes(n) {
	var count = Math.floor(n/5);
	for (var i = 25; n/i >= 1; i *= 5) {
		count += Math.floor(n/i);
	}
	return count;
}