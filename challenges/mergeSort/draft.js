// 'use strict';
// // dividing the array for two halves and each half for two ans so on,
// function mergeSort (arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
//     const midIndex = Math.floor(arr.length / 2);
//     const leftHalf = arr.slice(0, midIndex);
//     const rightHalf = arr.slice(midIndex);
//     return merge(
//       mergeSort(leftHalf), mergeSort(rightHalf)
//     );
// }

//   function merge (left, right) {
//     let sortedArr = [], leftIndex = 0, rightIndex = 0;
//     while (leftIndex < left.length && rightIndex < right.length) {
//       if (left[leftIndex] < right[rightIndex]) {
//         sortedArr.push(left[leftIndex]);
//         leftIndex++;
//       } else {
//         sortedArr.push(right[rightIndex]);
//         rightIndex++;
//       }
//     }
//     // We need to concat here because there will be one element remaining
//     // from either left OR the right
//     return sortedArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

