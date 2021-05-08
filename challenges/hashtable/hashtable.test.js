'use strict';
const HashTable = require('./hashtable');
let hashTable = new HashTable(100);


// Adding a key/value to your hashtable results in the value being in the data structure
// Retrieving based on a key returns the value stored
// Successfully returns null for a key that does not exist in the hashtable
// Successfully handle a collision within the hashtable
// Successfully retrieve a value from a bucket within the hashtable that has a collision
// Successfully hash a key to an in-range value


describe('Hash Table Data Structures', () => {
    it('should successfully add a key/value to the hashtable', () => {
      hashTable.add("firstName", "Ahmad");
      expect(hashTable.table[0]).toEqual({"key": "firstName", "value": "Ahmad"});
    });
    it('should successfully retrieve based on a key returns the value stored', () => {
      hashTable.add("firstName", "Ahmad");
      hashTable.add("secondName'", "Mohd");
      console.log(hashTable.get("firstName"));
      expect(hashTable.get("firstName")).toEqual({"value": "Ahmad"});
    });
    // it('should add to the hashed table', () => {
    //   let key = 'Pioneer Square';
    //   hashTable.add(key, 98104);
    //   expect(hashTable.table[hashTable.hash(key)]).toBeDefined();
    // });
    // it('should find if the value exists in the table by it is key', () => {
    //   let key = 'Alki Beach';
    //   hashTable.add(key, 98116);
    //   expect(hashTable.contains(key)).toBeTruthy();
    //   expect(hashTable.contains('U District')).toBeFalsy();
    // });
    // it('should get the value of a key if it exists in the table', () => {
    //   let key = 'Alki Beach';
    //   let value = 98116;
    //   hashTable.get(key);
    //   expect(hashTable.get(key)).toEqual(value);
    // });
    // it('should return null if the key is not in the table', () => {
    //   expect(hashTable.get('U District')).toBeNull();
    // });
    // it('should handle a collision within the hashtable', () => {
    //   const key1 = 'damra';
    //   const key2 = 'name';
    //   const val1 = 757;
    //   const val2 = 98;
    //   hashTable.add('damra', val1);
    //   hashTable.add('name', val2);
    //   expect(hashTable.contains(key1)).toBeTruthy();
    //   expect(hashTable.contains(key2)).toBeTruthy();
    //   expect(hashTable.get(key1)).toEqual(val1);
    //   expect(hashTable.get(key2)).toEqual(val2);
    // });
  });