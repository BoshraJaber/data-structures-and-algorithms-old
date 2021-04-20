'use strict';
const Node = require('./fizz-buzz-tree').Node;
const katyTree = require('./fizz-buzz-tree').katyTree;
const FizzBuzzTree = require('./fizz-buzz-tree').FizzBuzzTree;
describe('Binary Tree', () => {
  let tree;
  beforeAll(() => {
    tree = new katyTree();
    tree.add(1);
    tree.add(4);
    tree.add(5);
    tree.add(3);
    tree.add(15);
    tree.add(30);
    tree.add(6);
    console.log(tree);
    // children= [
    //     Node { value: 4 },
    //     Node { value: 5 },
    //     Node { value: 3 },
    //     Node { value: 15 },
    //     Node { value: 30 },
    //     Node { value: 6 },
    //   ];
  });

  it('should successfully return a “Fizz” If the value is divisible by 3', () => {
    const expected = FizzBuzzTree(tree);
    expect(expected.children[2].value).toEqual('Fizz');
  });
  it('should successfully return a “Buzz” If the value is divisible by 5', () => {
    const expected = FizzBuzzTree(tree);
    expect(expected.children[1].value).toEqual('Buzz');
  });
  it('should successfully return a “FizzBuzz” If the value is divisible by 3 and 5', () => {
    const expected = FizzBuzzTree(tree);
    expect(expected.children[3].value).toEqual('FizzBuzz');
    expect(expected.children[4].value).toEqual('FizzBuzz');
  });
  it('should successfully turn the number to string If the value is not divisible by 3 or 5', () => {
    const expected = FizzBuzzTree(tree);
    expect(typeof expected.children[0].value).toEqual('string');
    expect(typeof expected.children[5].value).toEqual('string');
  });
});

// If the value is divisible by 5, replace the value with “Buzz”
// If the value is divisible by 3 and 5, replace the value with “”
// If the value is not divisible by 3 or 5, simply turn the number into a String.
