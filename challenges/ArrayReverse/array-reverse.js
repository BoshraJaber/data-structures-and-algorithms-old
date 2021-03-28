// Challenge 01
const reverseArray = (arr)=>{
    let resultArr = [];
    for (let index = 0; index < arr.length; index++) {
        resultArr.push(arr[(arr.length-1)-index]);
    }
    return resultArr;
}
reverseArray([1, 2, 3, 4, 5, 6]);
