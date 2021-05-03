'use strict';
const insertSort = require('./selectionSort');
describe('Testing Insertion Sort Function', () => {
    test('It should sort an array successfully', () => {
        let testArr = insertSort([2, 24, 16, 8])
        expect(testArr).toEqual([2, 8, 16, 24]);
    });
});
