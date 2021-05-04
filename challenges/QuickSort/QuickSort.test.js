'use strict';
const quickSort = require('./QuickSort');
describe('Testing quick Sort Function', () => {
    test('It should sort an array successfully', () => {
        let testArr = quickSort([2, 24, 16, 8],0,3)
        expect(testArr).toEqual([2, 8, 16, 24]);
    });
    test('It should sort an array that Reverse-sorted successfully', () => {
        let testArr = quickSort([20,18,12,8,5,-2],0,5 )
        expect(testArr).toEqual([-2,5,8,12,18,20]);
    });
    test('It should sort an array with Few uniques successfully', () => {
        let testArr = quickSort([5,12,7,5,5,7], 0, 5)
        expect(testArr).toEqual([5,5,5,7,7,12]);
    });
    test('It should sort an array that is Nearly-sorted successfully', () => {
        let testArr = quickSort([2,3,5,7,13,11],0, 5)
        expect(testArr).toEqual([2,3,5,7,11,13]);
    });
});
