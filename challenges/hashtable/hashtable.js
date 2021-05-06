'use strict';

class HashTable{
    table = new Array(100); // used to store the key-value, 100 is the size of it.
    add(key,value){
        let hash = this.getHash(key);
        // Check if the table contain the key, do nothing.
        // Add the item to the table.
        this.table[hash] = {key, value};
    }
    getHash(key){

    }
    find(key){
    //    return value; 
    }
    contains(key){
        //return boolean;
    }
}





// Features
// Implement a Hashtable with the following methods:

// add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
// get: takes in the key and returns the value from the table.
// contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
// hash: takes in an arbitrary key and returns an index in the collection.