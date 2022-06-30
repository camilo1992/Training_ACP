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

  addEdge(vertex1, vertex2) {
    if (this.adjancencyList[vertex1] && this.adjancencyList[vertex2]) {
      this.adjancencyList[vertex1].push(vertex2);
      this.adjancencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjancencyList[vertex1] && this.adjancencyList[vertex2]) {
      //this.adjancencyList[vertex1][vertex2] = null;
      //this.adjancencyList[vertex2][vertex1] = null;
      this.adjancencyList[vertex1] = this.adjancencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjancencyList[vertex2] = this.adjancencyList[vertex2].filter(
        (v) => v !== vertex1
      );
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (this.adjancencyList[vertex]) {
      while (this.adjancencyList[vertex].length) {
        let temp = this.adjancencyList[vertex].pop();
        this.removeEdge(vertex, temp);
      }
      delete this.adjancencyList[vertex];
      return this;
    }
    return undefined;
  }
}

const myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");

myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("C", "D");
myGraph.addEdge("B", "D");
myGraph.addEdge("A", "D");
console.log(myGraph);
