"use strict";

function leftJoin(hashMap1, hashMap2) {
  let output = [];
//   console.log(hashMap1);
  for (let i = 0; i < hashMap1.length; i++) {
    output[i] = hashMap1[i];
    for (let j = 0; j < hashMap1.length; j++) {  
      if (hashMap1[i][0] === hashMap2[j][0] ) {
          output[i].push(hashMap2[j][1]);
      } 
    }
    if(output[i][2] == undefined) {
        output[i][2] =null;
      }
    // console.log(output[i][2])
  }

  return output;
}

module.exports = leftJoin;

// in the output array,
//1. loop through the first hashmap one by one.
// 2. fr each key-value pair in the first hash table, do the following:
// 1. add the key to the output array, add the value of that key, check if the hashmap2 contains that key, if yes: add its value to the output array else add null.
