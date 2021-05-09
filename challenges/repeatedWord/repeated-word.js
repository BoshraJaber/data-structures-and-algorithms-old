'use strict';

// function repeatedWord(str){
//     let regex = /\b(\w+)\b(?=.*?\b\1\b){1}/i
//     let result= str.match(regex)
//     return result[0].toString()
// }

function repeatedWord(str){
    const arr = str.split(/[\s,]+/);
    let arrOfWords = [];
    for(let i = 0; i < arr.length;i++){
        let currentWord = arr[i].toLowerCase();
        const isRepeated = arrOfWords.includes(currentWord);
        if(isRepeated){
            return currentWord;
        }else{
            arrOfWords.push(currentWord);
        }
    }
    return 'No Result Found';
}
module.exports = repeatedWord;
