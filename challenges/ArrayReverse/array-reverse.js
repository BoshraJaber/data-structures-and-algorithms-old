// Challenge 01
const reverseArray = (arr)=>{
    let resultArr = [];
    for (let index = 0; index < arr.length; index++) {
        resultArr.push(arr[(arr.length-1)-index])  
    }
    return resultArr
}
reverseArray([1, 2, 3, 4, 5, 6])

// Challenge 02
//Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

const insertShiftArray=(arr, value)=>{
    let resultArr = [];
     for (let index = 0; index < arr.length; index++) {
       let valueIndex = Math.ceil(arr.length/2);
  
       if(index == valueIndex){
          resultArr.push(value) 
       } 
       resultArr.push(arr[index])
      }
      return resultArr;
  }
  
  insertShiftArray([2,4,6,8], 5)
  insertShiftArray([4,8,15,23,42], 16);
  
  
  // [2,4,5,6,8]
  // [4,8,15,16,23,42]
//Challenge 03:
const BinarySearch = (sortedArr, searchKey)=>{
    for(let i=0; i< sortedArr.length; i++){
      if(sortedArr[i] == searchKey){
        return i;
      } 
    } return -1;
  }
  
  BinarySearch([1, 2, 3, 5, 6, 7], 4);

  // Challenge 04:
  