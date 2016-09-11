var BST = function(val) {
	this.val = val;
};

BST.prototype.contains = function(val) {
	var curr = this;
	var found = false;
	
	while(!found && curr) {
		if (val === curr.val) {
			found = true;
		}
		if (val > curr.val){
			curr = curr.right;
		} else if (val < curr.val) {
			curr = curr.left;
		}
	}
	return found;
};

BST.prototype.insert = function(val){
	var valNode = new BST(val);
	
 	while(true) {
 		if (val < this.val) {
 			if (!this.left) {
 				this.left = valNode;
 				break;
 			} else {
 				return this.left.insert(val);
 			}
 		} else if (val > this.val) {
 			if (!this.right) {
 				this.right = valNode;
 				break;
 			} else {
 				return this.right.insert(val)
 			}
 		} else return;
 	}
};

BST.prototype.traverse = function(process){
	function processNode(node) {
		if (node.left) {
			processNode(node.left)
		}
		process.call(this, node.val);
		if (node.right) {
			processNode(node.right);
		}
	}
	processNode(this);
};

BST.prototype.size = function(){
	var length = 0;
	
	this.traverse(function(node){
		length ++;
	});
	return length;
};

BST.prototype.toArray = function(){
	var array = [];
	
	this.traverse(function(node){
		array.push(node.val);
	});
	return array;
};

BST.prototype.remove = function(value) {
	var curr = this;
	var parent = null;
	var found = false;
	var direction = null;
	while (!found) {
	 	if ( value === curr.val) {
	 		found = true;
	 	}
	 	if (value < curr.val) {
	 		parent = curr;
	 		direction = 'left';
	 		curr = curr.left;
	 	} else if (value > curr.val) {
	 		parent = curr;
	 		direction = 'right';
	 		curr = curr.right;
	 	}
	}
	//no children - just remove node
	if (!curr.left && !curr.right) {
		parent[direction] = null;
	//two children
	} else if (curr.left && curr.right) {
		var opposite = direction === 'right' ? 'left' : 'right';
		var last = curr[opposite];
		while (last[opposite]) {
			last = last[opposite];
		}
		curr.val = last.val;
		
		if (direction === 'left') {
			last = curr.right;
			while (last.right) {
				last = last.right;
			}
			curr.val = last.val;
		}
	//one child - replace node with child
	} else {
		if (direction === 'left') {
			if (curr.left) parent.left = curr.left;
			else parent.left = curr.right;
		} else {
			if (curr.left) parent.right = curr.left;
			else parent.right = curr.right;
		}
	}
}