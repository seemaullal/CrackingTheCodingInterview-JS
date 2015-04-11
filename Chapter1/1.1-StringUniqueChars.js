function hasUniqueChars(str) {
	//can't have unique characters if string length is greater than the # of possible characters
	if (str.length > 256) return false; 
	for (var i = 0; i< str.length; i++) {
		if (str.indexOf(str[i]) !== str.lastIndexOf(str[i]) || str.lastIndexOf(str[i]) !== i) {
			return false;
		}
	}
	return true;
}