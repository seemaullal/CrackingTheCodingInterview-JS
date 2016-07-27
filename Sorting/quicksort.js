var partition = function(array, left, right) {
	var midpoint = Math.ceil((right + left)/2);
	var pivot = array[midpoint];
	while (left < right) {
		while (array[left] < pivot) {
			left ++;
		}
		
		while (array[right] > pivot) {
			right --;
		}
		if (left < right ) {

			swap(array, left, right);
		}
	}
	return left;
};

var swap = function(array, index1, index2) {
	var temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
};

var quickSort = function(array, left, right) {
	if (!left) left = 0;
	if (!right) right = array.length - 1;
	var pivot = partition(array, left, right);
	if (left < pivot - 1) {
		quickSort(array, left, pivot -1 );
	}
	if (right > pivot + 1) {
		quickSort(array, pivot, right);
	}
	return array;
};