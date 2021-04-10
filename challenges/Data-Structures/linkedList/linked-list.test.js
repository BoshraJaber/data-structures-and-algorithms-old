const superTest = require('supertest');
const Node = require("./linked-list").Node;
const LinkedList = require("./linked-list").LinkedList;
const { expect } = require('@jest/globals');
//Required Tests:
console.log('oijfgdfinzznnbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')

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
    // console.log();
    expect(ll.toString()).toEqual("{ 4 } -> { 3 } -> { 2 } -> NULL");
})
// Can successfully add a node or multiple nodes to the end of the linked list
test('should add a node to the end of the linked list', ()=>{
    //arrange
    let ll = new LinkedList();
    let firstValue = 2;
    let secondValue = 3;
    let thirdValue = 4;
    let value= 5;
    // let secondValue = 7;
   
    //act
    ll.insert(firstValue);
    ll.append(value)
    //assert
    expect(ll.head.value).toEqual(value);
    expect(ll.append(secondValue).value).toEqual(secondValue);
})
// Can successfully insert a node before a node located i the middle of a linked list
test('should insert a node before a node located i the middle of a linked list', ()=>{
    //arrange
    let ll = new LinkedList();
    let firstValue = 2;
    let secondValue = 3;
    let thirdValue = 1;
    let value= 5;
    // let secondValue = 7;
   
    //act
    ll.insert(firstValue);
    ll.insert(secondValue);
    ll.insert(thirdValue);
    ll.insertAfter(thirdValue, value)
    // console.log(ll.toString()); 
    //assert
    expect(ll.head.next.value).toEqual(value);
})
// Can successfully insert a node before the first node of a linked list
test('should insert a node before the first node', ()=>{
    //arrange
    let ll = new LinkedList();
    let firstValue = 2;
    let secondValue = 3;
    let thirdValue = 1;
    let value= 5;
    // let secondValue = 7;
   
    //act
    ll.insert(firstValue);
    ll.insert(secondValue);
    ll.insert(thirdValue);
    ll.insertBefore(secondValue, value)
    // console.log(ll.toString()); 
    //assert
    expect(ll.head.next.value).toEqual(value);
})
// Can successfully insert after a node in the middle of the linked list
test('should insert after a node in the middle of the linked list', ()=>{
    //arrange
    let ll = new LinkedList();
    let firstValue = 2;
    let secondValue = 3;
    let thirdValue = 1;
    let value= 5;
    // let secondValue = 7;
   
    //act
    ll.insert(firstValue);
    ll.insert(secondValue);
    ll.insert(thirdValue);
    ll.insertAfter(secondValue, value)
    // console.log(ll.toString()); 
    //assert
    expect(ll.head.next.next.value).toEqual(value);
})
// Can successfully insert a node after the last node of the linked list
test('should insert a node after the last node of the linked list', ()=>{
    //arrange
    let ll = new LinkedList();
    let firstValue = 2;
    let secondValue = 3;
    let thirdValue = 1;
    let value= 5;
    // let secondValue = 7;
   
    //act
    ll.insert(firstValue);
    ll.insert(secondValue);
    ll.insert(thirdValue);
    //assert
    expect(ll.append(value).value).toEqual(value);
})
test('should test the kthFromEnd method ', ()=>{
    //arrange
    let ll = new LinkedList();
    let llSmall = new LinkedList();
    let firstValue = 2;
    let secondValue = 3;
    let thirdValue = 1;
    let value= 5;
    //act
    ll.insert(firstValue);
    ll.insert(secondValue);
    ll.insert(thirdValue);
    llSmall.insert(firstValue)
    //assert
    // console.log(ll.length);
// Where k is greater than the length of the linked list
    expect( ll.kthFromEnd(6)).toEqual('Exception');
// Where k and the length of the list are the same
    expect( ll.kthFromEnd(3)).toEqual(1);
// Where k is not a positive integer
    expect( ll.kthFromEnd(-1)).toEqual('Exception');
// “Happy Path” where k is not at the end, but somewhere in the middle of the linked list
    expect( ll.kthFromEnd(2)).toEqual(3);
// Where the linked list is of a size 1
     expect(llSmall.kthFromEnd(1)).toEqual(2);
})





