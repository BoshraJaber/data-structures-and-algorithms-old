const { expect } = require('@jest/globals');
const Animal = require('./animal-shelter').Animal;
const AnimalShelter = require('./animal-shelter').AnimalShelter;
// Test objects:

let pomeranian = new Animal('dog');
let van = new Animal('cat');
// console.log(pomeranian.type);
// console.log(van.type);

describe('Queue tests', () => {
    it('should successfully enqueue into a queue', () => {
       //arrange
       let animalShelter = new AnimalShelter();
       //act
       animalShelter.enqueue(pomeranian);
       //assert
    //    console.log(animalShelter)
       expect(animalShelter.head.value.type).toBe('dog');
       expect(animalShelter.length).toBe(1);
   });
   it('should successfully enqueue into a queue multiple times', () => {
    //arrange
    let animalShelter = new AnimalShelter();
    //act
    animalShelter.enqueue(van);
    animalShelter.enqueue(pomeranian);
    //assert
    // console.log(animalShelter)
    expect(animalShelter.head.value.type).toBe('cat');
    expect(animalShelter.head.next.value.type).toBe('dog');
    expect(animalShelter.length).toBe(2);
});
it('should successfully dequeue from the queue the first animal in', () => {
    //arrange
    let animalShelter = new AnimalShelter();
    //act
    animalShelter.enqueue(van);
    animalShelter.enqueue(pomeranian);
    animalShelter.dequeue('cat');
    // animalShelter.dequeue('dog');
    //assert
    console.log(animalShelter)
    expect(animalShelter.head.value.type).toBe('dog');
    // expect(animalShelter.head.next.value.type).toBe('dog');
    expect(animalShelter.length).toBe(1);
});
it('should return null when dequeue from the queue pref is not a dog or a cat', () => {
    //arrange
    let animalShelter = new AnimalShelter();
    //act
    animalShelter.enqueue(van);
    animalShelter.enqueue(pomeranian);
    animalShelter.dequeue('bird');
    // animalShelter.dequeue('dog');
    //assert
    console.log(animalShelter)
    expect(animalShelter.head.value.type).toBe('cat');
    // expect(animalShelter.head.next.value.type).toBe('dog');
    expect(animalShelter.length).toBe(2);
    expect(animalShelter.dequeue('bird')).toBeNull
});
});