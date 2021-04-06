'use strict';
const superTest = require('supertest');
const Node = require("../llZip/ll-zip").Node;
const LinkedList = require("../llZip/ll-zip").LinkedList;
const zipLists = require("../llZip/ll-zip").zipLists;
const { expect } = require('@jest/globals');

test('should zip two linked lists the same length', ()=>{
    //arrange
    let ll = new LinkedList();
    let ll2 = new LinkedList();   
    //act
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);

    ll2.insert(6);
    ll2.insert(5);
    ll2.insert(4);
    let ll3 = zipLists(ll,ll2)
    //assert
    // console.log(ll3.toString());
    expect(ll3.toString()).toEqual('{ 1 } -> { 4 } -> { 2 } -> { 5 } -> { 3 } -> { 6 } -> NULL');
})
test('should zip two linked lists where the first list is longer', ()=>{
    //arrange
    let ll = new LinkedList();
    let ll2 = new LinkedList();   
    //act
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);

    ll2.insert(5);
    ll2.insert(4);
    let ll3 = zipLists(ll,ll2)
    //assert
    // console.log(ll3.toString());
    expect(ll3.toString()).toEqual('{ 1 } -> { 4 } -> { 2 } -> { 5 } -> { 3 } -> NULL');
})
test('should zip two linked lists where the second list is longer', ()=>{
    //arrange
    let ll = new LinkedList();
    let ll2 = new LinkedList();   
    //act
    ll.insert(3);
    ll.insert(1);

    ll2.insert(6);
    ll2.insert(5);
    ll2.insert(4);
    let ll3 = zipLists(ll,ll2)
    //assert
    // console.log(ll3.toString());
    expect(ll3.toString()).toEqual('{ 1 } -> { 4 } -> { 3 } -> { 5 } -> { 6 } -> NULL');
})
test('should zip two linked lists when one of them is empty return the other one', ()=>{
    //arrange
    let ll = new LinkedList();
    let ll2 = new LinkedList();   
    //act
    ll.insert(3);
    ll.insert(1);

    // ll2.insert(6);
    // ll2.insert(5);
    // ll2.insert(4);
    let ll3 = zipLists(ll,ll2)
    //assert
    // console.log(ll3.toString());
    expect(ll3.toString()).toEqual('{ 1 } -> { 3 } -> NULL');
})