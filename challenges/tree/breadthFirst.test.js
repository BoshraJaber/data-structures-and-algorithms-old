'use strict';
const Node = require('./tree').Node;
const BinaryTree = require('./tree').BinaryTree;
describe('Binary Tree Breadth First Traversal', () => {
  let tree;
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    five.left = eight;
    three.left = six;
    three.right = seven;
    tree = new BinaryTree(one);
  });

  it('should successfully return a collection from a breadth First traversal', () => {
    const expected = [1, 2, 3,4,5,6,7,8];
    const breadthFirst = tree.breadthFirst();
    expect(breadthFirst).toEqual(expected);
  });
});