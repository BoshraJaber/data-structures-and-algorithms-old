const superTest = require('supertest');
const arrayShift = require('../arrayShift/array-shift').insertShiftArray

describe('Testing array shift', () => {
    test('It should add the value in the middle index', () => {
        expect(insertShiftArray([2, 4, 6, 8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
        expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toStrictEqual([4, 8, 15, 16, 23, 42]);
        expect(insertShiftArray([], 16)).toStrictEqual([16]);
        expect(insertShiftArray([5,6,7,8], )).toStrictEqual([5,6,7,8]);
    });
});