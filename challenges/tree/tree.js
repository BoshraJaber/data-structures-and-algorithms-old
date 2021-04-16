'use strict';
class Node {
    constructor(value, left = null, right = null) {
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
        try {
            const results = [];
            const _traverse = (node) => {
                results.push(node.value);
                if (node.left) _traverse(node.left);
                if (node.right) _traverse(node.right);
            };
            _traverse(this.root);
            return results;
        } catch (error) {
            throw new Error(`error in traversing using preOrder method ${error}`);
        }
    }
    // Left - Root - Right
    inOrder() {
        try {
            const results = [];
            const _traverse = (node) => {
                if (node.left) _traverse(node.left);
                results.push(node.value);
                if (node.right) _traverse(node.right);
            };
            _traverse(this.root);
            return results;

        } catch (error) {
            throw new Error(`error in traversing using inOrder method ${error}`);
        }

    }
    // left - Right - Root
    postOrder() {
        try {
            const results = [];
            const _traverse = (node) => {
                if (node.left) _traverse(node.left);
                if (node.right) _traverse(node.right);
                results.push(node.value);
            };
            _traverse(this.root);
            return results;
        } catch (error) {
            throw new Error(`error in traversing using postOrder method ${error}`);
        }
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root
    }
    add(value) {
        try {
            const newNode = new Node(value);
            if(this.root == null) this.root = newNode;
            // if the value equal the root
            // if the value smaller than the root go lift
            // if the value is greater than the root  go right
            const _traverse = (node) => {
                if (node == newNode.value) return 'the value already exists, please add another one';
                if (node.value > newNode.value) {
                    if(node.left == null) node.left = newNode;
                    _traverse(newNode.left)
                }
                if (node.value < node.value) {
                    if(node.right == null) node.right = newNode;
                    _traverse(newNode.right)
                }
                _traverse(this.root);
                return;
            }
        } catch (error) {
            throw new Error(`Error in adding a new node to the binary tree ${error}`)
        }
    }
    contains(value) {
        try {

        } catch (error) {
            throw new Error(`Error finding the ${value} in the binary tree ${error}`)
        }
    }
}

module.exports = {
    BinaryTree: BinaryTree,
    Node:Node,
    BinarySearchTree: BinarySearchTree,
}



// Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
// Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.