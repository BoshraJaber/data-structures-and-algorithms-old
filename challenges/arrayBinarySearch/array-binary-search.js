'use strict';

const binarySearch = (sortedArr, searchKey) => {
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] == searchKey) {
            return i;
        }
    } return -1;
}

binarySearch([1, 2, 3, 5, 6, 7], 4);

module.exports = {
    binarySearch: binarySearch,
};