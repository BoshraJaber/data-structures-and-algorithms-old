# Hashtables
**hash table** is a data structure used to implement an associative array, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.


## Challenge
Implement a Hashtable with in JavaScript Code (add(), getHash(), contain(), get())

![](https://cdn-media-1.freecodecamp.org/images/1*3jxEppESh9LLK14YMQ-ocA.png)


## Approach & Efficiency
The approach was to create an array as the storage for the hash table. Each index of this array is a linked list that would save different keys that have the same hash.

* Efficiency:
* 
![](https://miro.medium.com/max/1454/1*CydOlA0wLMriWQR39TOM1w.png)

## API
1. add():
   - Hash the key to get the index of where to add.
   - check if the table already contain a key, if yes, do nothing.
   - Store the key-value pair in the table array of the index resulted from hashing the key.
2. hash():
   - we have to generate a unique hash value for the array by getting the ascii code, Since it is a string we need to loop over the string.
   - calculate the asci to turn a string to a number
   - we can multiple it by any number but it is better be a primary number to reduce the collision 
   - divide to make sure the hash is within the size of the array
3. contain(): 
   - check for a key if it exists, first hash this key to know where it would be stored (at which index).
   - check the value stored if it is equal or not.
4. get():
   - check if the key exists first 
   - then hash this key to know where it would be stored (at which index).
   - loop through the linked list of this index and check each node of it.
   - If found return the value.
   - If not then the key is not stored

## Testing:
- `npm test hashtable.test`
- Check the Code [here](./hashtable.js)