/*
Problem: Implement a method to perform basic string compression using the counts of
repeated characters. For example, the string aabcccccaaa would become
a2blc5a3. If the "compressed" string would not become smaller than the original
string, your method should return the original string.
*/

function stringCompression(str) {
	var compressedString = '';
	for (var i = 0; i < str.length; i++) {
		var curLetter = str[i];
		var curCount = 1;
		while (str[i+1] === curLetter) {
			curCount++;
			i++;
		}
		compressedString += curLetter + curCount;
	}
	if (compressedString.length > str.length) return str;
	return compressedString;
}
