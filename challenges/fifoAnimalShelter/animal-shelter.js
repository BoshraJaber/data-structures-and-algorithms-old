'use strict';
function Animal (type) {
    this.type = type;
    this.timeInShelter = Date.now();
}
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = null;
    }
}
class AnimalShelter{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    enqueue(animal){
        if(animal.type == 'dog' || animal.type == 'cat'){
            let newNode = new Node(animal);
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
        } else {
            return 'exception'
        }
    }
    dequeue(pref){
        if(pref == 'cat' || pref == 'dog'){
            if(!this.head){
                return 'exception';
            }
            let removedNode = this.head;
            if(this.head == this.tail){
                this.tail = null;
            }
            this.head = this.head.next;
            this.length--;
            // console.log(removedNode)
            return removedNode.value;
        } else {
            return null;
        }
    }
}

module.exports = {
    Animal : Animal,
    AnimalShelter : AnimalShelter,
}

//Requirements
// Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
// Implement the following methods:
// enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
// dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

