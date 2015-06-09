/*
Problem: Write a method to compute all permutations of a string
*/

function getStringPermutations(str) {
	var permutations = [ ];
	var letters = str.split('');
	getPermutations(letters);
	function getPermutations(letters) {
		permutations.push([letters.shift()]);
		while (letters.length) {
			var curRes = [ ];
			var curLetter = letters.shift();
			permutations.forEach(function (letters) {
				for (var i = 0 ; i <= letters.length ; i++) {
					var tmp = letters.slice();
					tmp.splice(i,0,curLetter);
					curRes.push(tmp);
				}
			});
			permutations = curRes; //permutations needs to now be the results we have just generated
		}
	}
	return permutations.map(function(permutation) {
	    return permutation.join(''); //we want the permutations to be strings not arrays
	}).filter(function (permutation, index, arr) {
	    return arr.indexOf(permutation) === index; //only want unique values
	});
}
