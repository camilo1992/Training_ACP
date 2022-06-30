class Graph {
  constructor() {
    this.adjancencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjancencyList[vertex]) {
      this.adjancencyList[vertex] = [];
      return true;
    }
    return false;
  }
}

const myGraph = new Graph();

console.log(myGraph);
