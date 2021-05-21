# Graphs
* A graph is a non-linear data structure that can be looked at as a collection of vertices (or nodes) potentially connected by line segments named edges.

![](https://www.geeksforgeeks.org/wp-content/uploads/undirectedgraph.png)
  
## Graphs applications:
* used to visually illustrate relationships in the data.
* Electrical Engineering: used in designing of circuit connections
* Google Search
* Google Maps: various locations are represented as vertices or nodes and the roads are represented as edges
* GPS
* social media
  > Find more application of Graphs [Here](https://www.javatpoint.com/graph-theory-applications)

## Challenge
* Implementing a Graph represented as an adjacency list.

## Approach & Efficiency
* Adjacency List:
 - It represents a graph as an array of linked lists.
 - The index of the array represents a vertex.
 - Each element in its linked list represents the other vertices that form an edge with the vertex.
* Efficiency:
  - For time: O(1)
    1. AddNode(): O(1)
    2. AddEdge(): O(1) 
    3. GetNodes(): O(1)
    4. Size(): O(1)
  - For space: O(n+m)
    1. AddNode(): O(n) : n: number of Nodes
    2. AddEdge(): O(m) : m: number of edges
    3. GetNodes(): O(1)
    4. Size(): O(1)
   
## API
* AddNode():
  - Adds a new node to the graph
  - Takes in the value of that node
  - Returns the added node
* AddEdge():
 - Adds a new edge between two nodes in the graph
 - Include the ability to have a “weight”
 - Takes in the two nodes to be connected by the edge
 - Both nodes should already be in the Graph
* GetNodes()
 - Returns all of the nodes in the graph as a collection (set, list, or similar)
 - GetNeighbors()
 - Returns a collection of edges connected to the given node
 - Takes in a given node
 - Include the weight of the connection in the returned collection
* Size():
 - Returns the total number of nodes in the graph

## Testing:
* `npm test graph.test`
* Code Link: [Here](./graph.js)