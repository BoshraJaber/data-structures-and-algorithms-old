'use strict';
const HashTable = require('./hashtable');
let hashTable = new HashTable(100);


describe('Hash Table Data Structures', () => {
    it('should successfully add a key/value to the hashtable', () => {
      hashTable.add("firstName", "Ahmad");
      // console.log('First test -----------------', hashTable.table[0].head.value)
      expect(hashTable.table[0].head.value).toEqual({ 'firstName': 'Ahmad' } );
    });
    it('should successfully retrieve based on a key returns the value stored', () => {
      hashTable.add("firstName", "Ahmad");
      hashTable.add("secondName'", "Mohd");
      // console.log(hashTable.get("firstName"));
      expect(hashTable.get("firstName")).toEqual("Ahmad");
    });
    it('should successfully returns null for a key that does not exist in the hashtable', () => {
      expect(hashTable.contains("Age")).toBeNull();
    });
    it('should successfully handle a collision within the hashtable', () => {
      hashTable.add("firstName", "Ahmad");
      hashTable.add("secondName'", "Mohd");
      // console.log(hashTable.get("firstName"));
      expect(hashTable.add("firstName", "Ahmad")).toBeUndefined();
    });
    it('should successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
      hashTable.add("firstName", "Ahmad");
      hashTable.add("secondName'", "Mohd");
      hashTable.add("firstName", "Ahmad");

      // console.log(hashTable.get("firstName"));
      expect(hashTable.get("firstName")).toEqual("Ahmad");
      expect(hashTable.add("firstName", "Ahmad")).toBeUndefined();
    });
    it('should successfully hash a key to an in-range value', () => {
      hashTable.add("firstName", "Ahmad");
      // console.log(hashTable.hash("firstName"));
      expect(hashTable.hash("firstName")).toEqual(0);
      expect(hashTable.hash("Name")).toEqual(82);

    });
 
  });