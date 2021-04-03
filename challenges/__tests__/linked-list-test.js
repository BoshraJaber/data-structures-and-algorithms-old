const superTest = require('supertest');
const Node = require("../linkedList/linked-list").Node;
const LinkedList = require("../linkedList/linked-list").LinkedList;
const { expect } = require('@jest/globals');
//Required Tests:


test('init node class', () => {
    //arrange
    let value = 9;
    //act
    let node = new Node(value);
    //assert
    expect(node.value).toEqual(value);
    expect(node.next).toEqual(null);
});
// Can successfully instantiate an empty linked list
test('instantiate an empty linked list', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);
  });
// Can properly insert into the linked list
test('should insert new node to empty linked list', () => {
    //arrange
    let ll = new LinkedList();
    let value = 8;
    //act
    ll.insert(value);
    //assert
    expect(ll.head.value).toEqual(value);
    expect(ll.head.next).toBeNull();
});
// The head property will properly point to the first node in the linked list
test('should test if the head points properly to the first node', ()=>{
    //arrange
    let ll = new LinkedList();
    let firstValue = 2;
    let secondValue = 3;
    //act
    ll.insert(firstValue);
    ll.insert(secondValue);
    //assert
    expect(ll.head.value).toEqual(secondValue);
    // expect(ll.head).toEqual(firstValue);
})
// Can properly insert multiple nodes into the linked list
test('should properly insert multiple nodes into the linked list', ()=>{
    //arrange
    let ll = new LinkedList();
    let firstValue = 2;
    let secondValue = 3;
    let thirdValue = 4;
    //act
    ll.insert(firstValue);
    ll.insert(secondValue);
    ll.insert(thirdValue);
    //assert
    expect(ll.head.value).toEqual(thirdValue);
    expect(ll.head.next.value).toEqual(secondValue);
    expect(ll.head.next.next.value).toEqual(firstValue);
})
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
test('should return true when finding a value within the linked list and false if not', ()=>{
    //arrange
    let ll = new LinkedList();
    let firstValue = 2;
    let secondValue = 3;
    let thirdValue = 4;
    //act
    ll.insert(firstValue);
    ll.insert(secondValue);
    ll.insert(thirdValue);
    //assert
    expect(ll.include(firstValue)).toEqual(true);
    expect(ll.include(6)).toEqual(false);
})
// Can properly return a collection of all the values that exist in the linked list
test('should return a collection of all values in the linked list', ()=>{
    //arrange
    let ll = new LinkedList();
    let firstValue = 2;
    let secondValue = 3;
    let thirdValue = 4;
    //act
    ll.insert(firstValue);
    ll.insert(secondValue);
    ll.insert(thirdValue);
    //assert
    expect(ll.toString).toEqual(true);
})