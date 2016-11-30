function selectionSort(array) {
	for (var i = 0; i < array.length; i++) {
		var min = i;
		for (var k = i + 1; k < array.length; k++) {
			if (array[k] < array[min]) min = k;
		}
		var temp = array[i];
		array[i] = array[min];
		array[min] = temp;
	}
	return array;
}