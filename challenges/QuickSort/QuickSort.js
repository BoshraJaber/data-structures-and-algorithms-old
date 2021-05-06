'use strict';

function quickSort(arr, left, right){
    if(left< right){
        let position = partition(arr,left,right);
        quickSort(arr, left, position - 1);
        quickSort(arr, position + 1, right)
    }
    return arr;
}

function partition(arr, left, right){
    let pivot = arr[right] ;// we chose the pivot to be the element with the hightest index
    let low =left - 1;
    for( let i=left; i<right;i++){
        if (arr[i] <= pivot){
            low++
           swap(arr, i, low)
       }  
    }  
     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
    swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1
}


function swap(arr, i, low){
      let temp;
    temp= arr[i];
    arr[i] = arr[low];
    arr[low] = temp;
}

module.exports = quickSort;
