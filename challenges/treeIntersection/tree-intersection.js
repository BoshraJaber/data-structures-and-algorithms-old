'use strict';

function tree_intersection(bt1, bt2){
let resultBT1 = bt1.preOrder();
let resultBT2 = bt2.preOrder();
let results = [];
let length = (resultBT1.length >resultBT2.length) ? resultBT2.length: resultBT1.length;
for (let i = 0; i < length; i++) {
    if(resultBT1[i] == resultBT2[i]) {
        results.push(resultBT1[i])  
    }
}
return results;
}

module.exports = tree_intersection;