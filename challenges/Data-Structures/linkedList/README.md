
## Challenge
Creating a linked list class that can add nodes, check if a node exists and, display a string of values to the nodes in this list.

## Approach & Efficiency
* The approach was to create a ES6 class for creating each node, and another class to create an empty linked list. Later, we can create instances of these to classes to complete the task given.
* Big O for Time: O(n)
  - inserting a value: O(1)
  - Searching if a value is included: O(n)
  - Printing a string of values: O(n)
  - appending a value to the tail : O(1)
  - inserting a value before or after: O(n)
* Big O for Space: O(1)
  - inserting a value: O(1)
  - Searching if a value is included: O(1)
  - Printing a string of values: O(1)
  - appending a value to the tail : O(1)
  - inserting a value before or after: O(1)


## API
1. insert(): 
   - create a new node by creating an instance of the Node class.
   - Check if there is a header node, if not set the new node as a header.
   - if the header node exists then set the new node as the head node *after* setting the head node to the next node.
   - Catch an error if there is one.
2. include():
   - Search for a value in nodes starting from the head node.
   - Loop through existing nodes one by one and check if any has the value required to be found.
   - return true if it is found, and false otherwise
   - Catch an error if there is one.
3. toString():
   - Tp print out a string of values in the list.
   - Define an empty string at first.
   - Start from the head node.
   - loop through the nodes and add their values to the empty string.
   - return the string when done looping
   - Catch an error if there is one.
4. append():
   - create a new node with the value given.
   - Check if there is no tail (which mean the list is empty)
   - if so, set the new node to be the tail.
   - if there is already a tail. change its reference from null to the new node.
   - set the node to be the new tail.
   - increase the length of the list.
   - catch error if any exists.
5. insertBefore():
   - create a new node with the value given.
   - start from the head node and loop over the nodes.
   - Search for the value needed and add the new node before it.
   - Catch error if any exists.
6. insertAfter():
   - create a new node with the value given.
   - start from the head node and loop over the nodes.
   - Search for the value needed and add the new node after it.
   - Catch error if any exists.


## [Code link](./linked-list.js)
## [Reference1](https://daveceddia.com/linked-lists-javascript/)
## [Reference2](https://jarednielsen.com/data-structure-linked-list-javascript/)
