'use strict';
//Node class that has properties for the value stored in the Node, and a pointer to the next node.
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = null;
    }
}
//LIFO: Last in from the front of the list is the first to get out.
class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        } else {
            let previousHead = this.head;
            this.head = newNode;
            this.head.next = previousHead;
        }
        this.length++;
    }
    pop() {
        if(!this.head){
            return 'exception';
        }
        let removedNode = this.head;
        if(this.head == this.tail){
            this.tail = null;
        }
        this.head = this.head.next;
        this.length--;
        return removedNode.value;
    }
    peek() {
        if(!this.head){
            return 'exception'
        }
        let top = this.head.value
        return top;
    }
    isEmpty(){
        if(!this.head){
            return true
        } else {
            return false;
        }
    }
}
// Queue Class
class Queue{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    enqueue(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        } else{
           let current = this.head;
           while(current.next){
               current = current.next;
           }
           current.next = newNode;
        }
        this.length++;
    }
    dequeue(){
        if(!this.head){
            return 'exception';
        }
        let removedNode = this.head;
        if(this.head == this.tail){
            this.tail = null;
        }
        this.head = this.head.next;
        this.length--;
        return removedNode.value;
    }
    peek(){
        if(!this.head){
            return 'exception';
        } else {
            return this.head.value;
        }
    }
    isEmpty(){
        if(!this.head){
            return true
        } else {
            return false;
        }
    }
}


module.exports = {
    node : Node,
    stack : Stack,
    queue : Queue,
}