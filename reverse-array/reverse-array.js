'use strict';

let reverseArray = {}

 reverseArray = (array) => {

    let newArray = [];

    for (let i = 0; i < array.length; i ++){
        newArray[i] = array[array.length-i-1];
    }
    return newArray;

} 
exports.reverseArray = reverseArray;





























// let reverseArray= (array) => {

//     let newArr = [];

//     for (let i =0 ; i < array.length; i ++){
//         newArr[i] = array[array.length - i - 1];
//     }

//     return console.log(newArr);

// }




// let reverseArray = (array) => {

//     let newArray = [];

//     for (let i = array.length - 1; i >= 0; i--) {

//         newArray.push(array[i]);

//     }

//     return console.log(newArray);

// }

let array = [1,2,3,4,5];

reverseArray(array);