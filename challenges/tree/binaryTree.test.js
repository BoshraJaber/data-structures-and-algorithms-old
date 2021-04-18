'use strict';
const Node = require('./tree').Node;
const BinaryTree = require('./tree').BinaryTree;
describe('Binary Tree', () => {
  let tree;
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(9);
    const five = new Node(10);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(9);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    five.left = eight;
    three.left = six;
    three.right = seven;
    tree = new BinaryTree(one);
  });

  it('should successfully return a collection from a preOrder traversal', () => {
    const expected = [1, 2, 4, 5, 8, 3, 6, 7];
    const preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
  });
  it('should successfully return a collection from an inOrder traversal', () => {
    const expected = [4, 2, 8, 5, 1, 6, 3, 7];
    const inOrder = tree.inOrder();
    expect(inOrder).toEqual(expected);
  });
  it('should successfully return a collection from a postOrder traversal', () => {
    const expected = [4, 8, 5, 2, 6, 7, 3, 1];
    const postOrder = tree.postOrder();
    expect(postOrder).toEqual(expected);
  });
});

// Can successfully instantiate an empty tree
// Can successfully instantiate a tree with a single root node
// Can successfully add a left child and right child to a single root node