"use strict";

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    /*
            adjacencyList vertex and neighbours 
                0 => [2]
                1 => [4,5]
                3 => [2,1,0]
                5 => []
        */
    this._adjacencyList = new Map();
  }

  AddNode(vertex) {
    this._adjacencyList.set(vertex, []);
  }

  AddEdge(startVertex, endVertex, weight) {
    if (
      !this._adjacencyList.has(startVertex) ||
      !this._adjacencyList.has(endVertex)
    ) {
      console.log("INVALID NODE");
      return;
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight)); // this values will be stored inside the Edge array
  }

  GetNeighbors(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      console.log("NOT FOUND!");
      throw new Error('__ERROR__ Invalid Vertex', vertex);
    }
    return this._adjacencyList.get(vertex);
  }
  printAll() {
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      console.log('Node', vertex);
      console.log("Edge", edge);
    }
  }
  GetNodes() {
    return this._adjacencyList.entries();
  }
  Size() {
    return this._adjacencyList.size;
  }
  isEmpty() {
    return this._adjacencyList.size > 0 ? false : null;
  }
}

const graph = new Graph();

const two = new Vertex(2);
const three = new Vertex(3);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);

graph.AddNode(two);
graph.AddNode(three);
graph.AddNode(six);
graph.AddNode(seven);
graph.AddNode(eight);

graph.AddNode(two, six);
graph.AddNode(two, three);
graph.AddNode(three, seven);
graph.AddNode(eight, two);
graph.AddNode(three, six);

console.log(graph.GetNeighbors(two));

module.exports = Graph;
