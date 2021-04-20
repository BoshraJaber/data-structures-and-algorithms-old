'use strict';
class Node {
    constructor(value) {
        this.value = value;
        //   this.children = children;
    }
}
class katyTree {
    constructor() {
        this.root = null;
        this.children = [];
    }
    add(value) {
       const node = new Node(value);
        if(this.root === null) {
          this.root = node;
        } else {
          this.children.push(node);
        }
        return node;
      }
}

function FizzBuzzTree(tree) {
    if (tree.root == null) return "K-ary tree is null";
    // Checking the Root node
    if (tree.root.value % 3 === 0 && tree.root.value % 5 === 0) {
        tree.root.value = 'FizzBuzz';
    } else if (tree.root.value % 3 === 0) {
        tree.root.value = 'Fizz';
    } else if (tree.root.value % 5 === 0) {
        tree.root.value = 'Buzz';
    } else {
        tree.root.value = tree.root.value.toString();
    }
    for (let i = 0; i < tree.children.length; i++) {
        if (tree.children[i].value % 3 === 0 && tree.children[i].value % 5 === 0) {
            tree.children[i].value = 'FizzBuzz';
        } else if (tree.children[i].value % 3 === 0) {
            tree.children[i].value = 'Fizz';
        } else if (tree.children[i].value % 5 === 0) {
            tree.children[i].value = 'Buzz';
        } else {
            tree.children[i].value = tree.children[i].value.toString();
        }
    }
    return tree;
}

module.exports = {
    Node: Node,
    katyTree: katyTree,
    FizzBuzzTree: FizzBuzzTree,
}

// Write a function called FizzBuzzTree which takes a k-ary tree as an argument.
// Without utilizing any of the built-in methods available to your language, determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:
// If the value is divisible by 3, replace the value with “Fizz”
// If the value is divisible by 5, replace the value with “Buzz”
// If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
// If the value is not divisible by 3 or 5, simply turn the number into a String.
// Return a new tree.