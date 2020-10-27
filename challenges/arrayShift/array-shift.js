'use strict'

let arrayshifter = {}

arrayshifter = (array, value) => {

    let mid = Math.floor(array.length/2);

    let newArr = [];

    for (let i = 0; i < array.length; i++){

        if (i < mid) {
            newArr[i] = array[i];
        }
        else if(i == mid){
            newArr[i]=value;
            newArr[i+1] = array[i];
        }
        else if(i > mid ){
            newArr[i+1] = array[i];
        }

    }

    return newArr;

}

exports.arrayshifter = arrayshifter;

