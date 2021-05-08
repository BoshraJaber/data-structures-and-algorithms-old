# Hashtables
[hash table](https://medium.com/@yanganif/javascript-hash-table-8878afceecbc#:~:text=A%20hash%20table%20(hash%20map,any%20built%2Din%20hash%20table.) is a data structure used to implement an associative array, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found

## Challenge
Implement a Hashtable with in JavaScript Code (add(), getHash(), contain(), get())


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

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
3. contain()
4. get(): check if the key exists first, then 
<!-- Description of each method publicly available in each of your hashtable -->