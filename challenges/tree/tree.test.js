'use strict';
class Node {
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class BinaryTree {
    constructor(root = null) {
      this.root = root;
    }
  
    // Time : O(n) n = the number of nodes
    // Space : O(h) h = h is the hight of the tree
    // Root = Left - Right
    preOrder() {
      const results = [];
      const _traverse = (node) => {
        //push the value to the array
        results.push(node.value);
        // check if it have left _traverse(node.left)
        if (node.left) _traverse(node.left);
        // check if it have right _traverse(node.right)
        if (node.right) _traverse(node.right);
      };
      _traverse(this.root);
      return results;
    }
  
    // Left - Root - Right
    inOrder() {
      const results = [];
      const _traverse = (node) => {
        // check if it have left _traverse(node.left)
        if (node.left) _traverse(node.left);
        //push the value to the array
        results.push(node.value);
        // check if it have right _traverse(node.right)
        if (node.right) _traverse(node.right);
      };
      _traverse(this.root);
      return results;
    }
    // left - Right - Root
    postOrder() {
      const results = [];
      const _traverse = (node) => {
        // check if it have left _traverse(node.left)
        if (node.left) _traverse(node.left);
        // check if it have right _traverse(node.right)
        if (node.right) _traverse(node.right);
        //push the value to the array
        results.push(node.value);
      };
      _traverse(this.root);
      return results;
    }
  }
  
  module.exports = BinaryTree;



// Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
// Create a BinaryTree class
// Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
// Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

// Create a BinarySearchTree class
// Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
// Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.