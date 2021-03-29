'use strict';
const insertShiftArray = (arr, value) => {
    let resultArr = [];
    if (typeof value == 'undefined') {
        return arr;
    } else if (arr.length == 0) {
        resultArr.push(value);
    } else {
        for (let index = 0; index < arr.length; index++) {
            let valueIndex = Math.ceil(arr.length / 2);
            if (index == valueIndex) {
                resultArr.push(value)
            }
            resultArr.push(arr[index])
        }
    }
    return resultArr;
}

module.exports = {
    insertShiftArray: insertShiftArray,
};
//test:
insertShiftArray([2, 4, 6, 8], 5)  // [2,4,5,6,8]
insertShiftArray([4, 8, 15, 23, 42], 16); // [4,8,15,16,23,42]
