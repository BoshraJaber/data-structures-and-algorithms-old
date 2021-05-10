const tree_intersection = require('./tree-intersection');
const BinaryTree = require('../tree/tree').BinaryTree;
const Node = require('../tree/tree').Node;

describe('Binary Tree', () => {
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
    tree1 = new BinaryTree(one);
    tree2 = new BinaryTree(one);
  });

  it('should successfully return a collection from a preOrder traversal', () => {
    // console.log(tree_intersection(tree1,tree2))
    expect(tree_intersection(tree1,tree2)).toEqual([1, 2, 4, 5, 8, 3, 6, 7]);
  });
});
