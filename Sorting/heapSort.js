var Heap = function(){
	this.heap = [];
}

Heap.prototype.insert = function(data) {
	if (!this.heap.length) {
		this.heap.push(data);
	}
	else {
		var i = this.heap.length;
		var parent = Math.floor(i/2);
		this.heap[i] = data;
		while (data > this.heap[Math.floor(i/2)] && i > 0){
			var temp = this.heap[Math.floor(i/2)];
			this.heap[ Math.floor(i/2)] = data;
			this.heap[i] = temp;
			i = Math.floor(i/2);
		}
	}
};

Heap.prototype.remove = function(){
	var maximum = this.heap[0];
	var n = this.heap.pop();
	if (n === maximum) return n;
	this.heap[0] = n;
	var i = 0;
	while (n < this.heap[2*i + 1] || n < this.heap[2*i + 2]){
		var largest = this.heap[2*i +1] > (this.heap[2 * i + 2] || 0) ? 2*i + 1 : 2*i + 2;
		this.heap[i] = this.heap[largest];
		this.heap[largest] = n;
		i = largest;
	}
	return maximum;
};

function heapSort(array) {
	var heap = new Heap();
	var result = [];
	while (array.length > 0) {
		var n = array.pop();
		heap.insert(n);
	}
	while (heap.heap.length > 0) {
		result.push(heap.remove());
	}
	return result;
}