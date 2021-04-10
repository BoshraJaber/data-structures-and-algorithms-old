'use strict';
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // O(1) for time because the new node is at the beginning
    // O(1) for space because 1 node can be added at a time
    insert(value) {
        try {
            let newNode = new Node(value);
            if (!this.head) {
                this.head = newNode;
            } else {
                newNode.next = this.head;
                this.head = newNode;
            }
            this.length++;
        } catch (error) {
            console.log(`There were an error when inserting to the Linked list ${error}`);
        }

    }
    // O(n) for time
    // O(1) for space
    include(value) {
        try {
            let current = this.head;
            while (current) {
                if (current.value === value) {
                    return true;
                }
                current = current.next;
            }
            return false;
        } catch (error) {
            console.log(`There were an error when checking for a value ${error}`);
        }

    }
    // O(n) for time
    // O(1) for space because it is a string
    toString() {
        try {
            // let listString= []; 
            let listString = '';  // a string
            let current = this.head;

            while (current) {
                listString += (`{ ${current.value} } -> `)
                current = current.next;
            }
            listString += "NULL";

            return listString;
        } catch (error) {
            console.log(`Error in displaying the values in the nodes of the linked lists ${error}`);
        }
    }
    // O(1) for time
    // O(1) for space 
    append(value) {
        try {
            let node = new Node(value);
            if (!this.tail) {
                this.head = this.tail = node;
                return node;
            }
            this.tail.next = node;
            this.tail = node;
            this.length++;
            return node;
        } catch (error) {
            console.log(`Error in adding a value in the end of the linked lists ${error}`);
        }

    }
    // O(n) for time
    // O(1) for space
    insertBefore(value, newVal) {
        try {
            let newNode = new Node(newVal);
            let current = this.head;
            while (current) {
                if (current.next.value === value) {
                    let node = current.next;
                    current.next = newNode;
                    newNode.next = node;
                }
                current = current.next;
            }
        } catch (error) {
            console.log(`Error in inserting a value before a value in the linked lists ${error}`);
        }

    }
    insertAfter(value, newVal) {
        try {
            let newNode = new Node(newVal);
            let current = this.head;
            while (current) {
                if (current.value === value) {
                    let node = current.next;
                    current.next = newNode;
                    newNode.next = node;
                }
                current = current.next;
            }
        } catch (error) {
            console.log(`Error in inserting a value after a value in the linked lists ${error}`);
        }
    }
    // Big O :
    // O(n) for time
    // O(n) for space
    kthFromEnd(k) {
        if (this.head == null) {
            return null;
        } else if (k > this.length || k < 0) {
            return 'Exception';
        }
        else if (this.length == k) {
            return this.head.value;
        }
        else {
            let nodeOrder = this.length - k - 1;
            let current = this.head;
            for (let i = 0; i <= nodeOrder; i++) {
                current = current.next;
            }
       return current.value;
        }
    }
}

module.exports = {
    Node: Node,
    LinkedList: LinkedList,
}