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
    append(value) {
        try{
            let node = new Node(value);
            if(!this.head){
                this.head = node;
            } else {
                let currentNode = this.head;
                while(currentNode.next) {
                    currentNode = currentNode.next;
                }
                currentNode.next = node;
            }
            this.length++;
          }catch (error) {
            console.log(`Error in adding a value in the end of the linked lists ${error}`);
        }
    }
 

}

function zipLists(list1, list2){
    let newLinkedList = new LinkedList();
    //Check if one of the list is empty return the other of as the zipped list.
    if (!list1) {
        //list2.head
        return list2;
    } else if (!list2) {
        return list1;
    } else {
        let currentList1 = list1.head;
        let currentList2 = list2.head;
        // Calculate the length of the longest list
        let newListLength = longestLength(list1.length, list2.length);
        // loop as long as the longest list, and while there is a value in lists append them to the end of the new list
        for (let i=0; i<newListLength; i++) {
            if (currentList1) {
                newLinkedList.append(currentList1.value);
                currentList1 = currentList1.next
            };
            if (currentList2) {
                newLinkedList.append(currentList2.value);
                currentList2 = currentList2.next
            }
        }
        return newLinkedList;
    }
}

function longestLength(length1, length2){
    if(length1> length2){
        return length1;
    } else {
        return length2;
    }
}

module.exports = {
    Node: Node,
    LinkedList: LinkedList,
    zipLists:zipLists, 
}