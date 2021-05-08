'use strict';
// const LinkedList = require('../Data-Structures/linkedList/linked-list').LinkedList;
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    prepend(value) {
      let node = new Node(value);
      if (!this.head) {
        this.head = node;
        return this;
      }
      node.next = this.head;
      this.head = node;
      return this;
    }
    find(key){
      let currentNode = this.head;
      while(currentNode){
        if(Object.keys(currentNode.value)[0] === key ){
          return currentNode.value[key];
        }
        currentNode = currentNode.next;
      }
      return false;
    }
  }

class HashTable{
    constructor(size){
        this.size = size;
        this.table = new Array(size); // used to store the key-value, 100 is the size of it.
    }
   
    
    add(key,value){
        let hash = this.hash(key);
        if (!this.table[hash]) {
            const bucket = new LinkedList();
            bucket.prepend({[key]: value});
            this.table[hash] = bucket;
            // return this.table[hash];
          } else{
            this.table[hash].prepend({[key]: value});
            // return this.table[hash];
          }
         
       
    }
    hash(key){
        let hash = 353;
        for (let i = 0; i < key.length; i++) {
           
            hash = hash * 599 * key.charCodeAt(i) % this.table.length;
            
        }
        return hash
    }
    get(key){
        if(this.contains(key)){
            let hash = this.hash(key);
            // Check if the Linked List empty
            if(this.table[hash].head){
                let current = this.table[hash].head;
                while(current){
                    if (Object.keys(current.value)[0] === key) return current.value[key]
                    current = current.next;
                    console.log(current)
                }
                return current.value[key];
            }
            
           
           
        } else {
            return "Key already exists"
        }
    }
    contains(key){
        let hash = this.hash(key);
        if(this.table[hash]){
            return true;
        } else{
            return null;
        }
    }
}





module.exports = HashTable;