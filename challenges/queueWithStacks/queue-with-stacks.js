'use strict';
const Stack = require('../stacksAndQueues/stacks-and-queues').stack;

class PseudoQueue{
    constructor(){
        this.stackPush = new Stack();
        this.stackPop = new Stack();
        this.length = 0;
    }
    enqueue(value){
        // for (let i = 0; i < this.stackPop.length; i++) {
        //     this.stackPush.push(this.last.pop());
            
        // }
        this.stackPush.push(value);  
        this.length++;      
    }
    dequeue(){
        while(this.stackPush.length>0){
            this.stackPop.push( this.stackPush.pop())
        }
        this.length--;
        return this.stackPop.pop();

    }
}

module.exports = PseudoQueue;