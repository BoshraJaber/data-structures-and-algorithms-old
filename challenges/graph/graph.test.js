"use strict";
let Graph = require("./graph.js");

describe("Graph Implementation", () => {
  //Node can be successfully added to the graph
  it("should successfully add a Node to the graph", () => {
    let graph = new Graph();
    graph.AddNode(3);
    expect(graph.Size()).toBe(1);
  });
  //An edge can be successfully added to the graph
  it("should successfully add an edge to the graph", () => {
    let graph = new Graph();
    graph.AddNode(3);
    graph.AddNode(5);
    graph.AddEdge(3, 5, 1);
    // console.log(graph. GetNeighbors(3)[0].weight);
    expect(graph.GetNeighbors(3)[0].weight).toBe(1);
  });
  // A collection of all nodes can be properly retrieved from the graph
  it("should successfully retrieved A collection of all nodes from thr graph", () => {
    let graph = new Graph();
    graph.AddNode(3);
    graph.AddNode(5);
    // console.log(graph.GetNodes() );
    expect(graph.GetNodes()).toBeDefined();
  });
// All appropriate neighbors can be retrieved from the graph
it("should successfully retrieved All appropriate neighbors from thr graph", () => {
    let graph = new Graph();
    graph.AddNode(3);
    graph.AddNode(5);
    graph.AddEdge(3, 5, 1);
    expect(graph.GetNeighbors(3)[0].vertex).toBe(5);
  });
// Neighbors are returned with the weight between nodes included
it("should successfully return weight between two neighbors nodes", () => {
    let graph = new Graph();
    graph.AddNode(3);
    graph.AddNode(5);
    graph.AddEdge(3, 5, 8);
    expect(graph.GetNeighbors(3)[0].weight).toBe(8);
  });
// The proper size is returned, representing the number of nodes in the graph
  it("should successfully return the proper size of the graph, representing the number of nodes in the graph", () => {
    let graph = new Graph();
    graph.AddNode(9);
    graph.AddNode(7);
    graph.AddEdge(9, 7);
    expect(graph.Size()).toEqual(2);
  });
// A graph with only one node and edge can be properly returned
it("should successfully return the graph with one node and one edge", () => {
    let graph = new Graph();
    graph.AddNode(9);
    graph.AddEdge(9,9,2);
    expect(graph.Size()).toEqual(1);
  });
  // An empty graph properly returns null
  it("should successfully return null when the graph is empty graph", () => {
    let graph = new Graph();
    expect(graph.isEmpty()).toBeNull();
  });
});





