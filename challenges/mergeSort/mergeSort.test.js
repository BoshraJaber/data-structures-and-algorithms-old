'use strict';
const mergeSort = require('./mergeSort');
describe('Testing Merge Sort Function', () => {
    test('It should sort an array successfully', () => {
        let testArr = mergeSort([2, 24, 16, 8])
        expect(testArr).toEqual([2, 8, 16, 24]);
    });
});
