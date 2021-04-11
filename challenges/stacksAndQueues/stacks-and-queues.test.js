'use strict';
const { expect } = require('@jest/globals');
const Stack = require('./stacks-and-queues').stack;
const Queue = require('./stacks-and-queues').queue;


describe('Stack tests', () => {
    // Can successfully push onto a stack
    it('should successfully push onto a stack', () => {//LIFO
        //arrange
        let stack = new Stack();
        let value = 5;
        //act
        stack.push(value);
        //assert
        expect(stack.head.value).toBe(value);
    });
    // Can successfully push multiple values onto a stack
    it('should successfully push multiple values onto a stack', () => {//LIFO
        //arange
        let stack = new Stack();
        let value = 5;
        let secondValue = 2;
        let thirdValue = 1;
        //act
        stack.push(thirdValue);
        stack.push(secondValue);
        stack.push(value);

        //assert
        expect(stack.head.value).toBe(value);
        expect(stack.head.next.value).toEqual(secondValue);
        expect(stack.head.next.next.value).toBe(thirdValue);
    });
    // Can successfully pop off the stack
    it('should successfully pop off the stack', () => {
        //arrange
        let stack = new Stack();
        let value = 4;
        let secondValue = 1;
        stack.push(secondValue);
        stack.push(value);
        //act
        stack.pop();
        //assert
        expect(stack.head.value).toBe(secondValue);
    });
    // Can successfully empty a stack after multiple pops
    it('should Can successfully empty a stack after multiple pops', () => {
        //arrange
        let stack = new Stack();
        let value = 4;
        let secondValue = 1;
        stack.push(secondValue);
        stack.push(value);
        //act
        stack.pop();
        stack.pop();
        //assert
        expect(stack.head).toBe(null);
        expect(stack.length).toBe(0); 
    });
    // Can successfully peek the next item on the stack
    it('should successfully peek the next item on the stack', () => {
        //arrange
        let stack = new Stack();
        let value = 4;
        let secondValue = 1;
        stack.push(secondValue);
        stack.push(value);
        //act
        stack.peek();
        //assert
        expect(stack.peek()).toBe(value);  
    });
    // Can successfully instantiate an empty stack
    it('should successfully instantiate an empty stack', () => {
        //arrange
        let stack = new Stack();
        // console.log(stack)
        //act
        //assert
        expect(stack.length).toBe(0);  
    });
    // Calling pop or peek on empty stack raises exception
    it('should pop or peek on empty stack raises exception', () => {
        //arrange
        let stack = new Stack();
        // console.log(stack)
        //act
        //assert
        expect(stack.length).toBe(0); 
        expect(stack.pop()).toBe('exception'); 
        expect(stack.peek()).toBe('exception'); 
    });
    it('should peek the stack successfully', () => {
        //arange
        let stack = new Stack();
        let value = 4;
        stack.push(value);
        //act
        let item = stack.peek();
        //assert
        expect(item).toBe(value)
    });
});




















// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues
// Can successfully instantiate an empty queue
// Calling dequeue or peek on empty queue raises exception