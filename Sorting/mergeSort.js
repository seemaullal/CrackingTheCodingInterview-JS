function mergeSort(array) {
	if (array.length === 1 || array.length === 0) return array;
	else {
		var midpoint = Math.floor(array.length / 2);
		return merge(mergeSort(array.slice(0, midpoint)), mergeSort(array.slice(midpoint, array.length)));
	}
}

function merge(array1, array2) {
	var result = [];
	var i = 0;
	var j = 0;
	while (i < array1.length || j < array2.length) {
		if (array1[i] >= (array2[j] || 0)) {
			result.push(array1[i]);
			i++;
		} else if (array2[j] > (array1[i] ||0)) {
			result.push(array2[j]);
			j++;
		}
	}
	return result;
}