/*
Problem: Write a method to shuffle a deck of cards. It must be a perfect shuffle-each of the 52! permutations of the deck has to be equally likely.
* Assume that you are given a random number generator which is perfect.
*/

var shuffle = function(arr, n) {
	if (!n) n = 0;
	if (arr.length === n) return arr;
	else {
    //sub this with whatever random number generator is provided
		var random = Math.floor(Math.random() * n);
		var newVal = arr[random];
		arr[random] = arr[n];
		arr[n] = newVal;
		return shuffle(arr, n+1);
	};
};