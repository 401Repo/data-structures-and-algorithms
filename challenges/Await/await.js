'use strict';

const superagent = require('superagent');

let getRandomNumber = () => new Promise( (resolve,reject) => {


  const num = Math.floor(Math.random() * 100);
  let halfSec = Math.floor(Math.random() * 500/60);


  setTimeout(function(){
      console.log(`The random num is: ${num} / Time is: ${halfSec} milliseconds`);
  }, halfSec)

});



async function moreNums(){
  try {
    let result = await getRandomNumber();
    console.log(result);
  } catch(e) { console.error(err); }
}

moreNums();


/*
  Write function called getRandomNumber that returns a promise

  In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
    
  Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.

  Invoke your async function
*/


async function getCity(city) {
  let results = await superagent.get(`https://geocode.xyz/${city}?json=1`);

  console.log('#######################################');
  console.log('');   
  console.log(`<%%%%|==========> ${city}`);
  console.log('Longitude: ' + results.body.longt);
  console.log('Latitude: ' + results.body.latt);
  console.log('');  
  console.log('#######################################');
  console.log('');  

}

getCity('Los Angeles');

getCity('Rome');

getCity('Sydney');



/*
  Write an asynchronous function that accepts 1 parameter
    - A city name
    
  When invoked, this function should use superagent to retrieve the city data from the geocode.xyz API, which uses a URL formatted as follows.

    https://geocode.xyz/seattle?json=1

  Once retrieved, print to the console, the latitude and longitude

  Invoke your async function with a few cities as a test

*/
