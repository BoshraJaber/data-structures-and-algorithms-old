const superTest = require('supertest');
const binarySearch = require('../arrayBinarySearch/array-binary-search').binarySearch

describe('Testing array binary search', () => {
    test('It should find the index of key value using binary search', () => {
        expect(binarySearch([2, 4, 6, 8], 4)).toStrictEqual(1);
        expect(binarySearch([4, 8, 15, 16, 42], 16)).toStrictEqual(3);
        expect(binarySearch([], 16)).toStrictEqual(-1);
        expect(binarySearch([5,6,7,8],0)).toStrictEqual(-1);
        expect(binarySearch([-1,3,4,7],-1)).toStrictEqual(0);
    });
});