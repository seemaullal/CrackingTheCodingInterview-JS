/*
Problem: Write a method to replace all spaces in a string with '%20'.
*/
/*
This could be done fairly simply by using the String.replace() function. 
I elected to not do that for the sake of making this problem a little less trivial
*/

function replaceWhiteSpace(str) {
	var outputArr = [ ];
	for (var i=0; i< str.length; i++) {
		if (str[i] === ' ') {
			outputArr.push('%'); //alternatively, you could push '%20' as one string
			outputArr.push('2');
			outputArr.push('0');
		}
		else outputArr.push(str[i]);
 	}
 	return outputArr.join('');
}
