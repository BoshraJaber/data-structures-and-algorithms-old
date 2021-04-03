// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
class Node {
    constructor(value, next){
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
    constructor(){
        this.head = null;
        this.tail= null;
        this.length = 0;
    }
    insert(value){
        var headNode = new Node(value);
        if(!this.head){
            this.head = headNode;
        } else {
            headNode.next = this.head;
            this.head = headNode;
        }
        this.length++;
    }
    include(value){
        let valueExist = this.head;

        while(valueExist) {
          if(valueExist.value === value) {
            // console.log(true);
            return true;
          }
          valueExist = valueExist.next;
        }
        // console.log(`false`);
        return false;
    }
    toString(){
        let linkedList;
        let currentNode = this.head;
    
        while(currentNode) {
          linkedList +=  `{${currentNode.value}} ->  `;
          currentNode = currentNode.next;
        }
        linkedList += "NULL";
        console.log(linkedList);
        return linkedList;
    }
}

module.exports = {
    Node : Node,
    LinkedList : LinkedList,
}