'use strict';
const mergeSort = require('./mergeSort');
describe('Testing Merge Sort Function', () => {
    test('It should sort an array successfully', () => {
        let testArr = mergeSort([2, 24, 16, 8])
        expect(testArr).toEqual([2, 8, 16, 24]);
    });
    test('It should sort an array that Reverse-sorted successfully', () => {
        let testArr = mergeSort([20,18,12,8,5,-2])
        expect(testArr).toEqual([-2,5,8,12,18,20]);
    });
    test('It should sort an array with Few uniques successfully', () => {
        let testArr = mergeSort([5,12,7,5,5,7])
        expect(testArr).toEqual([5,5,5,7,7,12]);
    });
    test('It should sort an array that is Nearly-sorted successfully', () => {
        let testArr = mergeSort([2,3,5,7,13,11])
        expect(testArr).toEqual([2,3,5,7,11,13]);
    });
});
