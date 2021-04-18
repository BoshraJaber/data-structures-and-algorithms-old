'use strict';
const Node = require('./tree').Node;
const BinaryTree = require('./tree').BinaryTree;
describe('Maximum Value in Binary Tree', () => {
  let tree;
  beforeAll(() => {
    const one = new Node(88);
    const two = new Node(2);
    const three = new Node(9);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(10);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    five.left = eight;
    three.left = six;
    three.right = seven;
    tree = new BinaryTree(one);
  });

  it('should successfully return the maximum ', () => {
      console.log('Herrreerergdfnvndsfdsj          '+ tree.findMaximumValue());
      expect(tree.findMaximumValue()).toEqual(88)
  });
});
