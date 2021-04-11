'use strict';
'use strict';
const { expect } = require('@jest/globals');
const Queue = require('./queue-with-stacks');


describe('Queue tests', () => {
     // Can successfully enqueue into a queue
     it('should successfully enqueue into a queue', () => {
        //arrange
        let queue = new Queue();//FIFO
        let value = 1;
        //act
        queue.enqueue(value);// 1
        //assert
        // console.log(queue.stackPush.head.value)
        expect(queue.stackPush.head.value).toBe(value);
        expect(queue.length).toBe(1);
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
        expect(queue.stackPop.head.value).toBe(value2);
        expect(queue.length).toBe(1);
    });

    // Can successfully instantiate an empty queue
    it('should successfully  instantiate an empty queue', () => {
        //arrange
        let queue = new Queue();//FIFO
        //act
        //assert
        // console.log(queue)
        expect(queue.length).toBe(0);
        expect(queue.stackPush.head).toBeNull();
        expect(queue.stackPop.head).toBeNull();
    });
});







