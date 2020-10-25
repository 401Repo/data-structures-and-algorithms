'use strict';

const fs = require('fs');


function isEven(n, bull){

  if (bull == true){
    console.log(`The number ${n} is even.`);
  }
  else {
    console.log(`The number ${n} is odd.`);
  }
}


function a(n, isEven){

  if (n % 2 == 0){
    return isEven(n, true);
  } else{
    return isEven(n, false);
  }

}

let nums = [1,2,3,50,77,100];

for(let i = 0; i < nums.length; i++){
  a(nums[i], isEven);
}




// Test


// a(1, isEven);




/* 
  Write a function called isEven that receives 2 parameters:
    A Number
    A Callback function

  Determine if the number is even. If so, invoke the callback with true as an argument, otherwise, false

  -----

  Create an array of numbers.

  Iterate the array with a for loop, each time calling the isEven function with the number and a callback
  
  The callback should console.log() the return value from isEven()

*/


function readFile(n){
try {
    var data = fs.readFileSync(n, "utf8");
    console.log(data);    
} catch(e) {
    console.log('Error:', 'No such file');
}
}

readFile('./words.txt');
readFile('./fakeWords.txt');

/* 
  Write a function called contents that receives 1 parameter:
    A File Name

  Using the fs module, open and read the contents of the file,converting them to text and printing the content to the console.

  Print a console.error() if anything goes wrong.

  You can test this by calling your function with './words.txt', which is a file that exists, and then again with the name of a file that does not exist.
*/


