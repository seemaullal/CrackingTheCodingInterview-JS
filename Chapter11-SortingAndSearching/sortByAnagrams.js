/*
Problem: Write a method to sort an array of strings so that all the anagrams are next to each other.
*/

var sortByAnagram = function(array) {
	var hashtable = {};
	array.forEach(function(str){
		var key = str.split('').sort().join('');
		if (hashtable[key]) hashtable[key].push(str);
		else hashtable[key] = [str];
	});
	var result = [];
	for (var k in hashtable) {
		for (var i = 0, len = hashtable[k].length; i < len; i++) {
			result.push(hashtable[k][i]);
		}
	}
	return result;
};

//runtime: n^2 log n