/*
Problem: Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
*/

var Graph = function(){
  this.nodes = [];
}

Graph.prototype.addNode = function(node){
  this.nodes.push(node);
}

var GraphNode = function(data) {
  this.data = data;
  this.edges = [];
}

GraphNode.prototype.addEdge = function(node) {
  this.edges.push(node);
}

Graph.prototype.checkConnection = function(startNode, endNode) {
  var connected = false;
  var graph = this;

  //reduce potential runtime by storing edges we've already checked
  var checkedEdges = [];
  var checkEdge = function(edge) {
  	if (connected !== false) return;
  	if (edge.data === endNode.data) {
      connected = true;
      return;
    }
    else if (edge.edges.length === 0 || checkedEdges.indexOf(edge.data) > -1) return;
    else {
    	checkedEdges.push(edge.data);
    	return edge.edges.forEach(function(subEdge){ return checkEdge(subEdge)})
    }
  }
  checkEdge(startNode, endNode)
  
  return connected;
}

//runtime: O(n)