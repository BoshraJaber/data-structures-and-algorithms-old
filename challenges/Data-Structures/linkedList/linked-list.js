// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = null;
    }
}
// Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
// Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
//Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
// Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
// "{ a } -> { b } -> { c } -> NULL"
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
            var newNode = new Node(value);
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
            let valueExist = this.head;

            while (valueExist) {
                if (valueExist.value === value) {
                    return true;
                }
                valueExist = valueExist.next;
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
            let currentNode = this.head;

            while (currentNode) {
                listString += (`{ ${currentNode.value} } -> `)
                currentNode = currentNode.next;
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
    insertBefore(value, newVal) {
        try{
            let newNode = new Node(newVal);
            let current = this.head;
            while(current && current.next !== null) {
              if(current.next.value === value) {
                let node = current.next;
                current.next = newNode;
                newNode.next = node;
                return;
              }
              current = current.next;
            }
          }catch (error) {
            console.log(`Error in inserting a value before a value in the linked lists ${error}`);
        }
    
    }
    insertAfter(value, newVal) {
        try {
            let newNode = new Node(newVal);
            let current = this.head;
            while (current) {
                if (current.value === value) {
                    let  node = current.next;
                    current.next = newNode;
                    newNode.next = node;
                    return;
                }
                current = current.next;
            }
        } catch (error) {
            console.log(`Error in inserting a value after a value in the linked lists ${error}`);
        }
    }
}

module.exports = {
    Node: Node,
    LinkedList: LinkedList,
}