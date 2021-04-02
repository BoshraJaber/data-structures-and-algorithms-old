'use strict';

const binarySearch = (sortedArr, searchKey) => {
    let startIndex = 0;
    let endIndex = sortedArr.length - 1;
    
    while(startIndex <= endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);
      // Checking if the middle element equal the search key
      if(searchKey=== sortedArr[middleIndex]) {
        return  middleIndex;
      }
      // Checking if the search key in the right half
      if(searchKey > sortedArr[middleIndex]) {
        startIndex = middleIndex + 1;
      }
      // Checking if the search key in the left half
      if(searchKey < sortedArr[middleIndex]) {
        endIndex = middleIndex - 1;
      }
    }
    return -1;
}

  binarySearch([1, 2, 3, 5, 6, 7], 7)

binarySearch([1, 2, 3, 5, 6, 7], 4);

module.exports = {
    binarySearch: binarySearch,
};


