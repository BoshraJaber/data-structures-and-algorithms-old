'use strict';
const { expect } = require('@jest/globals');
const Stack = require('./stacks-and-queues').stack;
const Queue = require('./stacks-and-queues').queue;


describe('Queue tests', () => {
     // Can successfully enqueue into a queue
     it('should successfully enqueue into a queue', () => {
        //arrange
        let queue = new Queue();//FIFO
        let value = 1;
        //act
        queue.enqueue(value);// 1
        //assert
        // console.log(queue)
        expect(queue.head.value).toBe(value);
        expect(queue.length).toBe(1);
    });
    // Can successfully enqueue multiple values into a queue
    it('should successfully enqueue into a queue', () => {
        //arrange
        let queue = new Queue();//FIFO
        let value = 1;
        let value2 = 2;
        //act
        queue.enqueue(value);// 1
        queue.enqueue(value2);// 1
        //assert
        console.log(queue)
        expect(queue.head.value).toBe(value);
        expect(queue.length).toBe(2);
    });
    // Can successfully dequeue out of a queue the expected value
    it('should successfully dequeue out of a queue the expected value', () => {
        //arrange
        let queue = new Queue();//FIFO
        let value = 1;
        let value2 = 2;
        //act
        queue.enqueue(value);
        queue.enqueue(value2);
        queue.dequeue()
        //assert
        // console.log(queue)
        expect(queue.head.value).toBe(value2);
        expect(queue.length).toBe(1);
    });
    // Can successfully empty a queue after multiple dequeue
    it('should successfully empty a queue after multiple dequeue', () => {
        //arrange
        let queue = new Queue();//FIFO
        let value = 1;
        let value2 = 2;
        //act
        queue.enqueue(value);
        queue.enqueue(value2);
        queue.dequeue()
        queue.dequeue()
        //assert
        // console.log(queue)
        expect(queue.length).toBe(0);
    });
    // Can successfully instantiate an empty queue
    it('should successfully  instantiate an empty queue', () => {
        //arrange
        let queue = new Queue();//FIFO
        //act
        //assert
        // console.log(queue)
        expect(queue.length).toBe(0);
        expect(queue.head).toBeNull();
    });
    // Can successfully peek into a queue, seeing the expected value
    it('should successfully peek into a queue, seeing the expected value', () => {
        //arrange
        let queue = new Queue();//FIFO
        let value = 1;
        let value2 = 2;
        //act
        queue.enqueue(value);
        queue.enqueue(value2);
        //assert
        // let top = queue.peek();
        // console.log(queue.peek())
        expect(queue.peek()).toBe(value);
    });
    // Calling dequeue or peek on empty queue raises exception
    it('should calling dequeue or peek on empty queue raises exception', () => {
        //arrange
        let queue = new Queue();//FIFO
        //act
        //assert
        // console.log(queue)
        expect(queue.length).toBe(0);
        expect(queue.head).toBeNull();
        expect(queue.peek()).toBe('exception');
        expect(queue.dequeue()).toBe('exception');
    });







    // it('should not peek an empty queue', () => {
    //     //arrange
    //     let queue = new Queue();
    //     //act
    //     let item = queue.peek();
    //     //assert
    //     expect(item).toBeUndefined();
    // });



    // it('should dequeue from the queue successfully', () => {
    //     //arrange
    //     let queue = new Queue();
    //     let value = 1;
    //     queue.enqueue(value);
    //     //act
    //     queue.dequeue();
    //     //assert
    //     expect(queue.values.length).toBe(0);
    // });

    // it('should peek the queue successfully', () => {
    //     //arrange
    //     let queue = new Queue();
    //     let value = 1;
    //     queue.enqueue(value);
    //     //act
    //     let item = queue.peek();
    //     //assert
    //     expect(item).toBe(value);
    // });
});







