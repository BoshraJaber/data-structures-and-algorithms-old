'use strict';
class AnimalShelter{
    constructor() {
        this.head = null;
        this.length = 0;
    }
    enqueue(animal){

    }
    dequeue(pref){
        if(pref == 'cats' || pref == 'dog'){
            this.head = this.head.next;
            this.length--;
            return removedNode.value;
        } else {
            return null;
        }
    }
}




// Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
// Implement the following methods:
// enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
// dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

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