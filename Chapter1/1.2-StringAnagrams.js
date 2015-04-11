function areAnagrams(str1,str2) {
	if (str1.length !== str2.length) return false;
	var str1Chars = str1.split('').sort(); //get sorted characters of the strings
	var str2Chars = str2.split('').sort();
	var isAnagram = true;
	str1Chars.forEach(function (curChar, index) {
		if (str2Chars[index] !== curChar) //every array position should be equal if the strings are anagrams
		    isAnagram = false;
	});
	return isAnagram;
}