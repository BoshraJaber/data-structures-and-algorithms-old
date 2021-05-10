'use strict';
const BinaryTree = require('../tree/tree').BinaryTree

let bt1 = new BinaryTree();
let bt2 = new BinaryTree();

function tree_intersection(bt1, bt2){
let resultBT1 = bt1.preOrder();
let resultBT2 = bt2.preOrder();
let results = [];
//var beverage = (age >= 21) ? "Beer" : "Juice";
let length = (resultBT1.length >resultBT2.length) ? resultBT2.length: resultBT1.length;
for (let i = 0; i < length; i++) {
    if(resultBT1[i] == resultBT2[i]) {
        return results.push(resultBT1[i])
    }
}
return results;
}

module.exports = tree_intersection;

preOrder()