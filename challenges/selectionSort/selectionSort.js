'use strict';
function insertSort(arr) 
{ 
    for (let i = 1; i < arr.length; i++) 
    { 
       let temp = arr[i]; 
       let  j = i - 1; 
        /* Move elements of arr[0..i-1], that are 
        greater than temp, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > temp)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = temp; 
    } 
    return arr;
} 

module.exports = insertSort;