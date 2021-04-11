# Stacks and Queues
* Stacks are a type of data structure that can be represented with an array or a linked List.
* The way it works, LIFO, which is the Last In is the first out.
* Can be used to do the function for un-do and re-do.

## Challenge
* Creating a class for a Stack  with it basic methods (push, pop, peek, isEmpty).
* Creating a class for a queue  with it basic methods (dequeue, enqueue, peek, isEmpty).

## Approach & Efficiency
The approach was to create a stack and a queue class using the linked list data structure.

## Big O:
- For time: O(n)
- For space: O(n)

## API
* Description of each method publicly available to Stack and Queue:
* Stack.push(): create a new node and add at the beginning of the Linked List
* Stack.pop(): delete a node from the beginning of the linked list
* Stack.peek(): return the value of the first node of the linked list
* Stack.isEmpty(): Check if the list is empty or not and return a boolean.
* Queue.enqueue(): create a new node and add at the end of the Linked List
* Queue.dequeue(): delete a node from the beginning of the linked list
* Queue.peek(): return the value of the first node of the linked list
* Queue.isEmpty(): Check if the list is empty or not and return a boolean.

## Test:
* `npm test stacks.test`
* `npm test queues.test`

## Code Link:
[Stacks and Queues](./stacks-and-queues.js)
[Stacks Tests](./stacks.test.js)
[Queues Tests](./queues.test.js)

![](https://miro.medium.com/max/1025/0*vlO53KXIZb92-iTN.png)

## Resources:
[Reference1](https://www.javatpoint.com/ds-linked-list-implementation-of-stack)
[Reference2](https://osgoodgunawan.medium.com/stack-and-queue-in-linkedlist-javascript-76ca86dd95fe)
[Reference3](https://learnersbucket.com/tutorials/data-structures/implement-queue-using-linked-list/)