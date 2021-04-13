'use strict';
const Stack = require('../stacksAndQueues/stacks-and-queues').stack;
function multiBracketValidation(input){
    // 1. Remove any characters in the string
    // let regex = /\(\)|\[\]|\{\}/;  
    input =input.replace(/\w/g, "");
    let stack = [];
    let closingBrackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    //2. save the opening brackets in the stack
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(' || input[i] === '{' || input[i] === '[' ) {
            stack.push(input[i]);
        } else {
            //3. compare the top brackets in the stack to see if it matches any of the opening brackets
            let top = stack.pop();
            if (input[i] !== closingBrackets[top]) {return false};
        }
    }
    //4. check if the length of the stack not zero then the brackets are not balanced
    if (stack.length !== 0) {return false};
    return true;
}

module.exports = multiBracketValidation;