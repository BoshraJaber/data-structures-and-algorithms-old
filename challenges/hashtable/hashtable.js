'use strict';

class HashTable{
    table = new Array(100); // used to store the key-value, 100 is the size of it.
    
    add(key,value){
        let hash = this.getHash(key);
        // Check if the table contain the key, do nothing.
        if (!this.table[hash]) {
            this.table[hash] = new LinkedList();//LL
          }
      
        // Add the item to the table.
        this.table[hash] = {key, value};
    }
    getHash(key){
        // we have to generate a unique hash value for the array by getting the ascii code, Since it is a string we need to loop over the string
        let hash = 353;
        for (let i = 0; i < key.length; i++) {
            // caluculate the assci to turn a string to a number
            // we can mulitple it by any number but it is better be a primary number to reduce the collocion 
            // divide to make sure the hash is within the size of the array
            hash = hash * 599 * key.charCodeAt(i) % this.table.length;
            
        }
        return hash
    }
    find(key){
    //    return value; 
    }
    contains(key){
        //return boolean;
    }
}

const hashTable = new HashTable();
hashTable.add('first Name', 'Boshra')
console.log(hashTable)



// Features
// Implement a Hashtable with the following methods:

// add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
// get: takes in the key and returns the value from the table.
// contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
// hash: takes in an arbitrary key and returns an index in the collection.