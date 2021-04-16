'use strict';
const Node = require('./tree').Node;
const BinarySearchTree = require('./tree').BinarySearchTree;
describe('Binary Tree', () => {
    const node = new Node(8);
    it('should successfully instantiate an empty tree', () => {
        let binarySearchTree = new BinarySearchTree()
      expect(binarySearchTree.root).toBeNull;
    });
    it('should successfully instantiate a tree with a single root node', () => {
        let binarySearchTree = new BinarySearchTree()
        binarySearchTree.add(8)
        // console.log(binarySearchTree)
        expect(binarySearchTree.root.value).toEqual(8);
        expect(binarySearchTree.root.left).toBeNull;
        expect(binarySearchTree.root.right).toBeNull;
    });
    it('should successfully add a left child and right child to a single root node', () => {
        let binarySearchTree = new BinarySearchTree(node)
        binarySearchTree.add(7);
        binarySearchTree.add(10);
        expect(binarySearchTree.root.value).toEqual(8);
        expect(binarySearchTree.root.left.value).toEqual(7);
        expect(binarySearchTree.root.right.value).toEqual(10);
    });
    it('should successfully add multiple left child or right child to a root node', () => {
        let binarySearchTree = new BinarySearchTree(node)
        binarySearchTree.add(7);
        binarySearchTree.add(10);
        binarySearchTree.add(6); 
        binarySearchTree.add(20);
        console.log(binarySearchTree.root);  
        expect(binarySearchTree.root.value).toEqual(8);
        expect(binarySearchTree.root.left.value).toEqual(7);
        expect(binarySearchTree.root.right.value).toEqual(10);
        expect(binarySearchTree.root.left.left.value).toEqual(6);
        expect(binarySearchTree.root.right.right.value).toEqual(20);
    });

  });
  